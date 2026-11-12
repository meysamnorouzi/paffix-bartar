import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, SquareCheck } from "lucide-react";
import { FaqSection } from "@/components/ContactSection";
import SocialFollow from "@/components/SocialFollow";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره کارخانه و ارزش‌های پافیکس برتر",
};

const reasons = [
  { title: "کیفیت ماندگار", text: ["دوام و راحتی با استانداردهای", "دقیق تولید."], image: "/about/production-line.webp" },
  { title: "اصالت در هر قدم", text: ["سال‌ها تجربه و تعهد در هر", "محصول."], image: "/about/factory.webp" },
  { title: "طراحی با هدف", text: ["ترکیب زیبایی، راحتی و", "عملکرد در کنار هم."], image: "/about/delivery.webp" },
  { title: "اعتماد ساخته‌شده", text: ["اعتماد مشتریان، سرمایه", "ارزشمند پافیکس برتر."], image: "/categories/women.webp" },
];

const guarantees = ["ارسال به سراسر ایران", "رضایت هزاران مشتری", "ضمانت ۶ ماهه", "پشتیبانی سریع"];

function OutlineButton() {
  return (
    <Link
      href="/products"
      className="mr-auto mt-[54px] flex h-[40px] w-[171px] items-center justify-center gap-[14px] rounded-full border border-[#e9ebf0] text-[14.5px] font-medium text-[#184177] transition hover:border-[#184177]"
    >
      مشاهده محصولات
      <ChevronLeft className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1060px] px-5 pb-[138px] pt-[122px] lg:px-0">
        <nav aria-label="مسیر صفحه">
          <ol className="flex items-center gap-[9px] text-[16.5px] font-light leading-[24px] text-[#6a727f]">
            <li>
              <Link href="/" className="transition hover:text-[#184177]">خانه</Link>
            </li>
            <li aria-hidden="true">
              <ChevronLeft className="h-4 w-4 text-[#333]" strokeWidth={2} />
            </li>
            <li>
              <span aria-current="page" className="font-medium text-[#184177] underline decoration-1 underline-offset-[7px]">
                درباره ما
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-[33px] grid items-start gap-10 lg:grid-cols-[498px_1fr] lg:gap-[50px]">
          <div className="text-right">
            <h1 className="pt-[9px] text-[26px] font-bold leading-[40px] text-[#111] md:text-[31.5px] md:leading-[46px]">درباره پافیکس برتر</h1>
            <p className="mt-4 max-w-[485px] text-[18px] font-light leading-[34px] text-[#111] md:mt-[19px] md:text-justify md:text-[24px] md:leading-[46px]">
              پافیکس برتر بر پایه این باور شکل گرفته است که یک کفش باکیفیت، حاصل تجربه، دقت و تعهد است. نزدیک به یک دهه است که با تکیه بر دانش فنی و استانداردهای دقیق تولید، محصولاتی با دوام، راحت و خوش‌طراحی ارائه می‌کنیم. با حفظ اصالت، کیفیت و اعتماد مشتریان، تجربه‌ای مطمئن از خرید کفش را رقم می‌زنیم.
            </p>
            <Link
              href="/products"
              className="mr-auto mt-[22px] flex h-[40px] w-[166px] items-center justify-center gap-[14px] rounded-full bg-[#315f9b] text-[14px] text-white transition hover:bg-[#2a5288]"
            >
              مشاهده محصولات
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
          <div className="relative aspect-[511/477] overflow-hidden rounded-[16px]">
            <Image
              src="/about/hero.webp"
              alt="کنترل کیفیت کفش در کارخانه پافیکس برتر"
              fill
              sizes="(min-width: 1024px) 511px, 100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eaf1fa] px-5 py-[45px] lg:h-[400px] lg:px-0">
        <div className="mx-auto max-w-[1076px] text-center">
          <h2 className="text-[30.5px] font-bold leading-[46px] text-[#111]">چرا ما؟</h2>
          <p className="mt-[2px] text-[17.5px] leading-[28px] text-[#111]">همراه قدم‌های مطمئن شما هستیم.</p>
          <ul className="mt-[25px] grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-[66px]">
            {reasons.map((item) => (
              <li key={item.title} className="relative h-[170px] md:h-[199px] overflow-hidden rounded-[16px] bg-[#1a1410] text-white">
                <Image src={item.image} alt="" fill sizes="220px" className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 text-center md:top-[52px] md:translate-y-0">
                  <h3 className="text-[18px] font-medium leading-[28px] md:text-[25px] md:leading-[36px]">{item.title}</h3>
                  <p className="mt-[3px] text-[13px] leading-[21px] text-white/90 md:text-[16px] md:leading-[24.5px]">
                    {item.text[0]}
                    <br />
                    {item.text[1]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1076px] px-5 pb-[73px] pt-[118px] lg:px-0">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_526px] lg:gap-[97px]">
          <div className="pt-[45px] text-right md:pr-0">
            <h2 className="text-[28.5px] font-medium leading-[44px] text-[#111]">تعهد به مشتریان</h2>
            <p className="mt-[34px] max-w-[446.25px] text-[16px] leading-[30px] md:text-justify md:text-[18px] md:leading-[31.7px] text-[#111]">
              رضایت مشتری برای ما تنها یک هدف نیست، بلکه اصلی است که در تمام مراحل فعالیت به آن پایبند هستیم. از انتخاب محصول تا پشتیبانی، تلاش می‌کنیم تجربه‌ای مطمئن، شفاف و رضایت‌بخش برای شما فراهم کنیم.
            </p>
            <OutlineButton />
          </div>
          <div className="relative aspect-[526/381] overflow-hidden rounded-[16px]">
            <Image src="/about/delivery.webp" alt="ارسال محصولات پافیکس برتر" fill sizes="526px" className="object-cover" />
          </div>
        </div>

        <div className="mt-[61px] grid items-start gap-10 lg:grid-cols-[526px_1fr] lg:gap-[92px]">
          <div className="relative aspect-[526/341] overflow-hidden rounded-[16px]">
            <Image src="/about/production-line.webp" alt="خط تولید کفش پافیکس برتر" fill sizes="526px" className="object-cover" />
          </div>
          <div className="pt-[23px] text-right">
            <h2 className="text-[28.5px] font-medium leading-[44px] text-[#111]">تضمین کیفیت</h2>
            <p className="mt-[34px] text-[16px] leading-[30px] md:text-justify md:text-[18px] md:leading-[31.9px] text-[#111]">
              تمام محصولات پافیکس برتر با دقت در انتخاب متریال و رعایت استانداردهای تولید ساخته می‌شوند. با تمرکز بر دوام، راحتی و کیفیت، تلاش می‌کنیم محصولی ارائه دهیم که با اطمینان انتخاب شود و رضایت شما را در هر قدم همراه داشته باشد.
            </p>
            <OutlineButton />
          </div>
        </div>
      </section>

      <div className="bg-[#1b2f4f] text-white">
        <ul className="mx-auto grid max-w-[1094px] grid-cols-2 gap-y-3 px-5 py-4 text-[12px] lg:flex lg:h-[53px] lg:items-center lg:justify-between lg:px-0 lg:py-0">
          {guarantees.map((item) => (
            <li key={item} className="flex items-center gap-[8px]">
              <SquareCheck className="h-[14px] w-[14px]" strokeWidth={1.75} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <SocialFollow />
      <FaqSection className="pb-[69px] pt-[58px]" />
    </>
  );
}
