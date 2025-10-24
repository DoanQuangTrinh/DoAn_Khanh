"use client";

import Image from "next/image";
import { Button } from "primereact/button";

export const HeroSection = () => {
  return (
    <div className="w-full pt-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 md:pr-16 pr-0">
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
        <div className="w-full lg:w-2/5 text-center lg:text-left font-sans flex flex-col md:justify-end justify-center items-end md:px-0 px-2 gap-6">
          <h1 className="w-full md:w-auto text-5xl lg:text-7xl font-bold text-[#508D57] font-serif">
            GreenKids
          </h1>

          <p className="w-full md:w-auto font-text-content">
            Chuỗi workshop tái chế sáng tạo đầu tiên tại Đà Nẵng dành cho trẻ em
            từ 5 đến 12 tuổi.<br></br> <br></br>Từ những vật liệu bỏ đi, chúng
            tôi giúp trẻ tạo nên những sản phẩm độc đáo, nuôi dưỡng trí tưởng
            tượng, tinh thần bảo vệ môi trường và kết nối cùng gia đình.
          </p>

          <div className="w-full md:w-auto flex justify-center lg:justify-start">
            <button className="button-content button-text">
              HÔM NAY THỬ MỘT ĐIỀU XANH CÙNG CON!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
