'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import imglogin from '../../../../assets/login.png'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { loginFormValues, loginSchema } from '@/app/schema/login.schema'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'


export default function LoginPage() {
  const form = useForm<loginFormValues>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(loginSchema)
  })


  const router = useRouter();
  async function handleLogin(values: loginFormValues) {

    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/"
    });

    if (response?.ok) {
      toast.success('Successfully logged in !', { position: "top-center", duration: 3000 })
        router.push("/");
    } else {
      toast.error(response?.error || 'Login failed', { position: "top-center", duration: 5000 })
    }

  }

  return <>
   <div className="flex p-5 mx-30 my-10 border-2 justufy-center items-center bg-gray-50 border-purple-300">

      <div className='hidden lg:block '>
        <Image width={350} height={400} src={imglogin} alt="login" />
      </div>

      <div className="flex flex-col mx-auto justufy-center items-center">
        <h1 className='text-center'>ModeVibe</h1>
        <h2 className="font-semibold text-lg mb-2">Welcome back</h2>
        <Form  {...form} >
          <form className='space-y-4' 
          onSubmit={form.handleSubmit(handleLogin)} >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder="Email..." {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder="password..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )}
            />
            <Button className="bg-purple-300 hover:bg-purple-400 mb-3" type="submit">Submit</Button>
            <p>You haven't an accout <Link href={'/register'} className="text-purple-700">Register</Link> now </p>
          </form>
        </Form>
      </div>
    </div>
    </>;
}
