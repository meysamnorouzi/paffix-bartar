import type { MetadataRoute } from "next";
import { getCardImage, products } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/products/"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/about/"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/contact/"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}/`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
    images: [absoluteUrl(getCardImage(product))],
  }));

  return [...pages, ...productPages];
}
