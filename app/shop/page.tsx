import type { Metadata } from "next";
import { Suspense } from "react";
import Catalog, { CatalogFromUrl } from "@/components/Catalog";

export const metadata: Metadata = {
  title: "Shop",
  description: "Stoneware, washed linen, hand-poured candles and everyday kitchen goods, made in small batches.",
  alternates: { canonical: "/shop/" },
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 lg:pt-16">
      <p className="eyebrow">The shop</p>
      <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">Everything we make</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Small batches, shipped from the studio. When a color sells out, it comes back with the next
        firing.
      </p>
      <div className="mt-10">
        <Suspense fallback={<Catalog />}>
          <CatalogFromUrl />
        </Suspense>
      </div>
    </div>
  );
}
