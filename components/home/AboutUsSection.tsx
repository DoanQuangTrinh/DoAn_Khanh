"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import TextWithFlowers from "./TextWithFlowers";

const itemsAboutUs = [
  {
    id: 1,
    title: "CHƠI XANH LÀNH - LITTLE HANDS GREEN HEARTS",
    content: `GreenKids đồng hành cùng trẻ 5-12 tuổi khám phá tái chế sáng tạo,
      biến vật liệu cũ thành đồ chơi mới có giá trị. Mỗi workshop là hành
      trình "vừa học vừa chơi", giúp trẻ phát triển tư duy sáng
      tạo, kỹ năng hợp tác và thói quen sống xanh với thành phẩm đồ chơi
      mang về sau mỗi buổi.`,
    name: "CHÚNG TÔI",
    contentButton: "KHÁM PHÁ CÂU CHUYỆN CỦA CHÚNG TÔI",
  },
  {
    id: 2,
    title: "",
    content: `Lịch Workshop cuối tuần đã sẵn sàng! Hãy chọn ngay 120 phút trải nghiệm sáng tạo phù hợp với bé và khung giờ thuận tiện nhất cho gia đình bạn. Ưu đãi giảm 30% cho 10 vé đầu tiên!`,
    name: "ĐĂNG KÝ WORKSHOP SÁNG TẠO CHO BÉ",
    contentButton: "",
  },
  {
    id: 3,
    title: "CHƠI XANH LÀNH - LITTLE HANDS GREEN HEARTS",
    content: `GreenKids theo đuổi sứ mệnh gieo mầm sống xanh và khơi mở tinh thần sáng tạo cho trẻ từ 5 đến 12 tuổi thông qua trải nghiệm tái chế thực hành, với thành phẩm đồ chơi mang về sau mỗi buổi. Chúng tôi tin trẻ chỉ thật sự hiểu khi được tự tay làm, từ việc chạm vào vật liệu, cân nhắc cách ghép nối cho đến khoảnh khắc tự hào cầm sản phẩm hoàn chỉnh về nhà như một minh chứng cho nỗ lực và tiến bộ của chính mình.`,
    name: "SỨ MỆNH",
    contentButton: "",
  },
];

const AboutUsSection: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const data =
    pathname === "/"
      ? itemsAboutUs[0]
      : pathname === "/booking"
      ? itemsAboutUs[1]
      : itemsAboutUs[2];

  return (
    <section
      className="w-full py-20 lg:py-32"
      style={{ backgroundColor: "#fdf6ec" }}
    >
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <TextWithFlowers data={data} router={router} /> {/* TEXT */}
        <motion.div
          className="group relative flex h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div
            className="absolute rounded-2xl shadow-lg transition-all duration-500 ease-out
             group-hover:-translate-x-28 group-hover:rotate-[-8deg]
             lg:group-hover:-translate-x-40 hover:z-50 hover:h-full h-[80%] w-full 
             bg-cover bg-center bg-no-repeat"
            style={{
              transform: "translateX(0rem) scale(0.95)",
              backgroundImage: "url('/Workshop/new3.jpg')",
            }}
          ></div>

          <div
            className="absolute z-10 rounded-2xl bg-[#B5C4B0] shadow-lg transition-all duration-500 ease-out
              group-hover:scale-105 h-[90%] hover:z-50 hover:h-full bg-cover bg-center bg-no-repeat"
            style={{
              transform: "translateX(4rem) scale(0.98)",
              width: "100%",
              backgroundImage: "url('/Workshop/new2.jpg')",
            }}
          ></div>
          <div
            className="absolute z-20 rounded-2xl bg-[#879382] shadow-lg transition-all duration-500 ease-out
              group-hover:translate-x-28 group-hover:rotate-[8deg]
              lg:group-hover:translate-x-40 hover:z-50 bg-cover bg-center bg-no-repeat "
            style={{
              transform: "translateX(8rem)",
              height: "100%",
              width: "100%",
              backgroundImage: "url('/Workshop/new1.jpg')",
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
