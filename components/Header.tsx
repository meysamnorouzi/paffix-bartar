"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "ارتباط با ما" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-[22px] z-50 px-5 lg:px-0">
      <div className="relative mx-auto flex h-[62px] w-full max-w-[1296px] items-center justify-between rounded-[14px] bg-white px-8 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
        <button
          type="button"
          className="grid h-9 w-9 place-items-center text-[#222] md:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-[44px] md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] leading-none transition ${
                  active ? "font-medium text-[#1a1a1a]" : "text-[#222] hover:text-[#2564a5]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="mr-auto flex h-[38px] min-w-[86px] items-center justify-center rounded-full bg-[#17467e] px-[18px] text-[13px] font-medium tracking-[0.02em] text-white md:mr-0"
        >
          پافیکس
        </Link>

        {open ? (
          <nav className="absolute inset-x-0 top-[70px] flex flex-col gap-1 rounded-[14px] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[14px] text-[#222] hover:bg-[#f4f7fb]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
