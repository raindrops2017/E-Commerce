import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllProductAPi, getProductsBybrandsAPi, getProductsByCategoryAPi, getProductsByPriceAPi } from '@/lib/services/product.service';
import Link from 'next/link';
import AddToCart from '@/app/_Component/AddToCart/AddToCart';
import AddToWishlist from '@/app/_Component/AddToWishlist/AddToWishlist';

export default async function ProductsPage() {
  const products = await getAllProductAPi();

// const relatedCategory = await getProductsByCategoryAPi(categoryId);
// const relatedBrand = await getProductsBybrandsAPi(brandId);
// const relatedPrice = await getProductsByPriceAPi(price);


  return   <>
     <div className='my-10 mx-auto w-1/4'>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Search by" />
            </SelectTrigger>
            <SelectContent className=''>
              <SelectItem value="Brand">Brand</SelectItem>
              <SelectItem value="Category">Category</SelectItem>
              <SelectItem value="Price">Price</SelectItem>
            </SelectContent>
          </Select>
        </div>

      <div className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"> 
        {products?.map((product) => (
          <Card key={product._id} className=" flex flex-col -px-2">
            <Link href={`/products/${product._id}`}>

              <Image
                src={product.imageCover}
                width={200}
                height={250}
                alt={product.slug}
                className="object-cover w-full h-auto" />

              <CardHeader>
                <div className='flex flex-col'>
                  <CardTitle className="font-medium">
                  {product.title.split(' ').slice(0, 2).join(' ')}</CardTitle>
                <CardDescription className="">{product.brand.name}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-yellow-400">
                  <p>{product.ratingsAverage}</p> <FaStar />
                </div>
                <p className="font-bold">{product.price} EGP</p>
              </CardContent>
            </Link>
            
              <CardFooter className="w-full flex items-center gap-4 bottom-0">
  <div className="flex-1">
    <AddToCart id={product?._id} />
  </div>
  <AddToWishlist id={product?._id} />
</CardFooter>

          </Card>
        ))}
      </div>
    </>;
}
