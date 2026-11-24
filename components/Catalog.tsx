"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { categories, products } from "@/data/products";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

// Reads ?category= and ?q= from the address, so menu links land filtered.
// The shop page renders <Catalog /> as the Suspense fallback, so the full
// product list is still in the static HTML for search engines.
export function CatalogFromUrl() {
  const params = useSearchParams();
  return <Catalog urlCategory={params.get("category") ?? "all"} urlQuery={params.get("q") ?? ""} />;
}

export default function Catalog({
  urlCategory = "all",
  urlQuery = "",
}: {
  urlCategory?: string;
  urlQuery?: string;
}) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");

  useEffect(() => {
    setCategory(categories.some((x) => x.slug === urlCategory) ? urlCategory : "all");
  }, [urlCategory]);
  useEffect(() => {
    if (urlQuery) setQuery(urlQuery);
  }, [urlQuery]);

  function chooseCategory(slug: string) {
    setCategory(slug);
    const url = new URL(window.location.href);
    if (slug === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", slug);
    window.history.replaceState(null, "", url);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      return [p.name, p.short, p.description, p.category, ...p.colors.map((c) => c.name)]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return sorted;
  }, [category, query, sort]);

  const tabs = [{ slug: "all", name: "Everything" }, ...categories];

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Category" className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              type="button"
              aria-pressed={category === t.slug}
              onClick={() => chooseCategory(t.slug)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === t.slug
                  ? "border-ink bg-ink text-paper"
                  : "border-line hover:border-ink"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search mugs, linen, fig..."
              className="field w-full pl-10 sm:w-64"
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-muted">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="field py-2"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted" aria-live="polite">
        {results.length} {results.length === 1 ? "piece" : "pieces"}
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-[1.75rem] border border-dashed border-line px-6 py-16 text-center">
          <p className="font-display text-2xl">Nothing matches that just yet.</p>
          <button
            type="button"
            className="mt-4 text-accent underline underline-offset-4"
            onClick={() => {
              setQuery("");
              chooseCategory("all");
            }}
          >
            Clear the filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
