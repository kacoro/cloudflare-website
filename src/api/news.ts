import { fetchDataList } from '@/lib/fetch';
import { formatDate } from '@/lib/utils';
import { News,NewsList} from '@/types/news';



// 获取单个产品信息（指定语言）

export const fetchDataById = async (id:number,slug:string,locale:string): Promise<News|null> => {
  try {
    // 使用fetch API替代文件系统读取，确保在所有环境中都能工作
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/locale/${locale}/${slug}/${id}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch  data: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching  data:', error);
    return null;
  }
};


export const getNewsById = async (locale: string = 'en',id:number): Promise<(News|null )> => {
  try {
    const data = await fetchDataById(id,"news",locale);
    if (!data) throw new Error('news not found');
    return {
      ...data,
      date:formatDate(data.date),
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};


export const getNewsList = async (locale: string = 'en',id:number=1): Promise<(NewsList|null )> => {
  try {
    const data = await fetchDataList<NewsList>(id,"news",locale);
    if (!data) throw new Error('news not found');
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};