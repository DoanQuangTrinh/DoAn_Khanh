import React from "react";

export const HeroTicker = () => {
  const tickerTexts = [
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
    "Little Hands Green Heart - Chơi Xanh Làm Lành",
  ];

  const TickerContent = () => (
    <>
      {tickerTexts.map((text, index) => (
        <React.Fragment key={index}>
          <span className="text-judson mx-[100px]">{text}</span>
          {index < tickerTexts.length - 1 && (
            <span
              className="text-brand-background/70 w-[30px]!"
              aria-hidden="true"
            ></span>
          )}
        </React.Fragment>
      ))}
      <span className="inline-block w-[30px]"></span>
    </>
  );

  return (
    <section className="w-full bg-[#99A484] text-white py-6 overflow-hidden">
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
