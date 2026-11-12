const stats = [
  "+۱۰.۰۰۰ فروش موفق",
  "+۵۰۰ تنوع محصولات",
  "+۲۰.۰۰۰ مشتریان وفادار",
  "+۱۰ سال تجربه در صنعت کفش",
  "۹۸٪ رضایت مشتریان",
];

export default function FeatureBanner() {
  return (
    <section className="h-auto overflow-hidden bg-[#184177] px-5 pb-[70px] pt-[72px] text-white lg:h-[352px] lg:pb-0">
      <div className="mx-auto max-w-[1296px] text-center">
        <p className="mx-auto max-w-[840px] text-[24px] leading-[44.6px] lg:text-[32.5px]">
          ترکیبی عالی از ظرافت و راحتی که گامی مطمئن در مسیر موفقیت ایجاد می کند.
        </p>
        <ul className="mt-[76px] flex flex-wrap items-center justify-center gap-x-[62px] gap-y-4 text-[21px] font-light leading-[30px] lg:flex-nowrap lg:whitespace-nowrap lg:[mask-image:linear-gradient(90deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.55)_25%,#000_45%,#000_55%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.25)_100%)]">
          {stats.map((stat) => (
            <li key={stat}>{stat}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
