'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { motion, easeInOut } from 'framer-motion';

const navLinks = [
  { label: 'Về Chúng Tôi', href: '/about' },
  { label: 'Dịch Vụ', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Đặt Lịch', href: '/booking' },
];

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

export default function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (href: string) =>
    pathname === href
      ? 'text-header-active font-bold'
      : 'text-header hover:text-brand-green-light';

  const getMobileLinkClass = (href: string) =>
    `text-2xl font-semibold ${pathname === href
      ? 'text-brand-green-light'
      : 'text-brand-green-dark hover:text-brand-green-light'
    }`;

  return (
    <>
      <motion.header
        className="bg-brand-background text-brand-green-dark relative z-40 shadow-sm top-0 !h-[100px] md:!h-auto"
        layout
      >
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div
            className="hidden lg:flex items-center justify-around"
            animate={{
              paddingTop: isScrolled ? '0.125rem' : '1rem',
              paddingBottom: isScrolled ? '0.125rem' : '1rem',
            }}
            transition={{ duration: 0.3, ease: easeInOut }}
            layout
          >
            <nav className="flex gap-10">
              {leftLinks.map((link) => (
                <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <motion.div animate={{ scale: isScrolled ? 0.5 : 1 }} transition={{ duration: 0.3, ease: easeInOut }} layout>
              <Link href="/">
                <Image
                  src="/logo/LOGO 1.png"
                  alt="GreenKids Logo"
                  width={110}
                  height={110}
                  priority
                  className="transition-all"
                />
              </Link>
            </motion.div>

            <nav className="flex items-center gap-10">
              {rightLinks.map((link) => (
                <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
              <span className="text-header pi pi-search cursor-pointer text-2xl hover:text-brand-green-light transition"></span>
            </nav>
          </motion.div>

          {/* Mobile */}
          <motion.div
            className="flex lg:hidden items-center justify-between"
            animate={{ paddingTop: isScrolled ? '0.125rem' : '1rem', paddingBottom: isScrolled ? '0.125rem' : '1rem' }}
            transition={{ duration: 0.3, ease: easeInOut }}
            layout
          >
            <motion.div animate={{ scale: isScrolled ? 0.6 : 1 }} transition={{ duration: 0.3, ease: easeInOut }} layout>
              <Link href="/">
                <Image src="/logo/LOGO 1.png" alt="GreenKids Logo" width={80} height={80} priority />
              </Link>
            </motion.div>
            <Button
              icon="pi pi-bars"
              className="text-brand-green-dark"
              text
              rounded
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuVisible(true)}
              style={{ fontSize: '1.5rem' }}
            />
          </motion.div>
        </div>
      </motion.header>

      <Sidebar
        visible={isMobileMenuVisible}
        onHide={() => setIsMobileMenuVisible(false)}
        position="left"
        className="bg-brand-background w-full sm:w-80"
      >
        <div className="flex h-full flex-col items-center justify-center">
          <div className="mb-12">
            <Image src="/logo/LOGO 1.png" alt="GreenKids Logo" width={120} height={120} />
          </div>
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getMobileLinkClass(link.href)}
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
              <span className="pi pi-search"></span> Search
            </Link>
          </nav>
        </div>
      </Sidebar>
    </>
  );
}
