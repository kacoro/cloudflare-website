import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {ProductDetail} from '@/components/ProductDetail'
import { getProductById } from '@/api/product';
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
        return <div className='flex flex-grow flex-row justify-center items-center max-w-[1446px] mx-auto relative px-5'>Product not found.</div>;
   }
  return (

    <div> 
      <ProductDetail data={product}>
        <div>ProductPage</div>
      </ProductDetail>
    </div>
  );
}