import Image from "next/image";
import NavigationLink from "../Navigation/NavigationLink";
import { getAllProducts } from "@/api/product";
import { Locale } from "next-intl";
export async function Products({ locale }: { locale: Locale }) {
  // Enable static rendering
  const products = await getAllProducts(locale);
  // console.log('products', products)
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex items-center justify-center py-10 pb-8">
        <NavigationLink
          href="/"
          className="flex items-center py-1 space-x-3 flex-none"
        >
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="Areafly Solar logo"
            width={229}
            height={43}
            priority
          />
        </NavigationLink>
      </div>

      <div className="grid grid-cols-3 gap-5 pb-10">
        {products.map((item) => (
          <div key={item.id} className="group aspect-square bg-gradient-to-br from-white bg-white to-primary p-[2px] rounded-xl 
           transition-all duration-500   hover:shadow-primary  
           overflow-hidden flex">
            <div className="bg-white text-blue-600 font-medium overflow-hidden rounded-xl flex-1 flex items-center justify-center relative">
              <NavigationLink
                href={`/products#${item.slug}`}
                className="text-center relative w-full h-full"
              >
                <Image
                  className="rounded-xl transition-transform duration-300 ease-out group-hover:scale-120"
                  src={item.image}
                  width={319}
                  height={298}
                  alt={item.name}
                />
                <div className="text-primary font-medium text-base 
                 md:text-2xl/loose absolute 
                bottom-0 w-full left-0 
                transition-transform duration-300 ease-out group-hover:scale-110">
                  {item.name}
                </div>
              </NavigationLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
