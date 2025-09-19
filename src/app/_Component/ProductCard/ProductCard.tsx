

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import AddToCart from '@/app/_Component/AddToCart/AddToCart';
import { Trash2 } from 'lucide-react';
import Remove from '../Remove/Remove';


interface ProductCardProps {
    title: string,
    slug: string,
    imageCover: string,
    ratingsAverage: number,
    price: number,
    brandName: string,
    id: string

}

export default function ProductCard({ title, slug, id, imageCover, ratingsAverage, price, brandName }: ProductCardProps) {
    return <>

        <Card className="shadow-sm">
            <Image
                src={imageCover}
                width={250}
                height={300}
                alt={slug}
                className='object-cover'
            />

            <CardHeader>
                <div className='flex flex-col'>
                    <CardTitle className="font-medium">{title}</CardTitle>
                    <CardDescription>{brandName}</CardDescription>
                </div>
            </CardHeader>

            <CardContent className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-yellow-400">
                    <p>{ratingsAverage}</p> <FaStar />
                </div>
                <p className="font-bold">{price} EGP</p>
            </CardContent>

            <CardFooter className="w-full flex items-center gap-4">

                <div className='flex-1'>
                    <AddToCart id={id} />
                </div>
                <Remove/>
            </CardFooter>
        </Card>
    </>
}
