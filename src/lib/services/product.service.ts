import { IProduct } from "@/interfaces/productInterface";

export async function getAllProductAPi()
    : Promise<IProduct[] | null> {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    const { data: products }: { data: IProduct[] } = await response.json();
    return products;
}


export async function getSpecifiedProductAPi(id: string): Promise<IProduct | null> {
    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const { data: product }: { data: IProduct } = await response.json();
    return product;
}

//Related Products
export async function getProductsByCategoryAPi(categoryId: string)
    : Promise<IProduct[] | null> {

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`);
    const products = await response.json();
    return products;
}

export async function getProductsBybrandsAPi(brandId: string)
    : Promise<IProduct[] | null> {

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`);
    const products = await response.json();
    return products;
}

export async function getProductsByPriceAPi(price: number)
    : Promise<IProduct[] | null> {

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/products?price[gte]=${price}`);
    const products = await response.json();
    return products;
}