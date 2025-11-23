// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-white dark:bg-black p-6">
      <div className="mx-auto max-w-6xl text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Store-Up — Built for Syria. All rights reserved.
      </div>
    </footer>
  );
}

