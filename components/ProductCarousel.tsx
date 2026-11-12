"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { getCardImage, type Product } from "@/lib/data";

const CARD_WIDTH = 358;

interface ProductCarouselProps {
  products: Product[];
  /** When set, a heading is rendered with the arrows beside it (home layout). */
  title?: string;
  gap?: number;
}

export default function ProductCarousel({ products, title, gap = 18 }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // In RTL the track starts at scrollLeft 0 and scrolls into negative values.
  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const offset = Math.abs(el.scrollLeft);
    setCanPrev(offset > 1);
    setCanNext(offset < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (direction: 1 | -1) =>
    trackRef.current?.scrollBy({
      left: -direction * (CARD_WIDTH + gap),
      behavior: "smooth",
    });

  return (
    <div>
      {title ? (
        <div className="mb-[19px] flex items-center justify-between">
          <h2 className="pr-[10px] text-[32px] font-medium leading-[48px] text-[#111]">{title}</h2>
          <div className="flex items-center gap-[28px] pl-3 text-[#111]">
            <button
              type="button"
              aria-label="قبلی"
              disabled={!canPrev}
              onClick={() => scroll(-1)}
              className="transition hover:text-[#1c5df7] disabled:opacity-40 disabled:hover:text-[#111]"
            >
              <ArrowRight className="h-6 w-6" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="بعدی"
              disabled={!canNext}
              onClick={() => scroll(1)}
              className="transition hover:text-[#1c5df7] disabled:opacity-40 disabled:hover:text-[#111]"
            >
              <ArrowLeft className="h-6 w-6" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      ) : null}

      <div className="relative">
        <div
          ref={trackRef}
          onScroll={update}
          style={{ gap }}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="group w-[min(358px,80vw)] shrink-0 snap-start"
            >
              <div className="relative aspect-[358/510] overflow-hidden rounded-t-[16px] bg-[#e5e5e5]">
                <Image
                  src={getCardImage(item)}
                  alt={item.shortName}
                  fill
                  sizes="358px"
                  quality={90}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-[22px] top-[15px] text-[16px] font-light leading-[24px] text-[#1c5df7]">
                  {item.tag}
                </span>
              </div>
              <div className="mt-[22px] flex items-center justify-between pl-[9px] pr-2 text-[18px] leading-[28px] text-[#111]">
                <span>{item.shortName}</span>
                <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>

        {title ? null : (
          <>
            <OverlayArrow side="right" enabled={canPrev} onClick={() => scroll(-1)} label="قبلی" />
            <OverlayArrow side="left" enabled={canNext} onClick={() => scroll(1)} label="بعدی" />
          </>
        )}
      </div>
    </div>
  );
}

function OverlayArrow({
  side,
  enabled,
  onClick,
  label,
}: {
  side: "left" | "right";
  enabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const Icon = side === "left" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={!enabled}
      onClick={onClick}
      className={`absolute top-[244px] z-10 hidden h-11 w-11 place-items-center rounded-full text-[#111] transition md:grid ${
        side === "left" ? "left-2" : "right-2"
      } ${enabled ? "bg-[#eaf1fb] hover:bg-white" : "cursor-default"}`}
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </button>
  );
}
