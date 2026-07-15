import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "نایک V5K",
    tag: "زنانه",
    image: "/eye/Rectangle 40053.png",
  },
  {
    title: "نایک V5K",
    tag: "زنانه",
    image: "/eye/Rectangle 40053 (1).png",
  },
  {
    title: "نایک V5K",
    tag: "مردانه و زنانه",
    image: "/eye/Rectangle 40053 (2).png",
  },
  {
    title: "نایک V5K",
    tag: "مردانه",
    image: "/eye/Rectangle 40053 (3).png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white pb-[168px]">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="mb-[58px] flex items-center justify-between">
          <div className="flex items-center gap-8 text-[22px] text-[#111827]">
            <button type="button" aria-label="قبلی" className="leading-none">
              ←
            </button>
            <button type="button" aria-label="بعدی" className="leading-none">
              →
            </button>
          </div>
          <h2 className="text-[28px] font-medium leading-none text-black">
            محصولات
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.image}
              href="/products"
              className="group block overflow-hidden"
            >
              <div className="relative h-[514px] overflow-hidden rounded-[14px] bg-[#f2f3f5]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
                <span className="absolute right-5 top-5 text-[14px] font-light text-[#2f72b9]">
                  {product.tag}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between px-1 text-[17px] text-black">
                <span>{product.title}</span>
                <span>ء</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
