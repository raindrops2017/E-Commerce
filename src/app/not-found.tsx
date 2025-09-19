import React from 'react'
import err from "../assets/error.jpg"
import Image from 'next/image'
import Link from 'next/link'

export default function notFoundPage() {
  return (
    <>
      <div className='bg-gray-100 flex flex-col justify-center items-center gap-2'>
        <h1>Not found page</h1>
        <Image width={100} height={120} src={err} alt="error-image" 
        className=' rounded-sm' />
        <h2>eroor 404</h2>
        <span>Go to <Link className='text-blue-700 text-lg font-semibold' href={'/'}>Home</Link> page</span>
      </div>
    </>
  )
}
