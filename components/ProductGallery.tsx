"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const last = images.length - 1;
  const hasPrev = active > 0;
  const hasNext = active < last;

  const go = (index: number) => setActive(Math.min(last, Math.max(0, index)));

  useEffect(() => {
    thumbRefs.current[active]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="flex min-w-0 flex-col gap-4 lg:flex-row-reverse lg:gap-[25px]">
      <div className="relative aspect-[483/524] w-full overflow-hidden rounded-[16px] bg-[#e5e5e5] lg:h-[524px] lg:w-[483px] lg:shrink-0">
        <Image
          key={images[active]}
          src={images[active]}
          alt={name}
          fill
          sizes="(min-width: 1024px) 483px, 100vw"
          quality={95}
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
        <GalleryArrow
          side="right"
          label="تصویر قبلی"
          enabled={hasPrev}
          onClick={() => go(active - 1)}
        />
        <GalleryArrow
          side="left"
          label="تصویر بعدی"
          enabled={hasNext}
          onClick={() => go(active + 1)}
        />
      </div>

      <div className="flex flex-col gap-2 lg:h-[524px] lg:w-[150px] lg:shrink-0">
        <div className="flex gap-4 overflow-auto [scrollbar-width:none] lg:min-h-0 lg:flex-1 lg:flex-col [&::-webkit-scrollbar]:hidden">
          {images.map((src, i) => (
            <button
              key={src}
              ref={(node) => {
                thumbRefs.current[i] = node;
              }}
              type="button"
              aria-label={`تصویر ${i + 1}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className={`relative h-[72px] w-[96px] shrink-0 overflow-hidden rounded-[16px] transition-opacity lg:h-[92px] lg:w-[150px] ${
                i === active ? "" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="150px"
                quality={75}
                className="object-cover"
              />
            </button>
          ))}
        </div>
        <div className="hidden grid-cols-2 gap-2 lg:grid">
          <button
            type="button"
            aria-label="تصویر قبلی"
            disabled={!hasPrev}
            onClick={() => go(active - 1)}
            className="grid h-8 place-items-center rounded-[4px] bg-[#f1f1f3] text-[#111] transition hover:bg-[#e6e7ea] disabled:cursor-default disabled:hover:bg-[#f1f1f3]"
          >
            <ChevronUp className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="تصویر بعدی"
            disabled={!hasNext}
            onClick={() => go(active + 1)}
            className="grid h-8 place-items-center rounded-[4px] bg-[#f1f1f3] text-[#111] transition hover:bg-[#e6e7ea] disabled:cursor-default disabled:hover:bg-[#f1f1f3]"
          >
            <ChevronDown className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryArrow({
  side,
  label,
  enabled,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  enabled: boolean;
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={!enabled}
      onClick={onClick}
      className={`absolute top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-[#111] transition ${
        side === "left" ? "left-[15px]" : "right-[15px]"
      } ${enabled ? "bg-[#f0f1f3] hover:bg-white" : "cursor-default"}`}
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}
