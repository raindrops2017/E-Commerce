'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutFormValues, checkoutSchema } from '@/app/schema/checkout.schema'
import { Input } from '@/components/ui/input'
import { checkoutCashApi, checkoutSessionApi } from '@/lib/services/checkout.service'
import { useRouter, useParams } from 'next/navigation'
import toast from 'react-hot-toast'

export default function CheckoutPage() {
  const router = useRouter();
  const { cartId }: { cartId: string } = useParams();

  const form = useForm<checkoutFormValues>({
    defaultValues: {
      details: "",
      phone: "",
      city: ""
    },
    resolver: zodResolver(checkoutSchema)
  })

  async function handleOnlineCheckout(values: checkoutFormValues) {
    if (!cartId) {
      console.error("Cart ID is missing");
      return;
    }

    const response = await checkoutSessionApi(cartId, "", values);
    if (response.status == "success") {
      window.location.href = response.session.url;
    }
  }

  async function onlineCheckout(cartId: string, url: string, values: checkoutFormValues) {
    const response = await checkoutSessionApi(cartId, "", values);
    if (response.status == "success") {
      console.log("response.session.url",response);
      toast.success('Payment success', { position: "top-center", duration: 2000 });
      window.location.href = response.session.url;
    }
  }
  async function cashCheckout(cartId: string, values: checkoutFormValues) {
    const response = await checkoutCashApi(cartId, values);
    if (response.status == "success") {
      console.log('cash response', response)
      toast.success('Success order', { position: "top-center", duration: 2000 });
      router.push('/');
    }
  }
  return (
    <section className="p-5 mx-auto w-3/4 my-10 border-2 bg-gray-50 border-purple-300">
      <div className="flex flex-col mx-auto w-full justify-center items-center">
        <h1 className='text-center'>ModeVibe</h1>
        <Form {...form}>
          <form className='space-y-4' //onSubmit={form.handleSubmit(handleOnlineCheckout)}
          >
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Details</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder="details..." {...field} />
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
                    <Input type='tel' placeholder="phone..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder="city..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-6">
              <Button
                onClick={form.handleSubmit((values) => onlineCheckout(cartId, "", values))}
                className="bg-purple-300 cursor-pointer hover:bg-purple-400 mb-3" >
                Visa payment
              </Button>

              <Button
                onClick={form.handleSubmit((values) => cashCheckout(cartId, values))}
                className="bg-purple-300 cursor-pointer hover:bg-purple-400 mb-3"
                type="button">
                Cash payment
              </Button>

            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}
