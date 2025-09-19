
'use server'
import getMyToken from "@/utilities/getMyToken";

export async function addToWishlistApi(id: string) {
    const token = await getMyToken();

    if (!token) { throw new Error('Not authorized to add product, please logged in') }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
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


export async function removeWishlistProductApi(id: string) {
    const token = await getMyToken();

    if (!token) { throw new Error("Can't remove this item") }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                token,
                "Content-Type": "application/json"
            },
        });
    const res = await response.json();
    return res;
};


export async function loggedUserWishlistApi() {
    const token = await getMyToken();

    if (!token) { throw new Error("Can't get this data") }

    const response =
        await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            method: 'GET',
            headers: {
                token,
                "Content-Type": "application/json"
            },
        });
    const res = await response.json();
    return res;
};
