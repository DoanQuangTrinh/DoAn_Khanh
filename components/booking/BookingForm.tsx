// src/components/BookingForm.tsx
"use client";
import React from "react";

// Định nghĩa props để nhận state từ component cha
interface BookingFormProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  // THÊM: State cho phần Ghi chú
  note?: string;
  setNote?: (note: string) => void;
}

export const BookingForm = ({
  name,
  setName,
  phone,
  setPhone,
  // THÊM: Destructure note và setNote
  note,
  setNote,
}: BookingFormProps) => {
  return (
    // Sử dụng flex-1 để nó chiếm không gian linh hoạt
    <div className="bg-[#D9DAC7] text-brand-text font-text-content p-8 rounded-2xl shadow-lg w-full lg:w-auto lg:flex-1">
      <h2 className="text-3xl font-bold mb-6">Thông tin liên hệ</h2>
      <form>
        {/* Trường Họ và Tên */}
        <div className="mb-6">
          <label
            htmlFor="customerName"
            className="block !text-xl font-text-content mb-2 font-text-content-min">
            Họ và Tên
          </label>
          <input
            type="text"
            id="customerName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white w-full p-3 rounded-lg border-none text-brand-text focus:ring-2 focus:ring-brand-dark"
            placeholder="Nguyễn Văn A"
          />
        </div>

        {/* Trường Số Điện Thoại */}
        <div className="mb-6">
          <label
            htmlFor="customerPhone"
            className="block !text-xl font-text-content mb-2 font-text-content-min">
            Số Điện Thoại
          </label>
          <input
            type="tel"
            id="customerPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-white w-full p-3 rounded-lg border-none text-brand-text focus:ring-2 focus:ring-brand-dark"
            placeholder="0905123456"
          />
        </div>

        {/* THÊM: Trường Ghi chú */}
        <div className="mb-6">
          <label
            htmlFor="customerNote"
            className="block !text-xl font-text-content mb-2 font-text-content-min">
            Ghi Chú (Nếu cần)
          </label>
          <textarea
            id="customerNote"
            rows={4}
            value={note}
            onChange={(e) => {
              if (setNote) {
                setNote(e.target.value);
              }
            }}
            className="bg-white w-full p-3 rounded-lg border-none text-brand-text focus:ring-2 focus:ring-brand-dark resize-none"
            placeholder="Ví dụ: Tôi muốn học thử vào buổi sáng hoặc có yêu cầu đặc biệt về giáo viên..."
          />
        </div>
      </form>
    </div>
  );
};
