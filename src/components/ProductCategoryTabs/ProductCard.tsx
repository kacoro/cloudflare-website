// components/ProductCard.tsx
import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  ArrowRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  subname?: string;
  price: number | string; // 修改为支持数字或字符串类型
  originalPrice?: number | string; // 修改为支持数字或字符串类型
  image: string;
  description: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
     <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-none border-0">
      <div className="flex flex-row">
        {/* 左侧图片 */}
        <div className="w-2/5 relative flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            className="object-contain"
            width={200}
            height={200}
            unoptimized
          />
        </div>
        
        {/* 右侧文字内容 */}
        <div className="w-3/5 flex flex-col justify-center p-4 bg-[#f4f6f9]">
          <CardContent className="p-0">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
            <p className="font-semibold text-lg line-clamp-1">{product.subname}</p>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
              {product.description}
            </p>
          </CardContent>
        </div>
      </div>
    </div>
  );
}