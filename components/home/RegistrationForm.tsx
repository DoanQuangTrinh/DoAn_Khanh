"use client";
import React, { useState, FormEvent } from "react";

// Định nghĩa kiểu cho dữ liệu form (thực hành tốt với TypeScript)
type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

// Component chính
export const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  console.log(formData);
  // Xử lý khi nhập liệu, dùng chung cho tất cả input/textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Xử lý khi submit form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Xử lý logic gửi form (ví dụ: gọi API)
    console.log("Form data submitted:", formData);
    alert("Đăng ký tư vấn thành công!");
    // Xóa form sau khi gửi (tùy chọn)
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  // Các lớp CSS tái sử dụng để code sạch hơn
  const labelClasses = "block !text-sm font-text-content mb-2";
  const inputClasses =
    "!font-josefin text-xs w-full px-5 py-3.5 bg-white rounded-lg shadow-sm " +
    "border border-gray-200 placeholder-gray-400 text-gray-800 " +
    "focus:outline-none focus:ring-2 focus:ring-[#4A6341] focus:ring-opacity-50";

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* --- 1. Tiêu đề --- */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl text-about mb-4"
            style={{ color: "#4A6341" }} // Màu xanh lá đậm
          >
            Đăng ký Tư vấn & Nhận Thông tin Workshop
          </h2>
          <p className="font-text-content !text-xs mx-auto w-full !text-center">
            "Để lại thông tin, GreenKids sẽ liên hệ tư vấn và gửi chi tiết các
            workshop phù hợp với độ tuổi của bé."
          </p>
        </div>

        {/* --- 2. Container Form --- */}
        <div
          className="rounded-2xl p-8 md:p-12 shadow-lg"
          style={{ backgroundColor: "#DDE0D5" }} // Màu nền xanh-xám nhạt
        >
          <form onSubmit={handleSubmit}>
            {/* Sử dụng Grid Layout
              - Desktop (lg): 3 cột
              - Mobile (mặc định): 1 cột
            */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* === KHỐI BÊN TRÁI (2 CỘT) === */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Tên Phụ Huynh */}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className={labelClasses}>
                      Tên Phụ Huynh
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* Số Điện Thoại */}
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className={labelClasses}>
                      Số Điện Thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0xxxxxxxxxx"
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* E-mail */}
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className={labelClasses}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="xxx@gmail.com"
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* Nút Đăng Ký */}
                  <div className="sm:col-span-1">
                    <button
                      type="submit"
                      className="
                        w-full sm:w-auto px-8 py-3.5 rounded-lg button-workshop text-workshop 
                        transition-all duration-300
                        hover:opacity-90 hover:shadow-md
                      "
                      style={{ backgroundColor: "#71836A" }} // Màu nút xanh-xám đậm
                    >
                      Đăng ký tư vấn
                    </button>
                  </div>
                </div>
              </div>

              {/* === KHỐI BÊN PHẢI (1 CỘT) === */}
              {/* Sử dụng flex-col và h-full để textarea chiếm hết chiều cao 
                của khối bên trái trên màn hình desktop.
              */}
              <div className="lg:col-span-1 flex flex-col h-full">
                <label htmlFor="message" className={labelClasses}>
                  Nội dung quan tâm
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tôi muốn hỏi về Workshop Robot từ hộp sữa..."
                  rows={8} // Chiều cao mặc định trên mobile
                  className={`${inputClasses} flex-grow min-h-[150px] lg:min-h-0`} // flex-grow để co giãn
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
