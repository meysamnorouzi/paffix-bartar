import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock3, Headphones, MapPin, Phone } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/SocialIcons";
import { MapArtwork } from "@/components/ContactSection";

export const metadata: Metadata = { title: "ارتباط با ما", description: "راه‌های ارتباط با کارخانه پافیکس برتر" };

const cards = [
  { title: "اطلاعیه‌ها و تخفیف‌ها", icon: <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow"><span className="h-9 w-9 bg-[conic-gradient(#1fcf94,#25b9e9,#6345d8,#ff315a,#ffb000,#1fcf94)] [clip-path:polygon(50%_0,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)]"/></span> },
  { title: "جدیدترین محصولات", icon: <span className="grid h-16 w-16 place-items-center rounded-full bg-[#28a8e8] text-white"><TelegramIcon className="h-9 w-9"/></span> },
  { title: "گفت‌وگو با کارشناسان", icon: <span className="grid h-16 w-16 place-items-center rounded-full bg-[#22c65b] text-white"><Phone className="h-8 w-8"/></span> },
  { title: "استایل‌های روز", icon: <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-tr from-[#ffc928] via-[#e62878] to-[#7149cc] text-white"><InstagramIcon className="h-9 w-9"/></span> },
];

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.1 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4-.1.6.6 1.2 1.6 2.1 2.8 2.8.2.1.4.1.6-.1l.9-1c.2-.2.4-.2.7-.1l2 .9c.3.1.4.3.4.5 0 .5-.2 1.5-.8 2-.5.5-1.3.8-2.1.7-1.1-.1-2.8-.7-4.8-2.5-2.3-2-3.5-4.4-3.6-5.6 0-.7.2-1.2.5-1.6Z"/></svg>;
}

export default function ContactPage() {
  return <>
    <section className="mx-auto max-w-[1080px] px-5 pb-[245px] pt-[118px]">
      <div className="mb-[52px] flex items-center gap-2 text-[12px] text-[#aaa]"><Link href="/">خانه</Link><ChevronLeft className="h-3 w-3"/><span className="border-b border-[#2f72b9] pb-1 text-[#2f72b9]">درباره ما</span></div>
      <div dir="ltr" className="grid items-start gap-14 lg:grid-cols-[505px_1fr] lg:gap-[82px]">
        <MapArtwork large />
        <div dir="rtl" className="text-right"><h1 className="mb-[35px] text-[29px] font-bold text-[#151515]">ارتباط با کارخانه</h1><div className="divide-y divide-[#ededed]">
          <div className="pb-[22px]"><h2 className="flex items-center gap-3 text-[20px] font-medium"><Phone strokeWidth={1.7} className="h-[21px] w-[21px]"/>شماره تماس</h2><p className="mt-3 pr-8 text-right text-[14px] leading-7 text-[#777]">۰۹۱۲۰۳۰۲۱۴۹<br/>۰۹۱۲۰۳۰۲۱۴۹</p></div>
          <div className="py-[22px]"><h2 className="flex items-center gap-3 text-[20px] font-medium"><Clock3 strokeWidth={1.7} className="h-[21px] w-[21px]"/>ساعت پاسخگویی</h2><p className="mt-3 pr-8 text-[14px] text-[#777]">همه روزه ۱۰ الی ۲۱</p></div>
          <div className="py-[22px]"><h2 className="flex items-center gap-3 text-[20px] font-medium"><Headphones strokeWidth={1.7} className="h-[21px] w-[21px]"/>پشتیبانی آنلاین</h2><p className="mt-3 pr-8 text-[14px] text-[#777]">ارتباط مستقیم در روبیکا</p></div>
          <div className="pt-[22px]"><h2 className="flex items-center gap-3 text-[20px] font-medium"><MapPin strokeWidth={1.7} className="h-[21px] w-[21px]"/>آدرس کارخانه</h2><p className="mt-3 text-[14px] leading-8 text-[#777]">تهران، شهرستان بهارستان، شهر گلستان<br/>فلکه دوم خیابان داریوش سلمانی بهارستان۴ پلاک ۱۰۰</p></div>
        </div></div>
      </div>
      <div className="mt-[78px] grid gap-x-[25px] gap-y-[26px] sm:grid-cols-2">{cards.map((c,index)=><a href="#" key={c.title} className="flex min-h-[150px] items-center justify-between gap-4 rounded-[14px] bg-[#f5f6f8] px-5 transition hover:-translate-y-1 hover:shadow-md sm:min-h-[174px] lg:px-[42px]"><span className="flex flex-row-reverse items-center gap-3 text-[16px] font-medium sm:text-[18px] lg:gap-4 lg:whitespace-nowrap lg:text-[20px]"><Image src="/about/Group.png" width={28} height={28} alt="" className="h-6 w-6 shrink-0 object-contain"/>{c.title}</span>{index===2?<span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#22c65b] text-white"><WhatsAppIcon/></span>:c.icon}</a>)}</div>
    </section>
  </>;
}
