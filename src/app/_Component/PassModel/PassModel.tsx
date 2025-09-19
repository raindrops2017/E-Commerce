'use client'
import { RepasswordFormValues, RepasswordSchema } from '@/app/schema/password.schema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { changeUserPassApi } from '@/lib/services/user.service'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function PassModel() {
  const form = useForm<RepasswordFormValues>({
    defaultValues: {
      currentpassword: "",
      newpassword: "",
      rePassword: ""
    },
    resolver: zodResolver(RepasswordSchema)
  })

  async function changeUserPass(values: RepasswordFormValues) {
    try {
      const response = await changeUserPassApi(
        values.currentpassword,
        values.newpassword,
        values.rePassword
      )

      if (response?.message == 'succsee') {
        toast.success("Password updated successfully",
           { position: "top-center" , duration:2000})
      } else {
        toast.error(response?.errors?.msg || "Something went wrong",
         { position: "top-center", duration:2000 })
      }
    } catch (error) {
      toast.error( "Something went wrong",
         { position: "top-center", duration:2000 })
    }
  }

  return (
    <Form {...form}>

        <form onSubmit={form.handleSubmit(changeUserPass)} className='space-y-4'>

          <FormField
            control={form.control}
            name="currentpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>current password:</FormLabel>
                <FormControl>
                  <Input placeholder="Current Password" type='pass' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>new password:</FormLabel>
                <FormControl>
                  <Input placeholder="New Password" type="pass" {...field} />
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
                <FormLabel>rePassword:</FormLabel>
                <FormControl>
                  <Input placeholder="rePassword" type="pass" {...field} />
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
  )
}
