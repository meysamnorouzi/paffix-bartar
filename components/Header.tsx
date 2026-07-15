import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/products", label: "محصولات" },
    { href: "/about", label: "درباره ما" },
    { href: "/contact", label: "ارتباط با ما" },
  ];

  return (
    <header className="absolute inset-x-0 top-6 z-50 px-4">
      <div className="mx-auto flex h-[58px] max-w-[1296px] items-center justify-between rounded-[10px] bg-white px-8 shadow-[0_8px_30px_rgba(0,0,0,0.16)]">
        <Link href="/" className="flex items-center">
          <Image
            src="/eye/logo.png"
            alt="پافیکس برتر"
            width={83}
            height={50}
            priority
            className="h-[38px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-normal text-[#222733] transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="h-8 w-[83px]" aria-hidden="true" />
      </div>
    </header>
  );
}
