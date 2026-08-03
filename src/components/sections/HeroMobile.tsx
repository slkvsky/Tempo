"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { HeroContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { HeroPhotoBackground } from "@/components/ui/HeroPhotoBackground";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { maskRise, fadeRise, scaleIn } from "@/components/motion/variants";

interface HeroMobileProps {
  content: HeroContent;
}

/**
 * Mobile hero — a distinct composition, not the desktop layout squeezed
 * down: content is centered rather than bottom-packed, and the CTA sits
 * inline in the content flow for thumb reach instead of a fixed top bar.
 * The background stack itself is shared with desktop (HeroPhotoBackground)
 * since it's pure CSS now — no WebGL to gate behind a lighter mobile path.
 */
export function HeroMobile({ content }: HeroMobileProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-60, 60],
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 0.6],
  );

  return (
    <section
      ref={sectionRef}
      data-hero-mobile
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden lg:hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <HeroPhotoBackground
        backgroundY={backgroundY}
        overlayOpacity={overlayOpacity}
        grainOpacity={0.09}
      />

      {/* Same dissolve into the next section as the desktop hero (which mobile
          was missing entirely, so the photo met the dark section at a line). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[32%]"
        style={{
          background: `linear-gradient(180deg,
            transparent 0%,
            color-mix(in srgb, var(--color-bg) 12%, transparent) 26%,
            color-mix(in srgb, var(--color-bg) 34%, transparent) 46%,
            color-mix(in srgb, var(--color-bg) 62%, transparent) 65%,
            color-mix(in srgb, var(--color-bg) 86%, transparent) 82%,
            var(--color-bg) 100%)`,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-[var(--space-5)] px-[var(--layout-margin)] pt-[var(--space-9)] text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn(0.1)}
          style={{ width: "calc(var(--size-hero-mark) * 0.75)", color: "var(--color-7)" }}
        >
          <OrbitMark />
        </motion.div>

        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeRise(0.05)}
          className="inline-block rounded-[var(--radius-full)] border px-[var(--space-3)] py-[var(--space-1)] text-center font-mono uppercase"
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-7)",
            borderColor: "var(--color-4)",
          }}
        >
          {content.badge}
        </motion.span>

        <h1
          className="max-w-[26ch] font-text font-semibold"
          style={{
            fontSize: "var(--text-md)",
            lineHeight: "var(--leading-body)",
            letterSpacing: "var(--tracking-snug)",
            color: "var(--color-text)",
          }}
        >
          <MaskedLines
            lines={content.headlineLines}
            startDelay={0.2}
            staggerAmount={0.04}
            className="mx-auto"
          />
          <span aria-hidden="true" className="block h-[0.4em]" />
          <MaskedLines
            lines={[content.subline]}
            startDelay={0.2 + content.headlineLines.length * 0.04 + 0.05}
            className="mx-auto"
          />
        </h1>
      </div>

      <div
        className="relative z-10 overflow-hidden pb-[var(--space-6)]"
        style={{ width: "100vw", marginInline: "calc(50% - 50vw)" }}
      >
        <motion.span
          initial="hidden"
          animate="visible"
          variants={maskRise(0.9, 0.5)}
          className="block whitespace-nowrap text-center uppercase"
          style={{
            fontFamily: "var(--font-wordmark)",
            fontSize: "clamp(3.5rem, 26vw, 8rem)",
            letterSpacing: "var(--tracking-tight)",
            lineHeight: "var(--leading-tight)",
            color: "var(--color-7)",
          }}
        >
          {content.wordmark}
        </motion.span>
      </div>
    </section>
  );
}
