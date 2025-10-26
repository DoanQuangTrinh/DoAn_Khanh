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
import { IntroAnimation } from "@/components/intro/IntroAnimation";
import { ToastContainer } from "react-toastify";
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
  icons: {
    icon: "/logo/LOGO 1.png",
    shortcut: "/logo/LOGO 1.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "GreenKids",
    description: "Chuỗi workshop tái chế sáng tạo",
    type: "website",
    locale: "vi_VN",
    siteName: "GreenKids",
    url: "https://greenkids.vn",
    images: [
      {
        url: "/frame/Frame 1.png",
        width: 1200,
        height: 630,
        alt: "GreenKids Workshop Tái Chế Sáng Tạo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenKids",
    description: "Chuỗi workshop tái chế sáng tạo",
    images: ["/frame/Frame 1.png"],
  },
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
    <html lang="vi">
      <PrimeReactProvider>
        <body
          className={`${inter.className} bg-brand-background text-brand-text overflow-x-hidden`}        >
          <Header />
          <main className="relative z-10">{children}</main>
          <IntroAnimation />
          <ToastContainer />
          <Footer />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
