"use client";

import { motion, type MotionValue } from "motion/react";
import { duration, ease } from "@/lib/motion-tokens";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { HERO_PHOTO } from "@/lib/hero-photo";
import styles from "./HeroPhotoBackground.module.css";

interface HeroPhotoBackgroundProps {
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
  backgroundY,
  overlayOpacity,
  grainOpacity = 0.18,
}: HeroPhotoBackgroundProps) {
  return (
    <div className="absolute inset-0">
      {/*
       * Overscanned past the section on both edges. The parallax translates
       * this whole group by ±100px, so a layer sized exactly to the section
       * would expose bare background at the bottom on load (y = -100) and at
       * the top once scrolled — which is what cut the photo off short and left
       * a hard line where the grain/glow layer ended.
       */}
      <motion.div className={styles.parallaxLayer} style={{ y: backgroundY }}>
        <div className={styles.kenBurns}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PHOTO.src}
            srcSet={HERO_PHOTO.srcSet}
            sizes={HERO_PHOTO.sizes}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            width={HERO_PHOTO.width}
            height={HERO_PHOTO.height}
            className="absolute inset-0 h-full w-full"
            style={{ objectFit: "cover", opacity: 0.6 }}
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
