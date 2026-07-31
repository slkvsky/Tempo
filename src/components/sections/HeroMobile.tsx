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
        imageSrc="/2.jpg"
        imageWidth={2560}
        imageHeight={1440}
        backgroundY={backgroundY}
        overlayOpacity={overlayOpacity}
        grainOpacity={0.09}
      />

      <div className="relative flex flex-1 flex-col items-center justify-center gap-[var(--space-5)] px-[var(--layout-margin)] pt-[var(--space-9)] text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn(0.1)}
          style={{ width: "calc(var(--size-hero-mark) * 0.75)", color: "var(--color-7)" }}
        >
          <OrbitMark />
        </motion.div>

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

        <motion.a
          href="#"
          initial="hidden"
          animate="visible"
          variants={fadeRise(0.65)}
          className="mt-[var(--space-2)] w-full max-w-[24rem] rounded-[var(--radius-full)] bg-[var(--color-9)] px-[var(--space-6)] py-[var(--space-3)] text-[var(--text-base)] font-medium"
          style={{ color: "var(--color-0)" }}
        >
          {content.navCta}
        </motion.a>
      </div>

      <div
        className="relative overflow-hidden pb-[var(--space-6)]"
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
