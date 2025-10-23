import React from "react";

// 1. ĐỊNH NGHĨA TYPE CHO DỮ LIỆU
type ServiceItemProps = {
  id: number;
  title: string;
  description: string;
  align: "left" | "right"; // Căn lề của khối text
  bgColor: string; // Màu nền của cả component
  buttonText: string;
};

// --- COMPONENT CON ---
// Component con, có thể tái sử dụng
// Nhận vào `item` và tự động căn lề
const ServiceHighlightItem: React.FC<{ item: ServiceItemProps }> = ({
  item,
}) => {
  const { title, description, align, bgColor, buttonText } = item;

  // Tự động thay đổi vị trí khối text dựa trên prop `align`
  const alignmentClass = align === "left" ? "justify-start" : "justify-end";

  return (
    <section
      className={`
        w-full rounded-3xl p-8 md:p-12 lg:p-16 
        flex items-center 
        transition-all duration-300 shadow-lg hover:shadow-xl
        ${alignmentClass} 
        ${bgColor}
      `}
    >
      {/* Khối nội dung text */}
      <div className="w-full lg:w-1/2 xl:w-2/5 space-y-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4A6341]">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>

        {/* Nút bấm (sử dụng màu từ các component trước) */}
        <button
          className="
            px-7 py-3 rounded-lg bg-[#879382] text-white
            font-semibold text-lg
            transition-all duration-300 ease-in-out
            hover:bg-[#4A6341] hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-[#879382] focus:ring-opacity-50
          "
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

// --- COMPONENT CHÍNH ---
// Component cha, chứa dữ liệu và render ra danh sách
export const ServiceHighlights = () => {
  // Dữ liệu mẫu (lấy từ ảnh của bạn)
  const serviceData: ServiceItemProps[] = [
    {
      id: 1,
      title: "Robot Từ Hộp Sữa",
      description:
        "Khóa học 120 phút dành cho trẻ từ 5-12 tuổi, hướng dẫn các bé biến vỏ hộp sữa thành robot mini có khớp xoay, giúp hình thành tư duy thiết kế, rèn luyện kỹ năng thủ công, và khám phá các khái niệm khoa học nền tảng như trực, khớp, ma sát.",
      align: "right", // Khối text nằm bên phải
      bgColor: "bg-[#E5E6D8]", // Màu nền từ ảnh
      buttonText: "Xem chi tiết",
    },
    {
      id: 2,
      title: "Đèn Lồng Từ Chai PET",
      description:
        "Hướng dẫn trẻ chế tác đèn lồng bền đẹp, an toàn từ chai nhựa cũ với nguồn sáng LED, giúp trẻ hiểu về truyền sáng, khuếch tán ánh sáng và vai trò của chất liệu trong điều tiết ánh sáng, đồng thời rèn luyện tư duy bố cục, tính tỉ mỉ và ý thức tái chế.",
      align: "left", // Khối text nằm bên trái
      bgColor: "bg-[#D7DDCF]", // Màu nền từ ảnh
      buttonText: "Xem chi tiết",
    },
    {
      id: 3,
      title: "Xe Đua Nắp Chai",
      description: "...",
      align: "right",
      bgColor: "bg-[#E5E6D8]",
      buttonText: "Xem chi tiết",
    },
    {
      id: 4,
      title: "Xe Đua Nắp Chai",
      description: "...",
      align: "left",
      bgColor: "bg-[#E5E6D8]",
      buttonText: "Xem chi tiết",
    },
  ];

  return (
    <div className=" py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 md:space-y-12">
        {serviceData.map((item) => (
          <ServiceHighlightItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
