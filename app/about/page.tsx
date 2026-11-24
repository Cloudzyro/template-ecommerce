import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our story",
  description: "How a secondhand pottery wheel in a flooded garage became a small home goods studio.",
  alternates: { canonical: "/about/" },
};

const timeline = [
  { year: "2019", text: "A secondhand wheel, a borrowed kiln and a garage that flooded every April." },
  { year: "2021", text: "Our first Morning Mug sells out at the Marrow Bay winter market." },
  { year: "2023", text: "We move into the old boat shed and start weaving linen with a local mill." },
  { year: "2026", text: "Four of us, two wheels, one kiln, and pieces in homes across the country." },
];

const team = [
  { name: "Wren Halloway", role: "Founder and potter", tint: "#e7cbb4" },
  { name: "Tomas Ferrante", role: "Glazes and firing", tint: "#d5d9c2" },
  { name: "Ines Okafor", role: "Textiles", tint: "#cfdbe0" },
  { name: "Juno Pak", role: "Packing and kindness", tint: "#efd9a7" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 lg:pt-16">
      <p className="eyebrow">Our story</p>
      <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">
        We make the things we wanted to <em className="text-accent">keep</em>.
      </h1>
      <div className="mt-10 grid gap-10 text-lg leading-relaxed text-muted md:grid-cols-2">
        <p>
          Slowfold began as a weekend habit: making mugs that felt right in the hand, because the ones
          in the shops didn't. Friends asked for them, then friends of friends, and the garage got
          crowded.
        </p>
        <p>
          We still work the same way. Each piece is thrown, trimmed, glazed and packed by someone
          whose name you'll find below. Nothing is rushed to meet a sale, and nothing leaves the
          studio unless we'd use it ourselves.
        </p>
      </div>

      <section aria-labelledby="timeline-title" className="mt-20">
        <h2 id="timeline-title" className="font-display text-3xl sm:text-4xl">
          How we got here
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="rounded-[1.5rem] border border-line p-6">
              <p className="font-display text-4xl text-accent">{t.year}</p>
              <p className="mt-3 text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="team-title" className="mt-20">
        <h2 id="team-title" className="font-display text-3xl sm:text-4xl">
          The people in the shed
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li key={m.name}>
              <div
                className="grid aspect-square place-items-center rounded-t-full rounded-b-[1.75rem] font-display text-6xl text-[#221d17]"
                style={{ background: m.tint }}
                role="img"
                aria-label={`Monogram for ${m.name}`}
              >
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <p className="mt-4 text-lg font-semibold">{m.name}</p>
              <p className="text-muted">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-[2rem] bg-sand px-8 py-10">
        <p className="font-display text-2xl sm:text-3xl">Come and see the kiln in person.</p>
        <Link href="/contact/" className="btn-primary">
          Book a studio visit
        </Link>
      </div>
    </div>
  );
}
