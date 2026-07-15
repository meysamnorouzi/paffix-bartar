import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, TelegramIcon } from "@/components/SocialIcons";

const accessLinks = ["محصولات", "کالکشن‌ها", "درباره ما", "ارتباط با ما"];

export default function Footer() {
  return (
    <footer className="bg-[#061520] text-white">
      <div className="mx-auto max-w-[1296px] px-4 pb-6 pt-[75px]">
        <div className="grid gap-12 text-right sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1.4fr_1fr] lg:gap-[68px]">
          <div className="order-last flex items-center justify-center lg:order-none lg:justify-start">
            <Image src="/eye/logo.png" alt="پافیکس برتر" width={166} height={100} className="h-auto w-[166px] brightness-0 invert" />
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[15px] font-medium">آدرس کارخانه</h3>
            <p className="mt-5 text-[12px] leading-7 text-white/55">
              تهران، چهاردانگه، شهرک صنعتی چهاردانگه، خیابان صنعت، پلاک ۱۲
            </p>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[15px] font-medium">راه‌های ارتباطی</h3>
            <div className="mt-5 space-y-3 text-[12px] text-white/55">
              <p>تلفن: ۰۲۱-۵۵۵۵۱۲۱۲</p>
              <p>موبایل: ۰۹۱۲۱۲۳۴۵۶۷</p>
              <div className="flex items-center gap-3 pt-1">
                <span>شبکه‌های مجازی</span>
                <a href="#" aria-label="اینستاگرام" className="text-[#f15a83]"><InstagramIcon className="h-[18px] w-[18px]" /></a>
                <a href="#" aria-label="تلگرام" className="text-[#37aee2]"><TelegramIcon className="h-[18px] w-[18px]" /></a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[15px] font-medium">دسترسی‌ها</h3>
            <ul className="mt-5 space-y-3 text-[12px] text-white/55">
              {accessLinks.map((label, index) => (
                <li key={label}>
                  <Link href={index === 0 ? "/products" : index === 3 ? "#contact" : "#"} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-[72px] border-t border-white/10 pt-5 text-center text-[10px] text-white/25">
          تمامی حقوق مادی و معنوی این وب‌سایت متعلق به پافیکس برتر است.
        </p>
      </div>
    </footer>
  );
}
