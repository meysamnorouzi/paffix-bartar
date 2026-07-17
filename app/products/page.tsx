import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, CircleArrowLeft, ListFilter } from "lucide-react";
import ManufacturingSection from "@/components/ManufacturingSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = { title: "محصولات", description: "محصولات پافیکس برتر" };

const catalog = [
  { name:"اکو", image:"/plp/Rectangle 39992.png", category:"men", tag:"مردانه", colors:["#111", "#e7e9e8"] },
  { name:"نایک ۷۲K", image:"/plp/Rectangle 39992 (1).png", category:"women", tag:"زنانه", colors:["#7d523c", "#d7a9a8"] },
  { name:"نایک V5K", image:"/plp/Rectangle 39992 (2).png", category:"women", tag:"زنانه", colors:["#f45dc0", "#55b9ee"] },
  { name:"آدیداس", image:"/plp/Rectangle 39992 (4).png", category:"men", tag:"مردانه", colors:["#3155a8", "#fff"] },
  { name:"نایک ونس", image:"/plp/Rectangle 39992 (2).png", category:"women", tag:"زنانه", colors:["#12375c", "#e9a72c"] },
  { name:"جردن هالووین", image:"/plp/Rectangle 39992 (3).png", category:"sport", tag:"مردانه و زنانه", colors:["#111", "#724ec4"] },
  { name:"فشن NA", image:"/plp/Rectangle 39992 (4).png", category:"men", tag:"مردانه", colors:["#111", "#e7e7e7"] },
  { name:"نایک دراگون", image:"/plp/Rectangle 39992 (5).png", category:"women", tag:"مردانه و زنانه", colors:["#67847b", "#e6e8e6"] },
  { name:"کلونی کین", image:"/plp/Rectangle 39992 (6).png", category:"women", tag:"زنانه", colors:["#5d7779", "#eff2f2"] },
  { name:"نایک دراگون ماندگار", image:"/plp/Rectangle 39992 (7).png", category:"women", tag:"زنانه", colors:["#25c98e", "#f2a85d"] },
];

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{category?:string}> }) {
  const { category } = await searchParams;
  const products = category ? catalog.filter(item => item.category === category) : catalog;
  return <>
    <section className="mx-auto max-w-[1296px] px-5 pb-[142px] pt-[105px] lg:px-0">
      <div className="flex items-center gap-3 text-[12px] text-[#aaa]"><Link href="/">خانه</Link><ChevronLeft className="h-3 w-3"/><span className="border-b border-[#2f72b9] pb-1 text-[#2f72b9]">محصولات</span></div>

      <div className="relative mt-[24px] overflow-hidden rounded-[15px]">
        <Image src="/eye/Rectangle 40059.png" alt="اصالت کالای تضمین‌شده" width={1296} height={329} priority className="h-auto w-full"/>
        <div className="absolute inset-y-0 left-[8%] flex flex-col items-center justify-center text-white sm:left-[13%]">
          <h1 className="text-[18px] font-bold sm:text-[27px]">اصالت کالای تضمین‌شده</h1>
          <Link href="#catalog" className="mt-5 flex items-center gap-3 text-[12px] text-white/80 sm:text-[17px]"><CircleArrowLeft className="h-5 w-5 fill-white text-[#2f72b9] sm:h-7 sm:w-7"/>از انتخاب تا تحویل</Link>
        </div>
      </div>

      <div id="catalog" dir="ltr" className="mt-[42px] flex flex-wrap items-center justify-between gap-6">
        <button className="flex h-[55px] items-center gap-4 rounded-full border border-[#edf0f4] px-7 text-[15px] text-[#8a8a8a] shadow-[0_2px_10px_rgba(0,0,0,.025)]"><ListFilter className="h-5 w-5"/>مرتب سازی</button>
        <div dir="rtl" className="flex flex-wrap items-center gap-[14px]">
          <Filter href="/products" active={!category}>همه</Filter><Filter href="/products?category=women" active={category==="women"}>زنانه</Filter><Filter href="/products?category=men" active={category==="men"}>مردانه</Filter><Filter href="/products?category=sport" active={category==="sport"}>ست مردانه و زنانه</Filter>
        </div>
      </div>

      <div className="mt-[43px] grid grid-cols-2 gap-x-[24px] gap-y-[51px] md:grid-cols-3 lg:grid-cols-4">
        {products.map((product,index)=><Product key={`${product.name}-${index}`} {...product}/>) }
      </div>

      <nav aria-label="صفحه‌بندی" dir="ltr" className="mt-[75px] flex items-center justify-center gap-4 text-[12px] text-[#999]"><ChevronLeft className="h-3 w-3"/><span className="grid h-7 w-7 place-items-center rounded-full bg-[#2f72b9] text-white">۱</span><span>۲</span><span>۳</span><span>۴</span><ChevronRight className="h-3 w-3"/></nav>
    </section>
    <ManufacturingSection />
    <ContactSection />
  </>;
}

function Filter({href,active,children}:{href:string;active:boolean;children:React.ReactNode}) { return <Link href={href} className={`grid h-[55px] place-items-center rounded-full border px-7 text-[15px] transition ${active?"border-[#2f72b9] bg-[#eef5fc] text-[#2f72b9]":"border-[#edf0f4] text-[#999] hover:border-[#2f72b9]"}`}>{children}</Link> }

function Product({name,image,tag,colors}:{name:string;image:string;tag:string;colors:string[]}) { return <article className="min-w-0 text-right"><Link href="/products/adidas-sport-men" className="block overflow-hidden rounded-[14px]"><Image src={image} alt={name} width={307} height={335} className="h-auto w-full transition duration-500 hover:scale-[1.025]"/></Link><h2 className="mt-[13px] text-[15px] font-medium text-[#242424]">{name}</h2><div className="mt-[13px] flex items-center justify-between"><div className="flex items-center"><span className="ml-1 text-[11px] text-[#aaa]">+۲</span>{colors.map(c=><i key={c} style={{backgroundColor:c}} className="-mr-1 h-5 w-5 rounded-full border-2 border-white shadow-sm"/>)}</div><span className="rounded-full bg-[#f1f6fc] px-4 py-[7px] text-[10px] text-[#7894b5]">{tag}</span></div><Link href="/products/adidas-sport-men" className="mt-[15px] flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#e5e8eb] text-[11px] text-[#999] shadow-[0_2px_8px_rgba(0,0,0,.025)]">اطلاعات بیشتر <ArrowLeft className="h-3 w-3"/></Link></article> }
