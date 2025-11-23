import ProductCard from '../../components/ProductCard';


const products = [
{ id: 1, name: 'Product 1', price: '10.00', image: '/product1.jpg' },
{ id: 2, name: 'Product 2', price: '20.00', image: '/product2.jpg' },
{ id: 3, name: 'Product 3', price: '15.00', image: '/product3.jpg' },
{ id: 4, name: 'Product 4', price: '25.00', image: '/product1.jpg' },
{ id: 5, name: 'Product 5', price: '8.00', image: '/product2.jpg' },
{ id: 6, name: 'Product 6', price: '30.00', image: '/product3.jpg' },
];


export default function ProductsPage() {
return (
<main>
<h1 className="text-3xl font-bold mb-6">Our Products</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{products.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>
</main>
);
}
import Image from 'next/image';


export default function ProductCard({ product }: { product: { id: number; name: string; price: string; image: string } }) {
return (
<div className="border rounded-lg p-4 hover:shadow-lg transition">
<Image src={product.image} alt={product.name} width={600} height={400} className="rounded h-48 w-full object-cover" />
<h3 className="mt-3 font-semibold">{product.name}</h3>
<p className="text-zinc-700">${product.price}</p>
<div className="mt-3 flex gap-2">
<a href="#" className="flex-1 bg-blue-600 text-white text-center rounded py-2">Add to cart</a>
<a href="#" className="flex-1 border rounded py-2 text-center">Details</a>
</div>
</div>
);
}