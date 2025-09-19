import React from 'react'
import Heading from './_Component/Heading/Heading'
import ProductPage from './(pages)/products/page'
import Categories from './_Component/Categories/Categories'
import MainSlider from '@/app/_Component/MainSlider/MainSlider'
import DynamicSlider from './_Component/DynamicSlider/DynamicSlider'

export default function HomePage() {
  return (
    <>
      <section className='my-10 container mx-auto'>
        <MainSlider />

        <Heading semiHeader="Today's" mainHeader="Flash Sales" />
        <Heading semiHeader="Categories" mainHeader="Browse By Category" />
        <DynamicSlider />
        <Categories />
        
        <Heading semiHeader="Our Products" mainHeader="Explore Our Products" />
        <ProductPage />
      </section>

    </>
  )
}
