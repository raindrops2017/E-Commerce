'use client'

import { getLoggedUserCartApi } from '@/lib/services/cart.service';
import getMyToken from '@/utilities/getMyToken';
import React, { createContext, useEffect, useState } from 'react';

type CartContextType = {
  numOfCartItem: number;
  setNumOfCartItem: React.Dispatch<React.SetStateAction<number>>;
};


export const CartContext = createContext<CartContextType | undefined>(undefined);
export default function CartContextProvider({ children }: { children: React.ReactNode }) {
// if (!CartContext) {
//   throw new Error("CartContext must be used inside CartContextProvider");
// }



  const [token, setToken] = useState<string>('');
  const [numOfCartItem, setNumOfCartItem] = useState<number>(0);

  async function getUserToken() {
    try {
      const token = await getMyToken();
      if (token) {
        console.log("ana token", token);
        setToken(token);
      }
    } catch (error) {
      console.log("Failed to get token", error);
    }
  }

  async function getLoggedUserCartInfo() {
    try {
      const result = await getLoggedUserCartApi();
      if (result.status === 'success') {
        // مجموع الـ count لكل المنتجات
        const sum = result.data.products.reduce(
          (acc: number, product: { count: number }) => acc + product.count,
          0
        );
        setNumOfCartItem(sum);
      }
    } catch (error) {
      console.log("not logged in");
    }
  }

  useEffect(() => {
    getUserToken();
  }, []);

  useEffect(() => {
    if (token) {
      getLoggedUserCartInfo();
    }
  }, [token]);

  return (
    <CartContext.Provider value={{ numOfCartItem, setNumOfCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
