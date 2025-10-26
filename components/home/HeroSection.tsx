"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export const FloatingDecor = () => {
  return (
    <>
      <motion.img
        src="/section/1.png"
        className="absolute top-16 left-10 w-12 opacity-80 pointer-events-none"
        animate={{ y: [0, -18, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/section/1.png"
        className="absolute bottom-10 right-20 w-14 opacity-75 pointer-events-none"
        animate={{ y: [0, 14, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};

export const HeroSection = () => {
  const router = useRouter();

  return (
    <motion.div
      className="w-full pt-12 relative overflow-hidden"
      style={{ perspective: 1200 }}
    >
      <FloatingDecor />
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 md:pr-16 pr-0"
        whileHover={{ rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
      >
        {/* Hình ảnh hero main */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          animate={{
            y: [0, -12, 0],
          }}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-full h-[550px] lg:h-[600px]">
            <Image
              src="/frame/Frame 1.png"
              alt="Bear holding the earth illustration"
              fill
              className="object-contain object-left"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-2/5 text-center lg:text-left font-sans flex flex-col items-end px-2 gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-[#508D57] font-serif">
            GreenKids
          </h1>

          <p className="font-text-content max-w-lg">
            Chuỗi workshop tái chế sáng tạo đầu tiên tại Đà Nẵng dành cho trẻ em
            5-12 tuổi. Từ vật liệu bỏ đi, trẻ tạo nên sản phẩm độc đáo, nuôi
            dưỡng tưởng tượng & tình yêu môi trường.
          </p>

          <motion.button
            className="button-content button-text"
            whileHover={{ scale: 1.12, rotate: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            onClick={() => router.push("/services")}
          >
            HÔM NAY THỬ MỘT ĐIỀU XANH CÙNG CON! 🌱
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
