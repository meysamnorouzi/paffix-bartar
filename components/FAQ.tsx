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
      <h2 className="text-[26px] font-medium leading-[44px] text-[#111] sm:text-[32px] sm:leading-[50px]">{title}</h2>
      <div className="mt-[6px]">
        {items.map((item) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          return (
            <div key={item.id} className="border-b border-[#111]">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-[65px] w-full items-end justify-between gap-5 pb-[8px] pt-4 text-right text-[16px] font-light leading-[28px] sm:pt-0 sm:text-[20px] sm:leading-[32px] text-[#111] transition-colors hover:text-[#1c5df7]"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <Minus className="mb-[3px] h-6 w-6 shrink-0" strokeWidth={2} />
                ) : (
                  <Plus className="mb-[3px] h-6 w-6 shrink-0" strokeWidth={2} />
                )}
              </button>
              {isOpen && (
                <p id={panelId} className="max-w-[1000px] pb-5 text-[16px] font-light leading-8 text-[#555]">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
