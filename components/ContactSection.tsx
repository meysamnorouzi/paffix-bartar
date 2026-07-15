import { Clock3, MapPin, Phone } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/SocialIcons";
import { contactInfo, faqItems } from "@/lib/data";
import FAQ from "./FAQ";

function MapArtwork() {
  return (
    <div
      className="relative h-[300px] overflow-hidden rounded-[8px] bg-[#e8ebe4] sm:h-[361px]"
      aria-label="موقعیت کارخانه پافیکس برتر روی نقشه"
      role="img"
    >
      <div className="absolute inset-0 opacity-90 [background-image:linear-gradient(25deg,transparent_46%,#c8cdc4_47%,#c8cdc4_49%,transparent_50%),linear-gradient(95deg,transparent_47%,#c8cdc4_48%,#c8cdc4_50%,transparent_51%)] [background-size:150px_110px,180px_130px]" />
      <div className="absolute -left-10 top-[42%] h-6 w-[120%] -rotate-[8deg] bg-[#f7f7f3] shadow-[0_0_0_1px_#d3d6cf]" />
      <div className="absolute -top-20 left-[47%] h-[150%] w-8 rotate-[23deg] bg-[#f8f8f5] shadow-[0_0_0_1px_#d3d6cf]" />
      <div className="absolute -right-14 top-[14%] h-4 w-[92%] rotate-[14deg] bg-[#f5e37f] shadow-[0_0_0_1px_#d2c96f]" />
      <div className="absolute left-[43%] top-[44%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <MapPin className="h-16 w-16 fill-[#e72e36] text-[#c51f26] drop-shadow-md" strokeWidth={1.5} />
        <span className="mt-1 rounded bg-white/90 px-2 py-1 text-[10px] font-medium text-[#555] shadow-sm">
          پافیکس برتر
        </span>
      </div>
      <div className="absolute left-3 top-3 flex overflow-hidden rounded-[3px] bg-white text-[10px] text-[#555] shadow-sm">
        <span className="border-r border-[#ddd] px-3 py-2">نقشه</span>
        <span className="px-3 py-2">ماهواره</span>
      </div>
      <div className="absolute bottom-2 right-3 text-[9px] text-[#6f746e]">تهران، ایران</div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white pb-[102px] pt-[118px]">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[636px_1fr] lg:gap-[100px]">
          <MapArtwork />

          <div className="text-right">
            <h2 className="mb-8 text-[28px] font-medium text-[#171717]">ارتباط با ما</h2>
            <dl className="space-y-6 text-[14px] leading-8 text-[#686868]">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#17467e]" />
                <div>
                  <dt className="font-medium text-[#333]">آدرس کارخانه</dt>
                  <dd>{contactInfo.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#17467e]" />
                <div>
                  <dt className="font-medium text-[#333]">تماس</dt>
                  <dd className="flex flex-wrap gap-x-5" dir="ltr">
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#17467e]" />
                <div>
                  <dt className="font-medium text-[#333]">ساعات پاسخگویی</dt>
                  <dd>{contactInfo.workingHours}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-7 flex items-center gap-3">
              <span className="ml-2 text-[14px] text-[#333]">شبکه‌های مجازی</span>
              <a href="#" aria-label="اینستاگرام" className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#f5a623] via-[#e1306c] to-[#6245c5] text-white">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="تلگرام" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#269ed8] text-white">
                <TelegramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[148px]">
          <FAQ items={faqItems.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
