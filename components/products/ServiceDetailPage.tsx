"use client";
import React, { useState } from "react";

// 1. ĐỊNH NGHĨA TYPE CHO DỮ LIỆU
type ProductImage = {
  id: number;
  url: string; // URL ảnh (size lớn)
  thumbnailUrl: string; // URL ảnh (size nhỏ)
  alt: string;
};

type ProductDetails = {
  title: string;
  description: string;
  images: ProductImage[];
  details: {
    label: string;
    value: string;
  }[];
  price: string;
  priceNotes: string[];
  disclaimer: string;
};

// --- COMPONENT CON ---

// 2. Gallery Ảnh (Phần tương tác chính)
interface ImageGalleryProps {
  images: ProductImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  // State để lưu trữ ảnh ĐANG ĐƯỢC CHỌN
  // Mặc định là ảnh đầu tiên
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full">
      {/* 2a. Ảnh chính */}
      <div
        className="
          relative w-full overflow-hidden 
          rounded-2xl shadow-lg 
          aspect-[4/3] // Giữ tỷ lệ khung hình 4:3
          bg-gray-200 // Màu nền khi ảnh đang tải
        "
      >
        {/*
          Sử dụng `key` để "buộc" React re-render và
          kích hoạt transition khi `src` thay đổi.
        */}
        <img
          key={selectedImage.id}
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="
            absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-300 ease-in-out
            animate-fadeIn
          "
        />
      </div>

      {/* 2b. Dải ảnh thumbnail */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`
              relative aspect-square w-full rounded-lg 
              overflow-hidden cursor-pointer
              ring-offset-2 ring-offset-[#FFFBF2]
              transition-all duration-300
              focus:outline-none focus:ring-2 
              ${
                selectedImage.id === image.id
                  ? "ring-2 ring-[#879382]" // Active: có viền
                  : "opacity-70 hover:opacity-100" // Inactive: mờ đi
              }
            `}
          >
            <img
              src={image.thumbnailUrl}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT CHÍNH ---
export const ServiceDetailPage = () => {
  // Dữ liệu mẫu (Lấy từ ảnh của bạn)
  const productData: ProductDetails = {
    title: "Robot Từ Hộp Sữa",
    description:
      "Trong buổi học, trẻ sẽ được hướng dẫn biến vỏ hộp sữa quen thuộc thành một robot mini có khớp xoay hoạt động mượt mà. Hành trình đi từ ý tưởng đến sản phẩm giúp trẻ hiểu cơ học nền tảng, làm chủ thao tác thủ công chính xác và thể hiện cá tính qua trang trí cũng phần kể chuyện về nhân vật robot do chính mình tạo ra.",
    images: [
      {
        id: 1,
        url: "https://placehold.co/800x600/879382/FDFBF4?text=Robot+View+1",
        thumbnailUrl: "https://placehold.co/150x150/879382/FDFBF4?text=View+1",
        alt: "Robot từ hộp sữa - Ảnh 1",
      },
      {
        id: 2,
        url: "https://placehold.co/800x600/B5C4B0/4A6341?text=Robot+View+2",
        thumbnailUrl: "https://placehold.co/150x150/B5C4B0/4A6341?text=View+2",
        alt: "Robot từ hộp sữa - Ảnh 2",
      },
      {
        id: 3,
        url: "https://placehold.co/800x600/D7DDCF/4A6341?text=Robot+View+3",
        thumbnailUrl: "https://placehold.co/150x150/D7DDCF/4A6341?text=View+3",
        alt: "Robot từ hộp sữa - Ảnh 3",
      },
      {
        id: 4,
        url: "https://placehold.co/800x600/E5E6D8/4A6341?text=Robot+View+4",
        thumbnailUrl: "https://placehold.co/150x150/E5E6D8/4A6341?text=View+4",
        alt: "Robot từ hộp sữa - Ảnh 4",
      },
    ],
    details: [
      { label: "Thời gian", value: "120 phút" },
      {
        label: "Lịch học",
        value: "Thứ 7 và Chủ Nhật hàng tuần\n09:00, 14:30 và 18:30",
      },
      { label: "Độ tuổi", value: "5 - 12 tuổi" },
      { label: "Sĩ số", value: "10 - 12 bé" },
    ],
    price: "150.000đ / 1 bé",
    priceNotes: [
      "Ưu đãi giảm 30 phần trăm cho 10 vé đầu tiên.",
      "Combo gia đình được giảm thêm từ bé thứ hai.",
    ],
    disclaimer: "Cho phép đổi lịch trước 24 giờ mà không tính phí.",
  };

  return (
    <section className=" py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* CỘT TRÁI: Gallery Ảnh Tương Tác */}
        <ImageGallery images={productData.images} />

        {/* CỘT PHẢI: Thông Tin Chi Tiết */}
        <div className="flex flex-col">
          {/* Tiêu đề & Mô tả */}
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4A6341]">
            {productData.title}
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {productData.description}
          </p>

          {/* Chi tiết (Thời gian, Lịch học,...) */}
          <div className="my-8 space-y-4">
            {productData.details.map((item) => (
              <div key={item.label} className="flex">
                <span className="font-semibold text-gray-900 w-28 shrink-0">
                  {item.label} :
                </span>
                {/* `whitespace-pre-line` để giữ ngắt dòng (cho lịch học) */}
                <span className="text-gray-700 whitespace-pre-line">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Giá & Ưu đãi */}
          <div className="mt-4 p-6 bg-[#E5E6D8] rounded-lg">
            <p className="font-serif text-4xl font-bold text-[#4A6341]">
              {productData.price}
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
              {productData.priceNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>

          {/* Miễn trừ trách nhiệm */}
          <p className="mt-4 text-sm text-gray-600 italic">
            {productData.disclaimer}
          </p>

          {/* Nút Đặt Lịch (đẩy xuống dưới cùng) */}
          <button
            className="
              mt-auto w-full lg:w-auto px-10 py-4 rounded-lg bg-[#879382] text-white
              font-semibold text-lg
              transition-all duration-300 ease-in-out
              hover:bg-[#4A6341] hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-[#879382] focus:ring-opacity-50
            "
          >
            Đặt Lịch
          </button>
        </div>
      </div>
    </section>
  );
};
