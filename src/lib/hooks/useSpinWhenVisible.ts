"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

/**
 * Gates the decorative conic-gradient border spins (Pricing + Game) on
 * visibility.
 *
 * Those animations drive a registered `@property` `<angle>` that feeds a
 * `conic-gradient` background. That has no compositor fast path — every frame
 * is a full style recalc + repaint of the element — and they were running
 * `5s linear infinite` from page load whether or not the section was on
 * screen. Pausing them off-screen keeps the effect but stops paying for it.
 *
 * `once: false` (unlike the reveal animations) because this needs to pause
 * again when the section leaves. The margin starts the spin slightly early so
 * it's already running by the time it's actually visible.
 */
export function useSpinWhenVisible<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isVisible = useInView(ref, { once: false, margin: "200px" });
  return { ref, isVisible };
}
