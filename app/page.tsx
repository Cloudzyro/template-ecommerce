import Link from "next/link";
import ProductArt from "@/components/ProductArt";
import ProductCard from "@/components/ProductCard";
import { categories, getProduct, products } from "@/data/products";
import { site } from "@/data/site";

const values = [
  {
    title: "Small batches",
    text: "We make around forty pieces a week. When a glaze runs out, it's gone until the next firing.",
  },
  {
    title: "Honest materials",
    text: "Speckled stoneware, flax linen, soy wax. Nothing plated, nothing coated, nothing to peel.",
  },
  {
    title: "Made to be used",
    text: "Everything goes in the dishwasher or the washing machine. Treat it like you'll keep it.",
  },
];

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const vase = getProduct("tidepool-vase")!;
  const throwBlanket = getProduct("shoreline-throw")!;
  const candle = getProduct("cedar-and-smoke-candle")!;

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
        <div>
          <p className="eyebrow">New this season: the Shoreline collection</p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-medium leading-[0.98] tracking-tight">
            Objects made slowly, for rooms that are lived in
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{site.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/shop/" className="btn-primary">
              Shop everything
            </Link>
            <Link href="/about/" className="btn-secondary">
              Visit the studio
            </Link>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-4 sm:gap-5" aria-label="Featured pieces">
          <Link
            href={`/product/${vase.slug}/`}
            className="row-span-2 overflow-hidden rounded-t-full rounded-b-3xl bg-sand"
          >
            <ProductArt
              kind={vase.art}
              color={vase.colors[0].hex}
              background={vase.background}
              id="hero-vase"
              label={`${vase.name} in ${vase.colors[0].name}`}
              className="h-full min-h-[22rem] w-full"
            />
          </Link>
          <Link href={`/product/${throwBlanket.slug}/`} className="overflow-hidden rounded-3xl bg-sand">
            <ProductArt
              kind={throwBlanket.art}
              color={throwBlanket.colors[1].hex}
              background={throwBlanket.background}
              id="hero-throw"
              label={`${throwBlanket.name} in ${throwBlanket.colors[1].name}`}
              className="aspect-square w-full"
            />
          </Link>
          <Link href={`/product/${candle.slug}/`} className="overflow-hidden rounded-3xl bg-sand">
            <ProductArt
              kind={candle.art}
              color={candle.colors[0].hex}
              background={candle.background}
              id="hero-candle"
              label={`${candle.name} in ${candle.colors[0].name}`}
              className="aspect-square w-full"
            />
          </Link>
        </div>
      </section>

      <section aria-labelledby="categories-title" className="border-y border-line bg-sand/50">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <h2 id="categories-title" className="sr-only">
            Shop by category
          </h2>
          <ul className="grid grid-cols-2 gap-x-6 md:grid-cols-4">
            {categories.map((c) => (
              <li key={c.slug} className="border-t border-ink/15">
                <Link
                  href={`/shop/?category=${c.slug}`}
                  className="group flex items-center gap-3 py-5 transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-ink/15"
                    style={{ background: c.tint }}
                  />
                  <span className="min-w-0">
                    <span className="block font-display text-2xl underline-offset-4 group-hover:underline sm:text-3xl">{c.name}</span>
                    <span className="mt-1 block text-sm text-muted">{c.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="featured-title" className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Fresh from the kiln</p>
            <h2 id="featured-title" className="mt-3 font-display text-4xl sm:text-5xl">
              The pieces people come back for
            </h2>
          </div>
          <Link href="/shop/" className="nav-link text-sm font-medium">
            See all {products.length} pieces
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="values-title" className="mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl bg-ink px-6 py-14 text-paper sm:px-12 lg:py-20">
          <h2 id="values-title" className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Fewer things, made better, kept longer
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-paper/20 pt-6">
                <p className="font-display text-5xl text-accent-soft">0{i + 1}</p>
                <h3 className="mt-4 text-xl font-medium">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="studio-title" className="mx-auto mt-24 grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-sand">
          <svg viewBox="0 0 600 460" className="h-full w-full" role="img" aria-label="Illustration of shelves of drying pots in the studio">
            <defs>
              <linearGradient id="studio-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e9d8c4" />
                <stop offset="1" stopColor="#d4b797" />
              </linearGradient>
            </defs>
            <rect width="600" height="460" fill="url(#studio-bg)" />
            {[150, 290, 420].map((y, row) => (
              <g key={y}>
                <rect x="40" y={y} width="520" height="10" rx="3" fill="#8a6a4b" />
                {[0, 1, 2, 3, 4].map((i) => {
                  const x = 70 + i * 100 + (row % 2) * 30;
                  const h = 40 + ((i + row) % 3) * 18;
                  const colors = ["#b9532c", "#55603a", "#e9e3d6", "#3f5d6b", "#d9c6a5"];
                  return (
                    <path
                      key={i}
                      d={`M${x} ${y} C${x - 6} ${y - h * 0.6} ${x + 10} ${y - h} ${x + 26} ${y - h} C${x + 42} ${y - h} ${x + 58} ${y - h * 0.6} ${x + 52} ${y} Z`}
                      fill={colors[(i + row * 2) % 5]}
                    />
                  );
                })}
              </g>
            ))}
          </svg>
        </div>
        <div>
          <p className="eyebrow">From the studio</p>
          <h2 id="studio-title" className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Two wheels, one kiln and a lot of patience
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Slowfold started with a secondhand wheel and a garage that flooded every spring. Today
            we're a team of four, still trimming every foot by hand and still testing every glaze on
            our own breakfast table first.
          </p>
          <Link href="/about/" className="btn-secondary mt-8">
            Read our story
          </Link>
        </div>
      </section>
    </>
  );
}
