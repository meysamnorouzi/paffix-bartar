export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
  description?: string;
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
    name: "کفش اسپرت مردانه آدیداس",
    price: 4850000,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    category: "men",
    slug: "adidas-sport-men",
    description:
      "کفش اسپرت با طراحی مدرن، مناسب برای پیاده‌روی روزانه و ورزش‌های سبک.",
  },
  {
    id: "2",
    name: "کفش رانینگ نایک ایر",
    price: 6200000,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    category: "sport",
    slug: "nike-air-running",
    description:
      "کفش رانینگ با کفی نرم و تهویه عالی، انتخابی ایده‌آل برای دوندگان.",
  },
  {
    id: "3",
    name: "کفش کژوال زنانه",
    price: 3950000,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    category: "women",
    slug: "casual-women",
    description:
      "کفش کژوال با استایل شیک و راحتی بالا، مناسب استفاده روزمره.",
  },
  {
    id: "4",
    name: "کفش بسکتبال جردن",
    price: 7500000,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80",
    category: "sport",
    slug: "jordan-basketball",
    description:
      "کفش بسکتبال با پشتیبانی مچ پا و طراحی حرفه‌ای برای بازی.",
  },
  {
    id: "5",
    name: "کفش چرم مردانه کلاسیک",
    price: 8900000,
    image:
      "https://images.unsplash.com/photo-1614252239476-1f4ea8d5265f?w=600&q=80",
    category: "men",
    slug: "classic-leather-men",
    description:
      "کفش چرم دست‌دوز با دوام بالا، مناسب محیط‌های رسمی و نیمه‌رسمی.",
  },
  {
    id: "6",
    name: "کفش پیاده‌روی زنانه",
    price: 4200000,
    image:
      "https://images.unsplash.com/photo-1605348532645-0c4abbaf1e2d?w=600&q=80",
    category: "women",
    slug: "walking-women",
    description:
      "کفش پیاده‌روی سبک با کفی ارگونومیک برای راحتی طولانی‌مدت.",
  },
  {
    id: "7",
    name: "کفش اسکیچرز مردانه",
    price: 3600000,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
    category: "men",
    slug: "skechers-men",
    description: "کفش راحتی با فوم حافظه‌دار و طراحی مدرن.",
  },
  {
    id: "8",
    name: "کفش نیوبالانس زنانه",
    price: 5100000,
    image:
      "https://images.unsplash.com/photo-1562183241-b937ee955879?w=600&q=80",
    category: "women",
    slug: "new-balance-women",
    description: "کفش ورزشی با تعادل عالی و استایل مینیمال.",
  },
];

export const collections: Collection[] = [
  {
    id: "c1",
    name: "کالکشن پاییز ۱۴۰۴",
    price: 6800000,
    image:
      "https://images.unsplash.com/photo-1606107557195-0a74c4b6264b?w=800&q=80",
    slug: "autumn-1404",
  },
  {
    id: "c2",
    name: "کالکشن لوکس",
    price: 12500000,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
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
