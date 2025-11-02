"use client";
import * as React from "react";
import { ScrollableTabs } from "@/components/ScrollableTabs";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  count?: number;
  products: Product[];
}

interface ProductCategoryTabsProps {
  categories: Product[];
}

export function ProductCategoryTabs({ categories }: ProductCategoryTabsProps) {
  const [activeTab, setActiveTab] = React.useState(categories[0]?.id || "");
  const [animationKey, setAnimationKey] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");

  const activeCategory = categories.find(
    (category) => category.id === activeTab
  );

  const handleTabChange = (newTabId: string) => {
    // 判断切换方向
    const currentIndex = categories.findIndex(cat => cat.id === activeTab);
    const newIndex = categories.findIndex(cat => cat.id === newTabId);
    
    setDirection(newIndex > currentIndex ? "right" : "left");
    
    // 更新key以强制重新渲染动画
    setAnimationKey(prev => prev + 1);
    setActiveTab(newTabId);
  };

  return (
    <div className="w-full">
      <ScrollableTabs
        categories={categories.map(({ id, name }) => ({
          id,
          name
        }))}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div className="mt-6 overflow-hidden">
        {activeCategory ? (
          <div 
            key={animationKey}
            className={`
              duration-500 ease-in-out
              ${direction === "right" 
                ? "animate-in slide-in-from-right-20 fade-in" 
                : "animate-in slide-in-from-left-20 fade-in"}
            `}
          >
            <div className="grid  ">
             
                <ProductCard key={activeCategory.id} product={activeCategory} />
              
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No products in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}