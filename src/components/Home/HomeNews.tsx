import NavigationLink from "../Navigation/NavigationLink";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from 'react';

interface NewsItem { 
  id: number;
  title: string;
  content: string;
}
export function HomeNews() {
  const t = useTranslations('News');
  // 获取最新的3条新闻
  const latestNews: NewsItem[] = useMemo(() => {
    const newsIds: number[] = [5, 4, 3];
    return newsIds.map((id): NewsItem => ({ // 明确返回类型为 NewsItem
      id,
      // @ts-expect-error: t函数返回的类型不匹配，需要强制转换
      title: t(`${id}.title`) ,
      // @ts-expect-error: rich函数返回的可能是字符串或JSX元素，需要强制转换
      content: t.rich(`${id}.content`, {
        p: (chunks) => `<p>${chunks}</p>`,
       })
    }));
  }, [t]);

  return (
    <div className="bg-gray-100 ">
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex items-center justify-center py-10 pb-8">
        <NavigationLink
          href="/products"
          className="flex items-center py-1 space-x-3 flex-none text-4xl font-bold "
        >
          LATEST NEWS
        </NavigationLink>
      </div>

      <div className="flex not-md:flex-col ">
        <div className="w-full min-h-40 sm:min-h-80 md:w-2/5 bg-cover" style={{ backgroundImage: `url(/images/news.jpg)`,backgroundPosition:'center' }}>
        </div>
        <ul className="group/ul w-full md:w-3/5 flex flex-col">
          {latestNews.map(({id,title,content}, index) => (
          <ListItem href={`/news/${id}`} key={index} title={title} >
            <div dangerouslySetInnerHTML={{ __html:content }} />
          
          </ListItem>)
          )}
        </ul>
      </div>
    </div>
    </div>
  );
}

function ListItem({
  title,
  content,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  
  return (
    <li {...props} >
      <NavigationLink href={href} data-state="active" className="group flex justify-between text-black hover:bg-primary hover:text-white p-10 transition-colors border-b border-primary/50">
          <div className="pb-2">
              <h2 className="text-2xl font-bold pb-4 group-hover:text-white text-primary transition-colors">{title}</h2>
                {children}
                <div dangerouslySetInnerHTML={{ __html: content||"" }} ></div>
            </div>
              <button className="flex items-end text-white opacity-100 transition-opacity group-hover:opacity-100"><MoveRight /></button>
      </NavigationLink>
    </li>
  )
}