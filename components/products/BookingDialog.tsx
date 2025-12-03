// src/components/BookingDialog.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "primereact/dialog";
import { toast } from "react-toastify";
// Thêm Button của PrimeReact để dùng trong giao diện chọn giá
import { Button } from "primereact/button";

// Định nghĩa các mức giá cố định
const PRICE_OPTION_1 = 170000;
const PRICE_OPTION_2 = 160000;

interface WorkshopDetail {
  label: string;
  value: string;
}

interface BookingData {
  details: WorkshopDetail[];
  price: string; // Vẫn giữ data.price, nhưng sẽ không dùng cho tính toán
  priceNotes: string[];
  disclaimer: string;
}

interface BookingDialogProps {
  workshopName: string;
  data: BookingData;
  visible: boolean;
  onHide: () => void;
}

// --- Các Icon và Helper Functions (Giữ nguyên) ---

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
      clipRule="evenodd"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M10 4.75a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 0110 4.75z"
      clipRule="evenodd"
    />
  </svg>
);

// parsePrice không còn được sử dụng
// const parsePrice = (priceString: string) => {...};

const formatPrice = (priceNum: number): string =>
  priceNum.toLocaleString("vi-VN") + "đ";

// --- Component Chính ---

export const BookingDialog = ({
  workshopName,
  data,
  visible,
  onHide,
}: BookingDialogProps) => {
  const router = useRouter();

  // 1. State cho Số lượng
  const [quantity, setQuantity] = useState(1);
  // 2. State MỚI cho Giá đã chọn, mặc định là mức 170k
  const [selectedPrice, setSelectedPrice] = useState(PRICE_OPTION_1);

  // 3. Tính toán lại Tổng tiền dựa trên giá đã chọn
  const unitPrice = selectedPrice;
  const totalPrice = unitPrice * quantity;

  // 4. Kiểm tra xem đã chọn giá chưa trước khi Checkout
  const isPriceSelected = selectedPrice > 0;

  const handleAddToCart = () => {
    if (!isPriceSelected) {
      toast.error("Vui lòng chọn mức giá trước khi thêm vào giỏ hàng.");
      return;
    }

    const cartItem = {
      id: Date.now(),
      workshopName,
      quantity,
      unitPrice, // SỬ DỤNG GIÁ ĐÃ CHỌN
      totalPrice,
    };

    try {
      // Lưu vào key "cart" để đồng bộ với BookingPage.tsx
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      existingCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      toast.success("Đã thêm vào giỏ hàng thành công!");
      onHide();
    } catch (error) {
      console.error("Lỗi khi lưu vào giỏ hàng:", error);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

  const handleCheckout = () => {
    if (!isPriceSelected) {
      toast.error("Vui lòng chọn mức giá trước khi thanh toán.");
      return;
    }

    const checkoutItem = {
      id: Date.now(),
      workshopName,
      quantity,
      unitPrice, // SỬ DỤNG GIÁ ĐÃ CHỌN
      totalPrice,
    };

    try {
      // Lưu vào key "cart" (thay thế cho "checkoutData") để đồng bộ với BookingPage.tsx
      localStorage.setItem("cart", JSON.stringify([checkoutItem]));
      router.push("/booking");
      onHide();
    } catch (error) {
      console.error("Lỗi khi chuyển đến thanh toán:", error);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

  const dialogFooter = (
    <div className="flex justify-end gap-4">
      <button
        type="button"
        className="!text-center bg-gray-400 text-white p-3 rounded-lg font-text-content transition hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        onClick={handleAddToCart}>
        Thêm vào giỏ hàng
      </button>
      <button
        type="button"
        className="!text-center bg-[#424D3E] text-white p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
        onClick={handleCheckout}
        disabled={!isPriceSelected} // Vô hiệu hóa nếu chưa chọn giá
      >
        Thanh toán ngay
      </button>
    </div>
  );

  return (
    <Dialog
      header={`Đặt vé: ${workshopName}`}
      visible={visible}
      onHide={onHide}
      style={{ width: "90vw", maxWidth: "800px" }}
      footer={dialogFooter}
      pt={{
        root: { className: "font-josefin rounded-2xl overflow-hidden" },
        header: { className: "bg-brand-container text-brand-dark p-6" },
        content: { className: "bg-brand-page-bg p-6" },
      }}>
      <div className="flex flex-col lg:flex-row gap-8 text-brand-text">
        {/* CỘT TRÁI: THÔNG TIN WORKSHOP (Giữ nguyên) */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h3 className="text-xl font-bold mb-4">Thông tin Workshop</h3>
          {data?.details?.map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="flex-shrink-0">{/* Icon Placeholder */}</div>
              <div>
                <div className="font-semibold">{item.label}</div>
                <div className="text-gray-600 whitespace-pre-line">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-brand-container">
            <div className="font-semibold">Điều khoản</div>
            <p className="text-xl text-gray-600">{data?.disclaimer}</p>
          </div>
        </div>

        {/* CỘT PHẢI: CHỌN GIÁ & SỐ LƯỢNG */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* PHẦN CHỌN GIÁ MỚI */}
          <div className="mb-6 p-4 border rounded-lg bg-white">
            <h3 className="text-xl font-bold mb-4">Chọn mức giá (1 vé)</h3>
            <div className="flex flex-col gap-3">
              <Button
                label={`${formatPrice(PRICE_OPTION_1)}`}
                icon="pi pi-tag"
                onClick={() => setSelectedPrice(PRICE_OPTION_1)}
                className={`p-button-lg w-full ${
                  selectedPrice === PRICE_OPTION_1
                    ? "p-button-success"
                    : "p-button-outlined p-button-secondary"
                }`}
              />
              <Button
                label={`${formatPrice(PRICE_OPTION_2)} `}
                icon="pi pi-gift"
                onClick={() => setSelectedPrice(PRICE_OPTION_2)}
                className={`p-button-lg w-full ${
                  selectedPrice === PRICE_OPTION_2
                    ? "p-button-success"
                    : "p-button-outlined p-button-secondary"
                }`}
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Mức giá hiện tại:{" "}
              <span className="font-semibold text-brand-dark">
                {formatPrice(selectedPrice)}
              </span>
            </p>
          </div>

          {/* PHẦN CHỌN SỐ LƯỢNG */}
          <div className="mt-0">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-xl font-bold">Số lượng vé</span>
              <span className="text-lg font-semibold text-brand-dark">
                {formatPrice(unitPrice)} / vé
              </span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center border border-brand-dark rounded-lg">
                <button
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="p-3 text-brand-dark hover:bg-brand-container rounded-l-lg">
                  <MinusIcon />
                </button>
                <span className="w-12 text-center text-lg font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-brand-dark hover:bg-brand-container rounded-r-lg">
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>

          {/* GHI CHÚ VỀ GIÁ (Giữ nguyên) */}
          {data?.priceNotes?.length > 0 && (
            <div className="bg-brand-container p-4 rounded-lg space-y-2 mt-6">
              {data.priceNotes.map((note, idx) => (
                <p key={idx} className="text-xl text-brand-text">
                  ✨ {note}
                </p>
              ))}
            </div>
          )}

          {/* TỔNG CỘNG (Giữ nguyên) */}
          <div className="mt-auto pt-6">
            <div className="flex justify-between items-center border-t border-brand-container pt-4">
              <span className="text-xl font-bold">Tổng cộng:</span>
              <div className="text-3xl font-bold text-brand-dark">
                {formatPrice(totalPrice)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
