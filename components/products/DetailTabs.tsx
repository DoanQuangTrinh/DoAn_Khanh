"use client";
import React, { useState } from "react";

// 1. ĐỊNH NGHĨA TYPE (TUỲ CHỌN)
// Định nghĩa các tab có thể có
type TabName = "noiDung" | "ketQua" | "danhGia";

// --- COMPONENT CON ---
// Component thẻ đánh giá (lấy từ bài trước, tinh chỉnh lại)
type TestimonialCardProps = {
  name: string;
  title: string;
  quote: string;
  rating: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
  rating,
}) => (
  <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
    {/* Phần sao */}
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {/* Phần trích dẫn */}
    <p className="text-gray-600 italic flex-grow mb-5 text-base">“{quote}”</p>
    {/* Thông tin */}
    <div>
      <p className="font-bold text-gray-900 text-lg">{name}</p>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  </div>
);

// --- COMPONENT CHÍNH ---
export const DetailTabs = () => {
  // 1. STATE: Dùng để lưu tab nào đang được chọn
  // Mặc định là 'ketQua' (Kết quả) như trong hình
  const [activeTab, setActiveTab] = useState<TabName>("ketQua");

  // 2. NỘI DUNG MẪU
  const tabContent = {
    noiDung: (
      <div className="animate-fadeIn">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Nội dung chi tiết về workshop... (Đây là tab Nội dung) Trẻ sẽ được học
          về...
        </p>
      </div>
    ),
    ketQua: (
      <div className="animate-fadeIn">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Trẻ phân biệt được truyền sáng, phản xạ và khuếch tán. Trẻ hiểu vai
          trò của chất liệu trong việc điều tiết ánh sáng, rèn tính tỉ mỉ và tư
          duy bố cục. Ý thức về môi trường được củng cố khi một chai nhựa cũ
          được tái sinh thành đồ vật hữu ích.
        </p>
      </div>
    ),
    danhGia: (
      <div className="animate-fadeIn grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Đây là nơi render các card đánh giá */}
        <TestimonialCard
          name="Anh Quang Huy"
          title="Phụ huynh (quận Hải Châu)"
          quote="Con tôi mang về món đồ chơi đâu tay từ chai nhựa và kể rất chi tiết cách làm. Tôi thấy con chủ động, tập trung hơn hẳn."
          rating={4}
        />
        <TestimonialCard
          name="Cô Thu Hà"
          title="Giáo viên chủ nhiệm"
          quote="Buổi học rõ ràng, an toàn, có quy trình. Học sinh hào hứng mà giáo viên cũng dễ tích hợp vào tiết kỹ năng sống."
          rating={4}
        />
        <TestimonialCard
          name="Bé Gia Khang"
          title="Học sinh lớp 4"
          quote="Em thích nhất phần lắp ghép robot nắp chai. Về nhà em còn làm thêm một cái nữa để tặng em trai."
          rating={5}
        />
        <TestimonialCard
          name="Chị Ngọc Ánh"
          title="Phụ huynh (quận Sơn Trà)"
          quote="Con tôi vẫn nhút nhát, nhưng khi tự tay hoàn thiện món đồ chơi, bé tự tin khoe trước lớp. Đó là thay đổi tôi mong đợi."
          rating={5}
        />
      </div>
    ),
  };

  // 3. COMPONENT NÚT TAB (Tái sử dụng)
  const TabButton: React.FC<{
    tabId: TabName;
    title: string;
  }> = ({ tabId, title }) => {
    const isActive = activeTab === tabId;

    return (
      <div className="relative flex-1 flex flex-col items-center">
        {/* Nút bấm */}
        <button
          onClick={() => setActiveTab(tabId)}
          className={`
            font-serif text-3xl font-medium
            transition-colors duration-300
            ${isActive ? "text-[#4A6341]" : "text-gray-400 hover:text-gray-600"}
          `}
        >
          {title}
        </button>

        {/* THANH TRƯỢT (SLIDER)
          - Dùng `absolute` và `transition-all`
          - Chỉ hiện khi `isActive`
        */}
        <div
          className={`
            absolute -bottom-px w-full h-1 
            transition-all duration-500 ease-in-out
            ${
              isActive
                ? "bg-[#8EA885] scale-x-100" // Hiện và co giãn
                : "bg-transparent scale-x-0" // Ẩn và co về 0
            }
          `}
        />
      </div>
    );
  };

  return (
    <section className="bg-[#FFFBF2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 3. KHU VỰC CHỌN TAB */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="flex justify-between items-center text-center">
            <TabButton tabId="noiDung" title="Nội dung" />
            <TabButton tabId="ketQua" title="Kết quả học tập" />
            <TabButton tabId="danhGia" title="Đánh giá" />
          </div>

          {/* Đường gạch ngang nền */}
          <div className="absolute w-full h-0.5 bg-gray-300 -bottom-px z-[-1]" />
        </div>

        {/* 4. KHU VỰC HIỂN THỊ NỘI DUNG */}
        <div className="mt-12 text-center">
          {/* Render nội dung của tab đang active */}
          {tabContent[activeTab]}
        </div>
      </div>
    </section>
  );
};
