
'use server'
import getMyToken from "@/utilities/getMyToken";

export async function addToCartApi(id: string) {
    const token = await getMyToken();

    if (!token) { throw new Error('Not authorized to add product, please logged in') }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
            method: 'POST',
            headers: {
                token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ productId: id })
        });

    const res = await response.json();
    return res;
};


export async function getLoggedUserCartApi() {
    const token = await getMyToken();

    if (!token) { throw new Error('Not authorized , please logged in to be able to see cart') }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
            method: 'GET',
            headers: {
                token,
                "Content-Type": "application/json"
            },
        });

    const res = await response.json();
    return res;
};


export async function clearUserCartApi() {
    const token = await getMyToken();

    if (!token) { throw new Error('No access to clear cart') }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
            method: 'DELETE',
            headers: {
                token,
                "Content-Type": "application/json"
            },
        });

    const res = await response.json();
    return res;
};


export async function removeCartItemApi(id: string) {
    const token = await getMyToken();

    if (!token) { throw new Error('No access to remove item') }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            method: 'DELETE',
            headers: {
                token,
                "Content-Type": "application/json"
            },
        });

    const res = await response.json();
    return res;
};



export async function updateProductCountApi(id: string, count:number) {
    const token = await getMyToken();

    if (!token) { throw new Error('No access to update quantity') }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            method: 'PUT',
            headers: {
                token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ count })
        });

    const res = await response.json();
    return res;
};