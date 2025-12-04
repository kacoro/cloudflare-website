"use client"
import Image from 'next/image';
import { useTranslations } from 'use-intl';
export function AboutTabs(){
     const t = useTranslations('AboutPage');
    const items = [
        {
            title: t("tabs.1")
        },
        {
            title: t("tabs.2")
        },
        {
            title: t("tabs.3")
        },
        {
            title: t("tabs.4")
        },
    ]
    return (
        <div className="grid grid-cols-10 py-18 px-2"> 
           <div className='col-span-5 md:col-span-3 flex'>
            <ul className="flex flex-col justify-evenly items-center "> 
               {items.map((item,index) => (
                <li key={index} className="flex flex-col flex-1 items-center">
                    <div className='grid grid-cols-10 flex-1 justify-between items-center py-2.5'>
                        <Image src={`/images/aboutus/tabs/${index+1}.webp`} alt={item.title} width={60} height={60} className='col-span-2' />
                        <span></span>
                        <h3 className="text-xs md:text-lg font-semibold col-span-6"                        
                        dangerouslySetInnerHTML={{ __html: item.title || "" }} />
                        <span></span>
                    </div>
                    <Image src={"/images/aboutus/tabs/line.webp"} alt="line" width={319} height={2} />
                </li>
               ))}
            </ul>
           </div>
           <div className='col-span-5 md:col-span-7'>
            <Image src="/images/aboutus/tabs/default.webp" 
                 alt="Cargo ship sailing on the ocean representing international trade" 
                 className="w-full h-full object-cover object-center"    width={1920} height={690}/>

           </div>
        </div>
    )

}