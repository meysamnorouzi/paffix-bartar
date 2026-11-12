import Image from "next/image";
import FAQ from "./FAQ";
import { PHONE, PHONE_FA, external, iconRow } from "@/lib/contact";
import FactoryMap from "./FactoryMap";


const faq = [
  {
    id: "1",
    question: "چگونه سفارش خود را ثبت کنم؟",
    answer:
      "محصول موردنظر را انتخاب کنید و پس از تعیین سایز، سفارش خود را از طریق پیام‌رسان‌ها یا تماس با واحد فروش ثبت کنید.",
  },
  {
    id: "2",
    question: "آیا امکان خرید حضوری وجود دارد؟",
    answer: "برای هماهنگی خرید حضوری با واحد پشتیبانی تماس بگیرید.",
  },
  {
    id: "3",
    question: "آیا امکان مرجوعی یا تعویض کالا وجود دارد؟",
    answer: "بله؛ کالای استفاده‌نشده مطابق شرایط فروشگاه قابل تعویض یا مرجوعی است.",
  },
];

export function MapArtwork({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`relative isolate z-0 w-full overflow-hidden rounded-[12px] bg-[#dfdfdf] ${
        large ? "h-[390px] md:h-[505px]" : "aspect-[636/361]"
      }`}
    >
      <FactoryMap />
    </div>
  );
}

export function ContactInfo({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-white px-5 lg:px-0 ${className}`}>
      <div
        dir="ltr"
        className="mx-auto grid max-w-[1296px] items-center gap-14 lg:grid-cols-[636px_1fr] lg:gap-[101px]"
      >
        <MapArtwork />
        <div dir="rtl" className="text-right lg:pr-[11px]">
          <h2 className="text-[32px] font-bold leading-[50px] text-[#111]">ارتباط با ما</h2>
          <dl className="mt-[22px] text-[18px] text-[#111]">
            <InfoRow label="آدرس کارخانه:" labelClassName="pt-[11px]" className="pb-[11px]">
              تهران، شهرستان بهارستان، شهر گلستان
              <br />
              فلکه دوم خیابان داریوش سلمانی بهارستان ۴ پلاک ۱۰۰
            </InfoRow>
            <InfoRow label="تماس:" className="py-[12px]">
              <a href={`tel:${PHONE}`} className="block transition hover:text-[#1c5df7]">
                {PHONE_FA}
              </a>
            </InfoRow>
            <InfoRow label="فضای مجازی:" className="items-center pt-[16px]" last>
              <span className="flex items-center gap-[18px]">
                {iconRow.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    {...external}
                    aria-label={social.name}
                    className="transition hover:scale-110"
                  >
                    <Image src={social.icon} alt="" width={32} height={32} className="h-8 w-8" />
                  </a>
                ))}
              </span>
            </InfoRow>
          </dl>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  className = "",
  labelClassName = "",
  last = false,
  children,
}: {
  label: string;
  className?: string;
  labelClassName?: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid grid-cols-[110px_1fr] items-start leading-[35px] sm:grid-cols-[139px_1fr] ${
        last ? "" : "border-b border-[#e9ebf8]"
      } ${className}`}
    >
      <dt className={`font-medium ${labelClassName}`}>{label}</dt>
      <dd className="font-light text-[#3d3d3d]">{children}</dd>
    </div>
  );
}

export function FaqSection({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-white px-5 lg:px-0 ${className}`}>
      <div className="mx-auto max-w-[1296px]">
        <FAQ items={faq} title="سوالات متداول" />
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <>
      <ContactInfo className="pt-[118px]" />
      <FaqSection className="pb-[105px] pt-[125px]" />
    </>
  );
}
