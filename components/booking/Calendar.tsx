"use client";
// src/components/Calendar.tsx
import React from "react";

// Icon mũi tên Xổ xuống
const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    className="text-brand-text-light h-4 w-4"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Nút chọn (giả lập <select>) - Dùng cho Năm
const SelectButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="bg-white text-brand-text p-2 px-4 rounded-lg font-semibold text-sm flex items-center justify-between w-[130px] focus:outline-none focus:ring-2 focus:ring-brand-dark"
  >
    <span>{children}</span>
    <ChevronDown />
  </button>
);

// Dữ liệu cho lịch
const daysOfWeek = ["Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "CN"];
const timeSlots = ["09:00", "14:30", "18:30"];
const year = 2025; // Giữ cố định năm

// Danh sách các tháng
const monthsOfYear = [
  { value: 1, name: "Tháng 1" },
  { value: 2, name: "Tháng 2" },
  { value: 3, name: "Tháng 3" },
  { value: 4, name: "Tháng 4" },
  { value: 5, name: "Tháng 5" },
  { value: 6, name: "Tháng 6" },
  { value: 7, name: "Tháng 7" },
  { value: 8, name: "Tháng 8" },
  { value: 9, name: "Tháng 9" },
  { value: 10, name: "Tháng 10" },
  { value: 11, name: "Tháng 11" },
  { value: 12, name: "Tháng 12" },
];

/**
 * Hàm tạo lưới lịch động
 * @param month (1-12)
 * @param year (YYYY)
 * @returns Mảng các ngày (number | null)[]
 */
const generateCalendarGrid = (
  month: number,
  year: number
): (number | null)[] => {
  const days: (number | null)[] = []; // Lấy ngày đầu tiên của tháng (Date dùng tháng 0-11)
  const firstDate = new Date(year, month - 1, 1); // Lấy số ngày trong tháng
  const numDays = new Date(year, month, 0).getDate(); // Lấy ngày trong tuần (0=CN, 1=T2, ...)
  const firstDayOfWeek = firstDate.getDay(); // Tính toán độ lệch để bắt đầu từ Thứ 2 (0=T2, 1=T3, ..., 6=CN)
  const startOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Thêm các ô null cho đầu tháng

  for (let i = 0; i < startOffset; i++) {
    days.push(null);
  } // Thêm các ngày trong tháng
  for (let i = 1; i <= numDays; i++) {
    days.push(i);
  } // Thêm các ô null cho cuối tháng
  while (days.length % 7 !== 0) {
    days.push(null);
  }
  return days;
};

// Định nghĩa props
interface CalendarProps {
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
}

export const Calendar = ({
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  selectedMonth,
  setSelectedMonth,
}: CalendarProps) => {
  // [LOGIC MỚI] Lấy ngày hiện tại
  // Đặt giờ về 0:00:00 để so sánh chính xác các ngày
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Chuyển từ 0-11 sang 1-12
  const currentDay = today.getDate(); // Tạo lưới ngày động

  const daysInMonth = generateCalendarGrid(selectedMonth, year);

  const handleDayClick = (day: number | null) => {
    if (day !== null) {
      setSelectedDay(day);
    }
  }; // Xử lý khi người dùng đổi tháng

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedMonth(newMonth);
    setSelectedDay(null); // Reset ngày đã chọn khi đổi tháng
    setSelectedTime(null); // Reset giờ đã chọn khi đổi tháng
  };

  return (
    <div className="bg-[#D9DAC7] text-brand-text font-josefin p-6 rounded-2xl shadow-lg w-full lg:w-auto lg:flex-1">
      <div className="flex justify-between mb-4 gap-2">
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="bg-white text-brand-text p-2 px-4 rounded-lg font-semibold text-sm flex items-center justify-between w-[130px] focus:outline-none focus:ring-2 focus:ring-brand-dark appearance-none pr-8 cursor-pointer"
          >
            {monthsOfYear.map((month) => {
              const isPastMonth =
                year < currentYear ||
                (year === currentYear && month.value < currentMonth);

              return (
                <option
                  key={month.value}
                  value={month.value}
                  disabled={isPastMonth}
                  
                >
                  {month.name}{" "}
                </option>
              );
            })}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        <SelectButton>Năm 2025</SelectButton>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="font-semibold text-sm text-brand-text-light"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {daysInMonth.map((day, index) => {
          let isPastDay = false;
          if (day !== null) {
            const fullDate = new Date(year, selectedMonth - 1, day);
            if (fullDate < today) {
              isPastDay = true;
            }
          }

          const isClickable = day !== null && !isPastDay;

          return (
            <div
              key={index} // [CẬP NHẬT] Chỉ click khi 'isClickable' là true
              onClick={() => isClickable && handleDayClick(day)}
              className={`
 w-10 h-10 flex items-center justify-center rounded-full text-sm
 ${day === null ? "text-transparent" : "text-brand-text-light"}
 ${
   isPastDay
     ? "text-gray-400  pointer-events-none" // Mờ, gạch ngang, không click
     : ""
 }

 {/* Style cho ngày được chọn (chỉ khi không phải quá khứ) */}
 ${
   day === selectedDay && !isPastDay
     ? "bg-brand-selected border rounded bg-[#adafa7] !text-brand-dark font-bold"
     : ""
 } 
 
 {/* Style cho hover (chỉ khi click được) */}
 ${
   isClickable && day !== selectedDay
     ? "hover:bg-brand-light-btn cursor-pointer"
     : ""
 }
 ${day === null ? "pointer-events-none" : ""} 
 `}
            >
              {day}{" "}
            </div>
          );
        })}{" "}
      </div>
      {/* PHẦN CHỌN GIỜ (Giữ nguyên) */}     {" "}
      <div className="mt-6">
        {" "}
        <h3 className="text-sm font-semibold text-brand-text mb-2">
          Chọn giờ
        </h3>{" "}
        <div className="flex gap-2 flex-wrap">
          {" "}
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              className={`
 p-2 px-4 rounded-lg font-semibold text-sm
 ${
   selectedTime === time
     ? "bg-brand-dark border rounded bg-[#adafa7] text-black"
     : "bg-white text-brand-text hover:bg-brand-light-btn"
 }
 `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
