"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/home-hero-1.png",
    alt: "کفش چرمی مشکی پافیکس برتر",
    title: "برای سال ها، نه برای یک فصل",
    subtitle: null as string | null,
    showDecor: true,
  },
  {
    image: "/home-hero-2.png",
    alt: "کفش نایک اس بی پافیکس برتر",
    title: "اصالت، امضای ما",
    subtitle: "هر محصول، بازتاب تعهد ما به کیفیت است.",
    showDecor: false,
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative h-[754px] overflow-hidden bg-[#1d1d1d]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="بنر اصلی"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="relative mx-auto h-full max-w-[1296px] px-5">
            <div className="absolute left-[6%] top-[38%] max-w-[520px] -translate-y-1/2 text-right text-white sm:left-[8%] sm:top-[247px] sm:translate-y-0">
              <h1 className="text-[27px] font-medium leading-[1.45] sm:text-[40px]">
                {slide.title}
              </h1>
              {slide.subtitle ? (
                <p className="mt-4 text-[14px] font-light leading-[1.9] text-white/85 sm:text-[16px]">
                  {slide.subtitle}
                </p>
              ) : null}
              <Link
                href="/products"
                className={`inline-flex h-[54px] min-w-[196px] items-center justify-center gap-2 rounded-full bg-[#2f72b9] px-8 text-[14px] transition hover:bg-[#235f9c] ${
                  slide.subtitle ? "mt-8" : "mt-[72px]"
                }`}
              >
                مشاهده محصولات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

            {slide.showDecor ? (
              <>
                <div className="absolute right-[75px] top-[258px] hidden items-end gap-4 text-white/90 lg:flex">
                  <span className="block h-[58px] w-px bg-white/70" />
                  <span className="mb-2 block h-px w-[125px] bg-white/70" />
                  <span className="text-[16px] font-light">جدیدترین محصولات</span>
                </div>
                <div className="absolute bottom-[65px] left-[378px] hidden items-end gap-4 text-white/50 lg:flex">
                  <span className="text-[13px] font-light">طراحی شده برای راحتی</span>
                  <span className="mb-2 block h-px w-[100px] bg-white/40" />
                  <span className="block h-[44px] w-px bg-white/40" />
                </div>
              </>
            ) : null}
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`اسلاید ${index + 1}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === active
                ? "w-8 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
