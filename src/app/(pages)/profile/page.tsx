

'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import PassModel from "@/app/_Component/PassModel/PassModel";
import UserModel from "@/app/_Component/UserModel/UserModel";
import Image from "next/image";
import profile from '../../../assets/profile.jpg'


export default function Myprofile() {
    const [showForm, setShowForm] = useState(false)
     const [user] = useState({
        name: "Safaa Osama",
        email: "saffy@email.com",
        phone: "01012345678",
      });
      
  return<>
   <section className="container flex flex-col items-center justify-center shadow-sm mx-auto py-10">
      <div className="flex items-center gap-4 mb-8">
        <div className=" h-15 w-15 relative">
          <Image fill className="rounded-full" alt="Profile-picture" src={profile}/>
        </div>
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <Tabs defaultValue="info">
        <TabsList className="gap-2">
          <TabsTrigger className="cursor-pointer bg-gray-100" value="info">Profile Info</TabsTrigger>
          <TabsTrigger className="cursor-pointer bg-gray-100" value="password">Change Password</TabsTrigger>
          <TabsTrigger className="cursor-pointer bg-gray-100" value="orders">My Orders</TabsTrigger>
          <TabsTrigger className="cursor-pointer bg-gray-100" value="wishlist">Wishlist</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card>
            <CardHeader>
              <CardTitle className="my-3">Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>

               <Button onClick={() => setShowForm(true)}
               type="button" className="cursor-pointer mt-4">
                Edit Profile</Button> 
             {showForm && (
              <div className="mt-10 ">
                 <UserModel />
                    <Button
                      onClick={() => setShowForm(false)}
                      type="button"
                      className="cursor-pointer mt-4 bg-gray-300 hover:bg-gray-400"
                    >
                      Cancel
                    </Button>
              </div>
             
              
            )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
             <PassModel/>
            </CardContent>
          </Card>
        </TabsContent>
 
        <TabsContent value="orders">
         <Card>
            <CardHeader>
              <Link href={"/allorders"}>
              <CardTitle className="curser-pointer">All Orders</CardTitle>
              </Link>
            </CardHeader>
          </Card>
        </TabsContent>
       

        <TabsContent value="wishlist">
          <Card>
            <CardHeader>
              <Link href={"/wishlist"}>
              <CardTitle className="curser-pointer">Wishlist</CardTitle>
              </Link>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  </>
}
