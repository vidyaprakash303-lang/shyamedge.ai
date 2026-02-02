"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

export function KeywordCarousel({
  words = ["websites", "funnels", "brands", "AI modules", "products"],
}: {
  words?: string[];
}) {
  const list = useMemo(() => words, [words]);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % list.length),
      1900
    );
    return () => window.clearInterval(id);
  }, [list.length]);

  return (
    <span
      className="inline-block align-baseline"
      style={{ width: "10.5ch", height: "1.1em", overflow: "hidden" }}
      aria-label="rotating keywords"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={list[i]}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.55 }}
          className="inline-block font-semibold"
          style={{ fontVariationSettings: `"wght" 720`, letterSpacing: "0.01em" }}
        >
          {list[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
