// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative rounded-lg overflow-hidden bg-white shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Store-Up — Your local Syrian marketplace</h1>
            <p className="mt-4 text-zinc-600 max-w-xl">
              Discover local sellers, compare prices, and order with cash-on-delivery or local payment options.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700">Shop Now</Link>
              <Link href="/about" className="rounded-full border px-6 py-3 text-zinc-800 hover:bg-zinc-100">Learn More</Link>
            </div>
          </div>

          <div className="w-full">
            <Image src="/hero.png" alt="Store hero" width={900} height={600} className="w-full h-auto rounded" />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/products/1" className="block border rounded-lg p-4 hover:shadow-lg">
            <Image src="/product1.jpg" alt="p1" width={600} height={400} className="rounded h-48 w-full object-cover" />
            <h3 className="mt-3 font-semibold">Featured Product 1</h3>
            <p className="text-zinc-700">$10.00</p>
          </Link>

          <Link href="/products/2" className="block border rounded-lg p-4 hover:shadow-lg">
            <Image src="/product2.jpg" alt="p2" width={600} height={400} className="rounded h-48 w-full object-cover" />
            <h3 className="mt-3 font-semibold">Featured Product 2</h3>
            <p className="text-zinc-700">$20.00</p>
          </Link>

          <Link href="/products/3" className="block border rounded-lg p-4 hover:shadow-lg">
            <Image src="/product3.jpg" alt="p3" width={600} height={400} className="rounded h-48 w-full object-cover" />
            <h3 className="mt-3 font-semibold">Featured Product 3</h3>
            <p className="text-zinc-700">$15.00</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

