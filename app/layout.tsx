// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Store-Up',
  description: 'E-commerce platform for Syrian users',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
