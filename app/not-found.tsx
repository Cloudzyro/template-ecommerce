import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 font-display text-5xl sm:text-6xl">This shelf is empty.</h1>
      <p className="mt-5 text-lg text-muted">The page you were after has moved or never existed.</p>
      <Link href="/shop/" className="btn-primary mt-8">
        Back to the shop
      </Link>
    </div>
  );
}
