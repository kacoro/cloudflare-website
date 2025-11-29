
import { getNewsList } from "@/api/news";
import NavigationLink from "../Navigation/NavigationLink";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

type PageProps = {
  locale: string; id?: number
};

export async function News({ locale }: PageProps) {
  // const { locale, id } = await params;
  // 获取最新的3条新闻
  const newsList = await getNewsList(locale);
  const latestNews = newsList?.list;

  return (
    <div className=" ">
      <div className="bg-primary  flex items-center justify-center ">
        <Image src="/images/banner/news.jpg" width={1920} height={150} alt="Product Image"
          className="w-full h-[150px] object-cover" />

      </div>
      <div className="max-w-5xl  pb-20 mt-14 mx-auto">
        <div className="flex not-md:flex-col ">
          <ul className="grid  grid-cols-1 md:grid-cols-3 gap-7 px-5 ">
            {latestNews?.map(({ id, title, date, image }, index) => (
              <ListItem href={`/news/${id}`} key={index} title={title} date={formatDate(date,locale)} image={image}  >
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
  href,
  image,
  date,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, date: string, image: string }) {

  return (
    <li {...props} className="flex flex-col" >
      <NavigationLink href={href} className="flex justify-center items-center p-0 aspect-[250/150] overflow-hidden border border-primary rounded-lg  transition-transform duration-300 hover:scale-110">
        <Image src={image} alt={title || 'news'} width={280} height={150} loading="lazy" className="w-full object-cover" />
      </NavigationLink >
      <NavigationLink href={href}
        className="font-bold mt-7 p-0 whitespace-pre-line line-clamp-1 text-primary hover:text-primary  transition-colors" >
        {title}
      </NavigationLink>

      <Image src="/images/line-2.png" className="mt-2.5 mb-4" alt="Arrow Right" width={238} height={2} />
      <div className="flex justify-between">
        <span className="text-sm  group-hover:text-white transition-colors flex justify-end">{date}</span>
        <NavigationLink href={href} className="p-0 m-0 flex justify-end">
          <Image src="/images/right-button.png" alt="Arrow Right" width={35} height={7}
            className="object-contain" />
        </NavigationLink>
      </div>

    </li>
  )
}
