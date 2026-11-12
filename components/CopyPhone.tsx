"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Phone } from "lucide-react";
import { toPersianDigits } from "@/lib/utils";

export default function CopyPhone({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (insecure context / permissions); fail silently.
    }
  };

  return (
    <div className="flex h-[44px] items-center justify-between rounded-[8px] bg-white pl-5 pr-[18px]">
      <button
        type="button"
        onClick={copy}
        className="flex items-center gap-[6px] whitespace-nowrap text-[14px] font-light text-[#999] transition hover:text-[#1c5df7]"
      >
        {copied ? (
          <Check className="h-4 w-4" strokeWidth={1.75} />
        ) : (
          <Copy className="h-4 w-4" strokeWidth={1.75} />
        )}
        {copied ? "کپی شد" : "کپی کردن شماره"}
      </button>
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-[10px] whitespace-nowrap text-[17px] font-medium text-[#111] sm:text-[19px]"
      >
        {toPersianDigits(phone)}
        <Phone className="h-[22px] w-[22px] text-[#1c5df7]" strokeWidth={1.5} />
      </a>
    </div>
  );
}
