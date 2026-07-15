"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { FAQItem } from "@/lib/data";

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "سوالات متداول" }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="text-right">
      <h2 className="mb-7 text-[28px] font-medium text-[#171717]">{title}</h2>
      <div className="border-t border-[#969696]">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-[#969696]">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-[52px] w-full items-center justify-between gap-5 py-3 text-right text-[14px] text-[#414141] transition-colors hover:text-[#17467e]"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
              </button>
              {isOpen && <p className="max-w-[1000px] pb-5 text-[13px] leading-7 text-[#777]">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
