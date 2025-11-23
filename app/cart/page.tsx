// app/cart/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Item = { id: number; name: string; price: string; qty: number; image?: string };

export default function CartPage() {
  const [cart, setCart] = useState<Item[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('cart');
    if (raw) setCart(JSON.parse(raw));
  }, []);

  function updateQty(index: number, qty: number) {
    const copy = [...cart];
    copy[index].qty = qty;
    setCart(copy);
    localStorage.setItem('cart', JSON.stringify(copy));
  }

  function removeItem(index: number) {
    const copy = [...cart];
    copy.splice(index, 1);
    setCart(copy);
    localStorage.setItem('cart', JSON.stringify(copy));
  }

  const total = cart.reduce((s, c) => s + Number(c.price) * (c.qty || 1), 0);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link href="/products" className="text-blue-600">Go shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div key={i} className="flex items-center gap-4 border p-4 rounded">
              <img src={item.image || '/product1.jpg'} alt={item.name} className="w-28 h-20 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-zinc-600">${item.price}</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" value={item.qty} min={1} onChange={(e) => updateQty(i, Number(e.target.value))} className="w-16 p-1 border rounded" />
                <button onClick={() => removeItem(i)} className="text-red-600">Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right font-semibold">Total: ${total.toFixed(2)}</div>
          <div className="flex gap-3 justify-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded">Proceed to Checkout</button>
            <Link href="/products" className="px-6 py-3 border rounded">Continue Shopping</Link>
          </div>
        </div>
      )}
    </main>
  );
}

