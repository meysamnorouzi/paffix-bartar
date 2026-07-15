import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "آشنایی با فروشگاه کفش‌پلاس، تاریخچه و ارزش‌های ما.",
};

const values = [
  {
    title: "کیفیت",
    description: "ارائه محصولات با بالاترین استانداردهای کیفیت از برندهای معتبر.",
  },
  {
    title: "اعتماد",
    description: "شفافیت در قیمت‌گذاری و ضمانت اصالت تمامی محصولات.",
  },
  {
    title: "خدمات",
    description: "پشتیبانی ۲۴ ساعته و پاسخگویی سریع به نیازهای مشتریان.",
  },
  {
    title: "تنوع",
    description: "گسترده‌ترین مجموعه کفش مردانه، زنانه و ورزشی.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="درباره کفش‌پلاس"
        description="بیش از یک دهه تجربه در ارائه بهترین کفش‌های جهان به مشتریان ایرانی."
        breadcrumb="خانه / درباره ما"
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80"
                alt="فروشگاه کفش"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy">داستان ما</h2>
              <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                کفش‌پلاس در سال ۱۳۹۳ با هدف ارائه کفش‌های باکیفیت و اورجینال
                تأسیس شد. ما معتقدیم که یک جفت کفش خوب می‌تواند تجربه روزمره
                شما را متحول کند. امروز با بیش از ۵۰۰ مدل کفش از برندهای
                معتبر جهانی، یکی از بزرگ‌ترین فروشگاه‌های آنلاین کفش در ایران
                هستیم.
              </p>
              <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                تیم ما متشکل از متخصصان حوزه مد و ورزش است که با دقت بالا
                محصولات را انتخاب و بررسی می‌کنند تا بهترین انتخاب را به
                مشتریان ارائه دهند.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-border bg-gray-light p-6"
              >
                <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl bg-navy p-8 text-center text-white sm:p-12">
            <p className="text-3xl font-bold sm:text-4xl">+۱۰</p>
            <p className="mt-2 text-sm text-gray-300 sm:text-base">
              سال تجربه در صنعت کفش
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold sm:text-3xl">+۵۰۰</p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  مدل کفش
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold sm:text-3xl">+۱۰K</p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  مشتری راضی
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold sm:text-3xl">+۳۰</p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  برند معتبر
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
