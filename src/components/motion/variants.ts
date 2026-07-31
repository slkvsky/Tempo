import type { Variants } from "motion/react";
import { duration, ease } from "@/lib/motion-tokens";

/** Rises from behind an overflow-hidden mask — the line-reveal mechanic. */
export function maskRise(delay = 0, targetOpacity = 1, distance = "110%"): Variants {
  return {
    hidden: { y: distance, opacity: 0 },
    visible: {
      y: "0%",
      opacity: targetOpacity,
      transition: { duration: duration.slow, delay, ease: ease.out },
    },
  };
}

/** Gentle fade + rise for secondary copy that doesn't need a hard mask. */
export function fadeRise(delay = 0, distance = 16): Variants {
  return {
    hidden: { y: distance, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: duration.base, delay, ease: ease.out },
    },
  };
}

/** Scale + fade for small decorative marks. */
export function scaleIn(delay = 0, targetOpacity = 1): Variants {
  return {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: targetOpacity,
      transition: { duration: duration.slower, delay, ease: ease.out },
    },
  };
}

/**
 * Left-to-right wipe — a horizontal sibling of `maskRise`. Slides in from
 * behind an overflow-hidden mask via transform rather than animating
 * clip-path directly (clip-path's WAAPI-accelerated path doesn't reliably
 * sync back through `whileInView` in this Motion version — it silently
 * never resolves to the visible state).
 */
export function wipeReveal(delay = 0): Variants {
  return {
    hidden: { x: "-100%" },
    visible: {
      x: "0%",
      transition: { duration: duration.slow, delay, ease: ease.inOut },
    },
  };
}

/** Springy pop — scale + fade with overshoot, for a playful arrival. */
export function popIn(delay = 0, fromScale = 0.85): Variants {
  return {
    hidden: { scale: fromScale, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay },
    },
  };
}
