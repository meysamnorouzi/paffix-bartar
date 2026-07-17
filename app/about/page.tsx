import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckSquare, ChevronLeft } from "lucide-react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره کارخانه و ارزش‌های پافیکس برتر",
};

const reasons = [
  { title: "کیفیت ماندگار", text: "دوام و راحتی با استانداردهای دقیق تولید", image: "/about/Rectangle 40114.png" },
  { title: "اصالت در هر قدم", text: "متریال حرفه‌ای و تضمین‌شده در هر محصول", image: "/about/Rectangle 40111.png" },
  { title: "طراحی با هدف", text: "ترکیب زیبایی، راحتی و عملکرد در کنار هم", image: "/about/Subtract.png" },
  { title: "اعتماد ساخته‌شده", text: "اعتماد مشتریان، سرمایه ارزشمند پافیکس برتر", image: "/about/Rectangle 40111.png" },
];

function ProductButton() {
  return <Link href="/products" className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#d9e1ea] px-5 py-2 text-[12px] text-[#2f72b9] shadow-sm transition hover:bg-[#f4f8fc]">مشاهده محصولات <ChevronLeft className="h-3.5 w-3.5" /></Link>;
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1080px] px-5 pb-[92px] pt-[112px]">
        <div className="mb-8 flex items-center gap-2 text-[12px] text-[#a0a0a0]"><Link href="/">خانه</Link><ChevronLeft className="h-3 w-3"/><span className="text-[#2f72b9]">درباره ما</span></div>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-[55px]">
          <div className="order-2 md:order-1"><Image src="/about/Rectangle 40111.png" alt="کارخانه پافیکس برتر" width={512} height={478} priority className="h-auto w-full rounded-[14px] object-cover" /></div>
          <div className="order-1 text-right md:order-2">
            <h1 className="text-[27px] font-bold text-[#171717]">درباره پافیکس برتر</h1>
            <p className="mt-5 text-[15px] leading-[2.15] text-[#555]">پافیکس برتر بر پایه این باور شکل گرفته است که یک کفش باکیفیت، حاصل تجربه، دقت و تعهد است. نزدیک به یک دهه است که با تکیه بر دانش فنی و استانداردهای دقیق تولید، محصولاتی با دوام، راحت و خوش‌طراحی ارائه می‌کنیم. با حفظ اصالت، کیفیت و اعتماد مشتریان، تجربه‌ای مطمئن از خرید کفش را رقم می‌زنیم.</p>
            <ProductButton />
          </div>
        </div>
      </section>

      <section className="bg-[#edf4fd] py-[42px]">
        <div className="mx-auto max-w-[1080px] px-5 text-center">
          <h2 className="text-[25px] font-bold">چرا ما؟</h2><p className="mt-2 text-[12px] text-[#666]">همراه قدم‌های مطمئن شما هستیم.</p>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {reasons.map((item) => <article key={item.title} className="relative aspect-square overflow-hidden rounded-[12px] bg-[#111] text-white"><Image src={item.image} alt="" fill className="object-cover opacity-65" sizes="260px"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"/><div className="absolute inset-x-3 bottom-5 text-right"><h3 className="text-[17px] font-bold">{item.title}</h3><p className="mt-1 text-[11px] leading-5 text-white/80">{item.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] space-y-[55px] px-5 py-[88px]">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-[72px]"><Image src="/about/Subtract.png" alt="ارسال محصولات پافیکس برتر" width={526} height={381} className="w-full rounded-[14px]"/><div><h2 className="text-[25px] font-bold">تعهد به مشتریان</h2><p className="mt-5 text-[14px] leading-[2.05] text-[#555]">رضایت مشتری برای ما تنها یک هدف نیست، بلکه اصلی است که در تمام مراحل فعالیت به آن پایبند هستیم. از انتخاب محصول تا پشتیبانی، تلاش می‌کنیم تجربه‌ای مطمئن، شفاف و رضایت‌بخش برای همه فراهم کنیم.</p><ProductButton /></div></div>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-[72px]"><div className="order-2 md:order-1"><h2 className="text-[25px] font-bold">تضمین کیفیت</h2><p className="mt-5 text-[14px] leading-[2.05] text-[#555]">تمام محصولات پافیکس برتر با دقت در انتخاب متریال و رعایت استانداردهای تولید ساخته می‌شوند. با تمرکز بر دوام، راحتی و کیفیت، تلاش می‌کنیم محصولی ارائه دهیم که با اطمینان انتخاب شود و رضایت شما را در هر قدم همراه داشته باشد.</p><ProductButton /></div><Image src="/about/Rectangle 40114.png" alt="تضمین کیفیت کفش‌ها" width={526} height={341} className="order-1 w-full rounded-[14px] md:order-2"/></div>
      </section>

      <div className="bg-[#153a66] text-white"><div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-y-3 px-5 py-3 text-[10px] md:grid-cols-4">{["ارسال به سراسر ایران","رضایت هزاران مشتری","ضمانت ۶ ماهه","پشتیبانی سریع"].map(x=><span key={x} className="flex items-center justify-center gap-2"><CheckSquare className="h-3 w-3"/>{x}</span>)}</div></div>
      <ContactSection />
    </>
  );
}
