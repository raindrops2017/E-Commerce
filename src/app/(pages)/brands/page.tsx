import { Card, CardContent } from '@/components/ui/card';
import { getAllBrandsApi } from '@/lib/services/brands.service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function BrandsPage() {
  const brands = await getAllBrandsApi();

  return <>
    <section className='container mx-auto my-10 '>
      <div className='grid justify-center items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {
          brands?.map((brand) =>
          <Link key={brand._id} href={`/brands/${brand._id}`}>
            
          <Card>
            <CardContent className="">
              <Image
                src={brand.image}
                width={200}
                height={200}
                className="rounded-md object-cover"
                alt={brand.slug || brand.name}
              />
            </CardContent>
          </Card>
          </Link>)
        }
      </div>

    </section>
  </>
}
