import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from "next/image"
import {ImageType}  from '@/types/product'

type PropType = {
  slides: ImageType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )
  return (
    <section className=" flex-shrink-0 w-full max-w-[438px] "  >
      <div className="relative overflow-hidden aspect-square shadow-2xl w-full " ref={emblaRef} style={{
    
      } as React.CSSProperties}>
        <div className="embla__container flex  flex-nowrap touch-pan-y touch-pinch-zoom">
          {slides.map((_, index) => (
            <div className="embla__slide flex items-center justify-center flex-shrink-0 min-w-0 w-full  relative" key={index}>
              <AspectRatio ratio={32 / 32} className="bg-muted ">
                <Image loading='lazy' src={_.url} alt={_.alt} fill className="h-full w-full  object-cover  "></Image>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>


      <div className="embla__controls ">
        <div className="embla__dots flex justify-center gap-3 py-8">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={' w-2.5 h-2.5 rounded-full cursor-pointer bg-[#b2dbbc] '.concat(
                index === selectedIndex ? ' bg-primary' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
