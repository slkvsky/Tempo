"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { FaqContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { popIn } from "@/components/motion/variants";
import { stagger } from "@/lib/motion-tokens";
import styles from "./FaqSection.module.css";

interface FaqSectionProps {
  content: FaqContent;
}

/**
 * FAQ — a single-open accordion, not a wall of Q/A text. The giant ghost "?"
 * behind the heading echoes the outlined-numeral motif from Pain/Testimonials
 * so it reads as part of the same system rather than a bolted-on new pattern.
 * Height animation is the CSS grid-template-rows 0fr→1fr trick, not JS
 * measuring — smoother, no layout thrash, and free to disable for reduced
 * motion via a plain media query.
 *
 * Entrance uses a springy pop (scale overshoot) rather than the calm
 * ease-out fades elsewhere — a deliberately different, slightly playful
 * personality for the last content section before the close.
 */
export function FaqSection({ content }: FaqSectionProps) {
  const reduceMotion = useSafeReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <div className={styles.container}>
        <span className={styles.mark} aria-hidden="true">
          <motion.span
            initial={reduceMotion ? "visible" : "hidden"}
            animate={reduceMotion ? "visible" : undefined}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={reduceMotion ? undefined : { once: true, amount: 0.4 }}
            variants={popIn(0, 0.6)}
            style={{ display: "inline-block" }}
          >
            ?
          </motion.span>
        </span>

        <motion.div
          className={styles.intro}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.4 }}
          variants={popIn(0.1)}
        >
          <h2 id="faq-heading" className={styles.heading}>
            {content.h2}
          </h2>
          <p className={styles.sub}>{content.sub}</p>
        </motion.div>

        <ul className={styles.list}>
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.li
                key={item.question}
                className={styles.item}
                initial={reduceMotion ? "visible" : "hidden"}
                animate={reduceMotion ? "visible" : undefined}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
                variants={popIn(0.2 + index * stagger.loose)}
              >
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={styles.qNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.qText}>{item.question}</span>
                  <span className={styles.qIcon} data-open={isOpen} aria-hidden="true" />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={styles.answerWrap}
                  data-open={isOpen}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
