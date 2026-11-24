"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/data/products";
import { site } from "@/data/site";

export default function CartDrawer() {
  const { items, isOpen, close, subtotal, setQuantity, remove, count } = useCart();
  const panel = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    const node = panel.current;
    node?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const focusable = Array.from(
        node.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocus.current?.focus();
    };
  }, [isOpen, close]);

  const links = Array.from(new Set(items.map((i) => i.paymentLink)));
  const singleLink = links.length === 1 ? links[0] : null;
  const checkoutUrl = singleLink ?? (site.storeCheckoutUrl || null);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper text-ink transition-[transform,visibility] duration-300 ease-out ${
          isOpen ? "translate-x-0 shadow-2xl" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 id="cart-title" className="font-display text-2xl">
            Your bag <span className="text-base text-muted">({count})</span>
          </h2>
          <button
            type="button"
            onClick={close}
            data-autofocus
            className="rounded-full p-2 hover:bg-sand"
            aria-label="Close bag"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-xl">Your bag is empty</p>
            <p className="text-muted">Have a look around, there's a fresh batch of mugs this week.</p>
            <Link href="/shop/" onClick={close} className="btn-primary mt-2">
              Browse the shop
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <span
                    className="mt-1 h-12 w-12 shrink-0 rounded-xl border border-line"
                    style={{ background: item.colorHex ?? "var(--sand)" }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <Link
                        href={`/product/${item.slug}/`}
                        onClick={close}
                        className="font-medium hover:underline"
                      >
                        {item.name}
                      </Link>
                      <span className="tabular-nums">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                    <p className="text-sm text-muted">
                      {[item.color, item.size].filter(Boolean).join(", ") || "One option"}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center rounded-lg border border-line">
                        <button
                          type="button"
                          className="h-8 w-8 rounded-md hover:bg-sand"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          aria-label={`One fewer ${item.name}`}
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-sm tabular-nums" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="h-8 w-8 rounded-md hover:bg-sand"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          aria-label={`One more ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.key)}
                        className="text-sm text-muted underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                      {!checkoutUrl && (
                        <a
                          href={item.paymentLink}
                          className="ml-auto rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-white hover:brightness-110"
                        >
                          Pay for this
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line bg-sand/60 px-6 py-5">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span className="font-medium tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-sm text-muted">Shipping and taxes are calculated at checkout.</p>
              {checkoutUrl ? (
                <a href={checkoutUrl} className="btn-primary mt-4 w-full justify-center">
                  Check out securely
                </a>
              ) : (
                <p className="mt-4 rounded-xl border border-line bg-paper px-4 py-3 text-sm">
                  These items check out separately. Use the Pay button on each one.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Payment happens on a secure hosted checkout page. You can confirm quantities and your
                shipping address there.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
