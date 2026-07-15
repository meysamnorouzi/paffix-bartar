import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "کفش‌پلاس | فروشگاه تخصصی کفش",
    template: "%s | کفش‌پلاس",
  },
  description:
    "فروشگاه تخصصی کفش با بهترین برندهای جهانی. ارسال سریع، ضمانت اصالت و پشتیبانی ۲۴ ساعته.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
