"use client";

import Image from "next/image";
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
  // Product detail pages sit the bar slightly lower, per the PDP design.
  const isProductPage = pathname.startsWith("/products/");

  return (
    <header
      className={`fixed inset-x-0 z-50 px-5 lg:px-0 ${
        isProductPage ? "top-[36px]" : "top-[22px]"
      }`}
    >
      <div className="relative mx-auto flex h-[62px] w-full max-w-[1296px] items-center justify-between rounded-[14px] bg-white px-6 shadow-[0_4px_16px_rgba(0,0,0,0.10)] lg:px-[54px]">
        <button
          type="button"
          className="grid h-9 w-9 place-items-center text-[#222] md:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="text-[16px] leading-none text-[#000] transition hover:text-[#1c5df7]"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/" aria-label="پافیکس برتر" className="mr-auto md:mr-0">
          <Image
            src="/eye/logo.png"
            alt="پافیکس برتر"
            width={83}
            height={50}
            loading="eager"
            className="h-[50px] w-[83px]"
          />
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
