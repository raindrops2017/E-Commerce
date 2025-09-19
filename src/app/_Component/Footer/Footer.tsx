import Image from 'next/image'
import qrCode from '../../../assets/Qrcode.png'
import React from 'react'
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter } from 'react-icons/im'
import { SendIcon } from 'lucide-react'

export default function Footer() {
  return <>
    <div className=' bg-black text-white py-8'>
      <section className='grid grid-cols-5 gap-2 h-60 container mx-auto items-center justify-center'>

        <div className='col-span-1 flex flex-col p-2'>
          <h3 className='font-medium mb-2'>Exclusive</h3>
          <span className='mb-2'>Subscribe</span>
          <span className='text-sm mb-2'>Get 10 % of your first order</span>
          <div className='flex items-center justify-between border-2 p-2 rounded-md'>
            <p> Enter your email </p>
            <SendIcon />
          </div>
        </div>

        <div className='col-span-1 flex flex-col p-2'>
          <h3 className='font-medium mb-3'>support</h3>
          <span className='mb-3'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
          <span className='mb-3'>exclusive@gmail.com</span>
          <span>+88015-88888-9999</span>

        </div>

        <div className='col-span-1 flex flex-col p-2'>
          <h3 className='font-medium mb-3'>Account</h3>
          <ul className='font-sm'>
            <li>My Accounts</li>
            <li>Login /Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>

        </div>

        <div className='col-span-1'>
          <h3 className='font-medium mb-3'>quick link</h3>
          <ul className='font-sm'>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className='col-span-1 flex flex-col'>
          <h3 className='font-medium mb-3'>Download App</h3>
          <span className='text-[#FAFAFA]'>Save $3 with App New User Only</span>
          <Image src={qrCode} alt='scan here' width={150} height={100} className='my-3' />
          <ul className='flex gap-4'>
            <li> <ImFacebook /> </li>
            <li> <ImTwitter /> </li>
            <li> <ImInstagram /> </li>
            <li> <ImLinkedin /> </li>
          </ul>
        </div>
      </section>

      <div className='py-4 text-center'>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div >

  </>
}
