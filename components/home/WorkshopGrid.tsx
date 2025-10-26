"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type WorkshopItem = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
};

const WorkshopCard = ({
  item,
  index,
}: {
  item: WorkshopItem;
  index: number;
}) => {
  const router = useRouter();

  return (
    <motion.div
      className={`relative bg-[#D9DAC7] rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer ${
        item.className || ""
      }`}
      initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      whileHover={{
        scale: 1.05,
        rotate: 1.5,
      }}
    >
      {/* Viền phát sáng chuyển màu */}
      <div className="absolute inset-0 rounded-2xl border-[3px] border-transparent animate-glow pointer-events-none"></div>

      {/* Ảnh */}
      <motion.div
        className="w-full h-48 bg-gray-200 overflow-hidden flex items-center justify-center"
        whileHover={{ scale: 1.12, rotate: -2 }}
        transition={{ type: "spring", stiffness: 200, damping: 8 }}
      >
        <span className="text-gray-400 text-sm">[Ảnh Minh Họa]</span>
      </motion.div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="title-work-shop mb-2">{item.title}</h3>
        <p className="font-text-content !text-sm flex-grow">
          {item.description}
        </p>

        {/* Nút bounce */}
        <motion.button
          onClick={() => {
            router.push(`/services/${index}`);
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 8 }}
          className="button-workshop text-workshop py-2 px-4 w-max mt-4"
        >
          Xem thêm 🚀
        </motion.button>
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
    <motion.div
      className="p-4 md:p-8 bg-[#F4EEE0] min-h-screen"
      style={{ perspective: 1400 }} // <- tạo chiều sâu 3D
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
        whileHover={{ rotateX: 4, rotateY: -4 }} // <-- bàn nghiêng theo chuột
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
      >
        <WorkshopCard item={mainItem} index={1} />
        <div className="flex flex-col gap-6">
          <WorkshopCard item={secondaryItem} index={2} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <WorkshopCard item={subItem1} index={3} />
            <WorkshopCard item={subItem2} index={4} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
