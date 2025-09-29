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
             <AspectRatio ratio={32 / 15} className="bg-muted ">
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
