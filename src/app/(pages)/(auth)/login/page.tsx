"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import imglogin from '../../../../assets/vault.png'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }).max(50),
});

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <> <div className="mx-40 my-10 flex border-2 justufy-center items-center bg-gray-100 border-blue-400">

      <div className=''><Image width={300} height={450} src={imglogin} alt="login" />
      </div>
      <div className="flex flex-col mx-auto justufy-center items-center">
        <h1>ModeVibe</h1>
        <h2 className="my-3 font-semibold text-lg">Welcome back</h2>
        <Form  {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email..." {...field} />
                  </FormControl>
                  <FormDescription className="mb-3">This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password..." {...field} />
                  </FormControl>
                  <FormDescription className="mb-3">This is your public display password.</FormDescription>
                  <FormMessage />
                </FormItem>

              )}
            />
            <Button className="bg-blue-400 mb-3" type="submit">Submit</Button>
                 <p>you haven't an accout <Link href={'/register'} className="text-blue-600">Register now</Link> </p>

          </form>
        </Form>
      </div>
     
    </div>

    </>


  );
}
