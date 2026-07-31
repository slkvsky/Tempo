"use client";

import { motion, type Variants } from "motion/react";
import type { HowContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { scaleIn, wipeReveal } from "@/components/motion/variants";
import { duration, stagger, ease } from "@/lib/motion-tokens";
import styles from "./HowItWorks.module.css";

interface HowItWorksProps {
  content: HowContent;
}

const dividerVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: (delay: number) => ({
    scaleY: 1,
    transition: { duration: duration.base, delay, ease: ease.out },
  }),
};

/** Must match `--opacity-faint` in theme.css — the number stays a faint
 * background watermark, never full-strength, so it can't compete with the
 * title/text stacked on top of it. */
const NUMBER_OPACITY = 0.07;

/**
 * "How it works" — three steps, each a giant near-invisible display numeral
 * behind a small, high-contrast title + line of text. Same trick as the
 * hero (scale contrast carries the section), so it reads as a continuation
 * of it rather than a new visual language.
 *
 * Entrance is its own thing though: a vertical line draws itself down
 * between steps (echoes Pain's horizontal divider draw, rotated), the
 * numeral pops in with a scale, and the title+text slide in from behind
 * an overflow-hidden mask — distinct from the plain fade/rise used
 * elsewhere. The viewport trigger lives on the outer `motion.li`, not on
 * the sliding/scaling children themselves: a child whose own hidden state
 * is `translateX(-100%)` moves its own bounding box out of view, which
 * starves its `whileInView` observer of the visibility it needs to ever
 * fire. Putting the trigger on the non-moving `<li>` and letting children
 * inherit "hidden"/"visible" through variant propagation sidesteps that.
 */
export function HowItWorks({ content }: HowItWorksProps) {
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      aria-labelledby="how-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <div className={styles.container}>
        <h2 id="how-heading" className={styles.heading}>
          {content.h2}
        </h2>
        <p className={styles.sub}>{content.sub}</p>

        <ol className={styles.steps}>
          {content.steps.map((step, index) => {
            const delay = index * stagger.wide;

            return (
              <motion.li
                key={step.title}
                className={styles.step}
                initial={reduceMotion ? "visible" : "hidden"}
                animate={reduceMotion ? "visible" : undefined}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
              >
                {index > 0 && (
                  <motion.span
                    aria-hidden="true"
                    className={styles.divider}
                    custom={delay}
                    variants={dividerVariants}
                  />
                )}

                <motion.span
                  aria-hidden="true"
                  className={styles.number}
                  variants={scaleIn(delay, NUMBER_OPACITY)}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>

                <div className={styles.stepContent}>
                  <motion.div variants={wipeReveal(delay + 0.15)}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </motion.div>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <p className={styles.footer}>{content.footer}</p>
      </div>
    </section>
  );
}
