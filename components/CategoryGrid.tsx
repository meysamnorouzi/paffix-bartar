import Image from "next/image";
import Link from "next/link";

export default function CategoryGrid() {
  const categories = [
    {
      title: "کالکشن زنانه",
      image: "/eye/Rectangle 40047.png",
      href: "/products?category=women",
    },
    {
      title: "کالکشن مردانه",
      image: "/eye/Rectangle 40046.png",
      href: "/products?category=men",
    },
  ];

  return (
    <section className="bg-white pb-[110px] pt-[104px]">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative h-[328px] overflow-hidden rounded-[14px]"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 636px"
              />
              <span className="absolute right-6 top-6 rounded-[5px] bg-white/75 px-5 py-2 text-[20px] font-medium text-[#1e4d81] backdrop-blur-sm">
                {category.title}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/products?category=walking"
          className="group relative mt-8 block h-[325px] overflow-hidden rounded-[14px]"
        >
          <Image
            src="/eye/Rectangle 40052.png"
            alt="کالکشن مردانه و زنانه"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="1296px"
          />
          <span className="absolute bottom-8 left-6 rounded-[5px] bg-white/75 px-5 py-2 text-[20px] font-medium text-[#1e4d81] backdrop-blur-sm">
            کالکشن مردانه و زنانه
          </span>
        </Link>
      </div>
    </section>
  );
}
