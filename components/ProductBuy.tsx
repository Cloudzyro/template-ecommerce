"use client";

import { useState } from "react";
import ProductArt from "./ProductArt";
import { useCart } from "./CartProvider";
import { formatPrice, paymentLinkFor, type Product } from "@/data/products";

export default function ProductBuy({ product }: { product: Product }) {
  const { add } = useCart();
  const [colorIndex, setColorIndex] = useState(0);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const color = product.colors[colorIndex];
  const link = paymentLinkFor(product, color.name, size);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
        <div className="overflow-hidden rounded-3xl bg-sand">
          <ProductArt
            kind={product.art}
            color={color.hex}
            background={product.background}
            id={`main-${product.slug}`}
            label={`${product.name} in ${color.name}`}
            className="aspect-[4/5] w-full"
          />
        </div>
        {product.colors.length > 1 && (
          <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4" aria-label="Colorways">
            {product.colors.map((c, i) => (
              <li key={c.name}>
                <button
                  type="button"
                  onClick={() => setColorIndex(i)}
                  aria-label={`Show ${c.name}`}
                  aria-current={i === colorIndex}
                  className={`block w-full overflow-hidden rounded-xl border-2 transition-[border-color,opacity] ${
                    i === colorIndex ? "border-ink" : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <ProductArt
                    kind={product.art}
                    color={c.hex}
                    background={product.background}
                    id={`thumb-${product.slug}-${i}`}
                    label=""
                    className="aspect-square w-full"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="lg:pt-6">
        {product.badge && (
          <p className="text-sm font-medium text-accent">{product.badge}</p>
        )}
        <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">{product.name}</h1>
        <p className="mt-4 text-2xl tabular-nums">
          {product.compareAt && (
            <span className="mr-3 text-lg text-muted line-through">{formatPrice(product.compareAt)}</span>
          )}
          {formatPrice(product.price)}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">{product.description}</p>

        <fieldset className="mt-8">
          <legend className="text-sm font-medium">
            Color: <span className="font-normal text-muted">{color.name}</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.colors.map((c, i) => (
              <label key={c.name} className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value={c.name}
                  checked={i === colorIndex}
                  onChange={() => setColorIndex(i)}
                  className="peer sr-only"
                />
                <span
                  className="block h-10 w-10 rounded-full border border-ink/15 ring-offset-2 ring-offset-paper peer-checked:ring-2 peer-checked:ring-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent"
                  style={{ background: c.hex }}
                />
                <span className="sr-only">{c.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {product.sizes && (
          <fieldset className="mt-6">
            <legend className="text-sm font-medium">Size</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <label key={s} className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value={s}
                    checked={s === size}
                    onChange={() => setSize(s)}
                    className="peer sr-only"
                  />
                  <span className="block rounded-lg border border-line px-4 py-2 text-sm peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                    {s}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-[10px] border border-line">
            <button
              type="button"
              className="h-12 w-12 rounded-lg text-lg hover:bg-sand"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center tabular-nums" aria-live="polite" aria-label={`Quantity ${quantity}`}>
              {quantity}
            </span>
            <button
              type="button"
              className="h-12 w-12 rounded-lg text-lg hover:bg-sand"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn-primary flex-1 justify-center"
            onClick={() =>
              add(
                {
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                  color: color.name,
                  colorHex: color.hex,
                  size,
                  paymentLink: link,
                },
                quantity,
              )
            }
          >
            Add to bag
          </button>
        </div>
        <a href={link} className="btn-secondary mt-3 w-full justify-center">
          Buy it now
        </a>

        <div className="mt-10 divide-y divide-line border-y border-line">
          <details className="group py-4" open>
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              Details
              <span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/80">
              {product.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </details>
          <details className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              Shipping and returns
              <span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 text-ink/80">
              Ships from our studio within three business days. Returns are free within 30 days.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
