export const fetchDataList = async <T>(id:number,slug:string,locale:string): Promise<T|null> => {
  try {
    // 使用fetch API替代文件系统读取，确保在所有环境中都能工作
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/locale/${locale}/${slug}/list-${id}.json`);
    console.log('response',`${process.env.NEXT_PUBLIC_BASE_URL || ''}/locale/${locale}/${slug}/list-${id}.json`)
    if (!response.ok) {
      throw new Error(`Failed to fetch  data: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching  data:', error);
    return null;
  }
};