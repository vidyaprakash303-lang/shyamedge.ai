"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

export function MagneticButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.3 });

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.12);
        y.set(dy * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
      className={[
        "relative rounded-2xl px-5 py-2.5 text-sm font-semibold",
        "bg-gradient-to-r from-violet/25 to-cyan/20",
        "border border-white/14 hover:border-white/22",
        "shadow-soft hover:shadow-[0_0_30px_rgba(139,92,246,0.20)]",
        "transition-shadow",
        className,
      ].join(" ")}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
