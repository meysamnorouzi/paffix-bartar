import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

const showcase = products.slice(0, 4);

export default function ProductShowcase() {
  return (
    <section className="bg-white pb-[168px]">
      <div className="mx-auto max-w-[1296px] px-5 lg:px-0">
        <div dir="ltr" className="mb-[58px] flex items-center justify-between">
          <div className="flex gap-8 text-[22px]">
            <button type="button" aria-label="قبلی">
              ←
            </button>
            <button type="button" aria-label="بعدی">
              →
            </button>
          </div>
          <h2 dir="rtl" className="text-[28px] font-medium">
            محصولات
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {showcase.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="group"
            >
              <div className="relative h-[514px] overflow-hidden rounded-[14px] bg-[#f2f3f5]">
                <Image
                  src={item.image}
                  alt={item.shortName}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="300px"
                  quality={90}
                />
                <span className="absolute right-5 top-5 text-[14px] font-light text-[#2f72b9]">
                  {item.tag}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between px-1 text-[17px]">
                <span>{item.shortName}</span>
                <span>‹</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
