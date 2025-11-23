// app/auth/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  function submit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: store user in localStorage or integrate NextAuth
    localStorage.setItem('user', JSON.stringify({ email }));
    router.push('/');
  }
  return (
    <main className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </main>
  );
}

