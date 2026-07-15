import Image from "next/image";
import Link from "next/link";

export default function ManufacturingSection() {
  return (
    <section className="relative h-[443px] overflow-hidden">
      <Image
        src="/eye/Frame 1430104262.png"
        alt="کارخانه تولیدی پافیکس برتر"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="relative mx-auto flex h-full max-w-[1296px] flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="max-w-[805px] text-[32px] font-medium leading-[1.65]">
          پافیکس برتر بیش از ۱۰ سال تجربه در صنعت کفش، تولید کننده محصولات با
          کیفیت و ماندگار است
        </h2>
        <div className="mt-8 flex items-center gap-5">
          <Link
            href="/products"
            className="inline-flex h-[48px] min-w-[150px] items-center justify-center rounded-full bg-[#2f72b9] px-6 text-[14px] text-white"
          >
            مشاهده محصولات
          </Link>
          <Link
            href="/about"
            className="inline-flex h-[48px] min-w-[118px] items-center justify-center rounded-full border border-white/70 px-6 text-[14px] text-white"
          >
            درباره ما
          </Link>
        </div>
      </div>
    </section>
  );
}
