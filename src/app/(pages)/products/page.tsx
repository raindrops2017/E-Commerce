import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'


export default async function productPage() {

  // const response = await fetch('');
  // const {data : products} : {data : productInterface[] } = response.json();

  // console.log(products[0])

  return <>
  <Card className='flex w-1/4 m-4'>
  {/* <Image/> */}
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  </>
}
