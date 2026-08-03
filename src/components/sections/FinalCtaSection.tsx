"use client";

import { motion } from "motion/react";
import type { FinalCtaContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { fadeRise, maskRise, scaleIn } from "@/components/motion/variants";
import { CountUp } from "@/components/motion/CountUp";
import { stagger } from "@/lib/motion-tokens";
import { scrollToAnchor } from "@/lib/hooks/useLenis";
import styles from "./FinalCtaSection.module.css";

interface FinalCtaSectionProps {
  content: FinalCtaContent;
}

/**
 * The page's last word — closes the loop the Hero opened. Same distressed
 * wordmark treatment as the Hero's TEMPO lockup so the page visually
 * bookends itself, and the trust stats deliberately echo numbers already
 * seen earlier (3 steps from How, 14 days from Pricing/Game) rather than
 * introducing new claims this late.
 */
export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  const reduceMotion = useSafeReducedMotion();
  const statsDelay = 0.3;

  return (
    <section
      aria-labelledby="final-cta-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <motion.h2
          id="final-cta-heading"
          className={styles.heading}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.4 }}
          variants={fadeRise(0)}
        >
          {content.h2}
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.4 }}
          variants={fadeRise(0.08)}
        >
          {content.sub}
        </motion.p>

        <motion.a
          href={content.ctaHref}
          data-cursor-text={content.cursorStart}
          className={styles.cta}
          onClick={(event) => {
            event.preventDefault();
            scrollToAnchor(content.ctaHref);
          }}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.4 }}
          variants={scaleIn(0.18)}
        >
          <span className={styles.ctaGlow} aria-hidden="true" />
          <span className={styles.ctaLabel}>{content.cta}</span>
        </motion.a>

        <motion.a
          href={content.telegramHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegramLink}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.4 }}
          variants={fadeRise(0.24)}
        >
          {content.telegramText}
        </motion.a>

        <ul className={styles.stats}>
          {content.stats.map((stat, index) => (
            <motion.li
              key={stat.label}
              className={styles.stat}
              initial={reduceMotion ? "visible" : "hidden"}
              animate={reduceMotion ? "visible" : undefined}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={reduceMotion ? undefined : { once: true, amount: 0.5 }}
              variants={fadeRise(statsDelay + index * stagger.loose)}
            >
              <span className={styles.statValue}>
                <CountUp value={stat.value} />
                {stat.suffix}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        className={styles.wordmarkWrap}
        initial={reduceMotion ? "visible" : "hidden"}
        animate={reduceMotion ? "visible" : undefined}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
      >
        <motion.span className={styles.wordmark} variants={maskRise(0.1, 0.5)}>
          {content.wordmark}
        </motion.span>
      </motion.div>
    </section>
  );
}
