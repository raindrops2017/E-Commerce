'use client'

import { loggedUserWishlistApi, removeWishlistProductApi } from '@/lib/services/wishlist.services';
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import AddToCart from '@/app/_Component/AddToCart/AddToCart';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { IProduct } from '@/interfaces';


export default function WishlistPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  useEffect(() => {
    loggedUserWishlist()
  }, [])

  async function loggedUserWishlist() {
    try {
      const result = await loggedUserWishlistApi();
      if (result.status === 'success') {
        setWishlist(result.data);
        setIsLoading(false);
      }

    } catch (error) {
      console.log(error)
    }
  }

  async function removeWishlistProduct(id: string) {
    try {
      const res = await removeWishlistProductApi(id);
      if (res.status === 'success') {
        toast.success('Product removed from wishlist', { position: 'top-center', duration: 2000 });
        setWishlist(prev => prev.filter(item => item._id !== id));
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Server error, please try again later');
    }
  }

  if (isLoading) {
    return <h1 className='flex text-center justify-center items-center font-bold text-4xl my-10'>
      Loading ........ </h1>
  }

  return (
    <section className='container mx-auto my-10'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {wishlist.length > 0 ? wishlist.map(product => (
          <Card key={product._id} className="shadow-md">
            <Image
              src={product.imageCover}
              width={250}
              height={300}
              alt={product.title}
              className='object-cover'
            />

            <CardHeader>
              <div className='flex flex-col'>
                <CardTitle className="font-medium">{product.title}</CardTitle>
                <CardDescription>{product.brand?.name}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-yellow-400">
                <p>{product.ratingsAverage}</p> <FaStar />
              </div>
              <p className="font-bold">{product.price} EGP</p>
            </CardContent>

            <CardFooter className="w-full flex items-center gap-4">

              <div className='flex-1'>
                <AddToCart id={product._id} />
              </div>
              <Trash2
                className="cursor-pointer text-red-500"
                onClick={() => removeWishlistProduct(product._id)} />
            </CardFooter>
          </Card>

          //  <ProductCard id={product._id} title={product.title} slug={product.slug} price={product.price}
          //   ratingsAverage={product.ratingsAverage} imageCover={product.imageCover} brandName={product.brand.name}
          //  />

        )) : (
          <p className="text-center col-span-4 text-lg font-bold">Your wishlist is empty now</p>
        )}
      </div>
    </section>
  );
}
