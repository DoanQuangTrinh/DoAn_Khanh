// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
// 1. Import đầy đủ
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Hoặc theme lara-light-green của bạn
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Merriweather } from "next/font/google";
import localFont from "next/font/local";
const cashC = localFont({
  src: "/fonts/Cash-Regular.ttf",
  variable: "--font-cashc",
  display: "swap",
});

const merr = Merriweather({
  subsets: ["vietnamese"],
  weight: ["300", "400", "700"],
  variable: "--font-serif",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenKids",
  description: "Chuỗi workshop tái chế sáng tạo",
};
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Bạn nên dùng 'vi' (tiếng Việt)
    <html lang="vi">
      {/* 2. Bọc toàn bộ ứng dụng trong <PrimeReactProvider> */}
      <PrimeReactProvider>
        {/* 3. Thêm:
             - ${inter.className} để áp dụng font
             - text-brand-text để có màu chữ mặc định
             - overflow-x-hidden để chống tràn ngang
        */}
        <body
          className={`${inter.className} bg-brand-background text-brand-text overflow-x-hidden`}
        >
          <Header />

          {/* 4. Thêm thẻ <main> cho nội dung chính */}
          <main className="relative z-10 ">{children}</main>
          <Footer />
          {/* (Sau này bạn có thể thêm Footer ở đây) */}
        </body>
      </PrimeReactProvider>
    </html>
  );
}
