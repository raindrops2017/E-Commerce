
import { IBrand } from "@/interfaces";


export async function getAllBrandsApi(): Promise<IBrand[] | null> {
  const response =
    await fetch('https://ecommerce.routemisr.com/api/v1/brands');

  const { data: brands }: { data: IBrand[] } = await response.json();
  return brands;
}




export async function getSpecifiedBrandAPi(id: string): Promise<IBrand | null> {
  const response =
    await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);

  const { data: brand }: { data: IBrand } = await response.json();
  return brand;
}