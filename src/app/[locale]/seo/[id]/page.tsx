import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {ProductDetail} from '@/components/ProductDetail'
import { getProductById } from '@/api/product';
import { Metadata } from "next"; // 导入 Metadata 类型
import { getSeoDescription, getSeoKeywords } from '@/lib/utils';
type PageProps = {
    params: Promise<{locale: string,id:number}>;
  };
export default async function ProductPage({
  params
}: PageProps) {
  // const {locale,id} = use(params);
  const { id, locale } = await params
  // Enable static rendering
  setRequestLocale(locale as Locale);

  // const t = useTranslations('AboutPage');
 const product = await getProductById(locale, id);

 if (!product) {
        return <div className='flex grow flex-row justify-center items-center max-w-[1446px] mx-auto relative px-5'>Product not found.</div>;
   }
  return (

    <div> 
      <ProductDetail data={product}>
        <div>ProductPage</div>
      </ProductDetail>
    </div>
  );
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  // 与页面组件一致，获取 locale 和 id
  const { id, locale } = await params;

  try {
    // 复用现有 API：getProductById 获取产品数据（包含 SEO 字段）
    const product = await getProductById(locale as Locale, id);
    if (!product) {
      // 产品不存在时，返回兜底 SEO 元数据
      return {
        title: "Product Not Found",
        description: "The requested product is unavailable.",
        keywords: "product, not found, unavailable"
      };
    }
   
    const description = getSeoDescription(product.description)
    const keywords = getSeoKeywords(product.name, description,' product, areafly ,solar')
    // 生成产品专属 SEO 元数据（假设 product 包含 seo 字段：keywords + description）
    // 若你的 product 字段名不同，对应修改即可
    return {
      title: `${product.name}|Areafly Solar`, // 产品标题（作为页面标题）
      description: description, // 产品专属描述（兜底为标题）
      keywords:  keywords, // 产品专属关键词（兜底）
      // 多语言 hreflang 标签（关联不同语言版本，避免重复内容，提升多语言 SEO）
      
    };
  } catch (error) {
    console.error("Failed to generate product SEO metadata:", error);
    // 异常时返回兜底元数据
    return {
      title: "Product Error",
      description: "Failed to load product details.",
      keywords: "product, error, load failed"
    };
  }
}
// **********************************************************************************