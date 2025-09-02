import React from 'react'
import err from "../assets/images.jpg"
import Image from 'next/image'
import Link from 'next/link'

export default function notFoundPage() {
  return (
   <>
   <div className='flex flex-col justify-center items-center gap-4 my-4'>
    <h1>Not found page</h1>
    <Image width={100} height={120} src={err} alt="error-image" className='w-3/12 rounded-sm'/>
    <h2>eroor 404</h2>
    <span>Go to <Link className='text-blue-700' href={'/'}>Home</Link> page</span>
   </div>
   </>
  )
}
