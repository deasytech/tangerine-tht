"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ABOUT_US_SLIDES } from "@/constants/tht"


const AboutUsSlider = () => {
  return (
    <Carousel plugins={[
      Autoplay({
        delay: 3000,
      }),
    ]}>
      <CarouselContent>
        {ABOUT_US_SLIDES.map((slide: string, index: number) => (
          <CarouselItem key={index}>
            <Image src={slide} alt={`slide ${index + 1}`} width={589} height={397} className="w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default AboutUsSlider