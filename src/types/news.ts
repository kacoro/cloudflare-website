// src/types/product.ts

export  interface ImageType {
    url: string;
    alt: string;
  }
  export interface News {
    id: number;
    date: string;
    slug: string;
    title: string;
    image: string;
    content: string;
  }
  
export interface NewsList {
    list: News[];
    pagesNavigation?: NewsPagesnavigation;
  }

  export interface NewsPagesnavigation {
    currentPage: number;
    totalPages: number;
  }