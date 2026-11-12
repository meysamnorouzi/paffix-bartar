const benefits = [
  "بیش از ۱۰ سال اعتبار",
  "ارسال به سراسر ایران",
  "ضمانت ۶ ماهه",
  "رضایت هزاران مشتری",
  "تضمین اصالت کالا",
  "پشتیبانی سریع",
  "تضمین کیفیت ساخت",
];

/** Endless right-to-left ticker of store guarantees. */
export default function BenefitsMarquee() {
  return (
    <section aria-label="مزایای خرید" className="overflow-hidden bg-white">
      <div className="flex h-[88px] w-max animate-[marquee_40s_linear_infinite] items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-[97px] pl-[97px] text-[16px] font-medium leading-[24px] text-[#40444d]"
          >
            {benefits.map((item) => (
              <li key={item} className="whitespace-nowrap">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
