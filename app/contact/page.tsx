import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Clock3, Headphones, MapPin, Phone } from "lucide-react";
import SocialFollow from "@/components/SocialFollow";
import FactoryMap from "@/components/FactoryMap";
import { PHONE, PHONE_FA, external, social } from "@/lib/contact";

export const metadata: Metadata = {
  title: "ارتباط با ما",
  description: "راه‌های ارتباط با کارخانه پافیکس برتر",
};


const items = [
  {
    title: "شماره تماس",
    icon: Phone,
    body: (
      <>
        <a href={`tel:${PHONE}`} className="block transition hover:text-[#1c5df7]">{PHONE_FA}</a>
      </>
    ),
    bodyClass: "text-[19px] leading-[33px]",
  },
  { title: "ساعت پاسخگویی", icon: Clock3, body: "همه روزه ۱۰ الی ۲۱", bodyClass: "text-[18.5px] leading-[33px]" },
  { title: "پشتیبانی آنلاین", icon: Headphones, body: (
      <a href={social.rubika.href} {...external} className="transition hover:text-[#1c5df7]">
        ارتباط مستقیم در روبیکا{" "}
        <span dir="ltr" className="text-[#184177]">{social.rubika.handle}</span>
      </a>
    ), bodyClass: "text-[18.5px] leading-[33px]" },
  {
    title: "آدرس کارخانه",
    icon: MapPin,
    body: (
      <>
        تهران، شهرستان بهارستان، شهر گلستان
        <br />
        فلکه دوم خیابان داریوش سلمانی بهارستان ۴ پلاک ۱۰۰
      </>
    ),
    bodyClass: "text-[18px] leading-[35px]",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1076px] px-5 pb-[149px] pt-[123px] lg:px-0">
        <nav aria-label="مسیر صفحه" className="lg:pr-[3px]">
          <ol className="flex items-center gap-[9px] text-[16.5px] font-light leading-[24px] text-[#6a727f]">
            <li>
              <Link href="/" className="transition hover:text-[#184177]">خانه</Link>
            </li>
            <li aria-hidden="true">
              <ChevronLeft className="h-4 w-4 text-[#333]" strokeWidth={2} />
            </li>
            <li>
              <span aria-current="page" className="font-medium text-[#184177] underline decoration-1 underline-offset-[7px]">
                ارتباط با ما
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-[55.5px] grid items-start gap-12 lg:grid-cols-[1fr_526px] lg:gap-[133px]">
          <div className="text-right">
            <h1 className="-mt-[8px] text-[33px] font-medium leading-[50px] text-[#111]">ارتباط با کارخانه</h1>
            <dl className="mt-[32px] divide-y divide-[#e9ebf0]">
              {items.map(({ title, icon: Icon, body, bodyClass }, i) => (
                <div key={title} className={i === 0 ? "pb-[9.5px]" : "pb-[9.5px] pt-[10.5px]"}>
                  <dt className="flex items-center gap-[10px] text-[24px] leading-[38px] text-[#111]">
                    <Icon className="h-[22px] w-[22px] shrink-0" strokeWidth={1.5} />
                    {title}
                  </dt>
                  <dd className={`mt-[6px] pr-[8px] font-light text-[#3d3d3d] ${bodyClass}`}>{body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative isolate z-0 aspect-[523/526] overflow-hidden rounded-[16px] bg-[#eceef1]">
            <FactoryMap zoom={17} />
          </div>
        </div>
      </section>
      <SocialFollow />
      <div aria-hidden="true" className="h-[163px]" />
    </>
  );
}
