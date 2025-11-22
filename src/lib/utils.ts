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