import React from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";

// --- COMPONENT CON (Tùy chọn) ---
// Tách nhỏ component để code chính dễ đọc hơn
type NavLink = {
  href: string;
  label: string;
};

type FooterLinkColumnProps = {
  title: string;
  links: NavLink[];
};

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({
  title,
  links,
}) => (
  <div>
    <h3 className="font-text-content text-3xl font-medium mb-6">{title}</h3>
    <ul className="space-y-4">
      {links.map((link , index) => (
        <li key={index}>
          <a
            href={link.href}
            className="font-text-content !text-sm transition-colors duration-300 hover:text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- COMPONENT CHÍNH ---
export const Footer = () => {
  // Dữ liệu mẫu cho các cột link
  const servicesLinks: NavLink[] = [
    { href: "#", label: "WS Robot Từ Hộp Sữa" },
    { href: "#", label: "WS Đèn Lồng Từ Chai PET" },
    { href: "#", label: "WS Xe Đua Nắp Chai" },
    { href: "#", label: "WS Chậu Cây Mini Tái Chế" },
  ];

  const aboutLinks: NavLink[] = [
    { href: "#", label: "About" },
    { href: "#", label: "Liên Hệ" },
    { href: "#", label: "Blogs" },
  ];

  return (
    // Sử dụng màu nền và màu chữ chính xác từ thiết kế
    // bg-[#879382] (xanh sage) và text-[#FDFBF4] (kem)
    <footer className="bg-[#8B9477] !font-josefin !text-[#FFF4E2] py-16 md:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {/* === CỘT 1: BRANDING, SUBSCRIBE & FOLLOW === */}
        <div className="space-y-12">
          {/* 1a. Branding */}
          <h2 className="text-about !text-[#FFF4E2] text-4xl md:text-5xl font-medium leading-tight">
            Little Hands
            <br />
            Green Hearts!
          </h2>

          {/* 1b. Subscribe Form */}
          <form className="space-y-5">
            {/* Input với nút bấm mũi tên */}
            <div className="relative">
              <input
                type="email"
                placeholder="Nhập E - mail của bạn."
                className="
                  w-full bg-transparent border-b border-[#FDFBF4]
                  py-3 pl-0 pr-10 text-lg font-josefin
                  placeholder:text-[#FFF4E2] placeholder:opacity-70
                  focus:outline-none focus:border-white transition-colors
                "
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="
                  absolute right-0 top-0 h-full px-2
                  text-[#FDFBF4] opacity-70 transition-opacity hover:opacity-100
                "
              >
                <FaChevronRight size={20} />
              </button>
            </div>

            {/* Checkbox tùy chỉnh */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="hidden peer" />
              {/* Box tùy chỉnh */}
              <div
                className="
                  w-5 h-5 border border-[#FDFBF4] rounded-sm 
                  flex items-center justify-center
                  transition-all duration-300
                  peer-checked:bg-[#FDFBF4] peer-checked:border-white
                "
              >
                {/* Icon Check (chỉ hiện khi đã check) */}
                <FaCheck
                  size={12}
                  className="text-[#879382] opacity-0 peer-checked:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-text-content !text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                I agree with the privacy policy and terms of use.
              </span>
            </label>
          </form>

          {/* 1c. Follow Us */}
          <div className="space-y-6">
            <h3 className="font-josefin text-3xl font-medium">Follow Us</h3>
            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-[#FDFBF4] rounded-full transition-all duration-300 hover:bg-[#FDFBF4] hover:text-[#879382] hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 border border-[#FDFBF4] rounded-full transition-all duration-300 hover:bg-[#FDFBF4] hover:text-[#879382] hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* === CỘT 2: SERVICES === */}
        <FooterLinkColumn title="Services" links={servicesLinks} />

        {/* === CỘT 3: ABOUT US === */}
        <FooterLinkColumn title="About Us" links={aboutLinks} />
      </div>
    </footer>
  );
};
