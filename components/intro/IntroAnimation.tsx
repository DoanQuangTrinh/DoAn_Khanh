'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Sử dụng Next/Image cho logo

export const IntroAnimation = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [shouldRender, setShouldRender] = useState(true); // giữ lại DOM

    useEffect(() => {
        const seen = sessionStorage.getItem('seenIntro');
        if (seen) {
            setShowIntro(false);
            setShouldRender(false);
        } else {
            sessionStorage.setItem('seenIntro', 'true');

            // Tắt hiển thị sau 4s
            const timeout = setTimeout(() => {
                setShowIntro(false); // trigger exit animation
                // Xóa khỏi DOM sau animation 1.2s
                setTimeout(() => setShouldRender(false), 1200);
            }, 4000); // Tổng thời gian hiển thị

            return () => clearTimeout(timeout);
        }
    }, []);

    if (!shouldRender) return null;

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.2 } }}
                    className="fixed inset-0 z-[999999] bg-[#FFF9EF] flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0, y: -30 }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        // === THAY ĐỔI: Sử dụng màu chữ đậm ===
                        className="text-brand-dark text-center"
                    >
                        {/* === THAY ĐỔI: Logo GreenKids === */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="w-40 mx-auto mb-6" // Tăng kích thước logo một chút
                        >
                            {/* Thay đổi src thành đường dẫn logo của bạn */}
                            <Image
                                src="/logo/LOGO 1.png" 
                                alt="GreenKids Logo"
                                width={160}
                                height={160}
                                priority
                            />
                        </motion.div>

                        {/* === THAY ĐỔI: Tiêu đề === */}
                        <motion.h1
                            // === THAY ĐỔI: Font chữ và kích thước ===
                            className="text-4xl sm:text-6xl font-bold font-serif text-header"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            GreenKids
                        </motion.h1>

                        {/* === THAY ĐỔI: Slogan === */}
                        <motion.p
                            // === THAY ĐỔI: Font chữ và màu ===
                            className="text-lg sm:text-xl mt-3 text-brand-text font-josefin font-text-content"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            Cùng con tái chế, ươm mầm sáng tạo.
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};