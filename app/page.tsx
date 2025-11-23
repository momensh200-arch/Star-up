import Image from 'next/image';


export default function Home() {
return (
<div className="min-h-[70vh] flex flex-col items-center justify-center">
<section className="w-full bg-white rounded-lg shadow p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h1 className="text-4xl font-bold">Welcome to Store-Up</h1>
<p className="mt-3 text-zinc-600">Buy and sell online in Syria — local stores, trusted sellers.</p>
<div className="mt-6 flex gap-3">
<a href="/products" className="rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">Shop Now</a>
<a href="/about" className="rounded-full border px-5 py-3 text-zinc-800 hover:bg-zinc-100">Learn More</a>
</div>
</div>


<div className="w-full md:w-1/3">
<Image src="/product1.jpg" alt="featured" width={500} height={400} className="rounded" />
</div>
</div>
</section>


<section className="w-full mt-10">
<h2 className="text-2xl font-semibold mb-4">Featured products</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{/* Example product cards that link to /products */}
<a href="/products" className="block border rounded-lg p-4 hover:shadow-lg">
<Image src="/product1.jpg" alt="p1" width={600} height={400} className="rounded h-48 w-full object-cover" />
<h3 className="mt-3 font-semibold">Featured Product 1</h3>
<p className="text-zinc-700">$10.00</p>
</a>


<a href="/products" className="block border rounded-lg p-4 hover:shadow-lg">
<Image src="/product2.jpg" alt="p2" width={600} height={400} className="rounded h-48 w-full object-cover" />
<h3 className="mt-3 font-semibold">Featured Product 2</h3>
<p className="text-zinc-700">$20.00</p>
</a>


<a href="/products" className="block border rounded-lg p-4 hover:shadow-lg">
<Image src="/product3.jpg" alt="p3" width={600} height={400} className="rounded h-48 w-full object-cover" />
<h3 className="mt-3 font-semibold">Featured Product 3</h3>
<p className="text-zinc-700">$15.00</p>
</a>
</div>
</section>
</div>
);
}