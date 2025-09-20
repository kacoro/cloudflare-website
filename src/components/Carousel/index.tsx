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
    {url:"/images/swiper-1.jpg",alt:"alt1"},
    {url:"/images/swiper-2.jpg",alt:"alt2"},
    {url:"/images/swiper-3.jpg",alt:"alt3"},
    {url:"/images/swiper-4.jpg",alt:"alt4"},
]
export function CarouselDemo() {
  return (
    <Carousel className="w-full relative " plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className="flex w-full -ml-0 ">
        {imageUrls.map((_, index) => (
          <CarouselItem key={index} className="pl-0">
             <AspectRatio ratio={16 / 9} className="bg-muted ">
             <Image src={_.url} alt={_.alt} fill className="h-full w-full  object-cover "></Image>
             </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
