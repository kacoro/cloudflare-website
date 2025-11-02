// components/ProductCard.tsx
import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number | string; // 修改为支持数字或字符串类型
  originalPrice?: number | string; // 修改为支持数字或字符串类型
  image: string;
  description: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

// 辅助函数：将价格转换为数字
const parsePrice = (price: number | string): number => {
  if (typeof price === 'number') {
    return price;
  }
  // 如果是字符串，移除货币符号和逗号后转换为数字
  return parseFloat(price.replace(/[$,]/g, '')) || 0;
};

// 辅助函数：格式化价格显示
const formatPrice = (price: number | string): string => {
  const numericPrice = parsePrice(price);
  return `$${numericPrice.toFixed(2)}`;
};

export function ProductCard({ product }: ProductCardProps) {
  const price = parsePrice(product.price);
  const originalPrice = product.originalPrice ? parsePrice(product.originalPrice) : undefined;

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
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-2 rounded-full h-8 w-8"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardHeader className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardHeader>
      
      <CardContent className="px-4 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            {formatPrice(product.price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        
        {product.rating && (
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.rating!)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating})
            </span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          加入购物车
        </Button>
      </CardFooter>
    </Card>
  );
}