import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import {
  getCardImage,
  getProductBySlug,
  getRelatedProducts,
  products,
  type Product,
} from "@/lib/data";
import ManufacturingSection from "@/components/ManufacturingSection";
import { ContactInfo, FaqSection } from "@/components/ContactSection";
import CopyPhone from "@/components/CopyPhone";
import ProductGallery from "@/components/ProductGallery";
import ProductTabs from "@/components/ProductTabs";
import SocialFollow from "@/components/SocialFollow";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";
import { PHONE, external, social } from "@/lib/contact";


type Props = { params: Promise<{ slug: string }> };

// Only the products known at build time exist (required for static export).
export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "محصول یافت نشد", robots: { index: false } };
  const path = `/products/${p.slug}/`;
  const description = p.description.length > 160 ? `${p.description.slice(0, 157)}…` : p.description;
  const image = { url: getCardImage(p), alt: p.name };
  return {
    title: `${p.name} | فروش عمده`,
    description,
    keywords: [p.name, p.shortName, p.tag, "فروش عمده کفش", "پافیکس برتر"],
    alternates: { canonical: path },
    openGraph: { type: "website", title: p.name, description, url: path, images: [image] },
    twitter: { card: "summary_large_image", title: p.name, description, images: [image.url] },
  };
}

function productJsonLd(product: Product) {
  const url = absoluteUrl(`/products/${product.slug}/`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}#product`,
      name: product.name,
      description: product.description,
      url,
      image: [getCardImage(product), ...product.gallery].map((src) => absoluteUrl(src)),
      category: product.tag,
      brand: { "@type": "Brand", name: "پافیکس برتر" },
      manufacturer: { "@id": `${absoluteUrl("/")}#organization` },
      additionalProperty: product.specs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "خانه", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "محصولات", item: absoluteUrl("/products/") },
        { "@type": "ListItem", position: 3, name: product.name, item: url },
      ],
    },
  ];
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(slug, 8);

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <div className="mx-auto max-w-[1296px] px-5 pb-[221px] pt-[131px] lg:px-0">
        <div className="lg:pl-[69px] lg:pr-[56px]">
          <Breadcrumb product={product} />
          <section className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[658px_463px] lg:gap-[50px]">
            <ProductGallery name={product.name} images={product.gallery} />
            <ProductSummary product={product} />
          </section>
        </div>

        <ProductTabs product={product} related={related} />
      </div>
      <ManufacturingSection />
      <ContactInfo className="pb-[76px] pt-[135px]" />
      <SocialFollow />
      <FaqSection className="pb-[64px] pt-[53px]" />
    </>
  );
}

function Breadcrumb({ product }: { product: Product }) {
  return (
    <nav aria-label="مسیر صفحه">
      <ol className="flex flex-wrap items-center gap-[11px] text-[16px] font-light leading-[24px] text-[#6a727f]">
        <li>
          <Link href="/" className="transition hover:text-[#184177]">
            خانه
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronLeft className="h-[18px] w-[18px] text-[#333]" strokeWidth={2} />
        </li>
        <li>
          <Link href="/products" className="transition hover:text-[#184177]">
            {product.breadcrumbCategory}
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronLeft className="h-[18px] w-[18px] text-[#333]" strokeWidth={2} />
        </li>
        <li>
          <span
            aria-current="page"
            className="text-[16.5px] font-medium text-[#184177] underline decoration-1 underline-offset-[7px]"
          >
            {product.name}
          </span>
        </li>
      </ol>
    </nav>
  );
}

function ProductSummary({ product }: { product: Product }) {
  return (
    <aside className="min-w-0 text-right text-[#111]">
      <h1 className="text-[20.5px] font-bold leading-[25px]">{product.name}</h1>

      <dl className="mt-[11.5px] text-[18px] font-medium">
        <div className="flex h-[32px] items-center gap-[7px]">
          <dt>فروش:</dt>
          <dd className="font-normal">{product.saleType}</dd>
        </div>
        <div className="mt-[3.5px] flex items-center gap-[22px]">
          <dt>سایزبندی:</dt>
          <dd dir="ltr" className="flex items-center gap-[6px]">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="grid h-[41px] w-[41px] place-items-center rounded-[10px] border border-[#e9ebf8] bg-[#fcfdff] text-[16px] font-normal text-[#606672]"
              >
                {size}
              </span>
            ))}
            {product.extraSizes ? (
              <span className="ml-px text-[18px] font-medium text-[#184177]">
                {product.extraSizes}
              </span>
            ) : null}
          </dd>
        </div>
      </dl>

      <div className="mt-4 rounded-[8px] border border-r-[11px] border-[#1c5df7] bg-[#eaf1fb] px-4 pb-[35px] pt-[22px] text-center lg:pl-9 lg:pr-[33px]">
        <h2 className="text-[16px] font-bold leading-[28px]">ارتباط با فروش</h2>
        <p className="mt-[4px] text-[15.5px] leading-[24px] text-[#3d3d3d]">
          سفارش و استعلام قیمت از طریق پیام رسان ها
        </p>
        <div className="mt-[15px] grid grid-cols-[187fr_179fr] gap-4">
          <MessengerLink href={social.rubika.href} label={social.rubika.name} icon={social.rubika.icon} />
          <MessengerLink href={social.telegram.href} label={social.telegram.name} icon={social.telegram.icon} />
        </div>
        <div className="mt-4">
          <CopyPhone phone={PHONE} />
        </div>
      </div>

      <h2 className="mt-[13px] text-[18px] leading-[30px]">ویژگی ها</h2>
      <ul className="mt-[8.5px] grid grid-cols-2 gap-2">
        {product.features.map((feature) => (
          <li
            key={feature.label}
            className="flex h-[72px] flex-col rounded-[8px] bg-[#f0f1f3] pl-3 pr-[18px] pt-[7.5px]"
          >
            <span className="text-[18px] leading-[26px]">{feature.label}</span>
            <span className="mt-[4.5px] text-[16px] leading-[26px] text-[#3d3d3d]">{feature.value}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-[18px] lg:pr-[13px]">
        <span aria-hidden="true" className="hidden h-px w-[100px] shrink-0 bg-[#e9ebf8] sm:block" />
        <a
          href="#specs"
          className="flex h-[44px] w-[222px] items-center justify-center gap-4 rounded-[12px] border border-[#f0f1f3] text-[17.5px] font-light text-[#3d3d3d] transition hover:border-[#1c5df7] hover:text-[#1c5df7]"
        >
          مشاهده همه ویژگی ها
          <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </a>
        <span aria-hidden="true" className="hidden h-px w-[100px] shrink-0 bg-[#e9ebf8] sm:block" />
      </div>
    </aside>
  );
}

function MessengerLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      {...external}
      className="flex h-[58px] items-center justify-center gap-3 rounded-[8px] bg-white text-[18px] transition hover:shadow-[0_4px_14px_rgba(28,93,247,0.15)]"
    >
      {label}
      <Image src={icon} alt="" width={26} height={26} className="h-[26px] w-[26px]" />
    </a>
  );
}
