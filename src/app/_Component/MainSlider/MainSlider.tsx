'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import slide1 from '../../../assets/slider-image-1.jpeg'
import slide2 from '../../../assets/slider-image-2.jpeg'
import slide3 from '../../../assets/slider-image-3.jpeg'
import slide4 from '../../../assets/grocery-banner-2.jpeg'
import slide5 from '../../../assets/grocery-banner.png'


export default function MainSlider() {
  return (
    <section className="flex">
      <div className="w-3/4 h-[300px]">
        <Swiper
          className="w-full h-full"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="relative h-full">
            <div className="relative w-full h-full">
              <Image src={slide4} fill className="object-cover" alt="main slide" />
            </div>
          </SwiperSlide>


          <SwiperSlide className="relative h-full">
            <div className="relative w-full h-full">
              <Image src={slide2} fill className="object-cover" alt="slide 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative h-full">
            <div className="relative w-full h-full">
              <Image src={slide5} fill className="object-cover" alt="slide 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative h-full">
            <div className="relative w-full h-full">
              <Image src={slide1} fill className="object-cover" alt="slide 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative h-full">
            <div className="relative w-full h-full">
              <Image src={slide3} fill className="object-cover" alt="slide 2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="w-1/4 h-[300px]">
        <Swiper
          className="w-full h-full"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={8}
          slidesPerView={2}
          direction="vertical"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide className="flex items-center justify-center">
            <Image src={slide3} width={300} height={150} className="object-cover" alt="side slide" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <Image src={slide1} width={300} height={150} className="object-cover" alt="side slide" />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}
