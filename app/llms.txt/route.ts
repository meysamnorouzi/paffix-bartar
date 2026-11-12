import { products } from "@/lib/data";
import { PHONE_FA, social } from "@/lib/contact";
import { ADDRESS, SITE_DESCRIPTION, SITE_NAME, SITE_NAME_EN, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Plain-text site summary for AI assistants (https://llmstxt.org). */
export function GET() {
  const productLines = products
    .map((p) => `- [${p.name}](${absoluteUrl(`/products/${p.slug}/`)}): ${p.tag}، سایز ${p.specs.find((s) => s.label === "سایز")?.value ?? p.sizes.join("، ")}`)
    .join("\n");

  const body = `# ${SITE_NAME} (${SITE_NAME_EN})

> ${SITE_DESCRIPTION}

${SITE_NAME} تولیدکننده کفش (کتانی مردانه، زنانه و ست) است و محصولات را به‌صورت عمده (سری ۸ جفتی) می‌فروشد. سفارش و استعلام قیمت از طریق پیام‌رسان‌ها یا تماس تلفنی انجام می‌شود؛ قیمت‌ها روی سایت منتشر نمی‌شوند.

## صفحات اصلی

- [خانه](${absoluteUrl("/")}): معرفی برند، کالکشن‌ها و محصولات منتخب
- [محصولات](${absoluteUrl("/products/")}): فهرست کامل محصولات با فیلتر زنانه، مردانه و ست
- [درباره ما](${absoluteUrl("/about/")}): داستان، ارزش‌ها و تعهد پافیکس برتر به کیفیت
- [ارتباط با ما](${absoluteUrl("/contact/")}): راه‌های تماس، ساعت پاسخگویی و آدرس کارخانه

## محصولات

${productLines}

## اطلاعات تماس

- تلفن: ${PHONE_FA}
- ساعت پاسخگویی: همه روزه ۱۰ الی ۲۱
- آدرس کارخانه: ${ADDRESS.addressRegion}، شهرستان بهارستان، شهر ${ADDRESS.addressLocality}، ${ADDRESS.streetAddress}
- روبیکا: ${social.rubika.href}
- تلگرام: ${social.telegram.href}
- اینستاگرام: ${social.instagram.href}
- واتساپ: ${social.whatsapp.href}

## خدمات

- ارسال به سراسر ایران
- ضمانت ۶ ماهه
- تضمین اصالت کالا
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
