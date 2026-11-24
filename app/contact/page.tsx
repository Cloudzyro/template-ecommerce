import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about an order, wholesale or a studio visit? Send us a note.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 lg:pt-16">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">Say hello</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Questions about an order, a wholesale inquiry or a studio visit. We read every note and
            reply within two business days.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1 text-lg">
                <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Studio</dt>
              <dd className="mt-1 text-lg">{site.footer.address}</dd>
            </div>
            <div>
              <dt className="eyebrow">Visits</dt>
              <dd className="mt-1 text-lg">Thursday to Saturday, 10 am to 4 pm, by appointment</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-3xl border border-line p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>

      <section id="faq" aria-labelledby="faq-title" className="mt-24 scroll-mt-24">
        <h2 id="faq-title" className="font-display text-3xl sm:text-4xl">
          Good to know
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {site.faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {item.q}
                <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
