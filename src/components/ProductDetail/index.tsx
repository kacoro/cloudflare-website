"use client";

import { ReactNode } from 'react';
import Image from "next/image"
import EmblaCarousel from './EmblaCarousel'
import { Product, ProductTranslation } from '@/types/product';

import { BreadcrumbDemo } from './BreadcrumbDemo'
import { CircleCheck } from 'lucide-react';
import { EmblaOptionsType } from 'embla-carousel'
import { Button } from '../ui/button';
import LineCarousel from './LineCarousel';

type Props = {
    children?: ReactNode;
    data: Product&ProductTranslation;
    locale?: string;
};
// 在 ProductDetail 组件外部定义此函数
function decodeHtml(html: string): string {
    return html.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;plusmn;/g, '±')
        .replace(/&amp;times;/g, '×')
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, ' ').
        replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'")
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n');
}
export  function  ProductDetail({ data }: Props) {
    const product = data;
    const producttionLine = [
        { url: "/images/productionLine/2.webp", alt: "alt2" },
        { url: "/images/productionLine/3.webp", alt: "alt3" },
        { url: "/images/productionLine/4.webp", alt: "alt3" },
        { url: "/images/productionLine/5.webp", alt: "alt3" },
        { url: "/images/productionLine/6.webp", alt: "alt3" },
        { url: "/images/productionLine/7.webp", alt: "alt3" },
        { url: "/images/productionLine/8.webp", alt: "alt3" },
        { url: "/images/productionLine/9.webp", alt: "alt3" },
        { url: "/images/productionLine/10.webp", alt: "alt3" },
        { url: "/images/productionLine/11.webp", alt: "alt3" },
        { url: "/images/productionLine/12.webp", alt: "alt3" },
        { url: "/images/productionLine/1.webp", alt: "alt1" },
    ];
    const OPTIONS: EmblaOptionsType = {loop: true}
    if (!product) {
        return <div className='max-w-[1446px] mx-auto relative px-5'>Product not found.</div>;
    }
    return <>
        <div className='max-w-[1446px] mx-auto relative px-5'>
            <BreadcrumbDemo title={product.name} />
            <div className='text-4xl pt-16 pb-5 text-center'>{product.name}</div>
            <div>
                <div className='text-2xl text-center' dangerouslySetInnerHTML={{ __html: product.description||"" }}></div>
            </div>
            <div className='flex flex-col  not-lg:items-center lg:flex-row pt-16'>
                {product.thumbs&&<EmblaCarousel slides={product.thumbs} options={OPTIONS} />}
                <div className='not-md:pt-16'>
                    <ul className='md:ml-12'>
                       
                        {product.features&&product.features.map((feature, index) => (
                            <li key={index} className="flex md:text-2xl mb-8"><CircleCheck className='text-primary mt-1 text-2xl mr-4 w-[24px] h-[24px] flex-shrink-0' /><span>{feature}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-16 pb-32'>
                {product.infos&&product.infos.map((image, index) => (
                    <div key={index} className='flex justify-center aspect-w-468 aspect-h-584'>
                        <Image loading='lazy' src={image.url} alt={image.alt} width={468} height={584}  className='transition-all duration-300 ease-out hover:scale-110 hover:shadow' />
                    </div>
                ))}
            </div>
            <div className='text-4xl pb-8 text-center'>Parameter</div>
            <div className='flex flex-col items-center justify-center mb-10'>
                <div
                    dangerouslySetInnerHTML={{ __html: decodeHtml(product.parameters) }}
                    className='custom-table bg-red-50 max-h-[50vh] md:max-h-[70vh]'
                />
            </div>
            {product.download&&<Button
                className="mt-6 px-8 py-6 text-2xl  rounded-full flex items-center justify-center mx-auto cursor-pointer"
                size="lg"
                onClick={() => {
                    // 这里添加下载逻辑
                    // 下载完整表格图片
                    if (typeof document !== 'undefined'&& product.download) {
                        const link = document.createElement('a');
                        link.href = product.download; // 替换为实际图片路径
                        link.download = product.name + '.webp'; // 设置下载的文件名
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                }}
            >
                Download to view more
            </Button>}
            <div className='flex flex-col justify-center items-center  bg-white w-full pt-16 mt-10 mb-25' style={{ boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.35)' }}>
                <div className='text-4xl pb-8 text-center'>Providing efficient, reliable and innovative inverter solutions</div>
                <div className='text-2xl text-center pb-16'>Our experts will work one-on-one with you to provide you with the best possible solutions</div>
                <div className='flex  flex-col justify-center items-center px-14 md:px-28 relative w-full max-w-full'>
                    <LineCarousel slides={producttionLine} options={OPTIONS} />
                </div>
            </div>

        </div>
    </>

}
