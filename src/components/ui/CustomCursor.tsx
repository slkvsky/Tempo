"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { duration, ease } from "@/lib/motion-tokens";

/**
 * Desktop-only cursor companion: follows the pointer with spring physics and
 * wipes open into a text bubble when hovering `[data-cursor-text]` elements.
 * Never mounts on touch devices — gated on (hover: hover) and (pointer: fine).
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { duration: duration.fast, bounce: 0 });
  const springY = useSpring(y, { duration: duration.fast, bounce: 0 });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor-text]",
      );
      setLabel(target?.dataset.cursorText ?? null);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 999,
        pointerEvents: "none",
      }}
    >
      <motion.div
        initial={false}
        animate={label ? "active" : "idle"}
        variants={{
          idle: { clipPath: "inset(0% 100% 0% 0% round 999px)", opacity: 0 },
          active: { clipPath: "inset(0% 0% 0% 0% round 999px)", opacity: 1 },
        }}
        transition={{ duration: duration.slow * 0.4, ease: ease.out }}
        style={{
          background: "var(--color-9)",
          color: "var(--color-0)",
          fontFamily: "var(--font-text)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          whiteSpace: "nowrap",
          padding: "0.5em 0.9em",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
