'use client'

import { useParams } from 'next/navigation'

export default function ProductDetails() {
let params = useParams();
const productId = params.productId;

  return (
    <>
     <div>Product Details</div>
    <span>productId: {productId}</span>
    </>
   
  )
}
