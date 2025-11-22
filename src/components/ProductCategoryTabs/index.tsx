"use client";
import { ProductCategoryTabs } from "./ProductCategoryTabs";
import { cn } from "@/lib/utils";
import { useEffect,useState } from "react";
import { ProductDialog } from "./ProductDialog";
import Image from "next/image";
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
    id: "1",
    name: "Solar Inverter",
    products: [
      // 商品数据...
      {
          "id": "1",
          "tabName": "1.6-11KW",
          "name": "1.6-11KW",
          "subname": "Hybrid Inverters For Solar Cost Effective",
           "description": "As a 13-year veteran in solar product manufacturing, our solar lighting series embodies cutting-edge innovation and unwavering reliability.",
          "image": "/images/products/category/1-1.png",
        },
        {
          "id": "2",
          "tabName":"3.6KW 5.5KW 6.2KW",
          "name": "3.6KW 5.5KW 6.2KW",
          "subname": "AS Series Off-grid Solar Hybrid Inverter",
            "description": "Intelligent Power Supply Mode, Intelligent Distribution of Solal Panel/Mains/Battery Power Shares",
         
          "image": "/images/products/category/1-2.png",
        },
        {
          "id": "3",
          "tabName": "8.2KW 11KW",
          "name": "8.2KW 11KW",
          "subname": "AS Series Off-grid Solar Hybrid Inverte",
            "description": "Intelligent Power Supply Mode, Intelligent Distribution of Solal Panel/Mains/Battery Power Shares",
          "image": "/images/products/category/1-3.png",

        }
    ],
  },
  {
    id: "2",
    name: "solar battery",
    products: [
      // 商品数据...
       {
          id: "4",
          tabName: "5KWH 10KWH<br>Wall-mounted",
          name: "5KWH 10KWH",
          subname: "Mobile Lithium Battery",
            "description": "Areafly wall-mounted solar batteries are lightweight and easy to install, with a typical efficiency range of 15%-20% under standard test conditions. </br>Areafly Wall-mounted solar batteries provide stable power output and more than 15-year lifespan. ",
          image: "/images/products/category/2-1.png",
        },
        {
          id: "5",
          tabName: "10KWH 15KWH<br>Mobile",
          name: "10KWH 15KWH",
          subname: "Residential Lithium Battery",
            "description": "Areafly wheeled solar lithium batteries feature high-efficiency photovoltaic conversion, long cycle life (6000+ cycles), and robust mobility for off-grid applications. <br>They integrate smart BMS for safety, Ideal for RVs, boats, and portable power.",
          image: "/images/products/category/2-2.png",
        },
        {
          id: "6",
          tabName: "15KWH 20KWH<br>Residential ",
          name: "15KWH 20KWH ",
          subname: "Wall-mounted  Lithium Battery",
            "description": "Areafly rack-mounted high-voltage lithium batteries, designed for commercial and industrial use, offer scalable energy storage solutions with 51.2V-800V voltage platforms, supporting 5G base stations, microgrids, and peak shaving applications. Integrated with solar systems, they enable 24/7 renewable energy utilization through smart BMS and modular expansion, achieving 90%+ efficiency and 10,000+ cycle life.",
          image: "/images/products/category/2-3.png",
        },
        {
          id: "7",
          name: "High Voltage Rack",
          tabName:"High Voltage Rack",
          subname: "Single Phase Hybrid Solar Inverter",
            "description": "Areafly rack-mounted high-voltage lithium batteries, designed for commercial and industrial use, offer scalable energy storage solutions with 51.2V-800V voltage platforms, supporting 5G base stations, microgrids, and peak shaving applications. Integrated with solar systems, they enable 24/7 renewable energy utilization through smart BMS and modular expansion, achieving 90%+ efficiency and 10,000+ cycle life.",
          image: "/images/products/category/2-4.png",
        },
        {
          id: "8",
          name: "Solar Gel Battery",
          tabName: "Solar Gel Battery",
          subname: "Solar Inverter",
            "description": "Areafly lead-acid batteries feature stable voltage output and cost-effectiveness, with enhanced durability through advanced alloy technology. Designed for solar energy storage, they offer reliable performance in off-grid systems, combining affordability with proven reliability.",
          image: "/images/products/category/2-5.png",
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
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedProduct(null);
  // };

  return (
    <>
    <div className=" mx-auto "> 
      <Image src="/images/banner/product.jpg" width={1920} height={355} alt="Product Image"  className="w-full h-[120px] sm:h-[200px] md:h-[250px] lg:h-[355px] object-cover" />
    </div>
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

