"use client";
import { ProductCategoryTabs } from "./ProductCategoryTabs";
import { cn } from "@/lib/utils";
import { useEffect,useState } from "react";
import { ProductDialog } from "./ProductDialog";

// 定义产品类型
import {Product} from "./ProductCard";
export  function ProductsServer() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 这里放置实际的数据获取逻辑
  // const sampleCategories = await fetchProductData(); // 假设这是您的异步数据获取函数
    // 示例数据
const sampleCategories = [
  {
    id: "SolarInverter",
    name: "Solar Inverter",
    products: [
      // 商品数据...
      {
          id: "1",
          name: "EA Series 1.6-11KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
          
          image: "/images/products/inverter/1 EA Series 1.6-11KW/2 产品图/微信截图_20251003215655.png",
          images: ["/images/products/inverter/top.png","/images/products/inverter/1 EA Series 1.6-11KW/1.webp"]
        },
        {
          id: "2",
          name: "AS Series 3.6KW 5.5KW 6.2KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
         
          image: "/images/products/inverter/2 AS Series 3.6KW 5.5KW 6.2KW/2 产品图/070A3289.jpg",
        },
        {
          id: "3",
          name: "AS Series 8.2KW 11KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
          image: "/images/products/inverter/3 AS Series 8.2KW 11KW/产品图/070A3397.jpg",

        }
    ],
  },
  {
    id: "electronics",
    name: "电子产品",
    products: [
      // 商品数据...
       {
          id: "7",
          name: "Solar Worker Cap",
          description: "Protective cap with solar panel for charging devices.",
          image: "https://placehold.co/600x400/64748b/ffffff?text=Worker+Cap",
        },
        {
          id: "3",
          name: "4.8KW 9.6KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop",
        }
    ],
  },
];
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
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {sampleCategories.map((category,index)=>(
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

async function fetchProductData() {
  // 模拟异步数据获取
  return [
    // ...您的分类数据
  ];
}