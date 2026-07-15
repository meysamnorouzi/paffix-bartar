import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "محصول یافت نشد" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="border-b border-gray-border bg-gray-light">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-accent"
          >
            <ArrowRight className="h-4 w-4" />
            بازگشت به محصولات
          </Link>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-light">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-navy sm:text-3xl">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl font-bold text-accent">
                {formatPrice(product.price)}
              </p>
              <p className="mt-6 text-sm leading-8 text-gray-600 sm:text-base">
                {product.description}
              </p>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-navy">انتخاب سایز</p>
                <div className="flex flex-wrap gap-2">
                  {["۳۸", "۳۹", "۴۰", "۴۱", "۴۲", "۴۳"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-border text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:flex-none"
                >
                  <ShoppingCart className="h-5 w-5" />
                  افزودن به سبد خرید
                </button>
                <button
                  type="button"
                  aria-label="افزودن به علاقه‌مندی‌ها"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-border text-gray-400 transition-colors hover:border-red-300 hover:text-red-500"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-8 space-y-2 border-t border-gray-border pt-8 text-sm text-gray-600">
                <li>✓ ارسال رایگان برای سفارش‌های بالای ۲ میلیون تومان</li>
                <li>✓ ضمانت اصالت کالا</li>
                <li>✓ امکان تعویض تا ۷ روز</li>
              </ul>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 text-xl font-bold text-navy sm:text-2xl">
                محصولات مرتبط
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="group overflow-hidden rounded-xl bg-gray-light"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="25vw"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-navy">{p.name}</p>
                      <p className="mt-1 text-sm text-accent">
                        {formatPrice(p.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
