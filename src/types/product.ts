// src/types/product.ts
export interface ProductTranslation {
    name: string;
    description?: string;
    features?: string[];
  }
export  interface ImageType {
    url: string;
    alt: string;
  }
  export interface Product {
    id: number;
    slug: string;
    image: string;
    thumbs?: ImageType[];
    infos?:ImageType[];
    download?:string;
    parameters:string
    translations: {
      [key: string]: ProductTranslation;
    };
  }
  
  export interface ProductsData {
    products: Product[];
  }