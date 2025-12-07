import { fetchData } from "@/lib/fetch";

// 定义图片数据类型
export interface ImageItem {
  id: number;
  src: string; // 实际项目中替换为真实图片路径
  alt: string;
  title: string;
  description?: string;
}

export interface Project {
  id: number;
  title?: string;
  description: string;
  images?: ImageItem[];
}

export interface allProject{
    description:string[];
    projects: Project[];
}


export const getProject = async (locale: string = 'en'): Promise<(allProject|null )> => {
  try {
    const data = await fetchData<allProject>("project",locale);
    if (!data) throw new Error('project not found');
    return data;
  } catch (error) {
    console.error('Error fetching project', error);
    return null;
  }
};