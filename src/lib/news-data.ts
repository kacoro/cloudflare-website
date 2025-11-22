import fs from 'fs/promises';
import path from 'path';

export interface NewsData {
  id: number;
  title: string;
  content: string;
  date: string;
}

export async function getNewsData(locale: string, slug: string): Promise<NewsData | null> {
  try {
    const newsId = parseInt(slug);
    if (isNaN(newsId) || newsId <= 0) {
      return null;
    }

    // 构建新闻内容文件路径
    const newsFilePath = path.join(process.cwd(), 'public', 'locale', 'news', locale, `${slug}.json`);
    
    // 检查文件是否存在
    try {
      await fs.access(newsFilePath);
      // 读取新闻内容文件
      const content = await fs.readFile(newsFilePath, 'utf-8');
      const newsData = JSON.parse(content);

      return {
        id: newsId,
        title: newsData.title || `新闻标题 ${slug}`,
        content: newsData.content || '新闻内容',
        date: new Date().toLocaleDateString(locale === 'zh' ? 'zh-CN' : 
                                            locale === 'fr' ? 'fr-FR' : 
                                            'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
    } catch (error) {
      // 如果特定语言文件不存在，尝试使用默认语言（中文）的文件
      console.error('Error loading news data:', error);
      const defaultNewsFilePath = path.join(process.cwd(), 'public', 'locale', 'news', 'zh', `${slug}.json`);
      try {
        await fs.access(defaultNewsFilePath);
        const content = await fs.readFile(defaultNewsFilePath, 'utf-8');
        const newsData = JSON.parse(content);
        return {
          id: newsId,
          title: newsData.title || `新闻标题 ${slug}`,
          content: newsData.content || '新闻内容',
          date: new Date().toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        };
      } catch (defaultError) {
        console.error(`Default news file not found for slug ${slug}:`, defaultError);
        return null;
      }
    }

    return null;
  } catch (error) {
    console.error('Error loading news data:', error);
    return null;
  }
}

export async function getNewsList(locale: string): Promise<Array<{id: number, title: string}> | null> {
  try {
    // 使用固定列表，而不是从翻译中获取
    const newsList = [];
    for (let i = 1; i <= 3; i++) {
      const newsFilePath = path.join(process.cwd(), 'public', 'locale', 'news', locale, `${i}.json`);
      try {
        await fs.access(newsFilePath);
        const content = await fs.readFile(newsFilePath, 'utf-8');
        const newsData = JSON.parse(content);
        newsList.push({
          id: i,
          title: newsData.title || `新闻标题 ${i}`
        });
      } catch (error) {
        // 如果特定语言的文件不存在，尝试使用中文作为默认值
        console.error('Error loading news data:', error);
        const defaultNewsFilePath = path.join(process.cwd(), 'public', 'locale', 'news', 'zh', `${i}.json`);
        try {
          await fs.access(defaultNewsFilePath);
          const content = await fs.readFile(defaultNewsFilePath, 'utf-8');
          const newsData = JSON.parse(content);
          newsList.push({
            id: i,
            title: newsData.title || `新闻标题 ${i}`
          });
        } catch (defaultError) {
          // 如果连默认文件都不存在，跳过这个条目
          console.error('Error loading news data:', defaultError);

          continue;
        }
      }
    }
    
    return newsList.length > 0 ? newsList : null;
  } catch (error) {
    console.error('Error loading news list:', error);
    return null;
  }
}
