"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = images[active] ?? images[0];

  useEffect(() => {
    thumbRefs.current[active]?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }, [active]);

  return (
    <div className="contents">
      <div className="flex h-full flex-col">
        <div className="min-h-[320px] flex-1 overflow-hidden rounded-[14px] bg-[#f4f4f4]">
          <Image
            src={current}
            alt={name}
            width={966}
            height={1048}
            priority
            quality={95}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto lg:hidden">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[10px] ${
                i === active ? "ring-2 ring-[#2f72b9]" : ""
              }`}
            >
              <Image
                src={src}
                alt=""
                width={144}
                height={144}
                quality={75}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="max-h-[450px] space-y-[10px] overflow-y-auto">
          {images.map((src, i) => (
            <button
              key={src}
              ref={(node) => {
                thumbRefs.current[i] = node;
              }}
              type="button"
              onClick={() => setActive(i)}
              className={`block h-[82px] w-[132px] overflow-hidden rounded-[12px] ${
                i === active ? "ring-2 ring-[#2f72b9] ring-offset-2" : ""
              }`}
            >
              <Image
                src={src}
                alt=""
                width={264}
                height={164}
                quality={75}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            aria-label="تصویر بعدی"
            onClick={() =>
              setActive((i) => Math.min(images.length - 1, i + 1))
            }
            className="grid h-8 place-items-center rounded bg-[#f3f4f5]"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="تصویر قبلی"
            onClick={() => setActive((i) => Math.max(0, i - 1))}
            className="grid h-8 place-items-center rounded bg-[#f3f4f5]"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
