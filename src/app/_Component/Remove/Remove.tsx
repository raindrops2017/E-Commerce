'use client'
import { removeWishlistProductApi } from '@/lib/services/wishlist.services';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function WishlistItemComponent({ id }: { id: string }) {
  const [wishlist, setWishlist] = useState<unknown[]>([]);

  async function removeWishlistProduct(id: string) {
    try {
      const res = await removeWishlistProductApi(id);
      if (res.status === 'success') {
        toast.success('Product removed from wishlist', { position: 'top-center', duration: 2000 });
        setWishlist(prev => prev.filter(item => item._id !== id));
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Server error, please try again later');
    }
  }

  return (
    <Trash2
      onClick={() => removeWishlistProduct(id)}
      className="cursor-pointer text-red-500"
    />
  );
}
