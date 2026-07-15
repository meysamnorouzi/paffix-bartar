import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "نایک V5K",
    image: "/eye/2.png",
  },
  {
    title: "نایک V5K",
    image: "/eye/Rectangle 40053 (1).png",
  },
];

export default function TopCollections() {
  return (
    <section className="bg-white pb-[164px] pt-[116px]">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="mb-[62px] flex items-center justify-between">
          <div className="flex items-center gap-8 text-[22px] text-[#111827]">
            <button type="button" aria-label="قبلی" className="leading-none">
              ←
            </button>
            <button type="button" aria-label="بعدی" className="leading-none">
              →
            </button>
          </div>
          <h2 className="text-[28px] font-medium leading-none text-black">
            کالکشن های برتر
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.image}
              href="/products"
              className="group relative h-[598px] overflow-hidden rounded-[14px]"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 636px"
              />
              <span className="absolute bottom-8 left-8 text-[20px] font-medium text-white">
                {collection.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
