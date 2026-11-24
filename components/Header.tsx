"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { site } from "@/data/site";

export default function Header() {
  const { count, open } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 sm:px-8">
        <button
          type="button"
          className="-ml-2 rounded-full p-2 hover:bg-sand md:hidden"
          aria-expanded={menu}
          aria-controls="mobile-nav"
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((m) => !m)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {menu ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
          {site.name}
          <span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="ml-8 hidden md:block">
          <ul className="flex gap-7 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={open}
          className="ml-auto flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-ink"
          aria-label={`Open bag, ${count} ${count === 1 ? "item" : "items"}`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 8h14l-1.2 11.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8z" />
            <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
          </svg>
          <span>Bag</span>
          <span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-xs text-paper tabular-nums">
            {count}
          </span>
        </button>
      </div>
      {menu && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 font-display text-xl"
                  onClick={() => setMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
