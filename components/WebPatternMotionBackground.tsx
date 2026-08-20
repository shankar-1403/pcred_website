"use client";

import { motion } from "motion/react";

interface WebPatternMotionBackgroundProps {
  className?: string;
  overlayClassName?: string;
}

export function WebPatternMotionBackground({
  className = "",
  overlayClassName = "",
}: WebPatternMotionBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#022436] ${className}`}>
      <motion.div
        aria-hidden
        className="absolute -inset-[14%] motion-reduce:transform-none"
        style={{
          backgroundImage: "url('/bg_webpattern.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          x: ["0%", "-2.5%", "-1%", "1.5%", "0%"],
          y: ["0%", "-1.5%", "-3%", "-1%", "0%"],
          scale: [1.08, 1.1, 1.12, 1.1, 1.08],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-br from-[#022436]/20 via-transparent to-[#045178]/25" />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(221,177,98,0.12),transparent_55%)] ${overlayClassName}`}
      />
    </div>
  );
}
