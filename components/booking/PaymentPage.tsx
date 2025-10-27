"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import "react-toastify/dist/ReactToastify.css"; // Cần thiết cho toast

// --- Định nghĩa Types ---
interface CartItem {
  id: number;
  workshopName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface OrderDetails {
  customerInfo: {
    name: string;
    phone: string;
  };
  bookingInfo: {
    date: string;
    time: string;
  };
  items: CartItem[];
  grandTotal: number;
}

type PaymentMethod = "card" | "bank"; // Kiểu cho phương thức thanh toán

// --- Hàm hỗ trợ ---
const formatPrice = (priceNum: number): string => {
  return (priceNum || 0).toLocaleString("vi-VN") + "đ";
};

// --- Component Form Thẻ ---
const CreditCardForm = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-white">
          Thẻ tín dụng / Ghi nợ
        </h3>
        {/* Logos */}
        <div className="flex items-center gap-2">
          {/* Tôi sẽ dùng text cho các logo này, bạn có thể thay bằng Image */}
          <span className="bg-white text-black text-sm font-bold py-1 px-2 rounded">
            Apple Pay
          </span>
          <span className="bg-gray-700 text-white text-sm font-bold py-1 px-2 rounded">
            Mastercard
          </span>
          <span className="bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded">
            VISA
          </span>
          <span className="bg-blue-600 text-white text-sm font-bold py-1 px-2 rounded">
            Samsung Pay
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="cardName"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Tên chủ thẻ
          </label>
          <input
            type="text"
            id="cardName"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-brand-dark focus:border-brand-dark"
          />
        </div>
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Số thẻ
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-brand-dark focus:border-brand-dark"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="expiryDate"
              className="block text-xl font-medium text-gray-300 mb-2"
            >
              Ngày hết hạn
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-brand-dark focus:border-brand-dark"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="cvv"
              className="block text-xl font-medium text-gray-300 mb-2"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-brand-dark focus:border-brand-dark"
            />
          </div>
        </div>
      </div>

      {/* Nút Hoàn tất */}
      <button
        type="button"
        onClick={onComplete}
        className="w-full bg-[#6c7a67] text-white p-4 rounded-lg font-bold text-lg transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#6c7a67]"
      >
        Hoàn tất
      </button>
    </div>
  );
};

// --- Component Chuyển khoản ---
const BankAccountInfo = ({
  onComplete,
  order,
}: {
  onComplete: () => void;
  order: OrderDetails | null;
}) => {
  const content = `WorkshopGreenKids_${
    order?.bookingInfo.date.split(" ")[1] || "WS"
  }_${order?.grandTotal || 0}`;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">Tài khoản ngân hàng</h3>

      <div className="space-y-3 text-gray-300 text-lg">
        <p>
          Tên người nhận:{" "}
          <span className="font-semibold text-white">GREENKIDS VIETNAM</span>
        </p>
        <p>
          STK người nhận:{" "}
          <span className="font-semibold text-white">0123 456 789</span>
        </p>
        <p>
          Nội dung thanh toán:{" "}
          <span className="font-semibold text-white">{content}</span>
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-center text-gray-300">Hoặc chuyển khoản qua mã QR</p>
        {/* Placeholder QR Code */}
        <div className="w-48 h-48 bg-white p-2 rounded-lg mx-auto">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${content}`}
            alt="Mã QR thanh toán"
            width={180}
            height={180}
            className="rounded-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* Nút Hoàn tất */}
      <button
        type="button"
        onClick={onComplete}
        className="w-full bg-[#6c7a67] text-white p-4 rounded-lg font-bold text-lg transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#6c7a67]"
      >
        Hoàn tất
      </button>
    </div>
  );
};

// --- Component Dialog Thành Công ---
const SuccessDialog = ({
  visible,
  onHide,
  name,
}: {
  visible: boolean;
  onHide: () => void;
  name: string;
}) => {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      modal
      style={{ width: "90vw", maxWidth: "500px" }}
      pt={{
        root: {
          className: "font-josefin rounded-2xl overflow-hidden border-none",
        },
        header: { className: "bg-brand-container text-brand-dark p-6" },
        // title: { className: "text-2xl font-bold" },
        content: { className: "bg-white p-8 text-center" },
        footer: { className: "bg-gray-100 p-4" },
      }}
    >
      <div className="flex flex-col items-center">
        {/* Icon Check */}
        <svg
          className="w-20 h-20 text-green-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-brand-dark mb-4">
          Thanh toán thành công!
        </h3>
        <p className="text-lg text-gray-700">
          Cảm ơn <span className="font-bold">{name}</span>! GreenKids đã nhận
          được thông tin đặt vé của bạn.
        </p>
      </div>
    </Dialog>
  );
};

// --- Trang Thanh Toán Chính ---
export default function PaymentPage() {
  const router = useRouter();
  const toastRef = useRef<Toast>(null);

  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  // 1. Đọc dữ liệu từ localStorage
  useEffect(() => {
    try {
      const storedOrder = localStorage.getItem("finalOrder");
      if (storedOrder) {
        setOrder(JSON.parse(storedOrder));
      } else {
        // Nếu không có đơn hàng, quay về trang đặt vé
        toastRef.current?.show({
          severity: "error",
          summary: "Lỗi",
          detail: "Không tìm thấy đơn hàng. Vui lòng thử lại.",
        });
        setTimeout(() => router.push("/booking"), 2000);
      }
    } catch (error) {
      console.error("Không thể đọc đơn hàng từ localStorage:", error);
    }
  }, [router]);

  // 2. Xử lý khi hoàn tất thanh toán
  const handlePaymentComplete = () => {
    // Logic: tại đây bạn sẽ gọi API thanh toán thật
    // Sau khi API trả về thành công:
    localStorage.removeItem("finalOrder"); // Xóa đơn hàng khỏi localStorage
    setIsSuccessModalVisible(true); // Hiển thị modal thành công

    // Tự động điều hướng về trang chủ sau 5s
    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-brand-page-bg text-brand-dark">
        <Toast ref={toastRef} />
        <p className="text-xl">Đang tải thông tin đơn hàng...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col lg:flex-row bg-brand-page-bg font-josefin">
        {/* === CỘT TRÁI: TÓM TẮT ĐƠN HÀNG === */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
          <h1 className="font-serif text-4xl font-bold text-brand-dark mb-8">
            Xác nhận thanh toán
          </h1>

          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
            {/* Thông tin khách hàng */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Thông tin khách hàng
              </h3>
              <p>
                Họ tên:{" "}
                <span className="font-semibold">{order.customerInfo.name}</span>
              </p>
              <p>
                Số điện thoại:{" "}
                <span className="font-semibold">
                  {order.customerInfo.phone}
                </span>
              </p>
              <p>
                Ngày giờ:{" "}
                <span className="font-semibold">
                  {order.bookingInfo.date} - {order.bookingInfo.time}
                </span>
              </p>
            </div>

            {/* Chi tiết giỏ hàng */}
            <div className="border-t border-brand-container pt-4">
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                Chi tiết đơn hàng
              </h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{item.workshopName}</p>
                      <p className="text-xl text-gray-600">
                        Số lượng: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      {formatPrice(item.totalPrice)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tổng cộng */}
            <div className="border-t-2 border-brand-dark pt-4 text-brand-dark">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>Tổng cộng:</span>
                <span className="text-3xl">
                  {formatPrice(order.grandTotal)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === CỘT PHẢI: THANH TOÁN (Dark Mode) === */}
        <div className="w-full lg:w-1/2 bg-[#1C1C1C] p-8 md:p-12 lg:p-16 text-gray-300 rounded-t-3xl lg:rounded-none lg:rounded-l-3xl">
          {/* Lựa chọn phương thức */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex-1 p-4 rounded-lg font-semibold text-lg ${
                paymentMethod === "card"
                  ? "bg-[#6c7a67] text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              Thẻ tín dụng
            </button>
            <button
              onClick={() => setPaymentMethod("bank")}
              className={`flex-1 p-4 rounded-lg font-semibold text-lg ${
                paymentMethod === "bank"
                  ? "bg-[#6c7a67] text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              Tài khoản ngân hàng
            </button>
          </div>

          {/* Hiển thị form tương ứng */}
          <div className="bg-[#2A2A2A] p-8 rounded-2xl">
            {paymentMethod === "card" ? (
              <CreditCardForm onComplete={handlePaymentComplete} />
            ) : (
              <BankAccountInfo
                onComplete={handlePaymentComplete}
                order={order}
              />
            )}
          </div>
        </div>
      </div>

      {/* === MODAL THÀNH CÔNG === */}
      <SuccessDialog
        visible={isSuccessModalVisible}
        onHide={() => router.push("/")} // Bấm ra ngoài là về trang chủ
        name={order.customerInfo.name}
      />
    </>
  );
}
