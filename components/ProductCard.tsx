import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-gray-light transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
        <button
          type="button"
          aria-label="افزودن به علاقه‌مندی‌ها"
          className="absolute top-3 left-3 rounded-full bg-white/90 p-2 text-gray-400 opacity-0 shadow-sm transition-all group-hover:opacity-100 hover:text-red-500"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-medium text-navy transition-colors hover:text-accent sm:text-base">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm font-bold text-accent">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
