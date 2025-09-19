
'use client'
import React, { useContext, useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { clearUserCartApi, getLoggedUserCartApi, removeCartItemApi, updateProductCountApi } from '@/lib/services/cart.service'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import toast from 'react-hot-toast'
import { CartContext } from '@/app/_Component/Context/CartContext'

interface CartProduct {
  product: {
    _id: string;
    title: string;
    imageCover: string;
  };
  price: number;
  count: number;
}


export default function CartPage() {
const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartPage must be used inside CartContextProvider");
  }

  const { numOfCartItem, setNumOfCartItem } = cart;
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartId, setCartId] = useState('')
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    getLoggedUserCart()
  }, [])

  async function getLoggedUserCart() {

    try {
      const result = await getLoggedUserCartApi();
      if (result.status === 'success') {
        setTotalCartPrice(result.data.totalCartPrice);

        setCartId(result.cartId);
        setProducts(result.data.products)
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  }

  async function clearusercart() {
    const res = await clearUserCartApi();
    if (res?.message === 'success') {
      setTotalCartPrice(0);
      setProducts([]);
      setNumOfCartItem(0);
    }
  }

  async function removeCartItem(id: string) {
    const res = await removeCartItemApi(id);
    if (res.status == 'success') {
      setProducts(res.data.products)
      setNumOfCartItem(numOfCartItem - 1)
      setTotalCartPrice(res.data.totalCartPrice);
      toast.success('Item removed from your cart', { position: 'top-center', duration: 3000 });
    } else {
      toast.error("Can't remove your item now", { position: 'top-center', duration: 3000 });
    }
  }

  async function updateProductCount(id: string, count: number, sign: string) {
    const response = await updateProductCountApi(id, count);
    if (count < 1) return;
    if (response.status == 'success') {
      setProducts(response.data.products);
      if (sign === "+") {
        setNumOfCartItem(numOfCartItem + 1);
        setTotalCartPrice(response.data.totalCartPrice);

      } else if (sign === "-") {
        setNumOfCartItem(numOfCartItem - 1);
        setTotalCartPrice(response.data.totalCartPrice);

      }
      toast.success("Quatity updated", { position: 'top-center', duration: 2000 })
    } else {
      toast.error("Updated failed", { position: 'top-center', duration: 2000 })
    }
  }

  if (isLoading) {
    return <h1 className='text-center font-bold text-4xl my-10'>
      Loading ........ </h1>
  }

  return (
    <section className="container mx-auto my-10 p-3">
      {
        products.length > 0 ? null : <h1 className='text-center my-16 font-bold text-3xl'>No products added to your cart yet </h1>
      }
      {
        products.length > 0 && <div className="flex justify-end my-4">
          <Button onClick={clearusercart} className='py-2 px-6 bg-black text-white cursor-pointer'>
            Clear Cart </Button>
        </div>
      }
      {products?.length > 0 &&
        <h1 className='text-center font-bold text-3xl my-10'>Total cart price :
          {totalCartPrice} EGP</h1>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.length > 0 ? products.map((product) => (
            <TableRow key={product.product._id}>
              <TableCell>
                <div className="font-medium w-auto h-auto gap-4 md:flex md:flex-col lg:flex lg:flex-row lg:items-center">
                  <div className='relative h-40 w-32'>
                    <Image fill className='object-cover rounded-md'
                      src={product.product.imageCover} alt='product-image' />
                    <Badge className="size-5 absolute top-0 start-0 rounded-full p-2 "><span>{product.count}</span></Badge>
                  </div>
                  <h2>{product.product.title}</h2>
                </div>
              </TableCell>
              <TableCell>{product.price} EGP</TableCell>
              <TableCell>
                
                  <div className='flex justify-center items-center gap-3'>
                    <Button onClick={() => updateProductCount(product.product._id, product.count + 1, "+")}
                     className='shadow-sm rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer '>+</Button>
                     <span>{product.count}</span>
                    <Button onClick={() => updateProductCount(product.product._id, product.count - 1, "-")}
                     className='shadow-sm rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer'>-</Button>
                  </div>
             
              </TableCell>
              <TableCell>{product.price * product.count} EGP</TableCell>
              <TableCell>
                <Button onClick={() => removeCartItem(product.product._id)}
                  className='cursor-pointer bg-red-600 text-white'>Remove</Button>
              </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
      <div className='flex justify-end items-center my-10'>
        <Link href={'/products'}>
          <Button className='cursor-pointer px-4 bg-amber-400'>Return to shop</Button>
        </Link>
      </div>
      {products.length > 0 &&
        <Link href={`/checkout/${cartId}`}>
          <Button className='w-full py-4 rounded-md mt-10 text-white font-semibold bg-gray-500 hover:bg-gray-600 cursor-pointer'>CheckOut Now</Button>
        </Link>}
    </section>

  )
}