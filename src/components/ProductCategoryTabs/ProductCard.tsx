// components/ProductCard.tsx
import * as React from "react";
import {  CardContent } from "@/components/ui/card";
import NavigationLink from "../Navigation/NavigationLink";
import { memo } from "react";
import Image from "next/image";
export interface Product {
  id: string;
  name: string;
  tabName?: string;
  subname?: string;
  price?: number | string; // 修改为支持数字或字符串类型
  originalPrice?: number | string; // 修改为支持数字或字符串类型
  image: string;
  description: string;
  rating?: number;
  images?: string[]; // 添加多图支持
}

interface ProductCardProps {
  product: Product;
}
export const ProductCard =  memo(Main)
export function Main({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-none border-0">
      <div className="flex flex-row ">
        {/* 左侧图片 */}
        <div className="w-2/5 relative flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            className="object-contain cursor-pointer"
            width={320}
            height={299}
            loading="lazy"
          />
        </div>

        {/* 右侧文字内容 */}
        <div className="w-3/5 flex flex-col justify-center p-4">
          <CardContent className="p-0">
            <NavigationLink
                            href={`/products/${product.id}`}
                            className="text-center p-0 m-0"
                          ><h3 className="font-semibold text-lg line-clamp-1 text-primary md:text-4xl cursor-pointer">{product.name}</h3></NavigationLink>
            <p className=" text-lg line-clamp-1 text-primary my-4 ">{product.subname}</p>
            <Image src="/images/line.png" width={468} height={2} alt="line" />
            <p className="text-sm  line-clamp-6 my-5">
              {product.description}
            </p>
             <NavigationLink
                            href={`/products/${product.id}`}
                            className="text-center"
                          >
            <Image src="/images/right-button.png" width={35} height={7} alt="line" /></NavigationLink>
          </CardContent>
        </div>
      </div>
    </div>
  );
}