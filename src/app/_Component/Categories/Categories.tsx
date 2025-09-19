import Image from 'next/image'
import React from 'react'
import catImg from '../../../assets/categories.png'
import { Button } from '@/components/ui/button'



export default function Categories() {
    return <>
        <section className='bg-black container mx-auto p-8 grid grid-cols-2 my-10'>
            <div className='col-span-1 flex flex-col'>
                <p className='text-[#00FF66] mb-6'>categories</p>
                <h1 className='text-white'>Enahnce Your Music Experience</h1>
                <ul className='flex gap-8 my-5'>

                    <li>
                        <div className='rounded-full size-15 bg-white flex justify-center items-center flex-col'>
                            <span >23</span>
                            <span className=''>hours</span>
                        </div>
                    </li>

                    <li>
                        <div className='rounded-full size-15 bg-white flex justify-center items-center flex-col'>
                            <span >05</span>
                            <span className=''>days</span>
                        </div>
                    </li>

                   <li>
                        <div className='rounded-full size-15 bg-white flex justify-center items-center flex-col'>
                            <span >59</span>
                            <span className=''>minute</span>
                        </div>
                    </li>
                    <li>
                        <div className='rounded-full size-15 bg-white flex justify-center items-center flex-col'>
                            <span >59</span>
                            <span className=''>second</span>
                        </div>
                    </li>
                </ul>

                <Button className='bg-[#00FF66] rounded-[4] text-white p-3 w-fit'>Buy Now</Button>
            </div>
            <div className='col-span-1'>
                <Image src={catImg} width={300} height={200} alt='category-image' />
            </div>
        </section>
    </>
}
