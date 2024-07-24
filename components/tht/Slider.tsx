"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { SLIDES } from "@/constants/tht"


const Slider = () => {
  return (
    <section className="relative max-container padding-container mt-32">
      <Carousel plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
        <CarouselContent>
          {SLIDES.map((slide: string, index: number) => (
            <CarouselItem key={index}>
              <Image src={slide} alt={`slide ${index + 1}`} width={1216} height={540} className="w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default Slider