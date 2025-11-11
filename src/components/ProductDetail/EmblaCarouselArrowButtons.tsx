import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { CircleChevronLeft,CircleChevronRight } from 'lucide-react';
type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}
import { cn } from "@/lib/utils"
import{cva} from "class-variance-authority"

const buttonStyle = cva(
  "flex items-center  cursor-pointer justify-center rounded-full text-primary opacity-90 shadow-lg hover:opacity-100 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
)
export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children,className, ...restProps } = props

  return (
    <button
      className={cn( buttonStyle(),
        className,
      )}
      {...restProps}
    >
     <CircleChevronLeft size={54} />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children,className, ...restProps } = props

  return (
    <button
     className={cn( buttonStyle(),
        className,
      )}
      {...restProps}
    >
      <CircleChevronRight size={54}  />
      {children}
    </button>
  )
}
