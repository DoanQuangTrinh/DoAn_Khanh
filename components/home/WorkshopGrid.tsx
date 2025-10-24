import React from "react";

// 1. ĐỊNH NGHĨA TYPE CHO DỮ LIỆU (THỰC HÀNH TỐT VỚI TYPESCRIPT)
type WorkshopItem = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Thêm trường ảnh để giao diện đẹp hơn
  className?: string; // Cho phép truyền class tùy chỉnh (ví dụ: h-full)
};

// 2. COMPONENT THẺ TÁI SỬ DỤNG (WorkshopCard)
//    Cải tiến UI/UX:
//    - Thêm placeholder cho ảnh sản phẩm.
//    - Sử dụng shadow, bo tròn, và transition cho hiệu ứng 3D nhẹ nhàng, chuyên nghiệp.
//    - Cấu trúc flex-col với `flex-grow` để phần mô tả co giãn,
//      và `mt-auto` để nút "Xem thêm" luôn được đẩy xuống dưới cùng.
const WorkshopCard = ({ item }: { item: WorkshopItem }) => {
  return (
    <div
      className={`
        bg-[#D9DAC7] rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-1
        flex flex-col
        ${item.className || ""}
      `}
    >
      {/* Phần ảnh minh họa */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">[Ảnh Minh Họa]</span>
      </div>

      {/* Phần nội dung thẻ */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="title-work-shop">{item.title}</h3>
        <p className="font-text-content !text-sm">{item.description}</p>

        {/* Nút bấm được đẩy xuống dưới cùng */}
        <button className="button-workshop text-workshop py-2 px-4 w-max">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

// 3. COMPONENT LƯỚI CHÍNH (WorkshopGrid)
//    Sắp xếp layout đúng như hình ảnh:
//    - `lg:grid-cols-2`: Trên desktop, chia làm 2 cột.
//    - Cột 1: Chứa thẻ "Robot" (item 1).
//    - Cột 2: Dùng `flex flex-col` để chứa 3 thẻ còn lại.
//    - Responsive: Trên mobile (dưới `lg`), tất cả tự động xếp chồng 1 cột.
export const WorkshopGrid = () => {
  // Dữ liệu mẫu (sử dụng text từ ảnh của bạn)
  const workshopData: WorkshopItem[] = [
    {
      id: 1,
      title: "Robot Từ Hộp Sữa",
      description:
        "Khóa học 120 phút dành cho trẻ từ 5-12 tuổi, hướng dẫn các bé biến vỏ hộp sữa thành robot mini có khớp xoay, giúp hình thành tư duy thiết kế, rèn luyện kỹ năng thủ công, và khám phá các khái niệm khoa học nền tảng như trực, khớp, ma sát.",
      className: "h-full", // Class này làm thẻ bên trái co giãn bằng chiều cao của cột bên phải
    },
    {
      id: 2,
      title: "Đèn Lồng Từ Chai PET",
      description:
        "Hướng dẫn trẻ chế tác đèn lồng bền đẹp, an toàn từ chai nhựa cũ với nguồn sáng LED, giúp trẻ hiểu về truyền sáng, khuếch tán ánh sáng và vai trò của chất liệu trong điều tiết ánh sáng, đồng thời rèn luyện tư duy bố cục, tính tỉ mỉ và ý thức tái chế.",
    },
    {
      id: 3,
      title: "Xe Đua Nắp Chai",
      description:
        "Workshop mini tạo xe đua từ nắp chai, que kem và ống hút. Thử thách tốc độ trên đường đua tự tạo.",
    },
    {
      id: 4,
      title: "Chậu Cây Mini Tái Chế",
      description:
        "Trồng cây sen đá hoặc xương rồng trong chậu tự chế từ lon cũ, trang trí bàn học thêm xanh.",
    },
  ];

  // Lấy dữ liệu cho từng thẻ để code dễ đọc
  const mainItem = workshopData.find((p) => p.id === 1);
  const secondaryItem = workshopData.find((p) => p.id === 2);
  const subItem1 = workshopData.find((p) => p.id === 3);
  const subItem2 = workshopData.find((p) => p.id === 4);

  // Đảm bảo dữ liệu tồn tại trước khi render
  if (!mainItem || !secondaryItem || !subItem1 || !subItem2) {
    return <div>Lỗi: Không tìm thấy dữ liệu workshop.</div>;
  }

  return (
    <div className="p-4 md:p-8 bg-[#F4EEE0] min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CỘT BÊN TRÁI: Thẻ lớn (Robot) */}
        <WorkshopCard item={mainItem} />

        {/* CỘT BÊN PHẢI: Chứa 3 thẻ còn lại */}
        <div className="flex flex-col gap-6">
          {/* Thẻ trên-phải (Đèn lồng) */}
          <WorkshopCard item={secondaryItem} />

          {/* Lưới phụ 2 thẻ dưới-phải */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <WorkshopCard item={subItem1} />
            <WorkshopCard item={subItem2} />
          </div>
        </div>
      </div>
    </div>
  );
};
