"use client";

import Image from "next/image";
import { Button } from "primereact/button";

export const HeroSection = () => {
  return (
    // 1. GIẢM padding trên mobile (py-12), GIỮ padding cho desktop (lg:py-20)
    // 2. THÊM padding ngang (px-4 sm:px-8) để không dính vào cạnh
    <div className="container w-full  pt-12 lg:pb-32">
      {/* 3. GIẢM khoảng cách (gap) trên mobile (gap-8) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* === Cột Trái: Hình ảnh === */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/frame/Frame 1.png" // Đường dẫn của bạn
            alt="Bear holding the earth illustration"
            width={600}
            height={550}
            className="object-contain"
            priority
          />
        </div>

        {/* === Cột Phải: Nội dung Text === */}
        {/* 4. CĂN GIỮA trên mobile (text-center), CĂN TRÁI trên desktop (lg:text-left) */}
        <div className="w-full lg:w-2/5 text-center lg:text-left font-sans flex flex-col justify-end items-end">
          <h1 className="text-5xl lg:text-7xl font-bold text-brand-green-dark mb-6">
            GreenKids
          </h1>

          <p className="text-lg lg:text-xl text-brand-text mb-4 leading-relaxed font-josefin text-[25px] leading-[25px] font-medium">
            Chuỗi workshop tái chế sáng tạo đầu tiên tại Đà Nẵng dành cho trẻ em
            từ 5 đến 12 tuổi.
          </p>

          <p className="text-base lg:text-lg text-brand-text mb-10 leading-relaxed">
            Từ những vật liệu bỏ đi, chúng tôi giúp trẻ tạo nên những sản phẩm
            độc đáo, nuôi dưỡng trí tưởng tượng, tinh thần bảo vệ môi trường và
            kết nối cùng gia đình.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              label="HÔM NAY THỬ MỘT ĐIỀU XANH CÙNG CON!"
              className="!bg-[#6F7A6B] hover:bg-gray-300 text-brand-text font-bold 
                 py-3 px-6 lg:py-4 lg:px-8 
                 text-sm lg:text-base 
                 rounded-lg !border-none uppercase tracking-wide transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
