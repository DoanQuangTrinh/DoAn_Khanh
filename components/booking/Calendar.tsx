"use client";
// src/components/Calendar.tsx
import React, { useState } from 'react';

// Icon mũi tên Xổ xuống
const ChevronDown = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-text-light h-4 w-4"><path d="m6 9 6 6 6-6" /></svg>
);

// Nút chọn (giả lập <select>)
const SelectButton = ({ children }: { children: React.ReactNode }) => (
    <button
        type="button"
        className="bg-white text-brand-text p-2 px-4 rounded-lg font-semibold text-sm flex items-center justify-between w-[130px] focus:outline-none focus:ring-2 focus:ring-brand-dark"
    >
        <span>{children}</span>
        <ChevronDown />
    </button>
);

// Dữ liệu giả lập cho lịch (Tháng 10/2025)
const daysOfWeek = ['Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'CN'];
const daysInMonth = [
  null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, null, null
];
const timeSlots = ["09:00", "14:30", "18:30"]; // Các khung giờ

// Định nghĩa props
interface CalendarProps {
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
}

export const Calendar = ({ selectedDay, setSelectedDay, selectedTime, setSelectedTime }: CalendarProps) => {

  const handleDayClick = (day: number | null) => {
    if (day !== null) {
      setSelectedDay(day);
    }
  };

  return (
    <div className="bg-[#D9DAC7] text-brand-text font-josefin p-6 rounded-2xl shadow-lg w-full lg:w-auto lg:flex-1">
      {/* Chọn Tháng/Năm */}
      <div className="flex justify-between mb-4 gap-2">
        {/* ... (SelectButton Tháng 10, Năm 2025) ... */}
      </div>

      {/* Tiêu đề các ngày trong tuần */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {/* ... (map daysOfWeek) ... */}
      </div>

      {/* Lưới các ngày */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDayClick(day)}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full text-sm
              ${day === null ? 'text-transparent' : 'text-brand-text-light'}
              ${day === selectedDay ? 'bg-brand-selected border rounded bg-[#adafa7] !text-brand-dark font-bold' : ''} 
              ${day !== null && day !== selectedDay ? 'hover:bg-brand-light-btn cursor-pointer' : ''}
            `}
          >
            {day}
          </div>
        ))}
      </div>

      {/* === PHẦN CHỌN GIỜ (MỚI) === */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-brand-text mb-2">Chọn giờ</h3>
        <div className="flex gap-2 flex-wrap">
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              className={`
                p-2 px-4 rounded-lg font-semibold text-sm
                ${selectedTime === time 
                  ? 'bg-brand-dark border rounded bg-[#adafa7] text-black' 
                  : 'bg-white text-brand-text hover:bg-brand-light-btn'}
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      {/* Các nút Xóa/Lưu đã được gỡ bỏ */}
    </div>
  );
};


