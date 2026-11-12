"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCardImage, getProductBySlug, type Product } from "@/lib/data";
import { toPersianDigits } from "@/lib/utils";

const PAGE_SIZE = 12;

/** Catalog order as presented in the design. */
const catalogOrder = [
  "nike-v2k",
  "nike-v5k",
  "nike-sb",
  "alo",
  "adidas",
  "jordan-halloween",
  "fashion-n8",
  "eco",
  "nike-dragon-high",
  "nike-vans",
  "nike-dragon",
  "calvin-klein",
  "nike-sb-high",
];

const catalog = catalogOrder
  .map((slug) => getProductBySlug(slug))
  .filter((p): p is Product => Boolean(p));

const filters = [
  { label: "همه", category: undefined },
  { label: "زنانه", category: "women" },
  { label: "مردانه", category: "men" },
  { label: "ست مردانه و زنانه", category: "sport" },
] as const;

export function buildHref(category?: string, page?: number) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page && page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/products/?${query}` : "/products/";
}

/** Reads filters from the URL; the static HTML is prerendered with the defaults. */
export function CatalogFromUrl() {
  const params = useSearchParams();
  return (
    <ProductCatalog
      category={params.get("category") ?? undefined}
      page={params.get("page") ?? undefined}
    />
  );
}

export default function ProductCatalog({ category, page }: { category?: string; page?: string }) {
  const filtered = category ? catalog.filter((item) => item.category === category) : catalog;
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(pageCount, Math.max(1, Number(page) || 1));
  const items = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <>
    <div
      id="catalog"
      className="mt-8 flex scroll-mt-[110px] flex-col gap-3 sm:mt-[43px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4"
    >
      <div className="-mx-5 flex items-center gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:gap-[15px] sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        {filters.map((filter) => {
          const active = filter.category === category || (!filter.category && !category);
          return (
            <Link
              key={filter.label}
              href={buildHref(filter.category)}
              aria-current={active ? "page" : undefined}
              className={`flex h-[40px] shrink-0 items-center whitespace-nowrap rounded-full border px-[16px] text-[14px] transition sm:h-[44px] sm:px-[22px] sm:text-[16px] ${
                active
                  ? "border-[#3d77c2] bg-[#eaf1fa] text-[#25282d]"
                  : "border-[#eef0f3] text-[#a3a8b1] hover:border-[#3d77c2]"
              }`}
            >
              {filter.label}
            </Link>
          );
        })}
      </div>
    </div>

    <div className="mt-[24.5px] grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-[24.5px] sm:gap-y-[50.5px] md:grid-cols-3 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>

    {pageCount > 1 ? (
      <Pagination current={current} pageCount={pageCount} category={category} />
    ) : null}
    </>
  );
}

function Pagination({
  current,
  pageCount,
  category,
}: {
  current: number;
  pageCount: number;
  category?: string;
}) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const arrow = "grid h-6 w-6 place-items-center text-[#6a727f] transition hover:text-[#3d77c2]";
  return (
    <nav aria-label="صفحه‌بندی" className="mt-[63.5px] flex items-center justify-center gap-[17px] lg:pr-4">
      {current > 1 ? (
        <Link href={buildHref(category, current - 1)} aria-label="صفحه قبل" className={arrow}>
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      ) : (
        <span aria-hidden="true" className={`${arrow} opacity-40`}>
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </span>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(category, page)}
          aria-current={page === current ? "page" : undefined}
          className={`grid h-6 w-6 place-items-center rounded-full text-[12px] transition ${
            page === current ? "bg-[#3d77c2] text-white" : "text-[#6a727f] hover:text-[#3d77c2]"
          }`}
        >
          {toPersianDigits(page)}
        </Link>
      ))}
      {current < pageCount ? (
        <Link href={buildHref(category, current + 1)} aria-label="صفحه بعد" className={arrow}>
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </Link>
      ) : (
        <span aria-hidden="true" className={`${arrow} opacity-40`}>
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </span>
      )}
    </nav>
  );
}

function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  return (
    <article className="min-w-0 overflow-hidden rounded-[16px] border border-[#f0f0f2] bg-white pb-[9px] text-right">
      <Link href={href} className="relative block aspect-[305/334.6] overflow-hidden bg-[#ececec]">
        <Image
          src={getCardImage(product)}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 305px, (min-width: 768px) 33vw, 50vw"
          quality={90}
          className="object-cover transition duration-500 hover:scale-[1.03]"
        />
      </Link>
      <div className="px-[10px]">
        <h2 className="mt-[12px] truncate text-[15px] leading-[24px] text-[#111] sm:text-[18px] sm:leading-[28px]">
          <Link href={href}>{product.shortName}</Link>
        </h2>
        <div className="mt-[12px] flex items-center justify-between gap-1">
          <span className="truncate rounded-full bg-[#eaf1fa] px-[10px] text-[11.5px] font-light leading-[26px] text-[#25282d] sm:px-[14px] sm:text-[14px] sm:leading-[31px]">
            {product.tag}
          </span>
          <div dir="ltr" className="flex shrink-0 items-center gap-[4px]">
            <span className="text-[12px] font-light text-[#25282d] sm:text-[14px]">{product.extraColors}</span>
            <div className="flex items-center">
              {product.colors.map((c) => (
                <i
                  key={c}
                  style={{ backgroundColor: c }}
                  className="-ml-[10px] h-5 w-5 rounded-full sm:-ml-[12px] sm:h-6 sm:w-6 border-2 border-white first:ml-0"
                />
              ))}
            </div>
          </div>
        </div>
        <Link
          href={href}
          className="mt-3 flex h-[38px] sm:mt-[17.5px] sm:h-[41px] items-center justify-center gap-[8px] rounded-full border border-[#e9ebf0] text-[13px] font-light sm:gap-[12px] sm:text-[14.5px] text-[#6a727f] transition hover:border-[#3d77c2] hover:text-[#3d77c2]"
        >
          اطلاعات بیشتر
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
