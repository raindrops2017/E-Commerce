'use client'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { addToCartApi } from '@/lib/services/cart.service'
import { ShoppingCartIcon } from 'lucide-react'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { CartContext } from '../Context/CartContext'

export default function AddToCart({id}:{id:string}) {
  const {numOfCartItem, setNumOfCartItem } = useContext(CartContext);
 async function addProduct(id:string){
    const res = await addToCartApi(id);

    if(res.status == 'success'){
      setNumOfCartItem(numOfCartItem + 1)
    toast.success('Product added successfully to your cart',{position:'top-center', duration:3000})
  } else {
    toast.error("Check again, Product does't add",{position:'top-center', duration:3000})
    }
  }

  return <>
    <CardFooter className='flex cursor-pointer gap-2 my-3'>
      <Button onClick={()=> addProduct(id)}
       className="grow-1 cursor-pointer bg-purple-300 hover:bg-purple-400">
        <ShoppingCartIcon className="mr-2" /> Add to cart
      </Button>
    </CardFooter>
  </>
}
