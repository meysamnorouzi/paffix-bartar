import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import ManufacturingSection from "@/components/ManufacturingSection";
import { ContactInfo, FaqSection } from "@/components/ContactSection";
import SocialFollow from "@/components/SocialFollow";
import ProductCatalog, { CatalogFromUrl } from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "محصولات",
  description:
    "مشاهده و خرید عمده انواع کتانی مردانه، زنانه و ست از تولیدی پافیکس برتر؛ اصالت کالای تضمین‌شده از انتخاب تا تحویل.",
  alternates: { canonical: "/products/" },
  openGraph: { title: "محصولات | پافیکس برتر", url: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1296px] px-5 pb-[63px] pt-[105px] lg:px-0">
        <nav aria-label="مسیر صفحه" className="lg:pr-[47px]">
          <ol className="flex items-center gap-[9px] text-[14.5px] font-light leading-[24px] text-[#6a727f]">
            <li>
              <Link href="/" className="transition hover:text-[#184177]">
                خانه
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronLeft className="h-4 w-4 text-[#333]" strokeWidth={2} />
            </li>
            <li>
              <span
                aria-current="page"
                className="font-medium text-[#184177] underline decoration-1 underline-offset-[7px]"
              >
                محصولات
              </span>
            </li>
          </ol>
        </nav>

        <div className="relative mt-[23px] h-[220px] overflow-hidden rounded-[16px] bg-[#16337a] md:h-auto md:aspect-[1296/357]">
          <Image
            src="/plp-banner.webp"
            alt="اصالت کالای تضمین‌شده"
            fill
            sizes="(min-width: 1296px) 1296px, 100vw"
            quality={90}
            loading="eager"
            fetchPriority="high"
            className="object-cover object-[78%_center] md:object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0b2350]/40 to-[#0b2350]/90 sm:hidden" />
          <div className="absolute inset-y-0 left-[4%] flex w-[230px] flex-col items-center justify-center text-white sm:left-[52px] sm:w-[464px] sm:justify-start sm:pt-[110px]">
            <h1 className="text-[22px] font-bold leading-[50px] sm:text-[33px]">
              اصالت کالا، تضمین‌شده
            </h1>
            <Link
              href="#catalog"
              className="mt-[4px] flex items-center gap-[10px] text-[16px] font-light leading-[38px] sm:mt-[33px] sm:text-[24px]"
            >
              از انتخاب تا تحویل!
              <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-white text-[#16337a]">
                <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
              </span>
            </Link>
          </div>
        </div>

        <Suspense fallback={<ProductCatalog />}>
          <CatalogFromUrl />
        </Suspense>
      </section>
      <ManufacturingSection />
      <ContactInfo className="pb-[80px] pt-[93px]" />
      <SocialFollow />
      <FaqSection className="pb-[69px] pt-[58px]" />
    </>
  );
}
