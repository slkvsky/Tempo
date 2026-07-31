"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { HeroContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { HeroPhotoBackground } from "@/components/ui/HeroPhotoBackground";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { maskRise, scaleIn } from "@/components/motion/variants";

interface HeroProps {
  content: HeroContent;
}

/** Desktop hero composition — full-bleed, content packed toward the bottom third. */
export function Hero({ content }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-100, 100],
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 0.6],
  );

  return (
    <section
      ref={sectionRef}
      data-hero-desktop
      className="relative isolate hidden h-[100svh] w-full overflow-hidden lg:block"
      style={{ background: "var(--color-bg)" }}
    >
      <HeroPhotoBackground
        imageSrc="/2.jpg"
        imageWidth={2560}
        imageHeight={1440}
        backgroundY={backgroundY}
        overlayOpacity={overlayOpacity}
        grainOpacity={0.18}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[100px]"
        style={{ background: "linear-gradient(180deg, transparent, var(--color-bg))" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-[var(--layout-margin)] pb-[var(--space-8)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn(0.15)}
          className="mb-[var(--space-5)]"
          style={{ width: "var(--size-hero-mark)", color: "var(--color-7)" }}
        >
          <OrbitMark />
        </motion.div>

        <h1
          className="max-w-[32ch] text-center font-text font-semibold"
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-body)",
            letterSpacing: "var(--tracking-snug)",
            color: "var(--color-text)",
          }}
        >
          <MaskedLines
            lines={content.headlineLines}
            startDelay={0.25}
            staggerAmount={0.04}
          />
          <span aria-hidden="true" className="block h-[0.5em]" />
          <MaskedLines
            lines={[content.subline]}
            startDelay={0.25 + content.headlineLines.length * 0.04 + 0.05}
          />
        </h1>

        <div
          className="mt-[var(--space-9)] overflow-hidden"
          style={{ width: "100vw", marginInline: "calc(var(--layout-margin) * -1)" }}
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={maskRise(1.1, 0.5)}
            className="block whitespace-nowrap text-center uppercase"
            style={{
              fontFamily: "var(--font-wordmark)",
              fontSize: "clamp(6rem, 29vw, 17rem)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: "var(--leading-tight)",
              color: "var(--color-7)",
            }}
          >
            {content.wordmark}
          </motion.span>
        </div>
      </div>
    </section>
  );
}
