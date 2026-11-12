import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { external, social } from "@/lib/contact";

const channels = [
  { ...social.rubika, text: "اخبار برند پیشنهادهای ویژه" },
  { ...social.telegram, text: "اطلاع‌رسانی موجودی جدید" },
  { ...social.whatsapp, text: "ارتباط نزدیک تر با پشتیبانی" },
  { ...social.instagram, text: "معرفی دقیق تری از مدل‌ها" },
];

export default function SocialFollow() {
  return (
    <section className="bg-[#d6e3f4] px-5 pb-[100px] pt-[78px] lg:px-0">
      <div className="mx-auto max-w-[1075px] text-center">
        <h2 className="text-[24px] font-medium leading-[38px] text-[#111]">
          همیشه یک قدم جلوتر باشید
        </h2>
        <p className="mt-[8px] text-[18px] font-light leading-[28px] text-[#111]">
          جدیدترین محصولات، پیشنهادهای استایل و تخفیف‌های ویژه را از طریق شبکه‌های اجتماعی دنبال کنید.
        </p>
        <ul className="mt-[45px] grid gap-[28.6px] sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <li key={channel.name}>
              <a
                href={channel.href}
                {...external}
                aria-label={`${channel.name} پافیکس برتر`}
                className="flex h-[118px] flex-col justify-center gap-[6px] rounded-[16px] bg-white pl-[24px] pr-[25px] text-right transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(23,70,126,0.12)]"
              >
                <span className="flex items-center gap-[9px] text-[18px] font-medium leading-[30px] text-[#111]">
                  <Image src={channel.icon} alt="" width={32} height={32} className="h-8 w-8" />
                  {channel.name}
                </span>
                <span className="flex items-center justify-between text-[16px] leading-[26px] text-[#555]">
                  {channel.text}
                  <ArrowLeft className="h-[18px] w-[18px] shrink-0 text-[#111]" strokeWidth={1.75} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
