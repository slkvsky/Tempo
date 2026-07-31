"use client";

import { motion } from "motion/react";
import { maskRise } from "./variants";

interface MaskedLinesProps {
  lines: readonly string[];
  className?: string;
  startDelay?: number;
  staggerAmount?: number;
}

/**
 * Renders pre-authored line breaks, each behind its own overflow-hidden
 * mask, rising into place with a stagger — the reveal mechanic from the
 * reference, applied to hand-set lines rather than runtime-measured wraps
 * (no text-splitting library needed, and it reads correctly for Cyrillic).
 */
export function MaskedLines({
  lines,
  className,
  startDelay = 0,
  staggerAmount = 0.05,
}: MaskedLinesProps) {
  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span key={line} style={{ display: "block", overflow: "hidden" }}>
          <motion.span
            style={{ display: "block" }}
            initial="hidden"
            animate="visible"
            variants={maskRise(startDelay + index * staggerAmount)}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
