'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import Image from 'next/image'

interface AppCarouselProps {
  images: string[],
  altContent: string
}
export default function AppCarousel({ images, altContent }: AppCarouselProps) {
  return <>
  <Carousel opts={{ loop: true }}
           plugins={[
        Autoplay({ delay:2000 }),
      ]}>
            <CarouselContent>
              {images.map((img, index) =>
                <CarouselItem key={index}>
                  <Image
                    src={img}
                    width={300}
                    height={400}
                    alt={altContent}
                    className="rounded-md object-cover"
                  /></CarouselItem>
              )}
            </CarouselContent>
   
          </Carousel>
  </>
}
