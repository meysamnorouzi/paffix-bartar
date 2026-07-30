export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number;
  image: string;
  gallery: string[];
  category: string;
  tag: string;
  slug: string;
  description: string;
  saleType: string;
  sizes: string[];
  extraSizes?: string;
  colors: string[];
  features: { label: string; value: string }[];
  specs: ProductSpec[];
  breadcrumbCategory: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  href: string;
  span?: "wide";
}

export interface Collection {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export const categories: Category[] = [
  {
    id: "men",
    title: "کالکشن مردانه",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    href: "/products?category=men",
  },
  {
    id: "women",
    title: "کالکشن زنانه",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    href: "/products?category=women",
  },
  {
    id: "sport",
    title: "کفش‌های ورزشی و پیاده‌روی",
    image:
      "https://images.unsplash.com/photo-1606107557195-0a74c4b6264b?w=1200&q=80",
    href: "/products?category=sport",
    span: "wide",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "مدل اکو",
    shortName: "اکو",
    price: 0,
    image: "/plp/Rectangle 39992.png",
    gallery: ["/pdp/eco/main.png"],
    category: "men",
    tag: "مردانه",
    slug: "eco",
    description:
      "مدل اکو با رویه چرم بافت‌دار و زیره لاستیکی قهوه‌ای، انتخابی مناسب برای استفاده روزمره و استایل کژوال مردانه است.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#111", "#e7e9e8"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "چرم بافت‌دار" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "لاستیک قهوه‌ای" },
      { label: "ویژگی کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "چرم بافت‌دار" },
      { label: "سایز", value: "۴۱-۴۴" },
    ],
    breadcrumbCategory: "محصولات مردانه",
  },
  {
    id: "2",
    name: "مدل نایک SB",
    shortName: "نایک SB",
    price: 0,
    image: "/plp/nike-sb.jpg",
    gallery: [
      "/pdp/nike-sb/main.jpg",
      "/pdp/nike-sb/thumb-1.jpg",
      "/pdp/nike-sb/thumb-2.jpg",
      "/pdp/nike-sb/thumb-3.jpg",
      "/pdp/nike-sb/thumb-4.jpg",
      "/pdp/nike-sb/thumb-5.jpg",
    ],
    category: "men",
    tag: "مردانه",
    slug: "nike-sb",
    description:
      "مدل Nike SB به خاطر طراحی خاص و کیفیت ساخت، جایگاه ویژه‌ای در میان علاقه‌مندان به استایل خیابانی پیدا کرده است. رویه مقاوم، فرم استاندارد و زیره منعطف این مدل، تجربه‌ای راحت برای استفاده روزانه فراهم می‌کند و ظاهر اسپرت آن به‌راحتی با انواع استایل‌های کژوال هماهنگ می‌شود. Nike SB انتخابی مناسب برای افرادی است که به دنبال ترکیبی از دوام، راحتی و طراحی متفاوت هستند.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#c45a2c", "#1a2a4a"],
    features: [
      { label: "کفی", value: "اشتروبل EVA" },
      { label: "جنس", value: "سوپر اشبالت" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "زیره عطری" },
      { label: "ویژگی کفی", value: "اشتروبل EVA" },
      { label: "جنس", value: "سوپر اشبالت" },
      { label: "سایز", value: "۴۱-۴۴" },
    ],
    breadcrumbCategory: "محصولات مردانه",
  },
  {
    id: "3",
    name: "مدل نایک V2K",
    shortName: "نایک V2K",
    price: 0,
    image: "/plp/nike-v2k.png",
    gallery: [
      "/pdp/nike-v2k/main.png",
      "/pdp/nike-v2k/thumb-1.png",
      "/pdp/nike-v2k/thumb-2.png",
      "/pdp/nike-v2k/thumb-3.png",
      "/pdp/nike-v2k/thumb-4.png",
      "/pdp/nike-v2k/thumb-5.png",
    ],
    category: "women",
    tag: "زنانه",
    slug: "nike-v2k",
    description:
      "مدل Nike V2K با الهام از کفش‌های رانینگ کلاسیک طراحی شده و ظاهر نوستالژیک را با جزئیات مدرن ترکیب می‌کند. رویه مش تنفس‌پذیر در کنار لایه‌های متعدد، ظاهری منحصربه‌فرد ایجاد کرده و گردش هوا را بهبود می‌بخشد. کفی فومی ضخیم و نرم، راحتی و پایداری مناسبی هنگام پیاده‌روی فراهم می‌کند. این مدل برای استفاده روزانه، پیاده‌روی و استایل کژوال انتخابی کاربردی است.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#f45dc0", "#55b9ee"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "پارچه نیوبالانسی" },
    ],
    specs: [
      { label: "دسته بندی", value: "زنانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "سری", value: "۸ جفتی" },
      { label: "جنس زیره", value: "زیره PU رنگ شده" },
      { label: "ویژگی کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه فوم حوله‌ای و پارچه نیوبالانسی" },
      { label: "سایز", value: "۳۷-۴۰" },
    ],
    breadcrumbCategory: "محصولات زنانه",
  },
  {
    id: "4",
    name: "مدل نایک دراگون",
    shortName: "نایک دراگون",
    price: 0,
    image: "/plp/Rectangle 39992 (5).png",
    gallery: [
      "/pdp/nike-dragon/main.png",
      "/pdp/nike-dragon/thumb-1.jpg",
      "/pdp/nike-dragon/thumb-2.jpg",
      "/pdp/nike-dragon/thumb-3.jpg",
      "/pdp/nike-dragon/thumb-4.jpg",
      "/pdp/nike-dragon/thumb-5.jpg",
    ],
    category: "sport",
    tag: "مردانه و زنانه",
    slug: "nike-dragon",
    description:
      "مدل نایک دراگون با طراحی پویا و خطوط اسپرت، مناسب استایل‌های مدرن و پرانرژی است. ساختار سبک و استاندارد، راحتی استفاده روزانه را فراهم می‌کند و فرم ارگونومیک آن از حرکت طبیعی پا پشتیبانی می‌کند. ظاهر متمایز این مدل به‌راحتی با استایل‌های کژوال و خیابانی هماهنگ می‌شود.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    extraSizes: "+۴",
    colors: ["#67847b", "#e6e8e6"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "زیره nbr رویه ترکیبی" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه و زنانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "زیره nbr" },
      { label: "ویژگی کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه ترکیبی" },
      { label: "سایز", value: "۴۰-۴۴" },
    ],
    breadcrumbCategory: "محصولات زنانه و مردانه",
  },
  {
    id: "5",
    name: "مدل فشن N8",
    shortName: "فشن N8",
    price: 0,
    image: "/plp/Rectangle 39992 (4).png",
    gallery: [
      "/pdp/fashion-n8/main.png",
      "/pdp/fashion-n8/thumb-1.jpg",
      "/pdp/fashion-n8/thumb-2.jpg",
      "/pdp/fashion-n8/thumb-3.jpg",
      "/pdp/fashion-n8/thumb-4.jpg",
    ],
    category: "men",
    tag: "مردانه",
    slug: "fashion-n8",
    description:
      "مدل فشن N8 با طراحی ساده و مدرن، سبک و راحت برای استفاده روزانه است و به‌خوبی با انواع استایل‌های اسپرت و کژوال هماهنگ می‌شود.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#111", "#e7e7e7"],
    features: [
      { label: "کفی", value: "اشتروبل" },
      { label: "جنس", value: "اتوبانی ترکیبی فوم حوله‌ای" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      {
        label: "جنس زیره",
        value: "زیره PU رنگ شده بدون زرد شدگی و شکستگی",
      },
      { label: "ویژگی کفی", value: "اشتروبل" },
      { label: "جنس", value: "اتوبانی ترکیبی فوم حوله‌ای" },
      { label: "سایز", value: "۴۱-۴۴" },
    ],
    breadcrumbCategory: "محصولات مردانه",
  },
  {
    id: "6",
    name: "مدل جردن هالووین",
    shortName: "جردن هالووین",
    price: 0,
    image: "/plp/Rectangle 39992 (3).png",
    gallery: [
      "/pdp/jordan-halloween/main.png",
      "/pdp/jordan-halloween/thumb-1.jpg",
      "/pdp/jordan-halloween/thumb-2.jpg",
      "/pdp/jordan-halloween/thumb-3.jpg",
      "/pdp/jordan-halloween/thumb-4.jpg",
      "/pdp/jordan-halloween/thumb-5.jpg",
    ],
    category: "sport",
    tag: "مردانه و زنانه",
    slug: "jordan-halloween",
    description:
      "مدل جردن هالووین انتخابی جذاب برای ست مردانه و زنانه است؛ با استایل منحصربه‌فرد و هماهنگ برای زوج‌ها، ترکیب رنگی خاص و کفی راحت برای استفاده روزانه.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    extraSizes: "+۴",
    colors: ["#111", "#724ec4"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه فوم توکیو ترکیبی" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه و زنانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "nbr عطری" },
      { label: "ویژگی کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه فوم توکیو ترکیبی" },
      { label: "سایز", value: "۳۷-۴۴" },
    ],
    breadcrumbCategory: "محصولات زنانه و مردانه",
  },
  {
    id: "7",
    name: "مدل آدیداس",
    shortName: "آدیداس",
    price: 0,
    image: "/plp/adidas.jpg",
    gallery: [
      "/pdp/adidas/main.jpg",
      "/pdp/adidas/thumb-1.jpg",
      "/pdp/adidas/thumb-2.jpg",
      "/pdp/adidas/thumb-3.jpg",
      "/pdp/adidas/thumb-4.jpg",
      "/pdp/adidas/thumb-5.jpg",
    ],
    category: "men",
    tag: "مردانه",
    slug: "adidas",
    description:
      "مدل آدیداس مردانه با طراحی متعادل و ظاهر اسپرت، مناسب کسانی است که به دنبال راحتی و استایل هستند. استفاده از متریال سبک، قالب استاندارد و مناسبت برای فعالیت‌های روزانه، محل کار یا دانشگاه از ویژگی‌های این مدل است.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#3155a8", "#fff"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "پارچه نیوبالانسی" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "سری", value: "۸ جفتی" },
      { label: "جنس زیره", value: "زیره PU رنگ شده" },
      { label: "ویژگی کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه فوم حوله‌ای و پارچه نیوبالانسی" },
      { label: "سایز", value: "۴۱-۴۴" },
    ],
    breadcrumbCategory: "محصولات مردانه",
  },
  {
    id: "8",
    name: "مدل نایک دراگون ساقدار",
    shortName: "نایک دراگون ساقدار",
    price: 0,
    image: "/plp/Rectangle 39992 (7).png",
    gallery: [
      "/pdp/nike-dragon-high/main.png",
      "/pdp/nike-dragon-high/thumb-1.jpg",
      "/pdp/nike-dragon-high/thumb-2.jpg",
      "/pdp/nike-dragon-high/thumb-3.jpg",
      "/pdp/nike-dragon-high/thumb-4.jpg",
      "/pdp/nike-dragon-high/thumb-5.jpg",
    ],
    category: "women",
    tag: "زنانه",
    slug: "nike-dragon-high",
    description:
      "مدل نایک دراگون ساقدار با طراحی ساق‌دار، پایداری بیشتری برای مچ پا فراهم می‌کند و استایلی مدرن و جسورانه برای استفاده خیابانی و کژوال دارد.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#25c98e", "#f2a85d"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه ترکیبی" },
    ],
    specs: [
      { label: "دسته بندی", value: "زنانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "زیره Nbr" },
      { label: "ویژگی کفی", value: "اشتروبل" },
      { label: "جنس", value: "رویه ترکیبی" },
      { label: "سایز", value: "۳۷-۴۰" },
    ],
    breadcrumbCategory: "محصولات زنانه",
  },
  {
    id: "9",
    name: "مدل کلوین کلین",
    shortName: "کلوین کلین",
    price: 0,
    image: "/plp/calvin-klein.jpg",
    gallery: [
      "/pdp/calvin-klein/main.jpg",
      "/pdp/calvin-klein/thumb-1.jpg",
      "/pdp/calvin-klein/thumb-2.jpg",
      "/pdp/calvin-klein/thumb-3.jpg",
      "/pdp/calvin-klein/thumb-4.jpg",
    ],
    category: "women",
    tag: "زنانه",
    slug: "calvin-klein",
    description:
      "مدل کلوین کلین با طراحی مینیمال و شیک، مناسب بانوانی است که استایل ساده را می‌پسندند. دوخت باکیفیت، ظاهر مدرن و وزن سبک، این کفش را برای استفاده روزانه با پوشش کژوال یا نیمه‌رسمی به گزینه‌ای راحت تبدیل کرده است.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#5d7779", "#eff2f2"],
    features: [
      { label: "کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "میکروسوییت" },
    ],
    specs: [
      { label: "دسته بندی", value: "زنانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "پیو باغ سپه سالار" },
      { label: "ویژگی کفی", value: "اشتروبل دوخت" },
      { label: "جنس", value: "رویه میکرو سوییت" },
      { label: "سایز", value: "۳۷-۴۰" },
    ],
    breadcrumbCategory: "محصولات زنانه",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}

export const collections: Collection[] = [
  {
    id: "c1",
    name: "کالکشن پاییز ۱۴۰۴",
    price: 6800000,
    image: "/plp/Rectangle 39992 (5).png",
    slug: "autumn-1404",
  },
  {
    id: "c2",
    name: "کالکشن لوکس",
    price: 12500000,
    image: "/plp/Rectangle 39992 (3).png",
    slug: "luxury",
  },
];

export const features = [
  {
    id: "shipping",
    title: "ارسال رایگان",
    description: "برای سفارش‌های بالای ۲ میلیون تومان",
    icon: "truck" as const,
  },
  {
    id: "original",
    title: "ضمانت اصالت",
    description: "۱۰۰٪ اورجینال و گارانتی معتبر",
    icon: "shield" as const,
  },
  {
    id: "support",
    title: "پشتیبانی ۲۴/۷",
    description: "پاسخگویی در تمام ساعات شبانه‌روز",
    icon: "headphones" as const,
  },
  {
    id: "payment",
    title: "پرداخت امن",
    description: "درگاه پرداخت معتبر و مطمئن",
    icon: "credit-card" as const,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "چگونه سفارش خود را پیگیری کنم؟",
    answer:
      "پس از ثبت سفارش، کد پیگیری از طریق پیامک برای شما ارسال می‌شود. همچنین می‌توانید با وارد شدن به حساب کاربری، وضعیت سفارش را مشاهده کنید.",
  },
  {
    id: "2",
    question: "آیا امکان تعویض یا بازگشت کالا وجود دارد؟",
    answer:
      "بله، تا ۷ روز پس از دریافت کالا، در صورت سالم بودن بسته‌بندی و عدم استفاده، امکان تعویض یا بازگشت وجود دارد.",
  },
  {
    id: "3",
    question: "زمان ارسال سفارش چقدر است؟",
    answer:
      "سفارش‌های تهران ۱ تا ۲ روز کاری و سایر شهرها ۳ تا ۵ روز کاری تحویل داده می‌شوند.",
  },
  {
    id: "4",
    question: "روش‌های پرداخت چیست؟",
    answer:
      "پرداخت آنلاین از طریق درگاه بانکی، پرداخت در محل (فقط تهران) و کارت به کارت از روش‌های موجود هستند.",
  },
];

export const contactInfo = {
  address: "تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳۴",
  phone: "۰۲۱-۸۸۷۷۶۶۵۵",
  mobile: "۰۹۱۲-۳۴۵۶۷۸۹",
  email: "info@shoestore.ir",
  workingHours: "شنبه تا پنج‌شنبه: ۹ صبح تا ۹ شب",
};

export const footerLinks = {
  shop: [
    { href: "/products", label: "همه محصولات" },
    { href: "/products?category=men", label: "مردانه" },
    { href: "/products?category=women", label: "زنانه" },
    { href: "/products?category=sport", label: "ورزشی" },
  ],
  support: [
    { href: "/contact", label: "تماس با ما" },
    { href: "#", label: "شرایط بازگشت" },
    { href: "#", label: "ارسال و تحویل" },
    { href: "#", label: "حریم خصوصی" },
  ],
  company: [
    { href: "/about", label: "درباره ما" },
    { href: "#", label: "وبلاگ" },
    { href: "#", label: "فرصت‌های شغلی" },
  ],
};
