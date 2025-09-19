

'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import { ICategory } from '@/interfaces'

interface SliderClientProps {
  categories: ICategory[]
}

export default function Slider({ categories }: SliderClientProps) {
  return (
    <section className="container mx-auto">
      <div className="h-[300px] w-full">
        <Swiper
          className="w-full h-full"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category._id} className="relative h-full">
              <div className="relative p-2 flex flex-col items-center w-full h-full">
                <h2 className="text-center">
                  {category.name} </h2>
                <Image
                  src={category.image}
                  fill
                  className="object-cover rounded-lg"
                  alt={category.slug}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
