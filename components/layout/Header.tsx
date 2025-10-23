// app/components/layout/Header.tsx (hoặc file của bạn)
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar"; // 1. Import Sidebar của PrimeReact
import { Button } from "primereact/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { motion } from "framer-motion";
// Tách các link ra để dễ quản lý
const navLinks = [
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "BLOGS", href: "/blogs" },
  { label: "BOOKING", href: "/booking" },
];

export default function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // 2. Gọi hook
  const scrollDirection = useScrollDirection();

  const linkClassName =
    "hover:text-brand-green-light transition text-lg font-semibold";

  return (
    <>
      {/* 3. Thay <header> bằng <motion.header> */}
      <motion.header
        // 4. Thêm class "sticky top-0" để header dính lại
        className="bg-brand-background text-brand-green-dark relative z-40 shadow-sm sticky top-0"
        // 5. Thêm animate và transition
        animate={{
          // Nếu cuộn xuống, y = -100% (ẩn đi)
          // Nếu cuộn lên, y = 0 (hiện ra)
          y: scrollDirection === "down" ? "-100%" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 sm:px-8">
          {/* === 1. HEADER CHO DESKTOP === */}
          <div className="hidden lg:flex items-center justify-around py-4">
            {/* ... (Nội dung header desktop của bạn giữ nguyên) ... */}
            {/* Left Menus */}
            <nav className="flex gap-10">
              <Link href="/about" className={linkClassName}>
                ABOUT US
              </Link>
              <Link href="/services" className={linkClassName}>
                SERVICES
              </Link>
            </nav>

            {/* Logo (Giữa) */}
            <div className="px-4">
              <Link href="/">
                <Image
                  src="/logo/LOGO 1.png"
                  alt="GreenKids Logo"
                  width={110}
                  height={110}
                  priority
                />
              </Link>
            </div>

            {/* Right Menus */}
            <nav className="flex items-center gap-10">
              <Link href="/blogs" className={linkClassName}>
                BLOGS
              </Link>
              <Link href="/booking" className={linkClassName}>
                BOOKING
              </Link>
              <span className="pi pi-search cursor-pointer text-2xl hover:text-brand-green-light transition"></span>
            </nav>
          </div>

          {/* === 2. HEADER CHO MOBILE & TABLET === */}
          <div className="flex lg:hidden items-center justify-between py-4">
            {/* ... (Nội dung header mobile của bạn giữ nguyên) ... */}
            {/* Logo (Bên trái) */}
            <div>
              <Link href="/">
                <Image
                  src="/logo/LOGO 1.png"
                  alt="GreenKids Logo"
                  width={80}
                  height={80}
                  priority
                />
              </Link>
            </div>

            {/* Nút Hamburger (Bên phải) */}
            <Button
              icon="pi pi-bars"
              className="text-brand-green-dark"
              text
              rounded
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuVisible(true)}
              style={{ fontSize: "1.5rem" }}
            />
          </div>
        </div>
      </motion.header>

      {/* === 3. SIDEBAR (Giữ nguyên) === */}
      <Sidebar
        visible={isMobileMenuVisible}
        onHide={() => setIsMobileMenuVisible(false)}
        position="left"
        className="bg-brand-background w-full sm:w-80"
      >
        {/* ... (Nội dung sidebar của bạn giữ nguyên) ... */}
        <div className="flex h-full flex-col items-center justify-center">
          {/* Logo trong menu */}
          <div className="mb-12">
            <Image
              src="/logo/LOGO 1.png"
              alt="GreenKids Logo"
              width={120}
              height={120}
            />
          </div>

          {/* Các link trong menu */}
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-brand-green-dark hover:text-brand-green-light"
                onClick={() => setIsMobileMenuVisible(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/search"
              className="mt-4 flex items-center justify-center gap-2 text-2xl font-semibold text-brand-green-dark hover:text-brand-green-light"
              onClick={() => setIsMobileMenuVisible(false)}
            >
              <span className="pi pi-search"></span>
              Search
            </Link>
          </nav>
        </div>
      </Sidebar>
    </>
  );
}
