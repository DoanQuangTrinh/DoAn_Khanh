import React from "react";
import { FaChevronLeft } from "react-icons/fa";

type ServiceCardProps = {
  className: string;
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
      <div className="w-full h-full rounded-2xl" />
    )}
  </div>
);
export const ServiceHero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
          <div className="relative w-full min-h-[400px] lg:min-h-[500px]">
            <ServiceCard
              className="
                w-3/4 h-60 top-0 right-0 z-10
                bg-[#879382]
              "
            />
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
