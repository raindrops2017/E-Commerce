import { ICategory } from "@/interfaces";

export async function getAllCategoryApi(): Promise<ICategory[] | null>{
const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
const { data: categories }: { data: ICategory[] } = await response.json();
  return categories;
}

export async function getSpecifiedcategoryAPi(id:string) : Promise<ICategory | null> {
const response =
await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);

const {data: category}:{data:ICategory} =await response.json();
return category;
}

