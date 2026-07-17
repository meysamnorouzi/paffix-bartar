"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const tabs = ["معرفی محصول", "مشخصات", "محصولات مشابه"] as const;
type Tab = (typeof tabs)[number];

const related = [
  "/plp/Rectangle 39992 (4).png",
  "/plp/Rectangle 39992 (3).png",
  "/plp/Rectangle 39992 (6).png",
  "/plp/Rectangle 39992.png",
];

export default function ProductTabs() {
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
        {activeTab === "معرفی محصول" && <Introduction />}
        {activeTab === "مشخصات" && <Specifications />}
        {activeTab === "محصولات مشابه" && <RelatedProducts />}
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <div className="min-h-[365px] py-[34px]">
      <h2 className="text-[13px] font-medium">معرفی محصول</h2>
      <p className="mt-7 text-[13px] leading-[2.25] text-[#666]">
        مدل Nike V5K انتخابی مناسب برای استایل روزمره و استفاده طولانی‌مدت است.
        رویه مش تنفس‌پذیر در کنار ساختار مقاوم، علاوه بر ایجاد ظاهری مدرن به گردش
        بهتر هوا نیز کمک می‌کند. کفی نرم و زیره با چسبندگی مناسب، راحتی و پایداری
        مطلوبی را هنگام پیاده‌روی و استفاده روزانه فراهم می‌سازد. اگر به دنبال
        کفشی با طراحی ترند، وزن مناسب و راحتی بالا هستید، این مدل می‌تواند انتخابی
        کاربردی برای استایل روزانه شما باشد.
      </p>
    </div>
  );
}

function Specifications() {
  return (
    <div className="min-h-[365px] py-[34px]">
      <h2 className="text-[13px] font-medium">مشخصات</h2>
      <dl className="mt-6 ml-auto w-full max-w-[350px] space-y-5 text-[12px]">
        <Spec a="دسته بندی" b="زنانه" />
        <Spec a="قالب" b="استاندارد" />
        <Spec a="سری" b="A جفتی" />
        <Spec a="جنس رویه" b="رویه PU رنگ شده" />
        <Spec a="ویژگی کفی" b="آنتی‌باکتریال دوختی" />
        <Spec a="جنس" b="رویه نرم جیر و پارچه پلی‌استر" />
        <Spec a="سایز" b="۳۷-۴۰" />
      </dl>
    </div>
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

function RelatedProducts() {
  return (
    <div className="grid min-h-[365px] grid-cols-2 gap-5 py-[34px] md:grid-cols-4">
      {related.map((src) => (
        <Link href="/products/adidas-sport-men" key={src} className="group">
          <div className="relative overflow-hidden rounded-[13px] bg-[#f3f3f3]">
            <Image
              src={src}
              alt="کفش نایک"
              width={307}
              height={335}
              className="h-auto w-full transition group-hover:scale-[1.02]"
            />
            <span className="absolute right-4 top-4 rounded-full bg-[#eef5fc] px-3 py-1 text-[10px] text-[#2f72b9]">
              مردانه
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between px-2 text-[16px]">
            <span>نایک V5K</span>
            <ChevronLeft className="h-4 w-4" />
          </div>
        </Link>
      ))}
    </div>
  );
}
