"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  alt: string;
  title: string;
  /** Lines of the subtitle; each entry renders on its own line on desktop. */
  subtitle?: string[];
  variant: "feature" | "centerLeft" | "centerRight";
};

const slides: Slide[] = [
  {
    image: "/hero/ecco.webp",
    alt: "کفش چرمی مشکی پافیکس برتر",
    title: "برای سال ها، نه برای یک فصل",
    variant: "feature",
  },
  {
    image: "/hero/nike-sb.webp",
    alt: "کفش نایک اس بی پافیکس برتر",
    title: "اصالت، امضای ما",
    subtitle: ["هر محصول، بازتاب تعهد ما به کیفیت است."],
    variant: "centerLeft",
  },
  {
    image: "/hero/alo.webp",
    alt: "کفش لژدار alo پافیکس برتر",
    title: "کیفیت، اتفاقی نیست",
    subtitle: ["هر انتخاب، نتیجه‌ی دقت در جزئیاتی‌ست که", "برای ما اهمیت دارند."],
    variant: "centerRight",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative h-[560px] overflow-hidden bg-[#2d2c2b] lg:h-[754px]"
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
            sizes="100vw"
            quality={90}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="object-cover object-[70%_center] lg:object-center"
          />

          <div className="relative mx-auto h-full max-w-[1440px]">
            {slide.variant === "feature" ? <Callouts /> : null}
            <SlideContent slide={slide} isFirst={index === 0} focusable={index === active} />
          </div>
        </div>
      ))}
    </section>
  );
}

function SlideContent({
  slide,
  isFirst,
  focusable,
}: {
  slide: Slide;
  isFirst: boolean;
  focusable: boolean;
}) {
  const Heading = isFirst ? "h1" : "h2";
  const button = (
    <Link
      href="/products"
      tabIndex={focusable ? 0 : -1}
      className="flex h-[56px] w-[188px] items-center justify-center gap-[16px] rounded-full bg-[#315f9b] text-[16px] font-light text-white transition hover:bg-[#2a5288]"
    >
      مشاهده محصول
      <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </Link>
  );

  if (slide.variant === "feature") {
    return (
      <div className="absolute inset-x-5 top-[170px] text-right text-white lg:inset-x-auto lg:left-[179px] lg:top-[246px] lg:w-[514px]">
        <Heading className="text-[30px] font-medium leading-[56px] lg:text-[42.5px]">{slide.title}</Heading>
        <div className="mt-[76px] flex justify-end">{button}</div>
      </div>
    );
  }

  const left = slide.variant === "centerLeft";
  return (
    <div
      className={`absolute inset-x-5 flex flex-col items-center text-center lg:inset-x-auto lg:w-[600px] ${
        left ? "top-[150px] text-white lg:left-[100px] lg:top-[193px]" : "top-[150px] text-[#111] lg:left-[787px] lg:top-[205px]"
      }`}
    >
      <Heading className="text-[34px] font-bold leading-[70px] lg:text-[50px]">{slide.title}</Heading>
      <p
        className={`text-[20px] font-light leading-[41px] lg:text-[32px] ${
          left ? "mt-[18px]" : "mt-[24.5px]"
        }`}
      >
        {slide.subtitle?.map((line, i) => (
          <span key={line}>
            {i > 0 ? <br className="hidden lg:block" /> : null}
            {i > 0 ? " " : null}
            {line}
          </span>
        ))}
      </p>
      <div className={left ? "mt-[50px]" : "mt-[46.5px]"}>{button}</div>
    </div>
  );
}

/** Feature annotations pointing at the shoe on the first slide. */
function Callouts() {
  return (
    <div aria-hidden="true" className="hidden text-[18px] font-light leading-[28px] text-white lg:block">
      <span className="absolute right-[149px] top-[254px]">رویه تمام چرم صادراتی</span>
      <span className="absolute left-[1286px] top-[285px] h-[6px] w-[6px] rounded-full bg-[#7d7c7a]" />
      <span className="absolute left-[1288px] top-[289px] h-[36px] w-[2px] bg-[#7d7c7a]" />
      <span className="absolute left-[1008px] top-[323px] h-[2px] w-[282px] bg-[#7d7c7a]" />

      <span className="absolute left-[297px] top-[622px]">زیره پیو پی وی سی</span>
      <span className="absolute left-[446px] top-[633px] h-[6px] w-[6px] rounded-full bg-[#7d7c7a]" />
      <span className="absolute left-[448px] top-[637px] h-[37px] w-[2px] bg-[#7d7c7a]" />
      <span className="absolute left-[448px] top-[672px] h-[2px] w-[328px] bg-[#7d7c7a]" />
    </div>
  );
}
