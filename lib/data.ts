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
  extraColors: string;
  features: { label: string; value: string }[];
  specs: ProductSpec[];
  breadcrumbCategory: string;
}

function productImages(slug: string, thumbs: number) {
  return {
    image: `/plp/${slug}.png`,
    gallery: [
      `/pdp/${slug}/main.png`,
      ...Array.from({ length: thumbs }, (_, i) => `/pdp/${slug}/thumb-${i + 1}.png`),
    ],
  };
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
    name: "مدل آدیداس",
    shortName: "آدیداس",
    price: 0,
    ...productImages("adidas", 5),
    category: "men",
    tag: "مردانه",
    slug: "adidas",
    description:
      "مدل آدیداس مردانه با طراحی متعادل و ظاهر اسپرت، برای آقایانی مناسب است که راحتی و خوش‌پوشی را در کنار هم می‌خواهند. استفاده از متریال سبک و فرم استاندارد، این کفش را به گزینه‌ای مناسب برای فعالیت‌های روزمره، محل کار، دانشگاه و دورهمی‌های دوستانه تبدیل کرده است. طراحی ساده آن نیز به‌راحتی با انواع استایل‌های کژوال و اسپرت هماهنگ می‌شود.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#3155a8", "#fff"],
    extraColors: "+۶",
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
    id: "2",
    name: "مدل نایک V5K",
    shortName: "نایک V5K",
    price: 0,
    ...productImages("nike-v5k", 2),
    category: "women",
    tag: "زنانه",
    slug: "nike-v5k",
    description:
      "مدل Nike V5K انتخابی مناسب برای استایل روزمره و استفاده طولانی‌مدت است. رویه مش تنفس‌پذیر در کنار لایه‌های مقاوم، علاوه بر ایجاد ظاهری مدرن، به گردش بهتر هوا کمک می‌کند. کفی نرم و زیره با چسبندگی مناسب، راحتی و پایداری مطلوبی را هنگام پیاده‌روی و استفاده روزانه فراهم می‌سازد. V5K انتخابی مناسب برای افرادی است که به دنبال طراحی ترند و راحتی در استفاده روزانه هستند.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#1a2a4a", "#f4e9e4"],
    extraColors: "+۱۰",
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
    id: "3",
    name: "مدل نایک V2K",
    shortName: "نایک V2K",
    price: 0,
    ...productImages("nike-v2k", 5),
    category: "women",
    tag: "زنانه",
    slug: "nike-v2k",
    description:
      "مدل Nike V2K با الهام از طراحی کفش‌های رانینگ کلاسیک، ترکیبی از ظاهر نوستالژیک و جزئیات مدرن را ارائه می‌دهد. رویه مشبک در کنار لایه‌های چندگانه، علاوه بر ایجاد جلوه‌ای متفاوت، به تهویه مناسب پا در طول روز کمک می‌کند. زیره حجیم و فوم نرم، حس راحتی و ثبات مطلوبی را هنگام راه رفتن فراهم می‌سازد و این مدل را به گزینه‌ای مناسب برای استفاده روزمره، پیاده‌روی و استایل کژوال تبدیل کرده است.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#f45dc0", "#c4a484"],
    extraColors: "+۱۲",
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
    name: "مدل اکو",
    shortName: "اکو",
    price: 0,
    ...productImages("eco", 5),
    category: "men",
    tag: "مردانه",
    slug: "eco",
    description:
      "مدل اکو با طراحی ساده و متریال باکیفیت، انتخابی مناسب برای افرادی است که به دنبال استایلی شیک و ماندگار هستند. رویه چرمی این مدل علاوه بر ظاهر جذاب، نظافت و نگهداری آسانی دارد و برای استفاده روزانه گزینه‌ای کاربردی محسوب می‌شود. طراحی استاندارد، کفی راحت و زیره مقاوم، راحتی لازم را برای استفاده روزمره فراهم کرده و این کتونی را به گزینه‌ای مناسب برای استایل‌های کژوال و نیمه‌رسمی تبدیل می‌کند.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#111", "#e7e9e8"],
    extraColors: "+۲",
    features: [
      { label: "کفی", value: "EVA" },
      { label: "جنس", value: "چرم شرکتی" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "PU رنگ شده بدون زرد شدگی" },
      { label: "ویژگی کفی", value: "EVA" },
      { label: "جنس", value: "چرم شرکتی" },
      { label: "سایز", value: "۴۱-۴۴" },
    ],
    breadcrumbCategory: "محصولات مردانه",
  },
  {
    id: "5",
    name: "مدل فشن N8",
    shortName: "فشن N8",
    price: 0,
    ...productImages("fashion-n8", 5),
    category: "men",
    tag: "مردانه",
    slug: "fashion-n8",
    description:
      "مدل Fashion N8 با تمرکز بر سادگی و طراحی امروزی، انتخابی مناسب برای افرادی است که به دنبال کتونی‌ای سبک و خوش‌استایل برای استفاده روزانه هستند. فرم متناسب این مدل، در کنار رویه‌ای راحت و انعطاف‌پذیر، احساس راحتی را در طول روز حفظ می‌کند. ظاهر مینیمال آن نیز به‌راحتی با انواع استایل‌های اسپرت و کژوال هماهنگ می‌شود.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#111", "#e7e7e7"],
    extraColors: "+۵",
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
    name: "مدل نایک SB",
    shortName: "نایک SB",
    price: 0,
    ...productImages("nike-sb", 4),
    category: "sport",
    tag: "مردانه و زنانه",
    slug: "nike-sb",
    description:
      "مدل Nike SB به‌خاطر طراحی خاص و کیفیت ساخت، جایگاه ویژه‌ای در میان علاقه‌مندان به استایل خیابانی پیدا کرده است. رویه مقاوم، فرم استاندارد و زیره منعطف این مدل، تجربه‌ای راحت برای استفاده روزانه فراهم می‌کند و ظاهر اسپرت آن به‌راحتی با انواع استایل‌های کژوال هماهنگ می‌شود. Nike SB انتخابی مناسب برای افرادی است که به دنبال ترکیبی از دوام، راحتی و طراحی متفاوت هستند.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#c45a2c", "#1a2a4a"],
    extraColors: "+۱۲",
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
    breadcrumbCategory: "محصولات زنانه و مردانه",
  },
  {
    id: "7",
    name: "مدل جردن هالووین",
    shortName: "جردن هالووین",
    price: 0,
    ...productImages("jordan-halloween", 5),
    category: "sport",
    tag: "مردانه و زنانه",
    slug: "jordan-halloween",
    description:
      "ست مردانه و زنانه جردن هالووین انتخابی جذاب برای زوج‌هایی است که به استایل‌های خاص و هماهنگ علاقه دارند. ترکیب رنگ متفاوت و طراحی الهام‌گرفته از نسخه‌های محبوب جردن، این ست را به گزینه‌ای چشم‌گیر برای استفاده روزمره تبدیل کرده است. فرم استاندارد کفش در کنار کفی راحت، تجربه‌ای دلپذیر در طول روز فراهم می‌کند و جلوه‌ای متفاوت به استایل شما می‌بخشد.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    extraSizes: "+۴",
    colors: ["#111", "#724ec4"],
    extraColors: "+۲",
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
    id: "8",
    name: "مدل نایک دراگون",
    shortName: "نایک دراگون",
    price: 0,
    ...productImages("nike-dragon", 5),
    category: "sport",
    tag: "مردانه و زنانه",
    slug: "nike-dragon",
    description:
      "مدل Nike Dragon با طراحی پویا و خطوط اسپرت، گزینه‌ای مناسب برای افرادی است که به استایل‌های مدرن و پرانرژی علاقه دارند. ترکیب رویه سبک با ساختار استاندارد، حس راحتی مطلوبی را در استفاده روزانه ایجاد می‌کند و فرم ارگونومیک کفش به حرکت طبیعی پا کمک می‌کند. ظاهر متفاوت این مدل نیز به‌راحتی با انواع استایل‌های کژوال و خیابانی هماهنگ می‌شود.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    extraSizes: "+۴",
    colors: ["#67847b", "#e6e8e6"],
    extraColors: "+۶",
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
    id: "9",
    name: "مدل نایک ونس",
    shortName: "نایک ونس",
    price: 0,
    ...productImages("nike-vans", 5),
    category: "men",
    tag: "مردانه",
    slug: "nike-vans",
    description:
      "مدل نایک ونس مردانه با ظاهری ساده و خطوط طراحی مینیمال، برای آقایانی مناسب است که استایل‌های بی‌دردسر اما جذاب را می‌پسندند. این مدل با وزن متعادل و قالب راحت، انتخابی مناسب برای استفاده روزانه و فعالیت‌های معمول است. طراحی همه‌پسند آن نیز به‌راحتی با انواع شلوار جین، اسلش یا کتان ست می‌شود.",
    saleType: "عمده",
    sizes: ["۴۱", "۴۲", "۴۳", "۴۴"],
    colors: ["#1a2a4a", "#fff"],
    extraColors: "+۹",
    features: [
      { label: "کفی", value: "اشتروبل" },
      { label: "جنس", value: "میکرو سوییت" },
    ],
    specs: [
      { label: "دسته بندی", value: "مردانه" },
      { label: "قالب", value: "استاندارد" },
      { label: "تعداد", value: "۸ جفتی" },
      { label: "جنس زیره", value: "زیره PU" },
      { label: "ویژگی کفی", value: "اشتروبل" },
      { label: "جنس", value: "میکرو سوییت" },
      { label: "سایز", value: "۴۱-۴۴" },
    ],
    breadcrumbCategory: "محصولات مردانه",
  },
  {
    id: "10",
    name: "مدل نایک دراگون ساقدار",
    shortName: "نایک دراگون ساقدار",
    price: 0,
    ...productImages("nike-dragon-high", 5),
    category: "women",
    tag: "زنانه",
    slug: "nike-dragon-high",
    description:
      "مدل نایک دراگون ساقدار با طراحی ساق‌بلند، علاوه بر ظاهر متفاوت، احساس ثبات بیشتری در ناحیه مچ پا ایجاد می‌کند. ترکیب فرم اسپرت با جزئیات مدرن، این مدل را به گزینه‌ای مناسب برای علاقه‌مندان به استایل‌های جسورانه و امروزی تبدیل کرده است. ظاهر خاص آن نیز به‌راحتی با استایل‌های خیابانی و کژوال هماهنگ می‌شود.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#25c98e", "#9aa39a"],
    extraColors: "+۶",
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
    id: "11",
    name: "مدل کلوین کلین",
    shortName: "کلوین کلین",
    price: 0,
    ...productImages("calvin-klein", 5),
    category: "women",
    tag: "زنانه",
    slug: "calvin-klein",
    description:
      "مدل کلوین کلین زنانه با الهام از سبک مینیمال و طراحی ظریف، انتخابی مناسب برای بانوانی است که به استایل‌های ساده و شیک علاقه دارند. فرم خوش‌دوخت و ظاهر یکدست این کتونی، جلوه‌ای مدرن به پوشش روزانه می‌بخشد و به‌راحتی با انواع استایل‌های کژوال و نیمه‌رسمی هماهنگ می‌شود. وزن مناسب و طراحی راحت، این مدل را به گزینه‌ای ایده‌آل برای استفاده روزمره تبدیل کرده است.",
    saleType: "عمده",
    sizes: ["۳۷", "۳۸", "۳۹", "۴۰"],
    colors: ["#5d7779", "#eff2f2"],
    extraColors: "+۶",
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
    image: "/plp/nike-dragon.png",
    slug: "autumn-1404",
  },
  {
    id: "c2",
    name: "کالکشن لوکس",
    price: 12500000,
    image: "/plp/jordan-halloween.png",
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
