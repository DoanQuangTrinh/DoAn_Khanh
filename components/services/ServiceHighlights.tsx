"use client";
import React from "react";
import { listProducts } from "@/public/data/products";
import { useRouter } from "next/navigation";
// ✨ 1. Import thêm kiểu 'Variants'
import { motion, Variants } from "framer-motion";
// ✨ Thêm import cho Image
import Image from "next/image";

// 1. ĐỊNH NGHĨA TYPE CHO DỮ LIỆU
type ServiceItemProps = {
  id: number;
  title: string;
  description: string;
  align: "left" | "right"; // Căn lề của khối text
  bgColor: string; // Màu nền của cả component
  buttonText: string;
  image: string; // <-- Thêm trường image
};

// ✨ 2. Thêm kiểu ': Variants' một cách tường minh
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// ✨ 3. Thêm kiểu ': Variants'
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ✨ 4. Thêm kiểu ': Variants' (Đây là chỗ gây lỗi)
const leafVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    rotate: [0, 5, -3, 0], // Keyframes cho hiệu ứng sway
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  },
};

// --- Component Lá Cây Trang Trí ---

// ✨ 5. SỬA LỖI: Dùng 'fill="currentColor"' để nhận màu từ className
const LeafSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="currentColor" // Thay đổi ở đây
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 2C18 10 6 28 32 62C58 28 46 10 32 2Z" />
    <path
      d="M32 2C25 10 15 28 32 62C49 28 39 10 32 2Z"
      fill="currentColor" // Thay đổi ở đây
      opacity="0.6"
    />
  </svg>
);

// ✨ 8. Component Cụm Lá Cây (ĐÃ SỬA LỖI LAYOUT)
const DecorativeLeaves = ({
  align,
  image,
}: {
  align: "left" | "right";
  image: string;
}) => {
  // Vị trí của cụm lá sẽ ở BÊN ĐỐI DIỆN với text
  const positionClass = align === "left" ? "right-0" : "left-0";
  // Căn chỉnh các item bên trong (lá, ảnh)
  const itemAlignmentClass = align === "left" ? "items-start" : "items-end";

  // Lật ảnh nếu cần
  const transformClass = align === "left" ? "scale-x-[-1]" : "";

  return (
    // Container này được định vị tuyệt đối, nằm ở 1/2 bên trái/phải
    <div
      className={`absolute ${positionClass} bottom-0 w-full lg:w-1/2 h-full
                flex flex-col justify-end ${itemAlignmentClass}
                pointer-events-none p-8 md:p-12 lg:p-16
                `}
    >
      {/* Ảnh chính */}
      <motion.div
        variants={leafVariants}
        transition={{ delay: 0.1 }}
        // Container cho ảnh, căn chỉnh bên trong
        className={`relative w-full h-[80%] max-h-[300px] max-w-[300px] ${transformClass}
                  ${align === "left" ? "ml-auto" : "mr-auto"}
                  `}
      >
        <Image
          src={image}
          alt={image}
          fill
          className="object-contain opacity-80 "
        />
      </motion.div>

      {/* Lá phụ */}
      <motion.div
        variants={leafVariants}
        transition={{ delay: 0.2 }}
        className={`absolute bottom-10 w-12 h-12 opacity-50
                    ${align === "left" ? "left-16" : "right-16"}
                  `}
      >
        <LeafSVG className="w-full h-full text-[#8EA885]" />
      </motion.div>

      <motion.div
        variants={leafVariants}
        transition={{ delay: 0.3 }}
        className={`absolute bottom-28 w-14 h-14 opacity-60
                    ${align === "left" ? "left-24" : "right-24"}
                  `}
      >
        <LeafSVG className="w-full h-full text-[#4A6341]" />
      </motion.div>
    </div>
  );
};

// --- Component ServiceItem (Đã Nâng Cấp) ---
const ServiceHighlightItem: React.FC<{ item: ServiceItemProps }> = ({
  item,
}) => {
  const router = useRouter();
  const { title, description, align, bgColor, buttonText } = item;

  const alignmentClass = align === "left" ? "justify-start" : "justify-end";

  return (
    <motion.section
      onClick={() => router.push(`/services/${item.id}`)}
      className={`
        w-full rounded-3xl p-8 md:p-12 lg:p-16 
        flex items-center 
        transition-shadow duration-300 shadow-lg hover:shadow-xl
        relative overflow-hidden cursor-pointer
        ${alignmentClass} 
        ${bgColor}
      `}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ✨ 10. Thêm component lá cây trang trí (đã sửa) */}
      <DecorativeLeaves align={align} image={item.image} />

      {/* ✨ 11. Bọc khối nội dung text (giữ nguyên) */}
      <motion.div className="w-full lg:w-1/2 xl:w-2/5 space-y-6 relative z-10">
        <motion.h2
          className="title-work-shop text-4xl md:!text-5xl font-bold"
          variants={itemVariants} // Animation cho từng item
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-base md:!text-xl font-text-content-min"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <button
            className="
              px-7 py-3 rounded-lg button-workshop text-workshop
              font-semibold text-lg
              transition-all duration-300 ease-in-out
              hover:bg-[#4A6341] hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-[#879382] focus:ring-opacity-50
            "
          >
            {buttonText}
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// --- Component ServiceHighlights (Giữ nguyên) ---
export const ServiceHighlights = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 md:space-y-12">
        {listProducts.map((item) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <ServiceHighlightItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
