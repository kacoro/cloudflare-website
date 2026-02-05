

import { getProductList } from "@/api/product";
import { ProductsServer } from "@/components/ProductCategoryTabs";
import { Metadata } from "next";
type PageProps = {
  params: Promise<{ locale: string; id: number }>;
};
 

export default async function ProductsPage({
  params
}: PageProps) {
  const { locale } = await params;
  const categories = await getProductList(locale)
  return (
    <>
      {categories ? (
        <div className="">
          <ProductsServer categories={categories.list} />
        </div>
      ) : null}
    </>
  );
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  // 与页面组件一致，获取 locale 和 id
      // 产品不存在时，返回兜底 SEO 元数据
      const { id, locale } = await params;
      return {
        title: "Products | Areafly Solar",
        description: " Areafly Solar Products: Solar Inverter, solar battery, solar panel, solar lighting, Solar Water Pump, Products, Areafly Solar",
        keywords: "Solar Inverter, solar battery, solar panel, solar lighting, Solar Water Pump, Products, Areafly Solar"
      };
    
    
}