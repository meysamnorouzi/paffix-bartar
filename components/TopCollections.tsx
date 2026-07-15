import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function TopCollections() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-navy sm:mb-10 sm:text-3xl">
          کلکسیون‌های برتر
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/products?collection=${collection.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl sm:aspect-[4/5]"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 text-white">
                <h3 className="text-lg font-bold sm:text-xl">
                  {collection.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-200">
                  از {formatPrice(collection.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
