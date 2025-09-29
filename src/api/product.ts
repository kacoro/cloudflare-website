import { Product, ProductTranslation } from '@/types/product';
import fs from 'fs';
import path from 'path';

export interface ProductsData {
  products: Product[];
}

// 从public目录获取产品数据
export const fetchProductsData = async (): Promise<ProductsData> => {
  try {
    // 使用文件系统直接读取，避免fetch在某些环境下的问题
    
    const filePath = path.join(process.cwd(), 'public', 'locale', 'product', 'list.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading products data from file:', error);
    return { products: [] };
  }
};

// 根据slug获取产品信息
export const getProductBySlug = async (slug: string, locale: string): Promise<(Product & ProductTranslation) | null> => {
  try {
    const data = await fetchProductsData();
    const product = data.products.find(p => p.slug === slug);
    
    if (!product) return null;
    
    return {
      ...product,
      name: product.translations[locale]?.name || product.translations['en']?.name || '',
      description: product.translations[locale]?.description || product.translations['en']?.description || ''
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

// 获取所有产品信息（指定语言）
export const getAllProducts = async (locale: string = 'en'): Promise<(Product & ProductTranslation)[]> => {
  try {
    const data = await fetchProductsData();
    return data.products.map(product => ({
      ...product,
      name: product.translations[locale]?.name || product.translations['en']?.name || '',
      description: product.translations[locale]?.description || product.translations['en']?.description || ''
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};