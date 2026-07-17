import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronUp, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import ManufacturingSection from "@/components/ManufacturingSection";
import ContactSection from "@/components/ContactSection";
import ProductTabs from "@/components/ProductTabs";

type Props={params:Promise<{slug:string}>};
export async function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=products.find(x=>x.slug===slug);return {title:p?.name??"محصول",description:p?.description}}

const thumbs=["/pdp/Rectangle 40094.png","/pdp/Rectangle 40095.png","/pdp/Rectangle 40096.png","/pdp/Rectangle 40097.png","/pdp/Rectangle 40095.png"];

export default async function ProductPage({params}:Props){const {slug}=await params;if(!products.some(p=>p.slug===slug))notFound();return <>
  <main className="mx-auto max-w-[1140px] px-5 pb-[110px] pt-[105px] lg:px-0">
    <div className="flex items-center gap-2 text-[11px] text-[#aaa]"><Link href="/">خانه</Link><ChevronLeft className="h-3 w-3"/><Link href="/products">محصولات</Link><ChevronLeft className="h-3 w-3"/><span className="border-b border-[#2f72b9] pb-1 text-[#2f72b9]">مدل نایک V5K</span></div>

    <section dir="ltr" className="mt-[22px] grid gap-6 lg:grid-cols-[410px_430px_132px] lg:justify-evenly">
      <ProductSummary/>
      <div className="overflow-hidden rounded-[14px] bg-[#f4f4f4]"><Image src="/plp/Rectangle 39992 (1).png" alt="مدل نایک V5K" width={430} height={470} priority className="h-full w-full object-cover"/></div>
      <div className="hidden lg:block"><div className="space-y-[10px]">{thumbs.map((src,i)=><button key={i} className={`block h-[82px] w-[132px] overflow-hidden rounded-[12px] ${i===0?"ring-2 ring-[#2f72b9] ring-offset-2":""}`}><Image src={src} alt="" width={151} height={92} className="h-full w-full object-cover"/></button>)}</div><div className="mt-2 grid grid-cols-2 gap-2"><button className="grid h-8 place-items-center rounded bg-[#f3f4f5]"><ChevronDown className="h-4 w-4"/></button><button className="grid h-8 place-items-center rounded bg-[#f3f4f5]"><ChevronUp className="h-4 w-4"/></button></div></div>
    </section>

    <ProductTabs/>

    <SocialCards/>
  </main>
  <ManufacturingSection/><ContactSection/>
  </>}

function ProductSummary(){return <aside dir="rtl" className="text-right"><h1 className="text-[22px] font-bold">مدل نایک V5K</h1><dl className="mt-5 space-y-4 text-[13px]"><div className="flex justify-between"><dt className="font-medium">آیدی:</dt><dd className="text-[#777]">نامشخص</dd></div><div className="flex items-center justify-between"><dt className="font-medium">سایزبندی:</dt><dd className="flex gap-3">{["۴۰","۳۹","۳۸","۳۷"].map(x=><button key={x} className="grid h-8 w-8 place-items-center rounded bg-[#fafafa] text-[#999]">{x}</button>)}</dd></div></dl><div className="mt-5 rounded-[6px] border-2 border-[#2f72ff] bg-[#eaf2ff] p-[14px]"><h2 className="text-[16px] font-bold">ارتباط با فروش</h2><p className="mt-1 text-[11px] text-[#777]">سفارش و استعلام قیمت از طریق راه‌های زیر</p><div className="mt-3 grid grid-cols-2 gap-3"><a href="#" className="flex h-12 items-center justify-center gap-3 rounded bg-white text-[13px]"><Image src="/pdp/Vector.png" alt="روبیکا" width={26} height={26}/>روبیکا</a><a href="#" className="flex h-12 items-center justify-center gap-3 rounded bg-white text-[13px]"><Image src="/pdp/logos_telegram.png" alt="تلگرام" width={26} height={26}/>تلگرام</a></div><a href="tel:0999997777" className="mt-3 flex h-10 items-center justify-between rounded bg-white px-3 text-[11px] text-[#aaa]"><span>برای تماس مستقیم</span><span className="flex items-center gap-2" dir="ltr"><Phone className="h-4 w-4 text-[#2f72b9]"/>۰۹۹۹۹۹۷۷۷۷</span></a></div><h2 className="mt-5 text-[15px] font-bold">ویژگی ها</h2><div className="mt-3 grid grid-cols-2 gap-3"><div className="rounded bg-[#fafafa] p-4 text-center"><b className="block text-[12px]">کفی</b><span className="mt-2 block text-[11px] text-[#777]">استاندارد دوخت</span></div><div className="rounded bg-[#fafafa] p-4 text-center"><b className="block text-[12px]">جنس</b><span className="mt-2 block text-[11px] text-[#777]">پارچه پلی‌استر</span></div></div><button className="mt-4 flex items-center gap-2 text-[11px] text-[#777]">مشاهده همه ویژگی ها <ChevronLeft className="h-3 w-3"/></button></aside>}

function SocialCards(){const cards=[{t:"اطلاعیه‌ها و تخفیف‌ها",src:"/pdp/Vector.png"},{t:"جدیدترین محصولات",src:"/pdp/logos_telegram.png"},{t:"گفتگو با کارشناسان",src:"/Vector.png"},{t:"استایل‌های روز",src:"/skill-icons_instagram.png"}];return <section className="mx-auto mt-[135px] grid max-w-[940px] gap-6 sm:grid-cols-2">{cards.map(c=><a href="#" key={c.t} className="flex h-[155px] items-center justify-between rounded-[13px] bg-[#f5f6f8] px-9"><span className="flex flex-row-reverse items-center gap-4 text-[17px] font-medium"><Image src="/about/Group.png" alt="" width={28} height={28}/>{c.t}</span><span className="grid h-16 w-16 place-items-center rounded-full bg-white"><Image src={c.src} alt="" width={42} height={42}/></span></a>)}</section>}
