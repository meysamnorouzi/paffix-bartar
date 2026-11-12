import Image from "next/image";
import Link from "next/link";
import { PHONE, PHONE_FA, external, iconRow } from "@/lib/contact";


const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "ارتباط با ما" },
];


export default function Footer() {
  return (
    <footer className="relative bg-[#0c1826] text-white lg:h-[402px]">
      <div className="mx-auto max-w-[1296px] px-6 pb-20 pt-14 lg:px-0 lg:pb-0 lg:pt-[61px]">
        <div
          dir="ltr"
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[300px_387px_262px_159px] lg:justify-between lg:gap-0"
        >
          <div className="flex justify-center lg:pt-[62px]">
            <Link href="/" aria-label="پافیکس برتر">
              <Image
                src="/footer-logo.png"
                alt="پافیکس برتر"
                width={225}
                height={83}
                className="h-[83px] w-[225px]"
              />
            </Link>
          </div>

          <section dir="rtl" className="text-center">
            <FooterHeading>آدرس کارخانه</FooterHeading>
            <p className="mt-[14px] text-[16.5px] font-light leading-[35px] text-white/85">
              تهران، شهرستان بهارستان، شهر گلستان
              <br />
              فلکه دوم خیابان داریوش سلمانی بهارستان ۴ پلاک ۱۰۰
            </p>
          </section>

          <section dir="rtl">
            <FooterHeading>راه های ارتباطی</FooterHeading>
            <div className="mt-[14px] text-[16.5px] font-light leading-[35px] text-white/85">
              <div className="flex items-center justify-between pl-[22px] pr-[19px]">
                <span>تماس</span>
                <a href={`tel:${PHONE}`} className="text-[17px] transition hover:text-white">
                  {PHONE_FA}
                </a>
              </div>
              <div className="mt-[7.5px] flex items-center justify-between pl-[18px] pr-[19px]">
                <span>فضای مجازی</span>
                <div className="flex items-center gap-[14px]">
                  {iconRow.map((icon) => (
                    <a
                      key={icon.name}
                      href={icon.href}
                      {...external}
                      aria-label={icon.name}
                      className="transition hover:scale-110"
                    >
                      <Image src={icon.iconTransparent} alt="" width={24} height={24} className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <nav dir="rtl" aria-label="دسترسی ها">
            <FooterHeading>دسترسی ها</FooterHeading>
            <ul className="mt-[17px] pr-[41px] text-[16.5px] font-light leading-[40px] text-white/85">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/20 py-[10px] text-center text-[14px] font-light leading-[20px] text-white/70 lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[41px]">
        تمامی حقوق مادی و معنوی برای مجموعه پافیکس برتر محفوظ است.
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-center text-[18.5px] font-medium leading-[28px]">{children}</h2>
      <div className="mt-[10px] h-px w-full bg-white/40" />
    </>
  );
}
