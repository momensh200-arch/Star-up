// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-black border-b">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Store-Up" width={140} height={40} priority />
        </Link>

        <nav className="flex gap-4 items-center">
          <Link href="/products" className="text-sm font-medium hover:underline">Products</Link>
          <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
          <Link href="/cart" className="text-sm font-medium hover:underline">Cart</Link>
          <Link href="/auth/login" className="text-sm font-medium hover:underline">Login</Link>
        </nav>
      </div>
    </header>
  );
}

