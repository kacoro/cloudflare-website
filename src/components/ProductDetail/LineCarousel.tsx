import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'

type slide = { url: string; alt: string }
type PropType = {
  slides: slide[]
  options?: EmblaOptionsType
}

const LineCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  // const [emblaRef, emblaApi] = useEmblaCarousel(options)
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

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <>
      <section className=" flex-shrink-0 w-full  relative max-w-5xl mx-auto  "  >
        <div className=" overflow-hidden  ml-4" ref={emblaRef} >
          <div className="container flex h-full -ml-4  w-full aspect-[1024/420]">
            {slides.map((slide, index) => (
              <div className="min-w-0 pl-5 shrink-0 grow-0 basis-1/3 " key={index}>
                <div className="w-full h-full relative">
                  <Image
                   loading="lazy"
                    src={slide.url}
                    alt={slide.alt}
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className="buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='absolute  top-1/2 transform -translate-y-1/2 -left-12 md:-left-18 lg:-left-26' />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='absolute  top-1/2 transform -translate-y-1/2 -right-12 md:-right-18 lg:-right-26' />
        </div>
      </section>
      <div className="controls ">
        <div className="dots flex justify-center gap-3 py-12">
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
    </>
  )
}

export default LineCarousel
