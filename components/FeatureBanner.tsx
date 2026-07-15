export default function FeatureBanner() {
  const stats = [
    "سابقه و تجربه",
    "تنوع بالای محصولات",
    "۲۰۰ مشتریان وفادار",
    "اعتماد همراه با کیفیت واقعی",
    "ارسال به سراسر کشور",
  ];

  return (
    <section className="bg-[#17467e] py-[92px] text-white">
      <div className="mx-auto max-w-[1296px] px-4 text-center">
        <p className="mx-auto max-w-[760px] text-[26px] font-normal leading-[1.8]">
          ترکیبی عالی از ظرافت و راحتی که گامی مطمئن در مسیر موفقیت ایجاد می
          کند.
        </p>
        <div className="mt-[70px] flex flex-wrap items-center justify-center gap-x-20 gap-y-5 text-[15px] font-light text-white/55">
          {stats.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
