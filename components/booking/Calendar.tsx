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
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, null, null
];
export const Calendar = () => {
    // 2. Chuyển từ "const" sang "useState"
    //    Giá trị ban đầu là 25 (ngày 25)
    const [selectedDay, setSelectedDay] = useState<number | null>(25);

    // 3. (Tùy chọn) Tạo một hàm để xử lý việc click
    const handleDayClick = (day: number | null) => {
        // Chỉ cập nhật state nếu click vào một ngày hợp lệ (không phải null)
        if (day !== null) {
            setSelectedDay(day);
        }
    };

    return (
        // Giữ nguyên màu nền bạn mới đổi: bg-[#D9DAC7]
        <div className="bg-[#D9DAC7] text-brand-text font-josefin p-6 rounded-2xl  shadow-lg">
            {/* Chọn Tháng/Năm */}
            <div className="flex justify-between mb-4 gap-2">
                <SelectButton>Tháng 10</SelectButton>
                <SelectButton>Năm 2025</SelectButton>
            </div>

            {/* Tiêu đề các ngày trong tuần */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-sm font-semibold text-brand-text w-10 h-10 flex items-center justify-center">
                        {day}
                    </div>
                ))}
            </div>

            {/* Lưới các ngày */}
            <div className="grid grid-cols-7 gap-1 text-center">
                {daysInMonth.map((day, index) => (
                    <div
                        key={index}
                        // 4. Thêm sự kiện "onClick" vào đây
                        onClick={() => handleDayClick(day)}
                        className={`
                          w-10 h-10 flex items-center justify-center rounded-full text-sm
                          ${day === null ? 'text-transparent' : 'text-brand-text-light'}
                          
                          {/* 5. Class này giờ sẽ tự động thay đổi dựa trên state "selectedDay" */}
                          ${day === selectedDay ? 'bg-brand-selected !text-brand-dark font-bold' : ''} 
                          
                          ${day !== null && day !== selectedDay ? 'hover:bg-brand-light-btn cursor-pointer' : ''}
                        `}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Nút Xóa/Lưu */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                    type="button"
                    className="!text-center border border-[#99A484] bg-brand-light-btn text-brand-text p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
                >
                    Xóa
                </button>
                <button
                    type="button"
                    className="!text-center bg-[#424D3E] text-white p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
                >
                    Lưu
                </button>
            </div>
        </div>
    );
};