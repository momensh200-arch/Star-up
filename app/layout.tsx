import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';


export const metadata = {
title: 'Store-Up',
description: 'E-commerce platform for Syrian users',
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
<header className="border-b bg-white dark:bg-black/[.6] sticky top-0 z-40">
<div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
<a href="/" className="flex items-center gap-3">
<Image src="/logo.png" alt="Store-Up" width={140} height={40} priority />
</a>
<nav className="flex gap-4 items-center">
<a href="/products" className="text-sm font-medium hover:underline">Products</a>
<a href="/about" className="text-sm font-medium hover:underline">About</a>
<a href="/cart" className="text-sm font-medium hover:underline">Cart</a>
</nav>
</div>
</header>


<main className="mx-auto max-w-6xl px-6 py-10">{children}</main>


<footer className="border-t mt-20 bg-white dark:bg-black p-6">
<div className="mx-auto max-w-6xl text-center text-sm text-zinc-600 dark:text-zinc-400">
© {new Date().getFullYear()} Store-Up — Built for Syria. All rights reserved.
</div>
</footer>
</body>
</html>
);
}