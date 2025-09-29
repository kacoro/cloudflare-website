// src/types/product.ts
export interface ProductTranslation {
    name: string;
    description?: string;
  }
  
  export interface Product {
    id: number;
    slug: string;
    image: string;
    translations: {
      [key: string]: ProductTranslation;
    };
  }
  
  export interface ProductsData {
    products: Product[];
  }