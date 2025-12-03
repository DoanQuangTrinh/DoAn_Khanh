"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { FaLongArrowAltRight } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <div className="w-full pt-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-8 lg:gap-16 ">
        <div className=" lg:w-2/5 md:text-right text-center font-sans flex flex-col px-4 md:px-0  gap-6">
          <h1 className="w-full md:w-auto text-5xl lg:text-7xl font-bold text-[#508D57] font-serif">
            GreenKids
          </h1>
          <p className="w-full md:w-auto font-text-content ">
            Chuỗi workshop tái chế sáng tạo đầu tiên tại Đà Nẵng dành cho trẻ em
            từ 5 đến 12 tuổi.<br></br> <br></br>Từ những vật liệu bỏ đi, chúng
            tôi giúp trẻ tạo nên những sản phẩm độc đáo, nuôi dưỡng trí tưởng
            tượng, tinh thần bảo vệ môi trường và kết nối cùng gia đình.
          </p>
          <ul className="list-disc list-inside font-text-content text-lg space-y-2">
            <li>
              Tái chế sáng tạo - 100% vật liệu thân thiện, an toàn cho trẻ.
            </li>
            <li>
              Chủ đề mới mỗi tuần luân hấp dẫn và khơi gợi trí tưởng tượng.
            </li>
            <li>Kết nối gia đình - phụ huynh cùng con học, cùng con chơi.</li>
            <li>
              Đối tác tin cậy được nhiều trường học và doanh nghiệp lựa chọn cho
              hoạt động giáo dục xanh.
            </li>
          </ul>

          <div className="w-full md:w-auto flex justify-center lg:justify-start">
            <button
              type="submit"
              className="
                        w-full sm:w-auto px-8 py-3.5 rounded-lg button-workshop text-workshop 
                        transition-all duration-300
                        hover:opacity-90 hover:shadow-md flex items-center gap-2 justify-center
                      "
              style={{ backgroundColor: "#71836A" }} // Màu nút xanh-xám đậm
            >
              {` Liên hệ ngay `} <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src="/frame/KEMStudio-00338.jpg"
            alt="Bear holding the earth illustration"
            width={600}
            height={550}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex text-center justify-center py-8 px-6">
        <p className="font-text-content  container">
          GreenKids ra đời tại Đà Nẵng (2025), được thành lập bởi nhóm chuyên
          gia giáo dục, môi trường và thiết kế. Chúng tôi mong muốn đưa hành
          động "sống xanh" vượt qua lý thuyết, giúp trẻ em trực tiếp trải nghiệm
          và thực hành bảo vệ môi trường bằng chính đôi tay mình.
        </p>
      </div>
    </div>
  );
};
