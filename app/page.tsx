import Hero from "@/components/Hero";
import BenefitsMarquee from "@/components/BenefitsMarquee";
import CategoryGrid from "@/components/CategoryGrid";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureBanner from "@/components/FeatureBanner";
import TopCollections from "@/components/TopCollections";
import ManufacturingSection from "@/components/ManufacturingSection";
import { ContactInfo, FaqSection } from "@/components/ContactSection";
import SocialFollow from "@/components/SocialFollow";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsMarquee />
      <CategoryGrid />
      <ProductShowcase />
      <FeatureBanner />
      <TopCollections />
      <ManufacturingSection />
      <ContactInfo className="pb-[154px] pt-[142px]" />
      <SocialFollow />
      <FaqSection className="pb-[64px] pt-[53px]" />
    </>
  );
}
