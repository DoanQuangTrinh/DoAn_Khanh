"use client";
import React from "react";
import { listProducts } from "@/public/data/products";
import { useRouter } from "next/navigation";
// 1. ĐỊNH NGHĨA TYPE CHO DỮ LIỆU
type ServiceItemProps = {
  id: number;
  title: string;
  description: string;
  align: "left" | "right"; // Căn lề của khối text
  bgColor: string; // Màu nền của cả component
  buttonText: string;
};

const ServiceHighlightItem: React.FC<{ item: ServiceItemProps }> = ({
  item,
}) => {
  const router = useRouter();
  const { title, description, align, bgColor, buttonText } = item;

  // Tự động thay đổi vị trí khối text dựa trên prop `align`
  const alignmentClass = align === "left" ? "justify-start" : "justify-end";

  return (
    <section
      onClick={() => router.push(`/services/${item.id}`)}
      className={`
        w-full rounded-3xl p-8 md:p-12 lg:p-16 
        flex items-center 
        transition-all duration-300 shadow-lg hover:shadow-xl
        ${alignmentClass} 
        ${bgColor}
      `}
    >
      {/* Khối nội dung text */}
      <div className="w-full lg:w-1/2 xl:w-2/5 space-y-6">
        <h2 className="title-work-shop text-4xl md:text-5xl font-bold">
          {title}
        </h2>
        <p className="text-base md:text-lg font-text-content-min   ">
          {description}
        </p>

        {/* Nút bấm (sử dụng màu từ các component trước) */}
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
      </div>
    </section>
  );
};

export const ServiceHighlights = () => {
  return (
    <div className=" py-16 md:py-24">
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
