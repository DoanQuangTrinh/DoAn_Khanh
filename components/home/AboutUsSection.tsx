import React from "react";

/**
 * Một component "About Us" chuyên nghiệp với:
 * - Layout 2 cột, responsive
 * - Khối text bên trái
 * - Khối 3 thẻ xếp chồng bên phải với animation "fanning" (xoè quạt) khi hover.
 */
const AboutUsSection: React.FC = () => {
  return (
    <section
      className="w-full py-20 lg:py-32"
      style={{ backgroundColor: "#fdf6ec" }} // Màu nền be nhạt như trong ảnh
    >
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* === Khối nội dung bên trái === */}
        <div className="flex flex-col justify-center text-left">
          <span className="text-sm font-medium uppercase tracking-widest text-green-800 opacity-80">
            CHƠI XANH LÀNH - LITTLE HANDS GREEN HEARTS
          </span>
          <h2 className="mt-3 mb-6 font-serif text-5xl font-medium text-green-900 lg:text-6xl">
            ABOUT US
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-gray-700">
            GreenKids đồng hành cùng trẻ 5-12 tuổi khám phá tái chế sáng tạo,
            biến vật liệu cũ thành đồ chơi mới có giá trị. Mỗi workshop là hành
            trình "vừa học vừa chơi", giúp trẻ phát triển tư duy sáng tạo, kỹ
            năng hợp tác và thói quen sống xanh với thành phẩm đồ chơi mang về
            sau mỗi buổi.
          </p>
          <div className="mt-10">
            <button className="rounded-sm bg-stone-200 px-8 py-3 text-sm font-medium uppercase tracking-wider text-stone-700 shadow-sm transition-all duration-300 hover:bg-stone-300 hover:shadow-md">
              KHÁM PHÁ CÂU CHUYỆN CỦA CHÚNG TÔI
            </button>
          </div>
        </div>

        {/* === Khối 3 thẻ bên phải (với animation) === */}
        {/* Sử dụng 'group' để khi hover vào container này, 
          các thẻ con với 'group-hover:' sẽ được kích hoạt 
        */}
        <div className="group relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
          {/* Thẻ 3 (Sau cùng) */}
          <div
            className="absolute h-3/4 w-3/4 rounded-2xl bg-stone-300 shadow-lg transition-all duration-500 ease-out
                       group-hover:-translate-x-28 group-hover:rotate-[-8deg]
                       lg:group-hover:-translate-x-40"
            style={{ transform: "translate(1.5rem, 1.5rem) scale(0.95)" }}
          ></div>

          {/* Thẻ 2 (Giữa) */}
          <div
            className="absolute z-10 h-3/4 w-3/4 rounded-2xl bg-stone-400 shadow-lg transition-all duration-500 ease-out
                       group-hover:scale-105"
            style={{ transform: "translate(0.75rem, 0.75rem) scale(0.98)" }}
          ></div>

          {/* Thẻ 1 (Trước nhất) */}
          <div
            className="absolute z-20 h-3/4 w-3/4 rounded-2xl bg-stone-600 shadow-lg transition-all duration-500 ease-out
                       group-hover:translate-x-28 group-hover:rotate-[8deg]
                       lg:group-hover:translate-x-40"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
