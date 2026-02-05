
import { notFound } from 'next/navigation';
import { getNewsById } from '@/api/news';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavigationLink from '@/components/Navigation/NavigationLink';
import { BreadcrumbDemo } from '@/components/News/BreadcrumbDemo'
import { getSeoDescription, getSeoKeywords } from '@/lib/utils';
import { Locale } from 'next-intl';
import { Metadata } from 'next';
type PageProps = {
  params: Promise<{ locale: string; id: number }>;
};

export default async function NewsDetailPage({
  params
}: PageProps) {
  const { locale, id } = await params;

  // Enable static rendering
  // setRequestLocale(locale as Locale);

  // 获取新闻数据
  // const newsData = await getNewsData(locale, slug);
  const newsData = await getNewsById(locale, id);
  // 如果获取失败，返回404
  if (!newsData) {
    return notFound();
  }

  return (
    <div >
      <div className="max-w-5xl mx-auto pb-20">
        <div className='mx-2 md:mb-8 '>
            <BreadcrumbDemo title={newsData.title} />
        </div>
       
        {/* 大图 */}
       <div className="mb-8 rounded-lg aspect-250/150 overflow-hidden relative">
  <Image
    src={newsData.image}
    alt={newsData.title}
    fill
    loading='lazy'
    className="object-cover"
  />
</div>
        <div className='px-5'>
          {/* 标题 */}
          <h1 className="text-3xl font-bold mb-4 text-primary">{newsData.title}</h1>

          {/* 时间 */}
          <div className="mb-4 ">
            <p>{newsData.date}</p>
          </div>

          {/* 内容 */}
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
          </div>
        </div>

        <div className='flex justify-center mt-20'>
          <Button className="lg hover:text-white" asChild>
            <NavigationLink href="/news" className='md:text-lg md:rounded-full md:h-[75px] md:w-[255px]'>
              RETURN
            </NavigationLink>

          </Button>
        </div>
      </div>
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
    const news = await getNewsById(locale as Locale, id);
    if (!news) {
      // 产品不存在时，返回兜底 SEO 元数据
      return {
        title: "Product Not Found",
        description: "The requested product is unavailable.",
        keywords: "product, not found, unavailable"
      };
    }
    const description = getSeoDescription(news.content)

    const keywords = getSeoKeywords(news.title,description,' product, areafly ,solar')
    // 生成产品专属 SEO 元数据（假设 product 包含 seo 字段：keywords + description）
    // 若你的 product 字段名不同，对应修改即可
    return {
      title: `${news.title}|Areafly Solar`, // 产品标题（作为页面标题）
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