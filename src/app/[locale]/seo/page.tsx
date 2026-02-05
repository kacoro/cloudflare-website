

import { getProductList } from "@/api/product";
import { ProductsServer } from "@/components/ProductCategoryTabs";
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