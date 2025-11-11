"use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { AspectRatio } from "../ui/aspect-ratio"

const imageUrls = [
    {url:"/images/banner1.webp",alt:"alt1"},
    {url:"/images/banner2.webp",alt:"alt2"},
    {url:"/images/banner3.webp",alt:"alt3"},
]
export function ProductCarousel() {
  return (
    <Carousel className="w-[438px] h-[438px] relative " plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent className="flex w-full -ml-0 ">
        {imageUrls.map((_, index) => (
          <CarouselItem key={index} className="pl-0">
             <AspectRatio ratio={32 / 32} className="bg-muted ">
             <Image src={_.url} alt={_.alt} fill className="h-full w-full  object-cover  "></Image>
             </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
