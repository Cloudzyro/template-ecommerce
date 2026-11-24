import Link from "next/link";
import ProductArt from "./ProductArt";
import { formatPrice, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const first = product.colors[0];
  return (
    <article className="group relative rounded-2xl has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent">
      <div className="relative overflow-hidden rounded-2xl bg-sand">
        <ProductArt
          kind={product.art}
          color={first.hex}
          background={product.background}
          id={`card-${product.slug}`}
          label={`${product.name} in ${first.name}`}
          className="aspect-[4/5] w-full"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-md bg-paper/90 px-2 py-1 text-xs font-medium text-ink">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg leading-snug underline-offset-4 group-hover:underline">
            <Link href={`/product/${product.slug}/`} className="after:absolute after:inset-0 focus-visible:outline-none">
              {product.name}
            </Link>
          </h3>
          <p className="mt-0.5 text-sm text-muted">{product.short}</p>
        </div>
        <p className="shrink-0 tabular-nums">
          {product.compareAt && (
            <span className="mr-2 text-sm text-muted line-through">{formatPrice(product.compareAt)}</span>
          )}
          {formatPrice(product.price)}
        </p>
      </div>
      <div className="mt-3 flex gap-1.5" aria-label={`${product.colors.length} colors`}>
        {product.colors.map((c) => (
          <span
            key={c.name}
            title={c.name}
            className="h-3.5 w-3.5 rounded-full border border-ink/15"
            style={{ background: c.hex }}
          />
        ))}
      </div>
    </article>
  );
}
