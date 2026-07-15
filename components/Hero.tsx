import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
      <Image
        src="https://images.unsplash.com/photo-1606107557195-0a74c4b6264b?w=1920&q=80"
        alt="کفش اسپرت مشکی"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

      <div className="relative mx-auto flex h-full min-h-[520px] max-w-7xl items-center px-4 sm:min-h-[600px] sm:px-6 lg:min-h-[680px] lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-blue-200 sm:text-base">
            کیفیت برتر، دوام ماندگار
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            برای سال‌ها،
            <br />
            نه برای یک فصل
          </h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-200 sm:text-base">
            کفش‌هایی که با شما قدم می‌زنند. از پیاده‌روی روزانه تا ورزش حرفه‌ای،
            با بهترین برندهای جهان.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-8 hidden h-24 w-24 border border-white/30 lg:block" />
      <div className="pointer-events-none absolute top-24 right-8 hidden h-16 w-16 border border-white/20 lg:block" />
    </section>
  );
}
