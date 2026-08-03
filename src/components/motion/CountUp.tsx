"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { duration, ease } from "@/lib/motion-tokens";

interface CountUpProps {
  value: number;
  className?: string;
}

/**
 * Renders the real final value immediately — this is what the static HTML,
 * no-JS clients, and the very first paint show. The count-up is a pure
 * enhancement layered on top after mount: it never leaves the number stuck
 * at 0 if the viewport observer never fires (slow devices, JS disabled,
 * an animation bug) since the DOM already has the correct number to begin
 * with.
 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useSafeReducedMotion();
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    motionValue.set(0);
    const controls = animate(motionValue, value, {
      duration: duration.slow,
      ease: ease.out,
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, value, motionValue]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
