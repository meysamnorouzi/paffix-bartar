import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "کالکشن زنانه", image: "/categories/women.webp", href: "/products?category=women" },
  { title: "کالکشن مردانه", image: "/categories/men.webp", href: "/products?category=men" },
];

const labelClass =
  "absolute rounded-[8px] bg-white/60 px-3 text-[18px] leading-[44px] sm:px-[15px] sm:text-[28px] sm:leading-[61px] text-[#184177] backdrop-blur-[2px]";

export default function CategoryGrid() {
  return (
    <section className="bg-white pt-[47px]">
      <div className="mx-auto max-w-[1296px] px-5 lg:px-0">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative h-[240px] overflow-hidden rounded-[16px] md:h-[328px]"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width: 768px) 636px, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className={`${labelClass} left-[22px] top-[24px]`}>{c.title}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/products"
          className="group relative mt-6 block h-[240px] overflow-hidden rounded-[16px] md:h-[325px]"
        >
          <Image
            src="/categories/unisex.webp"
            alt="کالکشن مردانه و زنانه"
            fill
            sizes="(min-width: 1296px) 1296px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className={`${labelClass} bottom-[25px] right-[26px]`}>کالکشن مردانه و زنانه</span>
        </Link>
      </div>
    </section>
  );
}
