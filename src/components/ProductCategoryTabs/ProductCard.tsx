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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          width={400}
          height={192}
        />
      </div>
      
      <CardHeader className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
        <p className="font-semibold text-lg line-clamp-1">{product.subname}</p>

       
      </CardHeader>
      
      <CardContent className="px-4 pb-2">
        <div className="flex items-center gap-2">
           <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        </div>
        
      </CardContent>
    </Card>
  );
}