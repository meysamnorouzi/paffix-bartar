import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

interface ProductShowcaseProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ProductShowcase({
  limit = 4,
  showViewAll = true,
}: ProductShowcaseProps) {
  const displayedProducts = products.slice(0, limit);

  return (
    <section className="bg-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">محصولات</h2>
          {showViewAll && (
            <Link
              href="/products"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              مشاهده همه
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex rounded-full border border-accent px-6 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
            >
              مشاهده همه محصولات
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
