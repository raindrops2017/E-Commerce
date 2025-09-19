

'use server'
import { checkoutFormValues } from "@/app/schema/checkout.schema";
import getMyToken from "@/utilities/getMyToken";

export async function checkoutSessionApi(cartId: string,
   url = process.env.NEXT_URL,
    formValues: checkoutFormValues) {
  const token = await getMyToken();

  if (!token) {
    throw new Error('No access to use this service');
  }

  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, {
    method: 'POST',
    headers: {
      token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ shippingAddress: formValues })
  });

  const res = await response.json();
  return res;
};


export async function checkoutCashApi(cartId: string, formValues: checkoutFormValues) {
  const token = await getMyToken();

  if (!token) {
    throw new Error('No access to use this service');
  }

  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
    method: 'POST',
    headers: {
      token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ shippingAddress: formValues })
  });

  const res = await response.json();
  return res;
};


export async function getAllOrdersApi() {
  const token = await getMyToken();

  if (!token) {
    throw new Error('No access to use this service');
  }

  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders`, {
    method: 'GET',
    headers: {
      token,
      "Content-Type": "application/json"
    },
  });

  const res = await response.json();
  return res;
};




export async function getUserOrdersApi(cartId: string) {
  const token = await getMyToken();

  if (!token) {
    throw new Error('No access to use this service');
  }

  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`, {
    method: 'GET',
    headers: {
      token,
      "Content-Type": "application/json"
    },
  });

  const res = await response.json();
  return res;
}; 