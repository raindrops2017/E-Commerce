'use client'

import { getAllOrdersApi, getUserOrdersApi } from '@/lib/services/checkout.service';
import React, { useEffect, useState } from 'react';

interface IOrder {
  _id: string;
  id: string;
  user?: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress?: {
    details: string;
    city: string;
  };
  paymentMethodType?: string;
  isPaid?: boolean;
  isDelivered?: boolean;
  totalOrderPrice?: number;
  cartItems: {
    product?: { title: string };
    count: number;
  }[];
}

export default function AllOrders({ cartId }: { cartId: string }) {
  const [userOrders, setUserOrders] = useState<IOrder[]>([]);
  const [allOrders, setAllOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(false);

  async function getAllOrders() {
    setLoading(true);
    try {
      const allorders = await getAllOrdersApi();
      console.log("all orders", allorders);
      setAllOrders(allorders);
    } catch (err) {
      console.error("error fetching all orders", err);
    } finally {
      setLoading(false);
    }
  }

  async function getUserOrders(cartId: string) {
    setLoading(true);
    try {
      const orders = await getUserOrdersApi(cartId);
      console.log("user orders", orders);
      setUserOrders(orders);
    } catch (err) {
      console.error("error fetching user orders", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (cartId) {
      getUserOrders(cartId);
    }
  }, [cartId]); 

  if (loading) {
    return <h1 className="flex items-center justify-center text-3xl">Loading...</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Orders</h1>

      {userOrders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {userOrders.map((order) => (
            <div key={order._id} className="border rounded-lg shadow p-4 bg-white">
              <h2 className="font-semibold text-lg">Order #{order.id}</h2>
              <p><span className="font-medium">User:</span> {order.user?.name} ({order.user?.email})</p>
              <p><span className="font-medium">Phone:</span> {order.user?.phone}</p>
              <p><span className="font-medium">Address:</span> {order.shippingAddress?.details}, {order.shippingAddress?.city}</p>
              <p><span className="font-medium">Payment:</span> {order.paymentMethodType} {order.isPaid ? "✅ Paid" : "❌ Not Paid"}</p>
              <p><span className="font-medium">Delivery:</span> {order.isDelivered ? "✅ Delivered" : "❌ Not Delivered"}</p>
              <p><span className="font-medium">Total Price:</span> {order.totalOrderPrice} EGP</p>

              <div className="mt-3">
                <h3 className="font-medium">Cart Items:</h3>
                <ul className="list-disc list-inside">
                  {order.cartItems.map((item, index) => (
                    <li key={index}>
                      {item.product?.title || "Product"} × {item.count}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
