"use client";

import { motion, type Variants } from "motion/react";
import type { PainContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { fadeRise } from "@/components/motion/variants";
import { duration, stagger, ease } from "@/lib/motion-tokens";
import styles from "./PainSection.module.css";

interface PainSectionProps {
  content: PainContent;
}

const ITEM_RISE_DISTANCE = 12;

const dividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
    transition: { duration: duration.base, delay, ease: ease.out },
  }),
};

/**
 * Pain section — the reader recognizes themselves and concludes the problem
 * was never their willpower. One left-aligned column, not a card grid: cards
 * would flatten these into equal-weight features. The numbered "attempt"
 * markers are load-bearing — the heading asks how many times you've
 * restarted, and the items are literally that sequence — not decoration.
 */
export function PainSection({ content }: PainSectionProps) {
  const reduceMotion = useSafeReducedMotion();

  const lastItemDelay = (content.items.length - 1) * stagger.loose;
  const reframeDelay = (lastItemDelay + duration.base + 0.25) / 2;

  const reframeVariants: Variants = {
    hidden: { y: ITEM_RISE_DISTANCE, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: duration.slow / 2, delay: reframeDelay, ease: ease.out },
    },
  };

  return (
    <section
      aria-labelledby="pain-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <div className={styles.container}>
        <h2 id="pain-heading" className={styles.heading}>
          {content.h2}
        </h2>

        <ul className={styles.list}>
          {content.items.map((item, index) => (
            <li key={item} className={styles.item}>
              <motion.span
                aria-hidden="true"
                className={styles.divider}
                custom={index * stagger.loose}
                initial={reduceMotion ? "visible" : "hidden"}
                animate={reduceMotion ? "visible" : undefined}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
                variants={dividerVariants}
              />

              <motion.span
                aria-hidden="true"
                className={styles.numberColumn}
                initial={reduceMotion ? "visible" : "hidden"}
                animate={reduceMotion ? "visible" : undefined}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
                variants={fadeRise(index * stagger.loose, ITEM_RISE_DISTANCE)}
              >
                <span className={styles.bigNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.span>

              <motion.div
                className={styles.itemContent}
                initial={reduceMotion ? "visible" : "hidden"}
                animate={reduceMotion ? "visible" : undefined}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
                variants={fadeRise(index * stagger.loose, ITEM_RISE_DISTANCE)}
              >
                <span aria-hidden="true" className={styles.marker}>
                  {`${content.attemptLabel} ${String(index + 1).padStart(2, "0")}`}
                </span>
                <span className={styles.itemText}>{item}</span>
              </motion.div>
            </li>
          ))}
        </ul>

        <motion.p
          className={styles.reframe}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
          variants={reframeVariants}
        >
          <strong className={styles.reframeLead}>
            {content.reframe.leadStart}
            <span className={styles.reframeHighlight}>
              {content.reframe.leadHighlight}
            </span>
            {content.reframe.leadEnd}
          </strong>{" "}
          {content.reframe.rest}
        </motion.p>
      </div>
    </section>
  );
}
