"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
type Testimonial = {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number; // 1-5
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Anh Minh Đức",
    title: "Đại diện CSR doanh nghiệp",
    quote:
      "“Workshop thiết kế chuyên nghiệp, đúng tinh thần CSR. Nhân viên và con em đều tham gia nhiệt tình, không khí rất tích cực.”",
    rating: 4,
  },
  {
    id: 2,
    name: "Cô Bích Trâm",
    title: "Phó Hiệu Trưởng",
    quote:
      "“Chương trình phù hợp mục tiêu ngoại khóa của trường: vừa thực hành, vừa có sản phẩm mang về, lại rèn thói quen phân loại rác.”",
    rating: 4,
  },
  {
    id: 3,
    name: "Thầy Phan Tùng",
    title: "Tổng Phụ Trách Đội",
    quote:
      "“Sau buổi trải nghiệm, học sinh ý thức hơn khi dùng nhựa một lần. Các em chủ động đề xuất thùng phân loại trong lớp.”",
    rating: 5,
  },
  {
    id: 4,
    name: "Chị Mỹ Linh",
    title: "Phụ huynh (quận Thanh Khê)",
    quote:
      "“Điểm cộng là quản lý lớp tốt, vật liệu sạch - an toàn. Trẻ nào cũng có sản phẩm hoàn chỉnh để mang về.”",
    rating: 5,
  },
  {
    id: 5,
    name: "Anh Quốc Bảo",
    title: "Phụ huynh (quận Hải Châu)",
    quote:
      "“Con tôi rất thích. Về nhà cứ khoe cái xe đua làm từ nắp chai và đòi ba mẹ giữ lại nắp chai để làm tiếp.”",
    rating: 5,
  },
];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <motion.div
    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 snap-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < item.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="font-text-content-min text-xs mb-6">{item.quote}</p>
      <div>
        <p className="font-bold font-text-content">{item.name}</p>
        <p className="text-gray-500 text-sm font-text-content-min !font-bold">
          {item.title}
        </p>
      </div>
    </div>
  </motion.div>
);

// 4. Component Slider chính
export const TestimonialSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCurrentScroll(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  const handleNavClick = (direction: "prev" | "next") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "prev" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const isAtStart = currentScroll < 50;
  const isAtEnd = currentScroll > maxScroll - 50;
  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setMaxScroll(scrollWidth - clientWidth);
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);

    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 md:pl-12 pl-0">
          <h2 className="text-4xl md:text-5xl text-about">Khách hàng nói gì</h2>
          <p className="font-text-content !text-sm">
            Cùng lắng nghe xem các phụ huynh và bé đã nói gì về trải nghiệm workshop của chúng tôi!
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-6 -mb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => handleNavClick("prev")}
            disabled={isAtStart}
            className={`w-12 h-12 rounded-full bg-[#8EA885] text-white flex items-center justify-center transition-all duration-300 ${isAtStart
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:bg-[#4A6341] hover:scale-105"
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleNavClick("next")}
            disabled={isAtEnd}
            className={`w-12 h-12 rounded-full bg-[#8EA885] text-white flex items-center justify-center transition-all duration-300 ${isAtEnd
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:bg-[#4A6341] hover:scale-105"
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
