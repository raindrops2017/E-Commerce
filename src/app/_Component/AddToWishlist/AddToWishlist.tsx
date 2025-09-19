
'use client'
import { addToWishlistApi } from '@/lib/services/wishlist.services';
import { Heart } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast';

export default function AddToWishlist({id}:{id:string}) {
async function addproductToWishlist(id:string) {
  const response = await addToWishlistApi(id);
  console.log(response);

   if(response.status == 'success'){
    toast.success('Product added successfully to your wishlist',{position:'top-center', duration:3000})
    } else {
    toast.error("Check again, Product does't add",{position:'top-center', duration:2000})
    }
  }
  return <>
  
  <Heart onClick={()=>addproductToWishlist(id)} className='cursor-pointer'/>

  </>
}
