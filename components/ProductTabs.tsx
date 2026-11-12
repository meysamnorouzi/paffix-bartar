import type { ReactNode } from "react";
import type { Product } from "@/lib/data";
import ProductCarousel from "./ProductCarousel";

const tabs = [
  { id: "intro", label: "معرفی محصول" },
  { id: "specs", label: "مشخصات" },
  { id: "related", label: "محصولات مشابه" },
] as const;

type TabId = (typeof tabs)[number]["id"];

interface ProductTabsProps {
  product: Product;
  related: Product[];
}

/**
 * The design renders every tab panel stacked on the page, each one headed by
 * the tab bar with its own tab highlighted. Tabs act as in-page anchors.
 */
export default function ProductTabs({ product, related }: ProductTabsProps) {
  return (
    <div className="mt-[83px]">
      <TabSection id="intro">
        <PanelRow title="معرفی محصول">
          <p className="max-w-[1003px] text-[18px] md:text-justify font-light leading-[36px] text-[#111]">
            {product.description}
          </p>
        </PanelRow>
      </TabSection>

      <TabSection id="specs" className="mt-[120.5px]">
        <PanelRow title="مشخصات">
          <dl className="-mt-[21px] w-full max-w-[672px] text-[18px] leading-[36px] text-[#111]">
            {product.specs.map((spec, i) => (
              <div key={spec.label} className="grid grid-cols-[137px_1fr]">
                <dt className="h-[50px] pt-[14px]">{spec.label}</dt>
                <dd
                  className={`h-[50px] pt-[14px] ${
                    i < product.specs.length - 1 ? "border-b border-[#f1f1f3]" : ""
                  }`}
                >
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </PanelRow>
      </TabSection>

      <TabSection id="related" className="mt-[122.5px]">
        <div className="mt-9">
          <ProductCarousel products={related} />
        </div>
      </TabSection>
    </div>
  );
}

function TabSection({
  id,
  className = "",
  children,
}: {
  id: TabId;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-tab`} className={`scroll-mt-[120px] ${className}`}>
      <nav aria-label="اطلاعات محصول" className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max gap-1 border-b sm:gap-[21px] border-[#e9ebf8]">
          {tabs.map((tab) => {
            const active = tab.id === id;
            return (
              <li key={tab.id}>
                <a
                  id={active ? `${id}-tab` : undefined}
                  href={`#${tab.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`relative -mb-px block whitespace-nowrap px-3 pb-[13.5px] text-[16px] leading-[24px] sm:pl-[35px] sm:pr-6 sm:text-[18px] transition-colors ${
                    active
                      ? "text-[#111] after:absolute after:inset-x-0 after:bottom-0 after:h-[6px] after:rounded-t-[6px] after:bg-[#1c5df7]"
                      : "text-[#111] hover:text-[#1c5df7]"
                  }`}
                >
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {children}
    </section>
  );
}

function PanelRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 pt-[39px] md:flex-row md:gap-[15px]">
      <h2 className="shrink-0 text-[18px] leading-[36px] text-[#111] md:w-[168px] md:pl-[35px] md:pr-6 md:text-center">
        {title}
      </h2>
      {children}
    </div>
  );
}
