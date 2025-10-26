// src/pages/BookingPage.tsx (hoặc nơi bạn đặt nó)
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // === THAY ĐỔI: Import useRouter ===
import { BookingForm } from "./BookingForm";
import { Calendar } from "./Calendar";
import { toast } from "react-toastify";

// Định nghĩa kiểu dữ liệu cho item trong giỏ hàng
interface CartItem {
  id: number;
  workshopName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// Hàm format tiền
const formatPrice = (priceNum: number): string => {
  return priceNum.toLocaleString("vi-VN") + "đ";
};

export const BookingPage = () => {
  // === THAY ĐỔI: Khởi tạo router ===
  const router = useRouter(); 
  
  // State cho giỏ hàng
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // State cho form (được nâng lên từ các component con)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // 1. Đọc dữ liệu từ localStorage khi component mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Không thể đọc giỏ hàng từ localStorage:", error);
    }
  }, []);

  // 2. Tính tổng tiền
  const grandTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  // 3. Xử lý thanh toán
  const handleCheckout = () => {
    // Kiểm tra thông tin
    if (!name || !phone || !selectedDay || !selectedTime) {
      toast.error("Vui lòng điền đầy đủ thông tin liên hệ và chọn ngày giờ.");
      return;
    }

    if (cartItems.length === 0) {
      toast.warning("Giỏ hàng của bạn đang trống.");
      return;
    }

    // Tạo đối tượng đơn hàng cuối cùng
    const orderDetails = {
      customerInfo: {
        name,
        phone,
      },
      bookingInfo: {
        date: `Ngày ${selectedDay} (Tháng 10/2025)`, // Giả định tháng/năm
        time: selectedTime,
      },
      items: cartItems,
      grandTotal: grandTotal,
    };
    
    // === THAY ĐỔI: Logic xử lý thanh toán ===
    try {
      // 1. Lưu thông tin đơn hàng cuối cùng vào localStorage
      localStorage.setItem("finalOrder", JSON.stringify(orderDetails));
      
      // 2. Xóa giỏ hàng cũ
      localStorage.removeItem("cart");

      // 3. Cập nhật state (để UI giỏ hàng trống)
      setCartItems([]);

      // 4. Thông báo thành công
      toast.success("Đặt hàng thành công! Đang chuyển hướng...");

      // 5. Điều hướng đến trang thanh toán
      router.push("/booking/pay");

    } catch (error) {
      console.error("Lỗi khi xử lý thanh toán:", error);
      toast.error("Đã xảy ra lỗi khi lưu đơn hàng. Vui lòng thử lại.");
    }
  };

  return (
    // Thay đổi layout thành 3 cột trên desktop
    <div className="w-full flex flex-col lg:flex-row items-stretch justify-center p-10 gap-8 bg-brand-page-bg">
      
      {/* === CỘT 1: ĐƠN HÀNG === */}
      <div className="bg-[#D9DAC7] text-brand-text font-josefin p-8 rounded-2xl shadow-lg w-full lg:w-1/3">
        <h2 className="text-3xl font-bold mb-6">Đơn hàng của bạn</h2>
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-brand-selected pb-2">
                <div>
                  <div className="font-semibold">{item.workshopName}</div>
                  <div className="text-sm text-gray-600">Số lượng: {item.quantity}</div>
                </div>
                <div className="font-semibold">{formatPrice(item.totalPrice)}</div>
              </div>
            ))
          ) : (
            <p>Giỏ hàng của bạn đang trống.</p>
          )}
        </div>
        
        {/* Tổng tiền */}
        <div className="border-t-2 border-brand-dark pt-4">
          <div className="flex justify-between items-center text-xl font-bold mb-6">
            <span>Tổng cộng:</span>
            <span className="text-2xl">{formatPrice(grandTotal)}</span>
          </div>
          
          {/* NÚT THANH TOÁN CHÍNH */}
          <button
            type="button"
            onClick={handleCheckout}
            className="w-full !text-center bg-[#424D3E] text-white p-4 rounded-lg font-bold text-lg transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
          >
            Thanh Toán
          </button>
        </div>
      </div>

      {/* === CỘT 2: FORM LIÊN HỆ === */}
      <BookingForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
      />

      {/* === CỘT 3: LỊCH & GIỜ === */}
      <Calendar 
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
};
