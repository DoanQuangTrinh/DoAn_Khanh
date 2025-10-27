"use client";
import { usePathname } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Kiểu dữ liệu form
type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const RegistrationForm = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Đăng ký tư vấn thành công!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const labelClasses = "block !text-xl font-text-content mb-2";
  const inputClasses =
    "!font-josefin text-xs w-full px-5 py-3.5 bg-white rounded-lg shadow-sm border border-gray-200 placeholder-gray-400 text-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#4A6341] focus:ring-opacity-50 focus:scale-105 focus:placeholder-transparent";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-18"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={
            pathname === "/about" ? "hidden" : "text-center mb-12 md:mb-16"
          }
        >
          <h2
            className="text-4xl md:text-5xl text-about mb-4"
            style={{ color: "#4A6341" }}
          >
            Đăng ký Tư vấn & Nhận Thông tin Workshop
          </h2>
          <p className="font-text-content !text-xs mx-auto w-full !text-center">
            "Để lại thông tin, GreenKids sẽ liên hệ tư vấn và gửi chi tiết các
            workshop phù hợp với độ tuổi của bé."
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 shadow-lg"
          style={{ backgroundColor: "#DDE0D5" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                  <div className="sm:col-span-1">
                    <button
                      type="submit"
                      className="
                        w-full sm:w-auto px-8 py-3.5 rounded-lg button-workshop text-workshop
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:opacity-90
                      "
                      style={{ backgroundColor: "#71836A" }}
                    >
                      Đăng ký tư vấn
                    </button>
                  </div>
                </div>
              </div>

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
                  rows={8}
                  className={`${inputClasses} flex-grow min-h-[150px] lg:min-h-0`}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};
