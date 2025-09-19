'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"
import { BiShoppingBag } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Heart, User } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { CartContext } from '../Context/CartContext'



export default function Navbar() {
  const { data: session, status } = useSession();
  const {numOfCartItem} = useContext(CartContext);
 const [openMenu, setOpenMenu] = useState(false);

  function logOut() {
    signOut({ callbackUrl: '/login' });
  }

  return  (
    <section className=' bg-purple-100'>
<nav className="p-3 container mx-auto flex items-center justify-between shadow-sm relative">
      <Link href={"/"}>
        <h2 className="flex items-center font-bold text-lg gap-1">
          <BiShoppingBag /> ModaVibes
        </h2>
      </Link>

      <div className="hidden lg:flex z-50">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-purple-200 px-3 py-1 rounded" asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-purple-200 px-3 py-1 rounded" asChild>
                <Link href="/products">Products</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-purple-200 px-3 py-1 rounded" asChild>
                <Link href="/categories">Categories</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="hover:bg-purple-200 px-3 py-1 rounded" asChild>
                <Link href="/brands">Brands</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex gap-2 justify-center items-center">
        <Input type="text" placeholder="search...." className="w-48" />

        <div className="relative p-2">
          <Link href={"/cart"}>
            <FaShoppingCart />
          </Link>
          <Badge className="size-5 absolute -top-1 -right-1 rounded-full p-0 flex items-center justify-center text-xs">
            {numOfCartItem}
          </Badge>
        </div>

        <Link href={"/wishlist"}>
          <Heart />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex gap-2 cursor-pointer">
              <User size={30} strokeWidth={1.5} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black text-white w-40 mx-3" align="start">
            {!session ? (
              <>
                <Link href={"/login"}>
                  <DropdownMenuItem className="cursor-pointer"> Login </DropdownMenuItem>
                </Link>
                <Link href={"/register"}>
                  <DropdownMenuItem className="cursor-pointer"> Register</DropdownMenuItem>
                </Link>
              </>
            ) : (
              <>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={"/profile"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logOut} className="cursor-pointer">
                  Log out
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Hamburger for mobile (always on the right) */}
      <div
        className="lg:hidden cursor-pointer order-last"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <RxHamburgerMenu size={28} />
      </div>

      {/* Mobile menu dropdown */}
      {openMenu && (
        <div className="absolute top-16 right-0 w-2/3 bg-purple-200 flex flex-col items-start p-4 gap-3 lg:hidden shadow-lg rounded-l-xl">
          <Link href="/" className="hover:bg-purple-300 w-full p-2 rounded">
            Home
          </Link>
          <Link href="/products" className="hover:bg-purple-300 w-full p-2 rounded">
            Products
          </Link>
          <Link href="/categories" className="hover:bg-purple-300 w-full p-2 rounded">
            Categories
          </Link>
          <Link href="/brands" className="hover:bg-purple-300 w-full p-2 rounded">
            Brands
          </Link>
        </div>
      )}
    </nav>
    </section>
    
  );
}

