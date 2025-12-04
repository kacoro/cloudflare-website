
import { getNewsList } from "@/api/news";
import NavigationLink from "../Navigation/NavigationLink";
import { MoveRight } from "lucide-react";

type PageProps = {
  locale: string; id?: number 
};

export async function  News({locale}:PageProps) {
    // const { locale, id } = await params;
  // 获取最新的3条新闻
    const newsList = await getNewsList(locale);
    const latestNews =newsList?.list; 

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
        <div className="w-full min-h-40 sm:min-h-80 md:w-2/5 bg-cover" style={{ backgroundImage: `url(/images/news.webp)`,backgroundPosition:'center' }}>
        </div>
        <ul className="group/ul w-full md:w-3/5 flex flex-col">
          {latestNews?.map(({id,title,content}, index) => (
          <ListItem href={`/news/${id}`} key={index} title={title}  >
            <div className="whitespace-pre-line line-clamp-2" dangerouslySetInnerHTML={{ __html:content }} />
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
            </div>
              <button className="flex items-end text-white opacity-100 transition-opacity group-hover:opacity-100"><MoveRight /></button>
      </NavigationLink>
    </li>
  )
}
