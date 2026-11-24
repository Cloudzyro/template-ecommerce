import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/shop/", "/about/", "/contact/"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const productPages = products.map((p) => ({
    url: `${site.url}/product/${p.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...pages, ...productPages];
}
