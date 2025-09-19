import { getSpecifiedBrandAPi } from '@/lib/services/brands.service';
import Image from 'next/image';
import React from 'react';

interface BrandDetailsProps {
    params: { id: string };
}

export default async function BrandDetails({ params }: BrandDetailsProps) {
    const brand = await getSpecifiedBrandAPi(params.id);

    if (!brand) {
        return (
            <section className="container mx-auto my-10">
                <p className="text-center text-red-500">Brand not found</p>
            </section>
        );
    }

    return (
        <section className="container mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex justify-center">
                    {brand.image && (
                        <Image
                            width={250}
                            height={250}
                            src={brand.image}
                            alt={brand.slug || brand.name}
                            className="rounded-md object-cover"
                        />
                    )}
                </div>
                <div className="col-span-2">
                    <h1 className="my-3 text-2xl font-bold">{brand.name}</h1>
                    <div className="flex flex-col gap-3 text-gray-700">
                        {brand.slug && <p>Slug: {brand.slug}</p>}
                        {brand.createdAt && (
                            <p>Created At: {new Date(brand.createdAt).toLocaleDateString()}</p>
                        )}
                        {brand.updatedAt && (
                            <p>Updated At: {new Date(brand.updatedAt).toLocaleDateString()}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
