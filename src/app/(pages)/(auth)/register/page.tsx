'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import imglogin from '../../../../assets/login.png'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from 'next/link'
import { RegisterFormValues, registerSchema } from '@/app/schema/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function RegisterPage() {
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    resolver: zodResolver(registerSchema)
  })

  const router = useRouter();

  async function handleRegister(values: RegisterFormValues) {
    try {
      const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/login');
      } else {
        console.error("Register failed:", result.message);
      }
    } catch (error) {
      console.error("❌ Error occurred:", error);
    }
  }

  return (
    <div className='container max-h-screen mx-auto 
    flex items-center my-10 p-4 rounded-md bg-gray-50 border-2 border-purple-300'>
      <div className='hidden lg:block w-1/2 px-8 '>
        <Image width={350} height={400} src={imglogin} alt="login" />
      </div>
      <div className='flex flex-col lg:w-1/2 w-full md:p-8 sm:p-6'>
        <Form {...form}>

          <form onSubmit={form.handleSubmit(handleRegister)} className='space-y-4'>
            <h1 className='text-center text-2xl mb-4 font-bold'>Create an account</h1>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="Re-enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className='w-full p-2 cursor-pointer bg-purple-300 hover:bg-purple-400' type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <p className='my-3 text-center'>
          Already have an account?
          <Link className='text-purple-700 cursor-pointer ps-2' href={'/login'}>Log In</Link>
        </p>
      </div>
    </div>
  )
}
