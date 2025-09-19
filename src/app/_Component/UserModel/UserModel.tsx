'use client'
import { UserInfoFormValues, UserInfoSchema } from '@/app/schema/userdata.schema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { changeUserDataApi } from '@/lib/services/user.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function UserModel() {
  const form = useForm<UserInfoFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    },
    resolver: zodResolver(UserInfoSchema)
  })

  const router = useRouter();

  async function changeUserData(values: UserInfoFormValues) {
    try {
      const response = await changeUserDataApi({
        name: values.name,
        email: values.email,
        phone: values.phone
      });
      console.log("info", response);

      if (response?.message == "success") {
        toast.success('User data updated successfully!', { position: "top-center", duration: 3000 })
        router.push("/");
      } else {
        toast.error(response?.message || 'Update failed',
             { position: "top-center", duration: 5000 })
      }
    } catch (error) {
      toast.error('Something went wrong',
         { position: "top-center", duration: 5000 })
    }
  }

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(changeUserData)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Name..." {...field} />
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type='tel' placeholder="Phone..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-purple-300 cursor-pointer hover:bg-purple-400 mb-3" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
