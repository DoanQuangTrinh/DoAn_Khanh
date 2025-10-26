// src/components/LearningDesignSection.tsx
"use client";

import React from 'react';

// Icon mũi tên cho nút bấm
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

export const LearningDesignSection = () => {
    return (
        <div className="w-full py-12 px-4 md:px-8 bg-brand-page-bg ">
            <div className=" max-w-6xl mx-auto bg-brand-container shadow-lg rounded-2xl overflow-hidden">
                <div className="flex flex-wrap w-full">
                    <div className=" bg-[#6F7A6B] width-md-customer"
                        style={{ height: "250px", width: "250px", background: "#6F7A6B" }}
                    >
                    </div>

                    <div className="flex-1 md:col-span-2 px-4 py-4 md:py-0 flex flex-col justify-center">
                        <h2 className="text-about text-brand-text text-4xl lg:text-6xl font-bold mb-6">
                            Thiết kế học qua làm.
                        </h2>
                        <p className="font-text-content-min text-lg leading-relaxed mb-8">
                            Mỗi workshop áp dụng phương pháp "learning by doing", lồng ghép yếu tố
                            STEAM phù hợp với từng độ tuổi gồm 5 đến 6, 7 đến 9, 10 đến 12. Trẻ đi trọn
                            quy trình quan sát, lên ý tưởng, thử nghiệm vật liệu, lắp ghép, tinh chỉnh và
                            hoàn thiện. Kết thúc buổi, trẻ mang đồ chơi xanh về nhà kèm hướng dẫn ngắn
                            để có thể tiếp tục sáng tạo tại nhà.
                        </p>

                        <div>
                            <button className="group bg-brand-dark-button text-white text-lg px-8 py-3 rounded-xl button-workshop text-workshop flex items-center gap-3 hover:opacity-90 transition-all">
                                Tham khảo Workshop
                                <ArrowRightIcon />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};