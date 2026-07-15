import Image from "next/image";
import Link from "next/link";

export default function ManufacturingSection() {
  return (
    <section className="relative min-h-[400px] overflow-hidden sm:min-h-[480px]">
      <Image
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80"
        alt="کارگاه تولید کفش"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative mx-auto flex min-h-[400px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[480px] sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          کیفیت ساخت، افتخار ما
        </h2>
        <p className="mt-6 text-sm leading-8 text-gray-200 sm:text-base">
          ما با همکاری بهترین کارگاه‌های تولید کفش در جهان، محصولاتی با بالاترین
          استانداردهای کیفیت ارائه می‌دهیم. هر جفت کفش پیش از ارسال، از نظر
          دوام، راحتی و ظاهر بررسی می‌شود تا تجربه‌ای بی‌نقص برای شما فراهم
          شود.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          بیشتر بدانید
        </Link>
      </div>
    </section>
  );
}
