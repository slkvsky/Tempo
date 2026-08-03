"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/locale";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { duration, ease } from "@/lib/motion-tokens";
import styles from "./TestimonialsSection.module.css";

interface TestimonialsSectionProps {
  locale: Locale;
}

const AUTO_ADVANCE_MS = 6000;
const QUOTE_RISE_DISTANCE = 16;

/*
 * Content is imported by `locale` rather than received as a prop: `tabLabel`
 * is a template function, and functions can't cross the RSC server->client
 * prop boundary (Next throws at build time if a Server Component page tries
 * to pass one down to this "use client" component).
 */
export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const content = siteContent[locale].testimonials;
  const reduceMotion = useSafeReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { items } = content;

  useEffect(() => {
    if (reduceMotion || items.length <= 1) return;

    const timer = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, AUTO_ADVANCE_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, reduceMotion, items.length]);

  const active = items[activeIndex];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <div aria-hidden="true" className={styles.glow} />

      <div className={styles.container}>
        <h2 id="testimonials-heading" className={styles.heading}>
          {content.h2}
        </h2>

        <div className={styles.spotlight}>
          <span aria-hidden="true" className={styles.quoteMark}>
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              className={styles.quote}
              initial={reduceMotion ? false : { y: QUOTE_RISE_DISTANCE, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { y: -QUOTE_RISE_DISTANCE, opacity: 0 }}
              transition={{ duration: duration.base, ease: ease.out }}
            >
              <p className={styles.quoteText}>{active.quote}</p>
              <footer className={styles.author}>
                <span className={styles.authorName}>{active.name}</span>
                <span className={styles.authorRole}>{active.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {items.length > 1 && (
          <div className={styles.progress} role="tablist" aria-label={content.tablistLabel}>
            {items.map((item, index) => {
              const state =
                index < activeIndex
                  ? "done"
                  : index === activeIndex
                    ? "active"
                    : "upcoming";

              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={content.tabLabel(index + 1, items.length)}
                  className={styles.segment}
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    key={`${index}-${state === "active" ? activeIndex : "static"}`}
                    className={`${styles.segmentFill} ${
                      state === "active" && !reduceMotion ? styles.animated : ""
                    }`}
                    data-state={state}
                    style={
                      state === "active" && !reduceMotion
                        ? { animationDuration: `${AUTO_ADVANCE_MS}ms` }
                        : undefined
                    }
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
