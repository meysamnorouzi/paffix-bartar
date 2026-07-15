import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  const topCategories = categories.filter((c) => !c.span);
  const wideCategory = categories.find((c) => c.span === "wide");

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/10]"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-4 right-4 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-navy backdrop-blur-sm">
                {category.title}
              </span>
            </Link>
          ))}
        </div>

        {wideCategory && (
          <Link
            href={wideCategory.href}
            className="group relative mt-4 block aspect-[16/7] overflow-hidden rounded-xl sm:mt-6"
          >
            <Image
              src={wideCategory.image}
              alt={wideCategory.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
            <span className="absolute bottom-6 right-6 rounded-lg bg-white/90 px-5 py-2.5 text-sm font-semibold text-navy backdrop-blur-sm sm:text-base">
              {wideCategory.title}
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
