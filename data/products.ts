// Your catalog. Add, remove or edit products here; pages are generated from it.
//
// paymentLink: the hosted checkout page for the product (Stripe Payment Link,
// Paddle checkout link, Lemon Squeezy and so on). Replace the placeholders.
// variantLinks (optional): a different link per option, keyed "Color" or
// "Color / Size" or "Size" exactly as the shopper picks them.

export type ArtKind =
  | "vase"
  | "mug"
  | "bowl"
  | "plates"
  | "throw"
  | "pillow"
  | "candle"
  | "tote"
  | "carafe";

export type Color = { name: string; hex: string };

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  tint: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  short: string;
  description: string;
  details: string[];
  art: ArtKind;
  background: [string, string];
  colors: Color[];
  sizes?: string[];
  paymentLink: string;
  variantLinks?: Record<string, string>;
  featured?: boolean;
  badge?: string;
};

export const categories: Category[] = [
  { slug: "ceramics", name: "Ceramics", blurb: "Wheel-thrown stoneware", tint: "#e7cbb4" },
  { slug: "textiles", name: "Textiles", blurb: "Washed linen and wool", tint: "#d5d9c2" },
  { slug: "candles", name: "Candles", blurb: "Hand-poured soy wax", tint: "#efd9a7" },
  { slug: "kitchen", name: "Kitchen", blurb: "For the everyday table", tint: "#cfdbe0" },
];

export const products: Product[] = [
  {
    slug: "tidepool-vase",
    name: "Tidepool Vase",
    category: "ceramics",
    price: 68,
    short: "A round-bellied bud vase with a pooling glaze.",
    description:
      "Thrown in small runs and dipped twice, so the glaze gathers at the shoulder and breaks thin at the rim. Big enough for a few stems, small enough for a windowsill.",
    details: ["Stoneware, food safe glaze", "7 in tall, 5 in wide", "Watertight, hand wash"],
    art: "vase",
    background: ["#efe2d3", "#e2c6ad"],
    colors: [
      { name: "Kelp", hex: "#55603a" },
      { name: "Salt", hex: "#e9e3d6" },
      { name: "Ember", hex: "#b9532c" },
    ],
    paymentLink: "https://buy.stripe.com/test_tidepool_vase",
    variantLinks: {
      Ember: "https://buy.stripe.com/test_tidepool_vase_ember",
    },
    featured: true,
    badge: "Best seller",
  },
  {
    slug: "morning-mug",
    name: "Morning Mug",
    category: "ceramics",
    price: 34,
    short: "Twelve ounces, a thumb rest and a heavy base.",
    description:
      "The mug we reach for first. A wide handle with room for three fingers, an unglazed foot that won't scratch the table, and walls thick enough to keep coffee warm through the first email.",
    details: ["Stoneware, 12 fl oz", "Microwave and dishwasher safe", "Sold individually"],
    art: "mug",
    background: ["#f1e6d8", "#dfc8b1"],
    colors: [
      { name: "Oat", hex: "#d9c6a5" },
      { name: "Harbor", hex: "#3f5d6b" },
      { name: "Ember", hex: "#b9532c" },
    ],
    paymentLink: "https://buy.stripe.com/test_morning_mug",
    featured: true,
  },
  {
    slug: "low-tide-bowl",
    name: "Low Tide Serving Bowl",
    category: "ceramics",
    price: 82,
    compareAt: 96,
    short: "A wide, shallow bowl for salads and shared plates.",
    description:
      "Shallow on purpose, so everything on top stays on top. The outside is left raw to show the speckled clay, the inside is glazed smooth.",
    details: ["Stoneware, 11 in across", "Dishwasher safe", "Each bowl signed on the foot"],
    art: "bowl",
    background: ["#e9ddd0", "#cdb39a"],
    colors: [
      { name: "Salt", hex: "#e9e3d6" },
      { name: "Kelp", hex: "#55603a" },
    ],
    paymentLink: "https://buy.stripe.com/test_low_tide_bowl",
    badge: "Last batch",
  },
  {
    slug: "harbor-dinner-plates",
    name: "Harbor Dinner Plates",
    category: "kitchen",
    price: 128,
    short: "A set of four plates with a soft raised rim.",
    description:
      "Plates for every night, not just good nights. A slight lip keeps sauces in place and the satin glaze hides knife marks for years.",
    details: ["Set of 4, stoneware", "10.5 in across", "Dishwasher and oven safe"],
    art: "plates",
    background: ["#dfe6e6", "#bccbcf"],
    colors: [
      { name: "Harbor", hex: "#3f5d6b" },
      { name: "Salt", hex: "#e9e3d6" },
    ],
    sizes: ["Set of 4", "Set of 8"],
    paymentLink: "https://buy.stripe.com/test_harbor_plates",
    variantLinks: {
      "Harbor / Set of 8": "https://buy.stripe.com/test_harbor_plates_8",
      "Salt / Set of 8": "https://buy.stripe.com/test_harbor_plates_8",
    },
    featured: true,
  },
  {
    slug: "drift-carafe",
    name: "Drift Water Carafe",
    category: "kitchen",
    price: 58,
    short: "A carafe with a cup that doubles as its lid.",
    description:
      "For the bedside or the dinner table. The cup sits upside down on the neck to keep dust out overnight.",
    details: ["Stoneware, 34 fl oz", "Cup included", "Hand wash recommended"],
    art: "carafe",
    background: ["#e4e8de", "#c6cfb8"],
    colors: [
      { name: "Oat", hex: "#d9c6a5" },
      { name: "Kelp", hex: "#55603a" },
    ],
    paymentLink: "https://buy.stripe.com/test_drift_carafe",
  },
  {
    slug: "shoreline-throw",
    name: "Shoreline Throw",
    category: "textiles",
    price: 148,
    short: "A heavy linen and wool throw with a woven stripe.",
    description:
      "Woven on a narrow loom and washed twice for softness. Warm enough for an evening on the porch, light enough to leave folded at the end of the bed all summer.",
    details: ["60% linen, 40% wool", "50 x 70 in", "Machine wash cold, line dry"],
    art: "throw",
    background: ["#e6e2d2", "#cdc6ab"],
    colors: [
      { name: "Moss", hex: "#6c7748" },
      { name: "Clay", hex: "#b26a4a" },
      { name: "Fog", hex: "#a9b2b0" },
    ],
    paymentLink: "https://buy.stripe.com/test_shoreline_throw",
    featured: true,
    badge: "New",
  },
  {
    slug: "washed-linen-pillow",
    name: "Washed Linen Pillow Cover",
    category: "textiles",
    price: 42,
    short: "A relaxed cover with a hidden button closure.",
    description:
      "Stone-washed linen that looks better creased. Covers only, so you can keep the insert you already love.",
    details: ["100% European flax linen", "Hidden wooden buttons", "Insert not included"],
    art: "pillow",
    background: ["#ece3d6", "#d6c4ad"],
    colors: [
      { name: "Clay", hex: "#b26a4a" },
      { name: "Moss", hex: "#6c7748" },
      { name: "Oat", hex: "#d9c6a5" },
    ],
    sizes: ["18 x 18 in", "20 x 20 in", "14 x 22 in"],
    paymentLink: "https://buy.stripe.com/test_linen_pillow",
  },
  {
    slug: "market-tote",
    name: "Market Tote",
    category: "textiles",
    price: 38,
    short: "A sturdy canvas tote with long handles.",
    description:
      "Heavy canvas with an inside pocket for keys. It carries a week of groceries and folds flat into a drawer.",
    details: ["Organic cotton canvas", "15 x 17 in, 26 in handles", "Machine washable"],
    art: "tote",
    background: ["#efe7d4", "#dccca5"],
    colors: [
      { name: "Natural", hex: "#e6dcc3" },
      { name: "Harbor", hex: "#3f5d6b" },
    ],
    paymentLink: "https://buy.stripe.com/test_market_tote",
  },
  {
    slug: "cedar-and-smoke-candle",
    name: "Cedar and Smoke Candle",
    category: "candles",
    price: 36,
    short: "Cedar, black tea and a little woodsmoke.",
    description:
      "Poured into one of our own stoneware cups, which makes a fine pencil pot once the candle is gone. About 50 hours of slow, even burn.",
    details: ["Soy and coconut wax", "Cotton wick", "8 oz, about 50 hours"],
    art: "candle",
    background: ["#efe0c4", "#d7bb8c"],
    colors: [
      { name: "Ember", hex: "#b9532c" },
      { name: "Oat", hex: "#d9c6a5" },
    ],
    sizes: ["8 oz", "14 oz"],
    paymentLink: "https://buy.stripe.com/test_cedar_smoke_candle",
    variantLinks: {
      "Ember / 14 oz": "https://buy.stripe.com/test_cedar_smoke_candle_large",
      "Oat / 14 oz": "https://buy.stripe.com/test_cedar_smoke_candle_large",
    },
    featured: true,
  },
  {
    slug: "sea-fig-candle",
    name: "Sea Fig Candle",
    category: "candles",
    price: 36,
    short: "Green fig, sea salt and cut grass.",
    description:
      "Bright and a little green, like a window left open in June. Poured in the same stoneware cup as all our candles.",
    details: ["Soy and coconut wax", "Cotton wick", "8 oz, about 50 hours"],
    art: "candle",
    background: ["#e3e7d6", "#c4ccab"],
    colors: [
      { name: "Kelp", hex: "#55603a" },
      { name: "Salt", hex: "#e9e3d6" },
    ],
    paymentLink: "https://buy.stripe.com/test_sea_fig_candle",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

export function variantKey(color?: string, size?: string) {
  return [color, size].filter(Boolean).join(" / ");
}

// The hosted payment link for a chosen color and size.
export function paymentLinkFor(product: Product, color?: string, size?: string) {
  const links = product.variantLinks ?? {};
  return (
    links[variantKey(color, size)] ??
    (color ? links[color] : undefined) ??
    (size ? links[size] : undefined) ??
    product.paymentLink
  );
}
