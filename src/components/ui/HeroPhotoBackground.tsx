"use client";

import Image from "next/image";
import { motion, type MotionValue } from "motion/react";
import { duration, ease } from "@/lib/motion-tokens";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import styles from "./HeroPhotoBackground.module.css";

interface HeroPhotoBackgroundProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  /** Scroll-linked vertical offset in px, from the section's own useScroll. */
  backgroundY: MotionValue<number>;
  /** Scroll-linked darken amount (0..1), from the section's own useScroll. */
  overlayOpacity: MotionValue<number>;
  grainOpacity?: number;
}

/**
 * Shared hero background: photo + ambient CSS-only motion (Ken Burns zoom,
 * breathing light) + grain + load-in reveal + scroll-driven darken. Pure
 * CSS/transform/opacity — no WebGL, so there's no device-capability cliff to
 * guard against. Desktop and mobile hero use the identical stack; only the
 * content layout around it differs.
 */
export function HeroPhotoBackground({
  imageSrc,
  imageWidth,
  imageHeight,
  backgroundY,
  overlayOpacity,
  grainOpacity = 0.18,
}: HeroPhotoBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className={styles.kenBurns}>
          <Image
            src={imageSrc}
            alt=""
            aria-hidden="true"
            priority
            width={imageWidth}
            height={imageHeight}
            className="absolute inset-x-0 top-0 w-full"
            style={{ height: "110%", objectFit: "cover", opacity: 0.6 }}
          />
        </div>

        <div aria-hidden="true" className={styles.breathe} />
        <GrainOverlay opacity={grainOpacity} />
      </motion.div>

      {/* Load-in reveal — solid cover wipes from opaque to transparent once. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--color-0)" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: duration.slow, ease: ease.out, delay: 0.1 }}
      />

      {/* Darkens as you scroll through the section. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--color-0)", opacity: overlayOpacity }}
      />
    </div>
  );
}
