// src/pages/BookingPage.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingForm } from "./BookingForm"; // Đảm bảo đường dẫn đúng
import { Calendar } from "./Calendar"; // Đảm bảo đường dẫn đúng
import { toast } from "react-toastify";

// Import Dialog và Button của PrimeReact
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { listProducts } from "@/public/data/products";

interface CartItem {
  id: number;
  workshopName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

/**
 * Kiểu dữ liệu cho một sản phẩm (từ listProducts)
 */
type ProductType = (typeof listProducts)[number];

// --- Các hàm Helper ---

/**
 * Định dạng số thành chuỗi tiền tệ (vd: 170000 -> "170.000đ")
 */
const formatPrice = (priceNum: number): string => {
  console.log(priceNum);
  return priceNum.toLocaleString("vi-VN") + "đ";
};

/**
 * Chuyển đổi chuỗi giá (vd: "170.000đ / 1 bé") sang số (170000)
 */
const parsePrice = (priceString: string) => {
  // Lấy giá tiền (tìm số có dấu . hoặc ,)
  const priceMatch = priceString.match(/[\d\.]+/);
  const price = priceMatch ? parseInt(priceMatch[0].replace(/\./g, ""), 10) : 0;

  // Lấy số lượng phía sau "/"
  const countMatch = priceString.match(/\/\s*(\d+)/);
  const count = countMatch ? parseInt(countMatch[1], 10) : 1;

  return { price, count };
};

/**
 * Mảng tên các tháng
 */
const monthNames = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

/**
 * Component Icon Thùng rác
 */
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.566 19h4.868a2.75 2.75 0 0 0 2.72-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75a1.25 1.25 0 0 0-1.25-1.25h-2.5A1.25 1.25 0 0 0 7.5 3.75v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.84 0a.75.75 0 0 1 1.5.06l-.3 7.5a.75.75 0 1 1-1.5-.06l.3-7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Component Chính ---

export const BookingPage = () => {
  const router = useRouter();

  // State giỏ hàng
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // State cho Form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // State cho Lịch
  const [selectedMonth, setSelectedMonth] = useState<number>(10);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // State cho Dialog
  const [isDialogVisible, setDialogVisible] = useState(false);

  // 1. Đọc giỏ hàng từ localStorage khi component mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("checkoutData");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Không thể đọc giỏ hàng từ localStorage:", error);
    }
  }, []);

  // 2. Hàm helper: Cập nhật state VÀ localStorage
  const updateCart = (newCart: CartItem[]) => {
    // Lọc ra những item có quantity > 0
    const validCart = newCart.filter((item) => item.quantity > 0);

    setCartItems(validCart);
    try {
      localStorage.setItem("cart", JSON.stringify(validCart));
    } catch (error) {
      console.error("Lỗi khi cập nhật giỏ hàng:", error);
      toast.error("Đã xảy ra lỗi khi cập nhật giỏ hàng.");
    }
  };

  // 3. Hàm xử lý cập nhật số lượng (Thêm/Bớt)
  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id) {
        // Nếu số lượng < 1, item sẽ bị lọc ra bởi hàm updateCart
        if (newQuantity < 1) {
          toast.info(`Đã xóa "${item.workshopName}" khỏi giỏ hàng.`);
          return { ...item, quantity: 0 }; // Sẽ bị lọc
        }
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.unitPrice * newQuantity, // Tính lại tổng
        };
      }
      return item;
    });
    updateCart(newCart);
  };

  // 4. Hàm xử lý xóa vật phẩm
  const handleRemoveItem = (id: number) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    const newCart = cartItems.filter((item) => item.id !== id);
    updateCart(newCart);
    if (itemToRemove) {
      toast.success(`Đã xóa "${itemToRemove.workshopName}" khỏi giỏ hàng.`);
    }
  };

  // 5. Hàm thêm sản phẩm MỚI từ Dialog
  const handleAddItemFromDialog = (product: ProductType) => {
    // 5.1. Kiểm tra xem sản phẩm đã có trong giỏ chưa
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // 5.2. Nếu có rồi, chỉ cần tăng số lượng
      handleUpdateQuantity(product.id, existingItem.quantity + 1);
      toast.info(`Đã thêm 1 "${product.title}" vào giỏ hàng.`);
    } else {
      // 5.3. Nếu chưa có, tạo item mới
      console.log(product.details.price);
      const unitPrice = parsePrice(product.details.price);
      console.log(unitPrice);
      if (unitPrice.price === 0) {
        toast.error("Lỗi: Không thể xác định giá sản phẩm.");
        return;
      }

      const newItem: CartItem = {
        id: product.id,
        workshopName: product.title,
        quantity: 1,
        unitPrice: unitPrice.price,
        totalPrice: unitPrice.price, // Tổng tiền cho 1 sản phẩm
      };
      updateCart([...cartItems, newItem]);
      toast.success(`Đã thêm "${product.title}" vào giỏ hàng!`);
    }
  };

  // 6. Tính tổng tiền
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  // 7. Xử lý thanh toán
  const handleCheckout = () => {
    // Kiểm tra thông tin
    if (!name || !phone || !selectedDay || !selectedTime || !selectedMonth) {
      toast.error("Vui lòng điền đầy đủ thông tin liên hệ và chọn ngày giờ.");
      return;
    }

    if (cartItems.length === 0) {
      toast.warning("Giỏ hàng của bạn đang trống.");
      return;
    }

    // Lấy tên tháng từ state
    const monthName = monthNames[selectedMonth - 1]; // (vì selectedMonth là 1-12)

    // Tạo đối tượng đơn hàng cuối cùng
    const orderDetails = {
      customerInfo: {
        name,
        phone,
      },
      bookingInfo: {
        date: `Ngày ${selectedDay} (${monthName}/2025)`, // Giả định năm 2025
        time: selectedTime,
      },
      items: cartItems,
      grandTotal: grandTotal,
    };

    // Logic xử lý thanh toán
    try {
      localStorage.setItem("finalOrder", JSON.stringify(orderDetails));
      localStorage.removeItem("cart");
      setCartItems([]);
      toast.success("Đặt hàng thành công! Đang chuyển hướng...");
      router.push("/booking/pay");
    } catch (error) {
      console.error("Lỗi khi xử lý thanh toán:", error);
      toast.error("Đã xảy ra lỗi khi lưu đơn hàng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch justify-center p-10 gap-8 bg-brand-page-bg">
      {/* CỘT 1: ĐƠN HÀNG */}
      <div className="bg-[#D9DAC7] text-brand-text font-josefin p-8 rounded-2xl shadow-lg w-full lg:w-1/3">
        <h2 className="text-3xl font-bold mb-6">Đơn hàng của bạn</h2>

        {/* Danh sách item trong giỏ hàng */}
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b border-brand-selected pb-3"
              >
                {/* Tên và Đơn giá */}
                <div className="flex-1 mr-2">
                  <div className="font-semibold">{item.workshopName}</div>
                  <div className="text-xl text-gray-600">
                    {formatPrice(item.unitPrice)} / vé
                  </div>
                </div>

                {/* Bộ điều khiển số lượng */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                    className="size-6 bg-white rounded-full text-lg font-bold flex items-center justify-center hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    className="size-6 bg-white rounded-full text-lg font-bold flex items-center justify-center hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                {/* Nút Xóa */}
                <div className="ml-3">
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Xóa vật phẩm"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Giỏ hàng của bạn đang trống.</p>
          )}
        </div>

        {/* NÚT THÊM SẢN PHẨM KHÁC (Mở Dialog) */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setDialogVisible(true)} // Mở Dialog
            className="w-full !text-center bg-white text-brand-text p-3 rounded-lg font-semibold text-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50 border border-brand-text-light"
          >
            + Thêm Workshop khác
          </button>
        </div>

        {/* Tổng tiền và Nút Thanh Toán */}
        <div className="border-t-2 border-brand-dark pt-4">
          <div className="flex justify-between items-center text-xl font-bold mb-6">
            <span>Tổng cộng:</span>
            <span className="text-2xl">{formatPrice(grandTotal)}</span>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="w-full !text-center bg-[#424D3E] text-white p-4 rounded-lg font-bold text-lg transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
          >
            Thanh Toán
          </button>
        </div>
      </div>
      <BookingForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
      />

      {/* CỘT 3: LỊCH */}
      <Calendar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <Dialog
        header="Chọn Workshop"
        visible={isDialogVisible}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }} // Responsive
        modal
        onHide={() => setDialogVisible(false)}
        className="font-josefin" // Đảm bảo font chữ nhất quán (nếu bạn đã setup)
      >
        <div className="space-y-4 max-h-[60vh] overflow-y-auto p-2">
          {listProducts.map((product) => {
            // Kiểm tra xem item đã có trong giỏ hàng chưa
            const isInCart = cartItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="flex justify-between items-center p-4 border rounded-lg bg-white shadow"
              >
                {/* Thông tin sản phẩm */}
                <div className="flex-1 pr-4 overflow-hidden">
                  <h4 className="font-bold text-lg text-brand-text">
                    {product.title}
                  </h4>
                  <p
                    className="text-xl text-gray-600 truncate"
                    title={product.description}
                  >
                    {product.description}
                  </p>
                  <p className="font-semibold text-brand-dark mt-1">
                    {product.details.price}
                  </p>
                </div>

                {/* Nút Thêm (hoặc Đã thêm) */}
                <Button
                  label={isInCart ? "Đã thêm" : "Thêm"}
                  icon={isInCart ? "pi pi-check" : "pi pi-plus"}
                  onClick={() => handleAddItemFromDialog(product)}
                  disabled={isInCart} // Vô hiệu hóa nếu đã có trong giỏ
                  className={
                    isInCart ? "p-button-outlined" : "p-button-success"
                  }
                />
              </div>
            );
          })}
        </div>
      </Dialog>
    </div>
  );
};
