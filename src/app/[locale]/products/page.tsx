
import { ProductCategoryTabs } from "@/components/ProductCategoryTabs";

export default async function ProductsPage() {
 
  // 示例数据
const sampleCategories = [
  {
    id: "all",
    name: "Solar Inverter",
    products: [
      // 商品数据...
      {
          id: "1",
          name: "1.2 KW 2.4KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
          price: 1239.99,
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop",
        },
        {
          id: "2",
          name: "3.6KW 6.2KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
          price: 1299.99,
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop",
        },
        {
          id: "3",
          name: "4.8KW 9.6KW",
          subname: "Single Phase Hybrid Solar Inverter",
          description: "Areafly Solar Inverter series is designed to provide efficient and reliable power conversion solutions for various solar energy applications.Our team of experts is dedicated to providing ongoing assistance throughout the installation, operation, and maintenance phases, ensuring optimal performance and longevity of our inverters.",
          price: 1299.99,
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop",

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
          price: 29.99,
          image: "https://placehold.co/600x400/64748b/ffffff?text=Worker+Cap",
          rating: 4.3,
        },
    ],
  },
];
  // 产品列表数据
  const products = [
    {
      id: 1,
      name: "Solar Inverter",
      description: "High efficiency solar inverter for residential and commercial use.",
    },
    {
      id: 2,
      name: "Solar Battery",
      description: "Long-lasting solar battery storage solutions.",
    },
    {
      id: 3,
      name: "Solar Panel",
      description: "Premium solar panels with high energy conversion rates.",
    },
    {
      id: 4,
      name: "Solar Lighting",
      description: "Energy-efficient solar lighting systems for outdoor use.",
    },
    {
      id: 5,
      name: "Solar Water Pump",
      description: "Reliable solar-powered water pumping solutions.",
    },
    {
      id: 6,
      name: "Solar Energy System",
      description: "Complete solar energy systems for homes and businesses.",
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">{"Our Products"}</h1>
        <p className="text-lg mb-8">
         
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
       
            </div>
          ))}
        </div>
        {sampleCategories.map((category,index)=>(
          <div key={category.id} 
              style={{ backgroundColor: index % 2 === 0 ? '#ececec' : '#2c2c2c' }}

          className={index % 2 === 0 ? "bg-[#ececec] text-primary" : "bg-[#2c2c2c] text-primary-foreground"}>
          <h2 className="text-xl font-bold my-4 text-center">{category.name}{index % 2}</h2>

            <ProductCategoryTabs categories={category.products}  />
          </div>
          
        ))}
      </div>
    </div>
  );
}