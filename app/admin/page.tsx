// app/admin/page.tsx
export default function Admin() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded">Orders — (0)</div>
        <div className="p-4 border rounded">Products — (6)</div>
        <div className="p-4 border rounded">Stores — (0)</div>
      </div>
      <div className="mt-6">
        <p className="text-zinc-600">This is a placeholder. Integrate real admin features in backend later.</p>
      </div>
    </main>
  );
}

