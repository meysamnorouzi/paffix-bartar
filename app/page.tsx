import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureBanner from "@/components/FeatureBanner";
import TopCollections from "@/components/TopCollections";
import ManufacturingSection from "@/components/ManufacturingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductShowcase />
      <FeatureBanner />
      <TopCollections />
      <ManufacturingSection />
      <ContactSection />
    </>
  );
}
