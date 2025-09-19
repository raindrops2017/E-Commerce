import { getSpecifiedcategoryAPi } from '@/lib/services/category.service';
import Image from 'next/image';
import React from 'react';

interface CategoryDetailsProps {
    params: { id: string };
}

export default async function CategoryDetails({ params }: CategoryDetailsProps) {
    const category = await getSpecifiedcategoryAPi(params.id);

    if (!category) return;
    return (
        <section className="container mx-auto my-10">
            <div className="flex justify-center gap-4 items-center">
                <div className="flex flex-col">
                    <h1>{category?.name}</h1>
                    <p>{category?.slug}</p>
                </div>
                <Image
                    width={250}
                    height={300}
                    src={category?.image}
                    alt={category?.slug || category?.name}
                    className="rounded-md object-cover"
                />
            </div>
        </section>
    );
}
