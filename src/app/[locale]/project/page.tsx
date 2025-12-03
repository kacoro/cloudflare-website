import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PageProps = {
  params: Promise<{ locale: string }>;
};

// 定义图片数据类型
interface ImageItem {
  id: number;
  src: string; // 实际项目中替换为真实图片路径
  alt: string;
  title: string;
  description?: string;
}

export default function AboutPage({
  params
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('AboutPage');
  // 模拟图片数据（实际项目中可从接口获取）
  const imageData: ImageItem[] = [
    {
      id: 1,
      src: '/images/project/2.jpg',
      alt: 'Sihanoukville, Cambodia',
      title: 'Sihanoukville, Cambodia',
    },
    {
      id: 2,
      src: '/images/project/3.jpg',
      alt: 'France',
      title: "France",
      description: 'PV+storage , 50 kW/102 kWh',
    },
    {
      id: 3,
      src: '/images/project/4.jpg',
      alt: 'Australia-Fremantle',
      title: "Australia-Fremantle",
      description: 'Smart Microgrid and<br/>VPP-100kW/670kWh',
    },
    {
      id: 4,
      src: '/images/project/5.jpg',
      alt: 'Thailand',
      title: 'Thailand',
      description: 'Energy storage expansion<br/>50kW/266kWh',
    },
    {
      id: 5,
      src: '/images/project/6.jpg',
      alt: 'Australia-Fremantle',
      title: 'Niger,Africa',
      description: 'Off-grid optical storage system<br/>1.25 MW/4 Mwh',
    },
    {
      id: 6,
      src: '/images/project/7.jpg',
      alt: 'Philippine Islands',
      title: 'Philippine Islands',
      description: 'Solar+battery+diesel microgrid system<br/>50 kW/100 kWh',
    },
    {
      id: 7,
      src: '/images/project/8.jpg',
      alt: 'Tangshan, Hebei',
      title: 'Tangshan, Hebei',
      description: 'Peak shaving and frequency regulation<br/>10MW/20MWh',
    },
    {
      id: 8,
      src: '/images/project/9.jpg',
      alt: 'Tanzania',
      title: 'Tanzania',
      description: 'Solar+battery+diesel microgrid system<br/>50kW/130kWh',
    },
    {
      id: 9,
      src: '/images/project/10.jpg',
      alt: 'Southeast Asia Myanmar',
      title: 'Southeast Asia Myanmar',
      description: 'Solar+diesel microgrid system<br/>50kW+100kW/100kWh+300kWh',
    },
  ];
  return (

    <div >
      <div className=" mx-auto ">
       <div className='aspect-1920/1200 overflow-hidden relative'>
          <Image src="/images/project/1.jpg"  fill alt="Product Image" className="object-cover" />
      </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 md:mt-40 ">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-7 lg:gap-12'>
          <div className="col-span-3 md:col-span-3  lg:col-span-3 2xl:col-span-2 text-lg">
           
            <Image
              className="mb-7 object-cover"
              src="/logo.png"
              alt="Areafly Solar logo"
              width={229}
              height={43}
            />
            <p className='pb-11'>
              has successfully delivered over 500MW of solar solutions across Africa and Europe. Our government partnerships include large-scale solar farms, smart street lighting projects, and off-grid rural electrification programs, demonstrating our technical expertise and reliability.
            </p>
            <p className='pb-11'>
              With ISO-certified manufacturing and a proven track record of on-time project execution, we provide end-to-end solutions from design to maintenance.  Our partnerships with local governments in Kenya, Ghana, Germany, and Spain highlight our commitment to sustainable energy transition.

            </p>
            <p className='pb-11 2xl:pb-0'>
              Backed by cutting-edge R&D and a global supply chain, Areafly Solar continues to empower communities with clean, affordable energy.
            </p>
          </div>
          <div className='relative h-full col-span-3 md:col-span-3 lg:col-span-3  2xl:col-span-1'>
            <div className='2xl:absolute  bottom-0 w-full left-0'>
              <div className="flex gap-4 md:gap-10 text-center text-sm md:text-2xl justify-center 2xl:justify-normal w-full">
                <div className="pt-2 ">
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2 counter">13</div>
                  <p className="text-gray-600 ">YEAR</p>
                </div>

                <div className="pt-2 px-4 md:px-10 border-x border-black">
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2 counter">500MW</div>
                  <p className="text-gray-600">SOLAR SOLUTIONS</p>
                </div>

                <div className="pt-2">
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2 counter">ISO</div>
                  <p className="text-gray-600">CERTIFIED</p>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="max-w-7xl mx-auto px-5 mt-18 sm:mt-36  md:mt-72">
        <h2 className='text-3xl md:text-6xl font-bold mb-7'>PROJECT CASE</h2>
        <p className='text-base sm:text-2xl mb-12'>Energy storage cases-Industrial and commercial</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-7 lg:gap-12">
          {imageData.map((item, index) => (
            <div
              key={item.id}
              className={cn("group relative overflow-hidden rounded-2xl md:rounded-4xl  duration-300",
                index === 0 ? "row-span-2 col-span-2 " : ""
              )}
            >
              <Image
                src={item.src}
                alt={item.alt} width={820}
                height={500}
                loading="lazy"
                className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                  index === 0 ? "row-span-2 col-span-2" : "")}
              />
              <div className="absolute bottom-0 left-0 right-0  text-white p-2 md:p-6 text-lg">
                <h2 className="md:text-2xl line-clamp-1 md:line-clamp-2 font-semibold">{item.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description || '' }}
                  className="whitespace-pre-line line-clamp-1 md:line-clamp-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" mx-auto my-11 xl:my-22">
        <Image src="/images/project/11.jpg" width={1920} height={200} alt="Product Image" className="w-full object-cover min-h-50" />
      </div>
      <div className="max-w-[1172px]  mx-auto px-5">
        <div className="grid grid-cols-3 sm:grid-cols-10 group  gap-3 md:gap-7">
          <div className='col-span-3  sm:col-span-1'></div>
          <div className='sm:col-span-3'><Image
            src="/images/project/12.jpg"
            alt="Areafly Solar logo"
            width={323}
            height={211}
            className='w-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='sm:col-span-3'>
            <Image
              src="/images/project/13.jpg"
              alt="Areafly Solar logo"
              width={323}
              height={211}
              className='w-full transition-transform duration-500 hover:scale-105'
            /></div>
          <div className='sm:col-span-3 '>
            <Image
              src="/images/project/14.jpg"
              alt="Areafly Solar logo"
              width={323}
              height={211}
              className='w-full transition-transform duration-500 hover:scale-105'
            />
          </div>
          <div className='col-span-1 sm:col-span-4'></div>
          <div className='sm:col-span-3'><Image
            src="/images/project/15.jpg"
            alt="Areafly Solar logo"
            width={323}
            height={211}
            className='w-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='sm:col-span-3'><Image
            src="/images/project/16.jpg"
            alt="Areafly Solar logo"
            width={323}
            height={211}
            className='w-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='order-10 sm:order-none col-span-3 sm:col-span-6 lg:col-span-5'>
            <h3 className='text-3xl font-bold pb-5'>PROJECT CASE</h3>
            <div className='md:text-lg'>
              Solar street lights have developed rapidly in recent years, with the advantages of energy saving,
              environmental protection, zero electricity costs, easy installation and so on,
              quickly entered the public&#39;s vision. In recent years, Areafly solar street lights have lit 321 urban and 8672 rural roads, to undertake large and small areas all over the world.
            </div>

          </div>
          <div className='col-span-2 sm:col-span-1  lg:col-span-2'></div>
          <div className='order-8 sm:order-none sm:col-span-3'>
            <Image
              src="/images/project/17.jpg"
              alt="Areafly Solar logo"
              width={323}
              height={211}
              loading='lazy'
              className='w-full transition-transform duration-500 hover:scale-105'
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1172px] mx-auto px-5 mt-18 xl:mt-45">
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-4'>

          <div className='col-span-3 sm:row-span-2 sm:col-span-3 flex justify-center items-center'>
            <h3 className='text-xl md:text-3xl font-bold pt-5'>Quanzhou City of Fujian Province
              customized street lamp.</h3>

          </div>
          <div className='row-span-3 sm:row-span-4'>
            <Image
              src="/images/project/23.jpg"
              alt="Areafly Solar logo"
              width={274}
              height={485}
              loading='lazy'
              className='w-full h-full transition-transform duration-500 hover:scale-105'
            />
          </div>
          <div className='row-span-3 sm:row-span-4'><Image
            src="/images/project/24.jpg"
            alt="Areafly Solar logo"
            width={274}
            height={485}
            loading='lazy'
            className='w-full h-full  transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='col-span-1'><Image
            src="/images/project/18.jpg"
            alt="Areafly Solar logo"
            width={201}
            height={110}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='col-span-1'><Image
            src="/images/project/19.jpg"
            alt="Areafly Solar logo"
            width={201}
            height={110}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='row-span-2'><Image
            src="/images/project/22.jpg"
            alt="Areafly Solar logo"
            width={240}
            height={241}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='col-span-1'><Image
            src="/images/project/19.jpg"
            alt="Areafly Solar logo"
            width={201}
            height={110}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></div>
          <div className='col-span-1'><Image
            src="/images/project/20.jpg"
            alt="Areafly Solar logo"
            width={201}
            height={110}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></div>
        </div>
      </div>

      <div className="max-w-[1172px] mx-auto px-5 mt-18 xl:mt-45">
        <h3 className='text-xl md:text-3xl font-bold mb-8'>12 meters municipal street lamp is located in Nairobi, Kenya.</h3>
        <ul className='grid grid-cols-4 gap-2 md:gap-4'>
          <li>
            <Image
              src="/images/project/25.jpg"
              alt="Areafly Solar logo"
              width={275}
              height={485}
              loading='lazy'
              className='w-full h-full transition-transform duration-500 hover:scale-105'
            />
          </li>
          <li><Image
            src="/images/project/26.jpg"
            alt="Areafly Solar logo"
            width={275}
            height={485}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
          <li><Image
            src="/images/project/27.jpg"
            alt="Areafly Solar logo"
            width={275}
            height={485}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
          <li><Image
            src="/images/project/28.jpg"
            alt="Areafly Solar logo"
            width={275}
            height={485}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
        </ul>
      </div>
      <div className="max-w-[1172px] mx-auto px-5 mt-18 xl:mt-45 ">
        <h3 className='text-xl md:text-3xl font-bold mb-8'>13 meters high and low arm street lamp in Kinshasa, Congo.</h3>
        <ul className='grid grid-cols-5 gap-2 md:gap-4'>
          <li className='col-span-2'>
            <Image
              src="/images/project/29.jpg"
              alt="Areafly Solar logo"
              width={450}
              height={485}
              loading='lazy'
              className='w-full h-full transition-transform duration-500 hover:scale-105'
            />
          </li>
          <li><Image
            src="/images/project/30.jpg"
            alt="Areafly Solar logo"
            width={275}
            height={485}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
          <li><Image
            src="/images/project/31.jpg"
            alt="Areafly Solar logo"
            width={275}
            height={485}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
          <li><Image
            src="/images/project/32.jpg"
            alt="Areafly Solar logo"
            width={275}
            height={485}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
        </ul>
      </div>
      <div className="max-w-[1172px] mx-auto px-5 my-18 xl:my-45  ">
        <h3 className='text-xl md:text-3xl font-bold mb-8'>In the vast land of Nigeria, Areafly solar 10 meters street lights are
          lighting up the night in an efficient and environmentally friendly way!</h3>
        <ul className='grid grid-cols-3 gap-2 md:gap-4'>
          <li><Image
            src="/images/project/33.jpg"
            alt="Areafly Solar logo"
            width={380}
            height={255}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
          <li><Image
            src="/images/project/34.jpg"
            alt="Areafly Solar logo"
            width={380}
            height={255}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
          <li><Image
            src="/images/project/35.jpg"
            alt="Areafly Solar logo"
            width={380}
            height={255}
            loading='lazy'
            className='w-full h-full transition-transform duration-500 hover:scale-105'
          /></li>
        </ul>
      </div>
    </div>
  );
}