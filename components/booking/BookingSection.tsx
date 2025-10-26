"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const BookingSection = () => {
    return (
        <section className="w-full py-20 bg-[#FFF9EF]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                
                {/* === Left Text Content === */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#508D57] leading-snug font-josefin">
                        Hoàn tất đăng ký
                    </h2>

                    <p className="font-text-content text-lg text-gray-700 leading-relaxed">
                        Vui lòng chọn phương thức thanh toán phù hợp để hoàn tất việc giữ chỗ cho bé.
                        Quý phụ huynh có thể thanh toán qua Momo, Chuyển khoản hoặc Thẻ ngân hàng.
                        Mọi thông tin thanh toán đều được mã hóa và an toàn tuyệt đối.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-4 bg-[#71836A] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
                    >
                        Thanh toán ngay
                    </motion.button>

                    {/* Mini Guideline */}
                    <p className="text-sm text-gray-600 italic">
                        Sau khi thanh toán, bạn sẽ nhận Email xác nhận ngay lập tức.
                    </p>
                </motion.div>

                {/* === Right Image === */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/frame/Frame 11.png"
                        alt="GreenKids illustration"
                        width={600}
                        height={550}
                        className="object-contain"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
};
