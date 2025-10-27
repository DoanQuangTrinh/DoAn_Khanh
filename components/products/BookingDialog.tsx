// src/components/BookingDialog.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "primereact/dialog";
import { toast } from "react-toastify";

interface WorkshopDetail {
  label: string;
  value: string;
}

interface BookingData {
  details: WorkshopDetail[];
  price: string;
  priceNotes: string[];
  disclaimer: string;
}

interface BookingDialogProps {
  workshopName: string;
  data: BookingData;
  visible: boolean;
  onHide: () => void;
}

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
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
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 4.75a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 0110 4.75z"
      clipRule="evenodd"
    />
  </svg>
);

const parsePrice = (priceStr: string): number =>
  parseInt(priceStr?.replace(/[^0-9]/g, ""), 10) || 0;
const formatPrice = (priceNum: number): string =>
  priceNum.toLocaleString("vi-VN") + "đ";

export const BookingDialog = ({
  workshopName,
  data,
  visible,
  onHide,
}: BookingDialogProps) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const basePrice = parsePrice(data.price);
  const totalPrice = basePrice * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now(),
      workshopName,
      quantity,
      unitPrice: basePrice,
      totalPrice,
    };

    try {
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
    const checkoutItem = {
      id: Date.now(),
      workshopName,
      quantity,
      unitPrice: basePrice,
      totalPrice,
    };

    try {
      localStorage.setItem("checkoutData", JSON.stringify([checkoutItem]));
      router.push("/booking");
      onHide();
    } catch (error) {
      console.error("Lỗi khi chuyển đến thanh toán:", error);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

  const dialogFooter = (
    <div className="flex justify-end gap-4">
      {/* <button
                type="button"
                className="!text-center bg-[#424D3E] text-white p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
                onClick={handleAddToCart}
            >
                Thêm vào giỏ hàng
            </button> */}
      <button
        type="button"
        className="!text-center bg-[#424D3E] text-white p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
        onClick={handleCheckout}
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
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 text-brand-text">
        {/* CỘT TRÁI: THÔNG TIN WORKSHOP */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h3 className="text-xl font-bold mb-4">Thông tin Workshop</h3>
          {data?.details?.map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="flex-shrink-0">
                {/* Bạn có thể giữ getDetailIcon nếu muốn icon */}
              </div>
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
            <p className="text-sm text-gray-600">{data?.disclaimer}</p>
          </div>
        </div>

        {/* CỘT PHẢI: SỐ LƯỢNG & GIÁ */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mt-6">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-xl font-bold">Số lượng vé</span>
              <span className="text-lg font-semibold">{data?.price}</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center border border-brand-dark rounded-lg">
                <button
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="p-3 text-brand-dark hover:bg-brand-container rounded-l-lg"
                >
                  <MinusIcon />
                </button>
                <span className="w-12 text-center text-lg font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-brand-dark hover:bg-brand-container rounded-r-lg"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>

          {data?.priceNotes?.length > 0 && (
            <div className="bg-brand-container p-4 rounded-lg space-y-2 mt-6">
              {data.priceNotes.map((note, idx) => (
                <p key={idx} className="text-sm text-brand-text">
                  ✨ {note}
                </p>
              ))}
            </div>
          )}

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
