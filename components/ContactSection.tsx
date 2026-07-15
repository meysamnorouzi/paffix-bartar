import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/SocialIcons";
import { contactInfo, faqItems } from "@/lib/data";
import FAQ from "./FAQ";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-xl border border-gray-border bg-white shadow-sm">
            <iframe
              title="موقعیت فروشگاه"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.967641462!2d51.404343!3d35.757522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzI3LjEiTiA1McKwMjQnMTUuNiJF!5e0!3m2!1sfa!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full sm:h-[400px]"
            />
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">
              ارتباط با ما
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-7 text-gray-600 sm:text-base">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <div className="text-sm text-gray-600 sm:text-base">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="block hover:text-accent"
                  >
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="block hover:text-accent"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-600 hover:text-accent sm:text-base"
                >
                  {contactInfo.email}
                </a>
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

            <div className="mt-10">
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
