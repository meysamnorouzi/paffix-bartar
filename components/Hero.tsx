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
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="relative mx-auto h-full max-w-[1440px]">
            {slide.showDecor ? (
              <>
                <div className="absolute right-[148px] top-[256px] hidden items-end gap-3 text-white lg:flex">
                  <span className="mb-[7px] block h-px w-[161px] bg-white/80" />
                  <span className="text-[16px] font-light leading-[20px]">
                    رویه تمام چرم صادراتی
                  </span>
                </div>
                <div className="absolute bottom-[108px] left-[289px] hidden items-end gap-3 text-white/90 lg:flex">
                  <span className="text-[16px] font-light leading-[23px]">
                    زیره پیو پی وی سی
                  </span>
                  <span className="mb-[9px] block h-px w-[125px] bg-white/70" />
                  <span className="block h-[41px] w-px bg-white/70" />
                </div>
              </>
            ) : null}

            <div
              className={`absolute text-right text-white ${
                slide.subtitle
                  ? "left-[132px] top-[205px] w-[536px]"
                  : "left-[179px] top-[248px] w-[529px]"
              }`}
            >
              <h1
                className={`font-medium leading-none ${
                  slide.subtitle ? "text-[40px] leading-[50px]" : "text-[40px] leading-[52px]"
                }`}
              >
                {slide.title}
              </h1>
              {slide.subtitle ? (
                <p className="mt-[26px] text-[16px] font-light leading-[40px] text-white">
                  {slide.subtitle}
                </p>
              ) : null}
              <Link
                href="/products"
                className={`inline-flex h-[56px] w-[200px] items-center justify-center gap-2 rounded-full bg-[#2f72b9] text-[14px] transition hover:bg-[#235f9c] ${
                  slide.subtitle ? "mt-[48px]" : "mt-[78px]"
                }`}
              >
                مشاهده محصولات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
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
