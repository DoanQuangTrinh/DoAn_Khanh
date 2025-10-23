import React from "react";

export const HeroTicker = () => {
  const tickerTexts = [
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Workshop Tái Chế Sáng Tạo Hàng Tuần",
    "Kết Nối Cùng Gia Đình",
    "Bảo Vệ Môi Trường",
    "Bảo Vệ Môi Trường",
    "Bảo Vệ Môi Trường",
    "Bảo Vệ Môi Trường",
  ];

  const TickerContent = () => (
    <>
      {tickerTexts.map((text, index) => (
        <React.Fragment key={index}>
          <span className="mx-6 text-lg font-medium tracking-wide">{text}</span>
          {index < tickerTexts.length - 1 && (
            <span className="text-brand-background/70" aria-hidden="true">
              •
            </span>
          )}
        </React.Fragment>
      ))}
      <span className="w-12 inline-block"></span>
    </>
  );

  return (
    <section className="w-full bg-[#99A484] text-white py-8 overflow-hidden">
      <div className="flex whitespace-nowrap ticker">
        <div className="flex-none">
          <TickerContent />
          <TickerContent />
          <TickerContent />
        </div>
      </div>
    </section>
  );
};
