


import { getAllCategoryApi } from '@/lib/services/category.service'
import { ICategory } from '@/interfaces'
import Slider from '../Slider/Slider'

export default async function DynamicSlider() {
  const categories: ICategory[] = await getAllCategoryApi()

  if (!categories || categories.length === 0) {
    return <p className="text-center">No categories found</p>
  }

  return <Slider categories={categories} />
}
