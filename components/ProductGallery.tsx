"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const visible = images.slice(0, 5);

  return (
    <div className="contents">
      <div className="overflow-hidden rounded-[14px] bg-[#f4f4f4]">
        <Image
          src={images[active] ?? images[0]}
          alt={name}
          width={430}
          height={470}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hidden lg:block">
        <div className="space-y-[10px]">
          {visible.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className={`block h-[82px] w-[132px] overflow-hidden rounded-[12px] ${
                i === active ? "ring-2 ring-[#2f72b9] ring-offset-2" : ""
              }`}
            >
              <Image
                src={src}
                alt=""
                width={151}
                height={92}
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
              setActive((i) => Math.min(visible.length - 1, i + 1))
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
