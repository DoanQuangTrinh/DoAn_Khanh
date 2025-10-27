"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

/* --- Replace your existing text block with this --- */
const TextWithFlowers: React.FC<{ data: any; router: any }> = ({
  data,
  router,
}) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const flower1Ref = useRef<HTMLSpanElement | null>(null);
  const flower2Ref = useRef<HTMLSpanElement | null>(null);
  const flower3Ref = useRef<HTMLSpanElement | null>(null);

  const ctrl1 = useAnimation();
  const ctrl2 = useAnimation();
  const ctrl3 = useAnimation();

  // initial offsets (flowers sit above the button)
  const initial = { y: 0, rotate: 0, opacity: 0 };

  const handleHoverStart = async () => {
    // đo vị trí title và từng hoa
    if (!titleRef.current || !flower1Ref.current) return;
    const titleRect = titleRef.current.getBoundingClientRect();

    // for each flower, compute its current bounding rect (they share same parent)
    const f1Rect = flower1Ref.current.getBoundingClientRect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const f2Rect = flower2Ref.current.getBoundingClientRect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const f3Rect = flower3Ref.current.getBoundingClientRect();

    // target Y to land *just below* the title, convert to relative movement
    // We want the flower top -> title bottom + small gap
    const gap = 8; // px gap under title
    const targetYForF1 = titleRect.bottom + gap - f1Rect.top;
    const targetYForF2 = titleRect.bottom + gap - f2Rect.top + 6; // slight stagger offset
    const targetYForF3 = titleRect.bottom + gap - f3Rect.top - 6; // slight other offset

    // animate flowers: fall + rotate + settle
    ctrl1.start({
      y: [0, targetYForF1 - 12, targetYForF1],
      rotate: [0, 220, 10],
      opacity: [0, 1, 1],
      transition: {
        times: [0, 0.7, 1],
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    });
    ctrl2.start({
      y: [0, targetYForF2 - 6, targetYForF2],
      rotate: [0, -260, -10],
      opacity: [0, 1, 1],
      transition: {
        times: [0, 0.65, 1],
        duration: 1.35,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.08,
      },
    });
    ctrl3.start({
      y: [0, targetYForF3 - 18, targetYForF3],
      rotate: [0, 180, -6],
      opacity: [0, 1, 1],
      transition: {
        times: [0, 0.72, 1],
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.12,
      },
    });
  };

  const handleHoverEnd = async () => {
    // hoa chạy ngược về vị trí ban đầu (ở trên button) và mờ dần
    ctrl1.start({
      y: 0,
      rotate: 0,
      opacity: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    });
    ctrl2.start({
      y: 0,
      rotate: 0,
      opacity: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    });
    ctrl3.start({
      y: 0,
      rotate: 0,
      opacity: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    });
  };

  return (
    <motion.div
      className="flex flex-col justify-center text-left relative"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Small label */}
      <span className="text-sm font-medium tracking-widest text-[#6B6B6B] opacity-80 mb-1">
        {data.title}
      </span>

      {/* Title */}
      <h2
        ref={titleRef}
        className="mt-1 mb-4 text-about md:text-6xl text-4xl font-semibold text-[#4F6F52] relative inline-block"
      >
        {data.name}
      </h2>

      {/* doodle line */}
      <motion.div
        className="h-[3px] w-24 bg-[#A5B69E] rounded-full mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Content */}
      <p className="font-text-content text-[#3F3F3F] leading-relaxed">
        {data.content}
      </p>

      {/* BUTTON + FLOWERS */}
      {data.contentButton && (
        <div className="mt-10 relative inline-block">
          <motion.button
            className="button-content button-text relative z-10"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/about")}
          >
            {data.contentButton}
          </motion.button>

          {/* FLOWERS */}
          <motion.span
            ref={flower1Ref}
            className="absolute left-1/2 -top-8 -translate-x-1/2 text-[34px] text-[#FF7DA5] pointer-events-none select-none"
            initial={initial}
            animate={ctrl1}
          >
            ✿
          </motion.span>

          <motion.span
            ref={flower2Ref}
            className="absolute left-[42%] -top-10 text-[28px] text-[#FF9EC1] pointer-events-none select-none"
            initial={initial}
            animate={ctrl2}
          >
            ✿
          </motion.span>

          <motion.span
            ref={flower3Ref}
            className="absolute left-[58%] -top-9 text-[24px] text-[#FFB7CE] pointer-events-none select-none"
            initial={initial}
            animate={ctrl3}
          >
            ✿
          </motion.span>
        </div>
      )}
    </motion.div>
  );
};

export default TextWithFlowers;
