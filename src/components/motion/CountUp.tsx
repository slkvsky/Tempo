"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { duration, ease } from "@/lib/motion-tokens";

interface CountUpProps {
  value: number;
  className?: string;
}

/** Animates a number counting up from 0 once it scrolls into view. */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useSafeReducedMotion();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      motionValue.set(value);
      return;
    }

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
