import { Product, ProductTranslation } from '@/types/product';
import fs from 'fs';
import path from 'path';

export interface ProductsData {
  products: Product[];
}

// 从public目录获取产品数据



export const fetchProductsData = async (): Promise<ProductsData> => {
  try {
    // 使用fetch API替代文件系统读取，确保在所有环境中都能工作
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/locale/product/list.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products data: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products data:', error);
    return { products: [] };
  }
};

// 从public目录获取产品数据
export const fetchProductsDataByfs = async (): Promise<ProductsData> => {
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

// 获取单个产品信息（指定语言）

export const fetchProductsDataById = async (id:number,slug:string): Promise<Product&ProductTranslation|null> => {
  try {
    // 使用fetch API替代文件系统读取，确保在所有环境中都能工作
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/locale/${slug}/${id}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products data: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products data:', error);
    return null;
  }
};
export const getProductById = async (locale: string = 'en',id:number): Promise<(Product&ProductTranslation|null )> => {
  try {
    const data = await fetchProductsDataById(id,"product");
    if (!data) throw new Error('Product not found');
    return {
      ...data,
      name: data.translations[locale]?.name || data.translations['en']?.name || '',
      description: data.translations[locale]?.description || data.translations['en']?.description || '',
      features: data.translations[locale]?.features || data.translations['en']?.features || []
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};