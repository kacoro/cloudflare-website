import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatDate(date: string, locale: string = 'en') {
  const dateObj = new Date(date);
  // 对于英文，使用自定义格式：日 + 大写月份 + 年份
  if (locale === 'en') {
    const months = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
      'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month}, ${year}`;
  }
  
  // 其他语言保持原有逻辑
  return dateObj.toLocaleDateString(
    locale === 'zh' ? 'zh-CN' : 
    locale === 'fr' ? 'fr-FR' : 
    'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );
}

/**
 * 提取SEO关键词（先清理description的HTML，按出现次数排序，控制最优数量）
 * @param title 产品/页面标题（核心词汇来源）
 * @param description 原始描述（可能含HTML，会自动清理）
 * @param customKeywords 自定义字符串关键词（逗号/空格分隔）
 * @param maxCount 关键词最大返回数量（默认8个，SEO最优5-10个区间）
 * @returns 逗号分隔的标准SEO关键词字符串
 */
export function getSeoKeywords(
  title: string | undefined | null,
  description: string | undefined | null,
  customKeywords: string | undefined | null,
  maxCount: number = 8
): string {
  // ************************** 核心修改：先清理标题和描述 **************************
  // 清理title：简单格式优化（去多余空格，无需去HTML，title一般不含HTML）
  const pureTitleOrigin = (title || '').trim().replace(/\s+/gi, ' ');
  const pureTitle = pureTitleOrigin.toLowerCase();

  // 清理description：复用processSeoDescription，去除HTML+格式优化（不截断，maxLength=0）
  const cleanDescOrigin = getSeoDescription(description, 0, true, '');
  const cleanDesc = cleanDescOrigin.toLowerCase();
  // ********************************************************************************

  // 2. 定义停用词（可按需扩展）
  const stopWords = new Set([
    '的', '地', '得', '啊', '呀', '呢', '吧', '吗', '了', '着', '过',
    '是', '和', '与', '或', '及', '对于', '关于', '具有', '包含', '提供',
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of'
  ]);

  // 3. 优化分割规则：保留中英文、数字、小数点、短横线（不拆分8.2KW/AS-123等规格）
  const textCombined = `${pureTitleOrigin} ${cleanDescOrigin}`;
  const textCombinedLower = `${pureTitle} ${cleanDesc}`;
  const candidateWords = textCombined.split(/[^a-zA-Z0-9\u4e00-\u9fa5\.\-]/).filter(word => {
    const pureWord = word.trim();
    if (pureWord === '') return false;
    // 中文至少2字，英文/数字/规格组合至少1字
    return /[\u4e00-\u9fa5]/.test(pureWord) ? pureWord.length >= 2 : pureWord.length >= 1;
  });
  const candidateWordsLower = textCombinedLower.split(/[^a-zA-Z0-9\u4e00-\u9fa5\.\-]/).filter(word => {
    const pureWord = word.trim();
    if (pureWord === '') return false;
    return /[\u4e00-\u9fa5]/.test(pureWord) ? pureWord.length >= 2 : pureWord.length >= 1;
  });

  // 4. 统计标题+清理后描述中关键词的出现次数
  const wordCountMap = new Map<string, { count: number; originWord: string }>();
  candidateWordsLower.forEach((wordLower, index) => {
    const originWord = candidateWords[index].trim();
    const pureWordLower = wordLower.trim();
    // 过滤停用词（彻底避免p、div等无效词汇）
    if (pureWordLower === '' || stopWords.has(pureWordLower)) return;
    // 统计次数
    if (wordCountMap.has(pureWordLower)) {
      wordCountMap.get(pureWordLower)!.count += 1;
    } else {
      wordCountMap.set(pureWordLower, { count: 1, originWord });
    }
  });

  // 5. 处理自定义关键词：支持逗号/空格分隔，赋予高权重（默认次数+10，确保优先排序）
  const pureCustom = (customKeywords || '').trim();
  const customCandidateWords = pureCustom.split(/[,，\s]/).filter(word => word.trim() !== '');
  customCandidateWords.forEach(customWord => {
    const pureCustomWord = customWord.trim();
    const pureCustomWordLower = pureCustomWord.toLowerCase();
    if (pureCustomWord === '' || stopWords.has(pureCustomWordLower)) return;
    // 自定义关键词加权
    if (wordCountMap.has(pureCustomWordLower)) {
      wordCountMap.get(pureCustomWordLower)!.count += 10;
    } else {
      wordCountMap.set(pureCustomWordLower, { count: 10, originWord: pureCustomWord });
    }
  });

  // 6. 按出现次数降序排序，截取最优数量，去重
  const sortedKeywords = Array.from(wordCountMap.values())
    .sort((a, b) => b.count - a.count) // 次数多的排前面
    .slice(0, maxCount) // 截取SEO最优数量
    .map(item => item.originWord); // 还原原始格式

  const uniqueKeywords = Array.from(new Set(sortedKeywords));
  return uniqueKeywords.join(', ');
}

/**
 * 处理SEO描述（去除HTML、清理格式、长度截断、兼容所有边界情况）
 * @param rawDesc 原始描述（可能包含HTML、冗余空格、换行等）
 * @param maxLength 最大长度（默认150字符，SEO最佳实践：150-160字符）
 * @param keepWholeWord 是否保留完整单词（默认true，提升可读性，避免截断单词）
 * @param fallbackText 兜底文本（当描述为空时返回，默认空字符串）
 * @returns 干净、规范、符合SEO的描述字符串
 */
export function getSeoDescription(
  rawDesc: string | undefined | null,
  maxLength: number = 150,
  keepWholeWord: boolean = true,
  fallbackText: string = ''
): string {
  // 1. 第一步：处理空值，直接返回兜底文本
  if (!rawDesc || typeof rawDesc !== 'string') {
    return fallbackText.trim();
  }

  let cleanDesc = rawDesc;

  // 2. 去除所有HTML标签（兼容单标签/双标签/大小写，如<p>、<IMG/>、<div class="test">等）
  cleanDesc = cleanDesc.replace(/<[^>]*>/gi, '');

  // 3. 解析HTML实体字符（如&amp;转&、&nbsp;转空格、&lt;转<等）
  cleanDesc = cleanDesc.replace(/&amp;/gi, '&')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#\d+;/gi, ' '); // 匹配其他数字型实体，转为空格

  // 4. 清理冗余格式：去除多余换行、制表符、连续空格，统一为单个空格
  cleanDesc = cleanDesc.replace(/[\n\r\t]/gi, ' ') // 换行/制表符转空格
    .replace(/\s+/gi, ' ') // 多个连续空格转为单个空格
    .trim(); // 去除首尾空格

  // 5. 长度截断（兼容保留完整单词，避免截断语义）
  if (cleanDesc.length <= maxLength) {
    return cleanDesc;
  }

  // 不保留完整单词：直接截断
  if (!keepWholeWord) {
    return cleanDesc.substring(0, maxLength).trim() + '...';
  }

  // 保留完整单词：找到最后一个空格，避免截断单词
  const lastSpaceIndex = cleanDesc.substring(0, maxLength).lastIndexOf(' ');
  // 若找不到空格（连续无空格字符串），则直接截断
  const truncateIndex = lastSpaceIndex === -1 ? maxLength : lastSpaceIndex;
  return cleanDesc.substring(0, truncateIndex).trim() + '...';
}