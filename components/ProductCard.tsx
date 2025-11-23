// components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: { id: number; name: string; price: string; image: string } }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <Image src={product.image} alt={product.name} width={600} height={400} className="rounded h-48 w-full object-cover" />
      </Link>
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-zinc-700">${product.price}</p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              const cart = JSON.parse(localStorage.getItem('cart') || '[]');
              cart.push({ ...product, qty: 1 });
              localStorage.setItem('cart', JSON.stringify(cart));
              alert('Added to cart');
            }
          }}
          className="flex-1 bg-blue-600 text-white rounded py-2"
        >
          Add to cart
        </button>
        <Link href={`/products/${product.id}`} className="flex-1 border rounded py-2 text-center">Details</Link>
      </div>
    </div>
  );
}

