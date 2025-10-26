"use client";
import React from "react";
import { motion } from "framer-motion";

type WorkshopItem = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
};

const WorkshopCard = ({ item }: { item: WorkshopItem }) => {
  return (
    <motion.div
      className={`bg-[#D9DAC7] rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col ${item.className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">[Ảnh Minh Họa]</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="title-work-shop">{item.title}</h3>
        <p className="font-text-content !text-sm">{item.description}</p>
        <button className="button-workshop text-workshop py-2 px-4 w-max mt-auto">
          Xem thêm
        </button>
      </div>
    </motion.div>
  );
};

export const WorkshopGrid = () => {
  const workshopData: WorkshopItem[] = [
    {
      id: 1,
      title: "Robot Từ Hộp Sữa",
      description:
        "Khóa học 120 phút dành cho trẻ từ 5-12 tuổi, hướng dẫn các bé biến vỏ hộp sữa thành robot mini có khớp xoay, giúp hình thành tư duy thiết kế, rèn luyện kỹ năng thủ công, và khám phá các khái niệm khoa học nền tảng như trực, khớp, ma sát.",
      className: "h-full",
    },
    {
      id: 2,
      title: "Đèn Lồng Từ Chai PET",
      description:
        "Hướng dẫn trẻ chế tác đèn lồng bền đẹp, an toàn từ chai nhựa cũ với nguồn sáng LED, giúp trẻ hiểu về truyền sáng, khuếch tán ánh sáng và vai trò của chất liệu trong điều tiết ánh sáng, đồng thời rèn luyện tư duy bố cục, tính tỉ mỉ và ý thức tái chế.",
    },
    {
      id: 3,
      title: "Xe Đua Nắp Chai",
      description:
        "Workshop mini tạo xe đua từ nắp chai, que kem và ống hút. Thử thách tốc độ trên đường đua tự tạo.",
    },
    {
      id: 4,
      title: "Chậu Cây Mini Tái Chế",
      description:
        "Trồng cây sen đá hoặc xương rồng trong chậu tự chế từ lon cũ, trang trí bàn học thêm xanh.",
    },
  ];

  const mainItem = workshopData.find((p) => p.id === 1)!;
  const secondaryItem = workshopData.find((p) => p.id === 2)!;
  const subItem1 = workshopData.find((p) => p.id === 3)!;
  const subItem2 = workshopData.find((p) => p.id === 4)!;

  return (
    <div className="p-4 md:p-8 bg-[#F4EEE0] min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkshopCard item={mainItem} />

        <div className="flex flex-col gap-6">
          <WorkshopCard item={secondaryItem} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <WorkshopCard item={subItem1} />
            <WorkshopCard item={subItem2} />
          </div>
        </div>
      </div>
    </div>
  );
};
