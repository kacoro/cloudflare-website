
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import { CarouselDemo } from '@/components/Carousel';
import {VideoDemo} from '@/components/Home/VideoDemo';
import { Products } from '@/components/Home/Products';
import { News } from "@/components/News";
type PageProps = {
  params: Promise<{locale: Locale}>;
};
export default function IndexPage({params}:PageProps) {
  const {locale} = use(params);
  // Enable static rendering
  setRequestLocale(locale as Locale);
  return (
    <div>
      <CarouselDemo />
      <VideoDemo  />
      <Products locale={locale}/>
      <News locale={locale}/>
    </div>
  );
}