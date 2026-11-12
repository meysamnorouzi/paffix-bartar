import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug, type Product } from "@/lib/data";
import ProductCarousel from "./ProductCarousel";

const showcaseSlugs = [
  "adidas",
  "nike-dragon",
  "nike-v2k",
  "nike-v5k",
  "nike-sb",
  "jordan-halloween",
  "eco",
  "nike-vans",
];

const showcase = showcaseSlugs
  .map((slug) => getProductBySlug(slug))
  .filter((p): p is Product => Boolean(p));

export default function ProductShowcase() {
  return (
    <section className="bg-white pb-[61px] pt-[74px]">
      <div className="mx-auto max-w-[1296px] px-5 lg:px-0">
        <ProductCarousel title="محصولات" products={showcase} gap={24.5} />
        <div className="mt-[60px] flex justify-center">
          <Link
            href="/products"
            className="flex h-[52px] w-[244px] items-center justify-center gap-4 rounded-full border border-[#eaf1fa] text-[17.5px] font-light text-[#3d77c2] transition hover:border-[#3d77c2]"
          >
            مشاهده همه
            <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
