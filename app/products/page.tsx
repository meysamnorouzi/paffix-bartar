import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "محصولات",
  description: "مشاهده و خرید انواع کفش مردانه، زنانه و ورزشی با بهترین قیمت.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; collection?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const { category } = params;

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const categoryLabels: Record<string, string> = {
    men: "مردانه",
    women: "زنانه",
    sport: "ورزشی",
  };

  const title = category
    ? `محصولات ${categoryLabels[category] ?? ""}`
    : "همه محصولات";

  return (
    <>
      <PageHeader
        title={title}
        description="مجموعه‌ای از بهترین کفش‌های برندهای معتبر جهانی با ضمانت اصالت."
        breadcrumb="خانه / محصولات"
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-3">
            <FilterLink href="/products" active={!category} label="همه" />
            <FilterLink
              href="/products?category=men"
              active={category === "men"}
              label="مردانه"
            />
            <FilterLink
              href="/products?category=women"
              active={category === "women"}
              label="زنانه"
            />
            <FilterLink
              href="/products?category=sport"
              active={category === "sport"}
              label="ورزشی"
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-gray-500">
              محصولی در این دسته‌بندی یافت نشد.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function FilterLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-5 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-accent text-white"
          : "border border-gray-border bg-white text-gray-600 hover:border-accent hover:text-accent"
      )}
    >
      {label}
    </Link>
  );
}
