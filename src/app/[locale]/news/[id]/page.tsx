
import { notFound } from 'next/navigation';
import { getNewsById } from '@/api/news';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavigationLink from '@/components/Navigation/NavigationLink';
import { BreadcrumbDemo } from '@/components/News/BreadcrumbDemo'
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
        <div className='my-14'>
            <BreadcrumbDemo title={newsData.title} />
        </div>
       
        {/* 大图 */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={newsData.image}
            alt={newsData.title}
            width={1000}
            height={1000}
            className="w-full h-96 object-cover"
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
