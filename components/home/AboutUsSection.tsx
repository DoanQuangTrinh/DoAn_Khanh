"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const itemsAboutUs = [
  {
    id: 1,
    title: 'CHƠI XANH LÀNH - LITTLE HANDS GREEN HEARTS',
    content: `GreenKids đồng hành cùng trẻ 5-12 tuổi khám phá tái chế sáng tạo,
      biến vật liệu cũ thành đồ chơi mới có giá trị. Mỗi workshop là hành
      trình "vừa học vừa chơi", giúp trẻ phát triển tư duy sáng
      tạo, kỹ năng hợp tác và thói quen sống xanh với thành phẩm đồ chơi
      mang về sau mỗi buổi.`,
    name: "CHÚNG TÔI",
    contentButton: "KHÁM PHÁ CÂU CHUYỆN CỦA CHÚNG TÔI"
  },
  {
    id: 2,
    title: '',
    content: `Lịch Workshop cuối tuần đã sẵn sàng! Hãy chọn ngay 120 phút trải nghiệm sáng tạo phù hợp với bé và khung giờ thuận tiện nhất cho gia đình bạn. Ưu đãi giảm 30% cho 10 vé đầu tiên!`,
    name: "ĐĂNG KÝ WORKSHOP SÁNG TẠO CHO BÉ",
    contentButton: ""
  },
  {
    id: 3,
    title: 'CHƠI XANH LÀNH - LITTLE HANDS GREEN HEARTS',
    content: `GreenKids theo đuổi sứ mệnh gieo mầm sống xanh và khơi mở tinh thần sáng tạo cho trẻ từ 5 đến 12 tuổi thông qua trải nghiệm tái chế thực hành, với thành phẩm đồ chơi mang về sau mỗi buổi. Chúng tôi tin trẻ chỉ thật sự hiểu khi được tự tay làm, từ việc chạm vào vật liệu, cân nhắc cách ghép nối cho đến khoảnh khắc tự hào cầm sản phẩm hoàn chỉnh về nhà như một minh chứng cho nỗ lực và tiến bộ của chính mình.`,
    name: "SỨ MỆNH",
    contentButton: ""
  },
];

const AboutUsSection: React.FC = () => {
  const pathname = usePathname();
  const data = pathname === '/' ? itemsAboutUs[0] : pathname === '/booking' ? itemsAboutUs[1] : itemsAboutUs[2];

  return (
    <section className="w-full py-20 lg:py-32" style={{ backgroundColor: "#fdf6ec" }}>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">

        {/* TEXT */}
        <motion.div
          className="flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#5E5E5E] opacity-80">
            {data.title}
          </span>
          <h2 className="mt-3 mb-6 text-about md:text-6xl text-4xl">
            {data.name}
          </h2>
          <p className="font-text-content">{data.content}</p>
          {data.contentButton && (
            <div className="mt-10">
              <motion.button
                className="button-content button-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {data.contentButton}
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* BOX LAYER */}
        <motion.div
          className="group relative flex h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div
            className="absolute rounded-2xl bg-[#D7DDCF] shadow-lg transition-all duration-500 ease-out
              group-hover:-translate-x-28 group-hover:rotate-[-8deg]
              lg:group-hover:-translate-x-40 h-[80%] hover:h-full"
            style={{
              transform: "translateX(0rem) scale(0.95)",
              width: "100%",
            }}
          ></div>
          <div
            className="absolute z-10 rounded-2xl bg-[#B5C4B0] shadow-lg transition-all duration-500 ease-out
              group-hover:scale-105 h-[90%] hover:h-full"
            style={{
              transform: "translateX(4rem) scale(0.98)",
              width: "100%",
            }}
          ></div>
          <div
            className="absolute z-20 rounded-2xl bg-[#879382] shadow-lg transition-all duration-500 ease-out
              group-hover:translate-x-28 group-hover:rotate-[8deg]
              lg:group-hover:translate-x-40"
            style={{
              transform: "translateX(8rem)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
