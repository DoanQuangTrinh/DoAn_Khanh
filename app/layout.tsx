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
import Script from "next/script";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
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
  title: "GreenKids - Workshop Tái Ché Sáng Táo Cho Tré",
  description: "GreenKids là chuôi workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong. Các lop hoc lam tu tay, tái ché rác thài thành các san pham huu ích.",
  keywords: "workshop tái ché, tái ché sáng táo, lop hoc lam tu tay, tré em, bào vê môi truong, greenkids, workshop cho tré",
  authors: [{ name: "GreenKids Team" }],
  creator: "GreenKids",
  publisher: "GreenKids",
  robots: "index, follow",
  alternates: {
    canonical: "https://greenkids.vn",
  },
  icons: {
    icon: "/logo/LOGO 1.png",
    shortcut: "/logo/LOGO 1.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "GreenKids - Workshop Tái Ché Sáng Táo Cho Tré",
    description: "GreenKids là chuôi workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong",
    type: "website",
    locale: "vi_VN",
    siteName: "GreenKids",
    url: "https://greenkids.vn",
    images: [
      {
        url: "/frame/Frame 1.png",
        width: 1200,
        height: 630,
        alt: "GreenKids Workshop Tái Ché Sáng Táo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenKids - Workshop Tái Ché Sáng Táo",
    description: "Workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong",
    images: ["/frame/Frame 1.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-2786106242865268",
  },
  verification: {
    google: "your-google-verification-code",
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
      <head>
        {/* ❗ SCRIPT THUẦN - KHÔNG dùng next/script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2786106242865268"
          crossOrigin="anonymous"
        ></script>

        {/* ❗ META ADSENSE */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2786106242865268"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GreenKids",
              url: "https://greenkids.vn",
              logo: "https://greenkids.vn/logo/LOGO 1.png",
              description: "Chuôi workshop tái ché sáng táo giúp tré phát trien kha nang sáng táo và ý thúc bào vê môi truong",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-XXX-XXX-XXX",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/greenkids",
                "https://www.instagram.com/greenkids",
              ],
            }),
          }}
        />
      </head>

      <body className="...">
        <GoogleAnalytics />
        <PrimeReactProvider>
          <Header />
          <main>{children}</main>
          <IntroAnimation />
          <ToastContainer />
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
