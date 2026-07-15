import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-border bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-navy sm:text-2xl">
            کفش<span className="text-accent">پلاس</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            aria-label="جستجو"
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-light hover:text-accent"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="حساب کاربری"
            className="hidden rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-light hover:text-accent sm:block"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="سبد خرید"
            className="relative rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-light hover:text-accent"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-0.5 -left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
              ۲
            </span>
          </button>
          <button
            type="button"
            aria-label="منو"
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-light md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
