import { News } from "@/components/News/List";

type PageProps = {
  params: Promise<{ locale: string; id: number }>;
};

export default async function NewsPage({
  params
}: PageProps) {
  // 产品列表数据
  const { locale } = await params;
  return (
    <div className="">
      <News locale={locale}/>
    </div>
  );
}
