import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CircleArrowLeft,
  ListFilter,
} from "lucide-react";
import ManufacturingSection from "@/components/ManufacturingSection";
import ContactSection from "@/components/ContactSection";
import { products as catalog } from "@/lib/data";

export const metadata: Metadata = {
  title: "محصولات",
  description: "محصولات پافیکس برتر",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const products = category
    ? catalog.filter((item) => item.category === category)
    : catalog;

  return (
    <>
      <section className="mx-auto max-w-[1296px] px-5 pb-[142px] pt-[105px] lg:px-0">
        <div className="flex items-center gap-3 text-[12px] text-[#aaa]">
          <Link href="/">خانه</Link>
          <ChevronLeft className="h-3 w-3" />
          <span className="border-b border-[#2f72b9] pb-1 text-[#2f72b9]">
            محصولات
          </span>
        </div>

        <div className="relative mt-[24px] overflow-hidden rounded-[15px]">
          <Image
            src="/plp-banner.png"
            alt="اصالت کالای تضمین‌شده"
            width={1296}
            height={329}
            priority
            className="h-auto w-full"
          />
          <div className="absolute inset-y-0 left-[8%] flex flex-col items-center justify-center text-white sm:left-[13%]">
            <h1 className="text-[18px] font-bold sm:text-[27px]">
              اصالت کالای تضمین‌شده
            </h1>
            <Link
              href="#catalog"
              className="mt-5 flex items-center gap-3 text-[12px] text-white/80 sm:text-[17px]"
            >
              <CircleArrowLeft className="h-5 w-5 fill-white text-[#2f72b9] sm:h-7 sm:w-7" />
              از انتخاب تا تحویل
            </Link>
          </div>
        </div>

        <div
          id="catalog"
          dir="ltr"
          className="mt-[42px] flex flex-wrap items-center justify-between gap-6"
        >
          <button className="flex h-[55px] items-center gap-4 rounded-full border border-[#edf0f4] px-7 text-[15px] text-[#8a8a8a] shadow-[0_2px_10px_rgba(0,0,0,.025)]">
            <ListFilter className="h-5 w-5" />
            مرتب سازی
          </button>
          <div dir="rtl" className="flex flex-wrap items-center gap-[14px]">
            <Filter href="/products" active={!category}>
              همه
            </Filter>
            <Filter href="/products?category=women" active={category === "women"}>
              زنانه
            </Filter>
            <Filter href="/products?category=men" active={category === "men"}>
              مردانه
            </Filter>
            <Filter
              href="/products?category=sport"
              active={category === "sport"}
            >
              ست مردانه و زنانه
            </Filter>
          </div>
        </div>

        <div className="mt-[43px] grid grid-cols-2 gap-x-[24px] gap-y-[51px] md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.shortName}
              image={product.image}
              tag={product.tag}
              colors={product.colors}
              extraColors={product.extraColors}
              slug={product.slug}
            />
          ))}
        </div>

        <nav
          aria-label="صفحه‌بندی"
          dir="ltr"
          className="mt-[75px] flex items-center justify-center gap-4 text-[12px] text-[#999]"
        >
          <ChevronLeft className="h-3 w-3" />
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2f72b9] text-white">
            ۱
          </span>
          <span>۲</span>
          <span>۳</span>
          <span>۴</span>
          <ChevronRight className="h-3 w-3" />
        </nav>
      </section>
      <ManufacturingSection />
      <ContactSection />
    </>
  );
}

function Filter({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`grid h-[55px] place-items-center rounded-full border px-7 text-[15px] transition ${
        active
          ? "border-[#2f72b9] bg-[#eef5fc] text-[#2f72b9]"
          : "border-[#edf0f4] text-[#999] hover:border-[#2f72b9]"
      }`}
    >
      {children}
    </Link>
  );
}

function ProductCard({
  name,
  image,
  tag,
  colors,
  extraColors,
  slug,
}: {
  name: string;
  image: string;
  tag: string;
  colors: string[];
  extraColors: string;
  slug: string;
}) {
  return (
    <article className="min-w-0 text-right">
      <Link
        href={`/products/${slug}`}
        className="block overflow-hidden rounded-[14px]"
      >
        <Image
          src={image}
          alt={name}
          width={307}
          height={335}
          className="h-auto w-full transition duration-500 hover:scale-[1.025]"
        />
      </Link>
      <h2 className="mt-[13px] text-[15px] font-medium text-[#242424]">{name}</h2>
      <div className="mt-[13px] flex items-center justify-between">
        <div className="flex items-center">
          <span className="ml-1 text-[11px] text-[#aaa]">{extraColors}</span>
          {colors.map((c) => (
            <i
              key={c}
              style={{ backgroundColor: c }}
              className="-mr-1 h-5 w-5 rounded-full border-2 border-white shadow-sm"
            />
          ))}
        </div>
        <span className="rounded-full bg-[#f1f6fc] px-4 py-[7px] text-[10px] text-[#7894b5]">
          {tag}
        </span>
      </div>
      <Link
        href={`/products/${slug}`}
        className="mt-[15px] flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#e5e8eb] text-[11px] text-[#999] shadow-[0_2px_8px_rgba(0,0,0,.025)]"
      >
        اطلاعات بیشتر <ArrowLeft className="h-3 w-3" />
      </Link>
    </article>
  );
}
