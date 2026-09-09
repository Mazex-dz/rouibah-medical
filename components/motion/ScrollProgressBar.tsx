"use client";

import { useScroll, useSpring, motion } from "framer-motion";

/**
 * Scroll Progress Bar — Motion.dev technique:
 * useScroll() gives a raw 0-1 progress value.
 * useSpring() smooths it with spring physics (stiffness/damping).
 * The result is a silky-smooth gradient bar at the top of the viewport.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress-bar"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}
