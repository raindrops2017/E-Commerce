import { IProduct } from '@/interfaces';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from 'react-icons/fa';
import { getProductsByCategoryAPi, getSpecifiedProductAPi } from '@/lib/services/product.service';
import AddToCart from '@/app/_Component/AddToCart/AddToCart';
import AddToWishlist from '@/app/_Component/AddToWishlist/AddToWishlist';
import AppCarousel from '@/app/_Component/MyCarousel/MyCarousel';
import Image from 'next/image';

interface ProductDetailsProps {
  params: { id: string };
}

export default async function ProductDetailsPage({ params }: ProductDetailsProps) {
  const productDetails: IProduct | null = await getSpecifiedProductAPi(params.id);


  if (!productDetails) {
    return <p className="text-center py-10 text-2xl">Product not found</p>;
  }

  const relatedproducts = await getProductsByCategoryAPi(productDetails?.category._id)

  return <>
    <section className="container mx-auto p-6 my-10">
      <Card className="grid md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <AppCarousel images={productDetails?.images} altContent={productDetails?.title} />
        </div>

        <div className="col-span-2 px-4 flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-2xl font-bold my-3">
              {productDetails?.title}</CardTitle>
            <p>{productDetails?.category.slug}</p>
            <CardDescription className="text-gray-700">{productDetails?.description}</CardDescription>
          </CardHeader>

          <div className="flex justify-between">
            <CardContent className="flex items-center gap-2 text-yellow-500">
              <p className="text-lg font-medium text-black">{productDetails?.ratingsQuantity}</p>
              <FaStar />
            </CardContent>

            <CardAction>
              <p className="text-xl font-bold">{productDetails?.price} EGP</p>
            </CardAction>
          </div>
          <CardFooter className="w-full flex items-center gap-4">
            <div className="flex-1">
              <AddToCart id={productDetails?._id} />
            </div>
            <AddToWishlist id={productDetails?._id} />
          </CardFooter>
        </div>
      </Card>
    </section>

    <section className='container my-10 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {relatedproducts?.length &&
        relatedproducts?.map((product) => (
          <Card key={product._id} className=" flex flex-col -px-2">
            {/* <Link href={`/products/${product._id}`}> */}
            <Image
              src={product.imageCover}
              width={250}
              height={300}
              alt={product.slug}
              className="object-cover" />

            <CardHeader>
              <div className='flex flex-col'>
                <CardTitle className="font-medium">
                  {product.title.split(' ').slice(0, 2).join(' ')}</CardTitle>
                <CardDescription className="">{product.brand.name}</CardDescription>
              </div>
            </CardHeader>
            {/* </Link> */}
            <CardContent className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-yellow-400">
                <p>{product.ratingsAverage}</p> <FaStar />
              </div>
              <p className="font-bold">${product.price}</p>
            </CardContent>


            <CardFooter className="w-full flex items-center gap-4 bottom-0">
              <div className="flex-1">
                <AddToCart id={product?._id} />
              </div>
              <AddToWishlist id={product?._id} />
            </CardFooter>

          </Card>
        ))}
    </section>
  </>;
}
