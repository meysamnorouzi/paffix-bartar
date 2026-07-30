"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";

const tabs = ["معرفی محصول", "مشخصات", "محصولات مشابه"] as const;
type Tab = (typeof tabs)[number];

interface ProductTabsProps {
  product: Product;
  related: Product[];
}

export default function ProductTabs({ product, related }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("معرفی محصول");

  return (
    <section className="mt-[105px]">
      <div
        className="flex justify-start gap-4 border-b border-[#eee] text-[13px] sm:gap-20"
        role="tablist"
        aria-label="اطلاعات محصول"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={
              activeTab === tab
                ? "border-b-4 border-[#2f72ff] px-2 pb-4 sm:px-4"
                : "px-2 pb-4 text-[#777] sm:px-4"
            }
          >
            {tab}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {activeTab === "معرفی محصول" && (
          <div className="min-h-[365px] py-[34px]">
            <h2 className="text-[13px] font-medium">معرفی محصول</h2>
            <p className="mt-7 text-[13px] leading-[2.25] text-[#666]">
              {product.description}
            </p>
          </div>
        )}
        {activeTab === "مشخصات" && (
          <div className="min-h-[365px] py-[34px]">
            <h2 className="text-[13px] font-medium">مشخصات</h2>
            <dl className="mt-6 ml-auto w-full max-w-[350px] space-y-5 text-[12px]">
              {product.specs.map((spec) => (
                <Spec key={spec.label} a={spec.label} b={spec.value} />
              ))}
            </dl>
          </div>
        )}
        {activeTab === "محصولات مشابه" && (
          <div className="grid min-h-[365px] grid-cols-2 gap-5 py-[34px] md:grid-cols-4">
            {related.map((item) => (
              <Link
                href={`/products/${item.slug}`}
                key={item.slug}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[13px] bg-[#f3f3f3]">
                  <Image
                    src={item.image}
                    alt={item.shortName}
                    width={307}
                    height={335}
                    className="h-auto w-full transition group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-[#eef5fc] px-3 py-1 text-[10px] text-[#2f72b9]">
                    {item.tag}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between px-2 text-[16px]">
                  <span>{item.shortName}</span>
                  <ChevronLeft className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Spec({ a, b }: { a: string; b: string }) {
  return (
    <div className="grid grid-cols-2">
      <dt>{a}</dt>
      <dd className="text-[#555]">{b}</dd>
    </div>
  );
}
