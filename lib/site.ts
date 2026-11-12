import { PHONE, social } from "./contact";

/** Public origin of the site. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pafixbartar.ir").replace(/\/$/, "");

export const SITE_NAME = "پافیکس برتر";
export const SITE_NAME_EN = "Pafix Bartar";
export const SITE_DESCRIPTION =
  "پافیکس برتر، تولیدکننده و فروشنده عمده کفش با بیش از ۱۰ سال تجربه؛ کتانی مردانه، زنانه و ست با کیفیت ماندگار، ارسال به سراسر ایران و ضمانت ۶ ماهه.";
export const SITE_KEYWORDS = [
  "پافیکس برتر",
  "تولیدی کفش",
  "پخش عمده کفش",
  "کفش عمده",
  "کتانی مردانه",
  "کتانی زنانه",
  "کفش اسپرت",
  "کارخانه کفش تهران",
  "خرید عمده کتانی",
];
export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME };

export const ADDRESS = {
  streetAddress: "فلکه دوم خیابان داریوش سلمانی، بهارستان ۴، پلاک ۱۰۰",
  addressLocality: "گلستان",
  addressRegion: "تهران",
  addressCountry: "IR",
};

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  url: SITE_URL,
  logo: absoluteUrl("/icon.png"),
  description: SITE_DESCRIPTION,
  telephone: `+98${PHONE.slice(1)}`,
  address: { "@type": "PostalAddress", ...ADDRESS },
  sameAs: [social.instagram.href, social.telegram.href, social.rubika.href],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+98${PHONE.slice(1)}`,
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["fa"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fa-IR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
