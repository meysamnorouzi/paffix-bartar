import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  { src: "/skill-icons_instagram.png", alt: "اینستاگرام" },
  { src: "/logos_telegram.png", alt: "تلگرام" },
  { src: "/Vector.png", alt: "روبیکا" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#081725] text-white lg:h-[402px]">
      <div className="mx-auto max-w-[1296px] px-6 pb-20 pt-14 lg:px-0 lg:pb-0 lg:pt-[65px]">
        <div
          dir="ltr"
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[300px_387px_262px_159px] lg:justify-between lg:gap-0"
        >
          <div className="flex h-[145px] items-center justify-center lg:items-start lg:pt-[57px]">
            <Image
              src="/eye/logo.png"
              alt="پافیکس برتر"
              width={225}
              height={136}
              className="h-auto w-[225px] brightness-0 invert"
            />
          </div>

          <section dir="rtl" className="text-center">
            <h2 className="text-[17px] font-medium leading-[24px]">آدرس کارخانه</h2>
            <div className="mt-[10px] h-px w-full bg-white/40" />
            <p className="mt-[16px] text-[13px] font-light leading-[2.45] text-white/70">
              تهران، شهرستان بهارستان، شهر گلستان
              <br />
              فلکه دوم خیابان داریوش سلمانی بهارستان۴ پلاک ۱۰۰
            </p>
          </section>

          <section dir="rtl" className="text-center">
            <h2 className="text-[17px] font-medium leading-[24px]">راه های ارتباطی</h2>
            <div className="mt-[10px] h-px w-full bg-white/40" />
            <div className="mt-[15px] text-[13px] font-light text-white/75">
              <div className="flex items-center justify-between">
                <span>تماس</span>
                <span dir="ltr">۰۹۱۲۰۳۰۲۱۴۹</span>
              </div>
              <div className="mt-[13px] flex justify-end">
                <span dir="ltr">۰۹۱۲۰۳۰۲۱۴۹</span>
              </div>
              <div className="mt-[19px] flex items-center justify-between">
                <span>فضای مجازی</span>
                <div dir="rtl" className="flex items-center gap-[14px]">
                  {socialIcons.map((icon) => (
                    <a key={icon.src} href="#" aria-label={icon.alt} className="transition hover:scale-110">
                      <Image src={icon.src} alt="" width={24} height={24} className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <nav dir="rtl" className="text-center">
            <h2 className="text-[17px] font-medium leading-[24px]">دسترسی ها</h2>
            <div className="mt-[10px] h-px w-full bg-white/40" />
            <ul className="mt-[19px] space-y-[17px] text-[13px] font-light text-white/70">
              <li><Link className="transition hover:text-white" href="/">خانه</Link></li>
              <li><Link className="transition hover:text-white" href="/products">محصولات</Link></li>
              <li><Link className="transition hover:text-white" href="/about">درباره ما</Link></li>
              <li><Link className="transition hover:text-white" href="/contact">ارتباط با ما</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/20 py-[12px] text-center text-[11px] font-light text-white/45 lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[41px]">
        تمامی حقوق مادی و معنوی برای مجموعه پافیکس برتر محفوظ است.
      </div>
    </footer>
  );
}
