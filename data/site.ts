// Everything about the store itself lives here: name, menus, footer, checkout.
// Products live in data/products.ts.

export const site = {
  name: "Slowfold",
  tagline: "Objects made slowly, for rooms that are lived in.",
  description:
    "Slowfold is a small home goods studio making stoneware, linen and hand-poured candles in short, careful batches.",
  // Your live address, used for the sitemap and social previews.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  email: "hello@slowfold.example",
  currency: "USD",
  locale: "en-US",

  announcement: "Free shipping on orders over $120. Every piece ships in recycled paper.",

  nav: [
    { label: "Shop", href: "/shop/" },
    { label: "Ceramics", href: "/shop/?category=ceramics" },
    { label: "Textiles", href: "/shop/?category=textiles" },
    { label: "Our story", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],

  // Checkout. Payments happen on hosted payment pages (Stripe Payment Links,
  // Paddle checkout links, Lemon Squeezy and similar), so no server is needed.
  // When the bag holds items with different payment links, shoppers are sent
  // to storeCheckoutUrl if you set one (for example a Stripe link with several
  // products), otherwise the bag lists a Pay button for each item.
  storeCheckoutUrl: "",

  footer: {
    blurb:
      "Made in a converted boat shed on the edge of Marrow Bay. Studio visits by appointment, Thursday to Saturday.",
    address: "14 Tidewater Lane, Marrow Bay, ME 04011",
    columns: [
      {
        title: "Shop",
        links: [
          { label: "All goods", href: "/shop/" },
          { label: "Ceramics", href: "/shop/?category=ceramics" },
          { label: "Textiles", href: "/shop/?category=textiles" },
          { label: "Candles", href: "/shop/?category=candles" },
          { label: "Kitchen", href: "/shop/?category=kitchen" },
        ],
      },
      {
        title: "Studio",
        links: [
          { label: "Our story", href: "/about/" },
          { label: "Contact", href: "/contact/" },
          { label: "Shipping and returns", href: "/contact/#faq" },
        ],
      },
    ],
    social: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Pinterest", href: "https://pinterest.com/" },
    ],
  },

  faq: [
    {
      q: "How long does shipping take?",
      a: "Most orders leave the studio within three business days and arrive in two to five days within the US. You'll get a tracking link by email.",
    },
    {
      q: "Can I return something?",
      a: "Yes. Unused pieces can be returned within 30 days for a full refund. Write to us and we'll send a prepaid label.",
    },
    {
      q: "Why does each piece look a little different?",
      a: "Everything is glazed, dyed or poured by hand, so color and texture vary slightly from batch to batch. We think that's the point.",
    },
    {
      q: "Do you take wholesale or custom orders?",
      a: "We work with a handful of shops and restaurants each season. Send us a note with what you have in mind.",
    },
  ],
};

export type Site = typeof site;
