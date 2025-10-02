import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { use } from 'react';

type PageProps = {
  params: Promise<{ locale: string }>;
};
export default function AboutPage({
  params
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('AboutPage');

  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <Image
          src="/images/banner/about.jpg"
          alt="about"
          width={1920}
          height={919}
          className="float-right  object-cover  "
        />
      </div>
      <div>
        <div className="max-w-[905px] mx-auto py-18  px-4">
          <Image
            className=""
            src="/logo.png"
            alt="Areafly Solar logo"
            width={229}
            height={43}
            priority
          />
          {t.rich('description', {
            p: (chunks) => <p className="mt-8">{chunks}</p>,
            span: (chunks) => <span className="text-primary font-semibold">{chunks}</span>,
            strong: (chunks) => <strong className="text-primary font-semibold ">{chunks}</strong>,
            P: (chunks) => <p className="mt-8">{chunks}</p>
          })}

          <Image
            src="/images/about.jpg"
            alt="about"
            width={379}
            height={347}
            className="float-right  object-cover  "
          />
          {t.rich('description2', {
            p: (chunks) => <p className="mt-8">{chunks}</p>

          })}
          <div className="clear-both"></div>

        </div>
      </div>
      <div
        className=' bg-cover bg-center '
        style={{
          backgroundImage: "url('/images/aboutus/bg.jpg')",
        }}
      >
        <ul className='max-w-[904px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white  py-8 md:py-15'>
          <li className='flex flex-col justify-center items-center'>
            <Image
              priority
              src="/images/aboutus/0.png"
              height={87}
              width={89}
              className=' fill-current stroke-current'
              alt="Follow us on Twitter"
            />
            <p className='text-2xl font-bold pt-5'>200+</p>
            <p>{t('Staff')}</p>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <Image
              priority
              src="/images/aboutus/1.png"
              height={87}
              width={89}
              className=' fill-current stroke-current'
              alt="Follow us on Twitter"
            />
            <p className='text-2xl font-bold pt-5'>5000+</p>
            <p>{t('contriesCovered')}</p>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <Image
              priority
              src="/images/aboutus/2.png"
              height={87}
              width={89}
              className=' fill-current stroke-current'
              alt="Follow us on Twitter"
            />
            <p className='text-2xl font-bold pt-5'>100+</p>
            {t('monthlyCapacity')}
          </li>
          <li className='flex flex-col justify-center items-center'>
            <Image
              priority
              src="/images/aboutus/3.png"
              height={87}
              width={89}
              className=' fill-current stroke-current'
              alt="Follow us on Twitter"
            />
            <p className='text-2xl font-bold pt-5'>8+</p>
            {t('productionLines')}</li>
          <li className='flex flex-col justify-center items-center'>
            <Image
              priority
              src="/images/aboutus/4.png"
              height={87}
              width={89}
              className=' fill-current stroke-current'
              alt="Follow us on Twitter"
            />
            <p className='text-2xl font-bold pt-5'>8+</p>
            {t('totalArea')}
          </li>
          <li className='flex flex-col justify-center items-center'>
            <Image
              priority
              src="/images/aboutus/5.png"
              height={87}
              width={89}
              className=' fill-current stroke-current'
              alt="Follow us on Twitter"
            />
            <p className='text-2xl font-bold pt-5'>100K+</p>
            {t('employees')}
          </li>
        </ul>

      </div>
        <section className="relative overflow-hidden"> 
         
            <Image src="/images/aboutus/bg3.jpg" 
                 alt="Cargo ship sailing on the ocean representing international trade" 
                 className="w-full h-full object-cover object-center"    width={1920} height={690}/>
              </section>
      <div className="container  max-w-screen-lg flex items-center mx-auto space-x-8 min-h-[300px]">
        <ul className=" w-full grid  grid-cols-1 md:grid-cols-3  gap-6 md:gap-8 text-white px-8 py-8 md:py-15 ">
          <li className='group relative overflow-hidden h-[435px] p-6'>
            <Image
              priority
              src="/images/aboutus/1.jpg"
              height={286}
              width={435}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              alt="Follow us on Twitter"
            />
            <div className='relative h-full flex flex-col justify-between '>
              <div className='text-2xl font-bold pt-5'>
                <p>200+</p><p>Global Partner</p>
              </div>
              <div>
                <p>We invest and trust in the relationship with our customers.</p>
                <p>We are leading the way towards innovation.</p>
              </div>
            </div>
          </li>
          <li className='group relative overflow-hidden h-[435px] p-6'>
            <Image
              priority
              src="/images/aboutus/2.jpg"
              height={286}
              width={435}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              alt="Follow us on Twitter"
            />
            <div className='relative h-full flex flex-col justify-between '>
             <div className='text-2xl font-bold pt-5'>
                <p>Global Leader</p><p>in Solar</p>
              </div>
              <div>
                <p>Industry-leading products and customer service </p>
                <p>worldwide with a demonstrated commitment to sustainability</p>
              </div>
            </div>
          </li>
          <li className='group relative overflow-hidden h-[435px] p-6'>
            <Image
              priority
              src="/images/aboutus/3.jpg"
              height={286}
              width={435}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              alt="Follow us on Twitter"
            />
            <div className='relative h-full flex flex-col justify-between '>
              <div className='text-2xl font-bold pt-5'>
                <p>Trusted Project</p><p>Partner</p>
              </div>
              <div>
                <p>The engineering team places a major emphasis on</p>
                <p>both process and equipment capabilities.</p>
              </div>
            </div>

          </li>
        </ul>
      </div>
        <section className="relative  min-h-[600px] overflow-hidden"> 
          <div className="absolute inset-0 z-0">
            <Image src="/images/aboutus/bg22.jpg" 
                 alt="Cargo ship sailing on the ocean representing international trade" 
                 className="w-full h-full object-cover object-center"    width={1920} height={690}/>
       
            <div className="absolute inset-0 bg-black opacity-74"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
           
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white mt-12 mb-12  text-shadow-lg ">
                RICH EXPERIENCE IN TRADE AND EXPORT, WELL-QUALIFIED
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full max-w-5xl">
        
                <div className=" p-8 transform transition-all duration-300 hover:scale-105 ">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 text-shadow">12+</div>
                    <div className="text-white/90 text-lg">12 + Manufacturingexperience</div>
                </div>
                
                <div className=" p-8 transform transition-all duration-300 hover:scale-105 ">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 text-shadow">190+</div>
                    <div className="text-white/90 text-lg">190+ countries\ export experience</div>
                </div>
                
                <div className=" p-8 transform transition-all duration-300 hover:scale-105 ">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 text-shadow">1000+</div>
                    <div className="text-white/90 text-lg">190+ countries\ export experience</div>
                </div>
                <div className=" p-8 transform transition-all duration-300 hover:scale-105  ">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-shadow">OEM/ODM</div>
                    <div className="text-white/90 text-lg">OEM/0DM ordes sales and servicc</div>
                </div>
            </div>
        </div>
        </section>
    </>
  );
}