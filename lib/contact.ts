/** Single source of truth for the brand's contact details and social channels. */

export const PHONE = "09120302149";
export const PHONE_FA = "۰۹۱۲۰۳۰۲۱۴۹";

export const social = {
  rubika: {
    name: "روبیکا",
    handle: "@pafixbartarr",
    href: "https://rubika.ir/pafixbartarr",
    icon: "/social/rubika.png",
    iconTransparent: "/Vector.png",
  },
  telegram: {
    name: "تلگرام",
    handle: "@pafixxbartar",
    href: "https://t.me/pafixxbartar",
    icon: "/social/telegram.png",
    iconTransparent: "/logos_telegram.png",
  },
  instagram: {
    name: "اینستاگرام",
    handle: "@shoes_pafixbartar",
    href: "https://www.instagram.com/shoes_pafixbartar",
    icon: "/social/instagram.png",
    iconTransparent: "/skill-icons_instagram.png",
  },
  whatsapp: {
    name: "واتساپ",
    handle: "۰۹۳۵۹۸۸۵۶۹۷",
    href: "https://wa.me/989359885697",
    icon: "/social/whatsapp.png",
  },
} as const;

/** Order used by the small icon rows (contact block, footer). */
export const iconRow = [social.instagram, social.telegram, social.rubika];

/** Props that open an external channel safely in a new tab. */
export const external = { target: "_blank", rel: "noopener noreferrer" } as const;
