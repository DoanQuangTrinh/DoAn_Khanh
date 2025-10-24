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
          <span className="text-sm font-medium uppercase tracking-widest text-[#5E5E5E] opacity-80">
            CHƠI XANH LÀNH - LITTLE HANDS GREEN HEARTS
          </span>
          <h2 className="mt-3 mb-6 text-about md:text-6xl text-4xl">
            CHÚNG TÔI
          </h2>
          <p className="font-text-content">
            GreenKids đồng hành cùng trẻ 5-12 tuổi khám phá tái chế sáng tạo,
            biến vật liệu cũ thành đồ chơi mới có giá trị. Mỗi workshop là hành
            trình &quot;vừa học vừa chơi&quot;, giúp trẻ phát triển tư duy sáng
            tạo, kỹ năng hợp tác và thói quen sống xanh với thành phẩm đồ chơi
            mang về sau mỗi buổi.
          </p>
          <div className="mt-10">
            <button className="button-content button-text">
              KHÁM PHÁ CÂU CHUYỆN CỦA CHÚNG TÔI
            </button>
          </div>
        </div>

        {/* === Khối 3 thẻ bên phải (với animation) === */}
        {/* Sử dụng 'group' để khi hover vào container này, 
          các thẻ con với 'group-hover:' sẽ được kích hoạt 
        */}
        <div className="group relative flex h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] items-center justify-center">
          {/* Thẻ 3 (Nhạt nhất) */}
          <div
            className="absolute rounded-2xl bg-[#D7DDCF] shadow-lg transition-all duration-500 ease-out
       group-hover:-translate-x-28 group-hover:rotate-[-8deg]
       lg:group-hover:-translate-x-40 h-[80%] hover:h-full"
            style={{
              transform: "translateX(0rem) scale(0.95)",
              width: "100%",
            }}
          ></div>

          {/* Thẻ 2 (Vừa) */}
          <div
            className="absolute z-10 rounded-2xl bg-[#B5C4B0] shadow-lg transition-all duration-500 ease-out
       group-hover:scale-105 h-[90%] hover:h-full"
            style={{
              transform: "translateX(4rem) scale(0.98)",
              width: "100%",
            }}
          ></div>

          {/* Thẻ 1 (Đậm nhất) */}
          <div
            className="absolute z-20 rounded-2xl bg-[#879382] shadow-lg transition-all duration-500 ease-out
       group-hover:translate-x-28 group-hover:rotate-[8deg]
       lg:group-hover:translate-x-40"
            style={{
              transform: "translateX(8rem)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
