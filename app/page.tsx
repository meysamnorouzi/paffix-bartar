import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureBanner from "@/components/FeatureBanner";
import TopCollections from "@/components/TopCollections";
import ManufacturingSection from "@/components/ManufacturingSection";
import ContactSection from "@/components/ContactSection";

const benefits=["ارسال به تمام ایران","ضمانت ۶ ماهه","رضایت هزاران مشتری","تضمین اصالت کالا","پشتیبانی سریع","تضمین بهترین قیمت","تضمین کیفیت محصول"];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-b border-[#eee] bg-white"><div className="mx-auto grid min-h-[115px] max-w-[1440px] grid-cols-2 items-center gap-y-5 px-5 text-center text-[11px] text-[#555] sm:grid-cols-4 lg:grid-cols-7">{benefits.map(item=><span key={item}>{item}</span>)}</div></section>
      <CategoryGrid />
      <ProductShowcase />
      <FeatureBanner />
      <TopCollections />
      <ManufacturingSection />
      <ContactSection />
    </>
  );
}
