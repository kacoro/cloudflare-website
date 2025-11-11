import { HomeNews } from "@/components/Home/HomeNews";


export default async function ProductsPage() {
  // 产品列表数据
 
  return (
    <div className="py-8">
        <div className="grid ">
          <HomeNews/>
        </div>
    </div>
  );
}