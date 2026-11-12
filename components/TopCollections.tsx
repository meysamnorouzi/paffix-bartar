import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  { src: "/collections/adidas.webp", name: "آدیداس", href: "/products/adidas" },
  { src: "/collections/nike-v5k.webp", name: "نایک V5K", href: "/products/nike-v5k" },
];

export default function TopCollections() {
  return (
    <section className="bg-white pb-[112px] pt-[71px]">
      <div className="mx-auto max-w-[1296px] px-5 lg:px-0">
        <div className="mb-[17px] flex items-center justify-between">
          <h2 className="text-[32px] font-medium leading-[48px] text-[#111]">کالکشن های برتر</h2>
          <div className="flex items-center gap-[28px] pl-3 text-[#111]">
            <ArrowRight aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
            <ArrowLeft aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative h-[420px] overflow-hidden rounded-[16px] md:h-[598px]"
            >
              <Image
                src={item.src}
                alt={item.name}
                fill
                sizes="(min-width: 768px) 636px, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-[18px] right-[28px] text-[20px] leading-[32px] text-white">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
