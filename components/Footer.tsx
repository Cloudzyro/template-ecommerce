import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">
            {site.name}
            <span className="text-accent-soft">.</span>
          </p>
          <p className="mt-4 max-w-sm text-paper/75">{site.footer.blurb}</p>
          <p className="mt-4 text-sm text-paper/60">{site.footer.address}</p>
          <a href={`mailto:${site.email}`} className="mt-1 inline-block text-sm underline underline-offset-4">
            {site.email}
          </a>
        </div>
        {site.footer.columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">{col.title}</h2>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-paper/60 sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {site.footer.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-paper" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
