// app/hooks/useScrollDirection.ts
"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    // Ngưỡng cuộn (scroll threshold)
    // Chỉ ẩn/hiện header nếu cuộn quá 50px so với vị trí đầu trang
    const threshold = 50;

    // "Vùng đệm" (deadzone)
    // Ngăn header nhấp nháy khi cuộn rất nhẹ
    const deadzone = 10;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Bỏ qua nếu vẫn ở đầu trang
      if (scrollY < threshold) {
        setScrollDirection("up"); // Luôn hiển thị ở đầu trang
        return;
      }

      // Kiểm tra xem đã cuộn đủ "vùng đệm" chưa
      if (Math.abs(scrollY - lastScrollY) < deadzone) {
        return;
      }

      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []); // Chỉ chạy một lần khi component mount

  return scrollDirection;
}
