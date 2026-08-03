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

    // `pointermove` fires at (or above) display rate on a trackpad. Coalesce
    // into one write per frame instead of setting two motion values per event.
    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const flush = () => {
      frame = 0;
      x.set(nextX);
      y.set(nextY);
    };

    const handleMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (!frame) frame = requestAnimationFrame(flush);
    };

    // Only the handful of `[data-cursor-text]` elements need watching, so bind
    // to them directly. The previous version ran a `closest()` ancestor walk on
    // every `pointerover` anywhere in the document.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cursor-text]"),
    );
    const show = (event: Event) => {
      setLabel((event.currentTarget as HTMLElement).dataset.cursorText ?? null);
    };
    const hide = () => setLabel(null);

    for (const el of targets) {
      el.addEventListener("pointerenter", show);
      el.addEventListener("pointerleave", hide);
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      for (const el of targets) {
        el.removeEventListener("pointerenter", show);
        el.removeEventListener("pointerleave", hide);
      }
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
      {/*
       * The bubble wipes open with `scaleX` from its left edge rather than an
       * animated `clip-path`: clip-path isn't compositor-accelerated in Safari,
       * so each frame of the wipe was a main-thread re-clip. The inner span
       * counter-scales so the label itself doesn't stretch during the wipe.
       */}
      <motion.div
        initial={false}
        animate={label ? "active" : "idle"}
        variants={{
          idle: { scaleX: 0, opacity: 0 },
          active: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: duration.slow * 0.4, ease: ease.out }}
        style={{
          transformOrigin: "left center",
          background: "var(--color-9)",
          borderRadius: 999,
          fontFamily: "var(--font-text)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          whiteSpace: "nowrap",
          padding: "0.5em 0.9em",
        }}
      >
        <motion.span
          initial={false}
          animate={{ opacity: label ? 1 : 0 }}
          transition={{
            duration: duration.slow * 0.2,
            // Hold the label hidden until the pill is most of the way open, so
            // the horizontal stretch from the parent's scaleX never shows.
            delay: label ? duration.slow * 0.25 : 0,
            ease: ease.out,
          }}
          style={{ display: "block", color: "var(--color-0)" }}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
