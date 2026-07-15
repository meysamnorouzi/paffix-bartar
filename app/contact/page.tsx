import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { contactInfo, faqItems } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباطی با فروشگاه کفش‌پلاس. آدرس، تلفن و فرم تماس.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="تماس با ما"
        description="ما همیشه آماده پاسخگویی به سوالات شما هستیم."
        breadcrumb="خانه / تماس با ما"
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xl font-bold text-navy">
                اطلاعات تماس
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-7 text-gray-600 sm:text-base">
                    {contactInfo.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <div className="text-sm text-gray-600 sm:text-base">
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.mobile}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-gray-600 sm:text-base">
                    {contactInfo.email}
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                {contactInfo.workingHours}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  aria-label="اینستاگرام"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-hover"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="تلگرام"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-hover"
                >
                  <TelegramIcon className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 overflow-hidden rounded-xl border border-gray-border">
                <iframe
                  title="موقعیت فروشگاه"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.967641462!2d51.404343!3d35.757522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzI3LjEiTiA1McKwMjQnMTUuNiJF!5e0!3m2!1sfa!2s!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-bold text-navy">
                ارسال پیام
              </h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-navy"
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-gray-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-navy"
                  >
                    ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-gray-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-navy"
                  >
                    پیام
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="پیام خود را بنویسید..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto sm:px-10"
                >
                  ارسال پیام
                </button>
              </form>

              <div className="mt-12">
                <FAQ items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
