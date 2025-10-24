import React from "react";
import { FaChevronLeft } from "react-icons/fa";

// --- COMPONENT CON ---
// Component thẻ ảnh tái sử dụng
// Giúp code sạch sẽ và dễ quản lý hiệu ứng
type ServiceCardProps = {
  className: string; // Nhận class để tùy chỉnh vị trí và màu nền
  imageUrl?: string;
  alt?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  className,
  imageUrl,
  alt = "Service Image",
}) => (
  <div
    className={`
      absolute rounded-2xl shadow-xl
      transform-gpu transition-all duration-300 ease-in-out
      hover:scale-105 hover:z-30
      ${className}
    `}
  >
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    ) : (
      // Placeholder div nếu không có ảnh, nó sẽ nhận màu nền từ `className`
      <div className="w-full h-full rounded-2xl" />
    )}
  </div>
);
export const ServiceHero = () => {
  return (
    // Nền màu kem
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Link Quay Lại */}
        <a
          href="/"
          className="
            flex items-center gap-2 heading-title text-lg  opacity-80
            hover:opacity-100 transition-opacity duration-300
          "
        >
          <FaChevronLeft size={16} />
          Dịch vụ
        </a>

        {/* Layout chính: 2 cột trên desktop, 1 cột trên mobile */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CỘT BÊN TRÁI: Nội dung văn bản */}
          <div className="flex flex-col justify-center">
            <h1 className="text-about text-2xl md:text-4xl">
              HỌC HỎI QUA
              <br />
              TRẢI NGHIỆM THỰC TẾ
            </h1>
            <p className="mt-6 font-text-content-min">
              Từ robot hộp sữa đến đèn lồng chai PET, mỗi workshop là một trải
              nghiệm 2 giờ đầy hứng khởi. Hãy chọn cho bé khung giờ cuối tuần
              phù hợp để con vừa học, vừa chơi, và mang về những sản phẩm tự tay
              mình làm ra!
            </p>
          </div>

          {/* CỘT BÊN PHẢI: Khối ảnh động */}
          <div className="relative w-full min-h-[400px] lg:min-h-[500px]">
            {/* Giải thích Z-Index:
              - Thẻ 1 (Trên): z-10
              - Thẻ 2 (Giữa): z-20 (nằm trên 2 thẻ còn lại)
              - Thẻ 3 (Dưới): z-10
              - Khi hover BẤT KỲ thẻ nào, nó sẽ nhận `hover:z-30`,
                khiến nó nổi lên trên tất cả các thẻ khác.
            */}

            {/* Thẻ 1: Trên-Phải (Màu xanh đậm) */}
            <ServiceCard
              className="
                w-3/4 h-60 top-0 right-0 z-10
                bg-[#879382]
              "
              // imageUrl="path/to/your/image1.jpg"
            />

            {/* Thẻ 2: Giữa (Màu xanh nhạt) */}
            <ServiceCard
              className="
                w-3/4 h-60 top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 z-20
                bg-[#B5C4B0]
              "
            />

            <ServiceCard
              className="
                w-3/4 h-60 bottom-0 left-0 z-10
                bg-[#879382]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
