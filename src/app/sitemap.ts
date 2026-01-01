import type { MetadataRoute } from 'next'
import { env } from 'process'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL || 'https://areafly.com'
  const lastModified = new Date();
  const newsCount = 3;
  const productCount = 19;
  
  // 生成新闻页面URLs
  const newsUrls = Array.from({ length: newsCount }, (_, i) => `news/${i + 1}`);
  
  // 生成产品页面URLs
  const productUrls = Array.from({ length: productCount }, (_, i) => `products/${i + 1}`);
  
  // 基础页面URLs（不包含开头的斜杠，因为会拼接在路径中）
  const baseUrls = ["", "products","project",  "news", "about","contact"];
  
  // 合并所有URLs
  const urls = [...baseUrls, ...newsUrls, ...productUrls];
 
  const sitemap = urls.map(url => {
    // 如果url为空字符串，表示是根路径，只保留基础路径
    const path = url === "" ? "" : `/${url}`;
    
    return {
      url: `${baseUrl}/en${path}`, // 英语子路径
      lastModified: lastModified,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          'zh-CN': `${baseUrl}/zh${path}`,
          fr: `${baseUrl}/fr${path}` // 法语子路径
        },
      },
    };
  });
  return sitemap;
}