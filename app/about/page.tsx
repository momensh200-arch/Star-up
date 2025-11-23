// app/about/page.tsx
export default function About() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">About Store-Up</h1>
      <p className="text-zinc-700">
        Store-Up is a local e-commerce platform built to support Syrian merchants and buyers.
        Our mission is to make buying and selling online easy, secure, and accessible.
      </p>

      <section className="bg-white border p-6 rounded">
        <h2 className="text-xl font-semibold">Why choose us?</h2>
        <ul className="mt-3 list-disc ml-6 text-zinc-700">
          <li>Local sellers and delivery options</li>
          <li>Cash on Delivery support</li>
          <li>User-friendly store creation for merchants</li>
        </ul>
      </section>
    </main>
  );
}

