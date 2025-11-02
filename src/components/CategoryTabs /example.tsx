import { ProductCategoryTabs } from "./index";
export function Example(){
      // 示例数据
const sampleCategories = [
  {
    id: "all",
    name: "Solar Inverter",
    products: [
      // 商品数据...
      {
          id: "1",
          name: "1.2KW 2.4KW",
          description: "High efficiency solar inverter for residential and commercial use.",
          price: 1299.99,
          originalPrice: 1499.99,
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop",
          rating: 4.8,
        },
        {
          id: "2",
          name: "Solar Battery",
          description: "Long-lasting solar battery storage solutions.",
          price: 2499.99,
          image: "https://images.unsplash.com/photo-1623874305495-4d508c761b97?w=400&auto=format&fit=crop",
          rating: 4.9,
        },
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
  {
    id: "clothing",
    name: "服装服饰",
    products: [
      // 商品数据...
    ],
  },
  {
    id: "home",
    name: "家居用品",
    products: [
      // 商品数据...
    ],
  },
  {
    id: "books",
    name: "图书杂志",
    products: [
      // 商品数据...
    ],
  },
];
    return <div>
         <ProductCategoryTabs categories={sampleCategories} />
    </div>;
}