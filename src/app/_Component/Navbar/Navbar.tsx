import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"


export default function Navbar() {

  return <>
    <nav className='p-3 flex justify-around items-center bg-blue-200 shadow'>

      <Link href={'/'} ><h2 className='font-bold'>ModaVibes</h2></Link>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className='hover:bg-blue-300' asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/products">Products</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/brands">Brands</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
<div className='flex gap-2 justify-center items-center '>
        <Input type="text" placeholder="search...." />
        
        <div className='relative p-3'>
          <FaShoppingCart />
            <Badge className="size-5 absolute top-0 end-0 rounded-full p-2 "><span>0</span></Badge>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <FaUserAlt />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={'/profile'}>Profile</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>

            </DropdownMenuGroup>


            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </>
}
