import { getAllCategoryApi } from '@/lib/services/category.service';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

export default async function CategoriesPage() {
  const categories = await getAllCategoryApi();

  if (!categories || categories.length === 0) {
    return (
      <section className="container mx-auto text-center py-10">
        <p className="text-gray-600 text-lg">No categories found.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto my-10">
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
        {categories.map((category) => (
          <Link key={category._id} href={`/categories/${category._id}`}>

            <Card className="hover:scale-105 h-100 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-center font-semibold">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.slug || category.name}
                    width={300}
                    height={300}
                    className="rounded-sm object-cover"
                  />
                )}

              </CardContent>
            </Card>

          </Link>

        ))}
      </div>

    </section>
  );
}
