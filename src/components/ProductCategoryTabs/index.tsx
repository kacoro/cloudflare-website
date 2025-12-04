"use client";
import { ProductCategoryTabs } from "./ProductCategoryTabs";
import { cn } from "@/lib/utils";
import { useEffect,useState } from "react";
import { ProductDialog } from "./ProductDialog";
import Image from "next/image";
// 定义产品类型
import {Product} from "./ProductCard";
import { Category } from "@/api/product";

export  function ProductsServer({categories}: { categories: Category[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 这里放置实际的数据获取逻辑
 
  
  // 页面加载后执行滚动逻辑
  useEffect(() => {
    // 解析当前路径，提取产品分类标识
    const category = window.location.pathname.split('/').pop();

    // 根据分类标识滚动到对应区域
    if (category) {
      const targetElement = document.getElementById(category);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

 // 打开产品详情弹窗
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // 关闭弹窗
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedProduct(null);
  // };

  return (
    <>
    <div className=" mx-auto "> 
      <Image src="/images/banner/product.webp" width={1920} height={355} alt="Product Image"  className="w-full h-[120px] sm:h-[200px] md:h-[250px] lg:h-[355px] object-cover" />
    </div>
      {categories.map((category,index)=>(
        <div 
          key={category.id} 
          id={category.id}
          className={cn(
            index % 2 === 0 
              ? "bg-[#ececec] text-black" 
              : "bg-[#2c2c2c] text-white ",
            "py-16"
          )}
        >
          <h2 className="text-xl font-bold text-center pb-5">{category.name}</h2>
          <ProductCategoryTabs categories={category.products} openProductModal={openProductModal}  />
        </div>
      ))}
      {isModalOpen && selectedProduct && (
        <ProductDialog open={isModalOpen} onOpenChange={setIsModalOpen} product={selectedProduct}></ProductDialog>
        )}
    </>
  );
}

