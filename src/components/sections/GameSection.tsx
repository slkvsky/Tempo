"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import type { GameContent } from "@/content/site";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/locale";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { useSpinWhenVisible } from "@/lib/hooks/useSpinWhenVisible";
import { startLenis, stopLenis } from "@/lib/hooks/useLenis";
import { fadeRise, scaleIn } from "@/components/motion/variants";
import { CountUp } from "@/components/motion/CountUp";
import { Currency } from "@/components/ui/Currency";
import { duration, stagger, ease } from "@/lib/motion-tokens";
import { formatPrice } from "@/lib/format-price";
import styles from "./GameSection.module.css";

interface GameSectionProps {
  locale: Locale;
}

/**
 * Tempo Game — shows the product instead of describing it. The panel is a
 * game HUD (level counter, XP bar, quest chips), not another bullet list.
 * Everything that used to be spelled out in prose — the feature rundown,
 * beta perks, platform status — still exists, just tucked
 * behind a "Що всередині?" popup so it doesn't compete with the HUD for
 * attention. The popup is a portal to document.body: the panel it's
 * triggered from has an active scroll-reveal transform and overflow:hidden
 * clip-path, either of which would break position:fixed if the popup lived
 * inside it.
 */
const RING_RADIUS = 70;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function GameDetailsModal({
  content,
  onClose,
}: {
  content: GameContent;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    stopLenis();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      startLenis();
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className={styles.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration.fast, ease: ease.out }}
    >
      <motion.div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-details-heading"
        data-lenis-prevent
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.96 }}
        transition={{ duration: duration.fast, ease: ease.out }}
      >
        <div className={styles.modalHeader}>
          <h3 id="game-details-heading" className={styles.modalTitle}>
            {content.detailsLabel}
          </h3>
          <button
            type="button"
            className={styles.modalClose}
            onClick={onClose}
            aria-label={content.closeLabel}
          >
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>{content.nowHeading}</h4>
            <ul className={styles.list}>
              {content.now.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnHeading}>{content.betaHeading}</h4>
            <ul className={styles.list}>
              {content.beta.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.status}>
            <h4 className={styles.columnHeading}>{content.statusHeading}</h4>
            <p className={styles.statusLine}>{content.statusOk}</p>
            <p className={styles.statusLine}>{content.statusWip}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export function GameSection({ locale }: GameSectionProps) {
  const content = siteContent[locale].game;
  const reduceMotion = useSafeReducedMotion();
  const xpProgress = content.xpPercent / 100;
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { ref: panelRef, isVisible } = useSpinWhenVisible<HTMLDivElement>();

  return (
    <section
      aria-labelledby="game-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-sm)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <span className={styles.sectionBg} aria-hidden="true" />
      <span className={styles.sectionScrim} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          ref={panelRef}
          className={styles.panel}
          data-spin={isVisible}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
          variants={fadeRise(0)}
        >
          <span className={styles.glow} aria-hidden="true" />
          <span className={styles.scanlines} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

          <span className={styles.badge}>{content.badge}</span>
          <h2 id="game-heading" className={styles.heading}>
            {content.h2}
          </h2>
          <p className={styles.hook}>{content.hook}</p>

          <div className={styles.hud}>
            <div className={styles.ringWrap}>
              <span className={styles.ringGlow} aria-hidden="true" />
              <svg className={styles.ring} viewBox="0 0 160 160" aria-hidden="true">
                <circle className={styles.ringTrack} cx="80" cy="80" r={RING_RADIUS} />
                <motion.circle
                  className={styles.ringFill}
                  cx="80"
                  cy="80"
                  r={RING_RADIUS}
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  initial={
                    reduceMotion
                      ? { strokeDashoffset: RING_CIRCUMFERENCE * (1 - xpProgress) }
                      : { strokeDashoffset: RING_CIRCUMFERENCE }
                  }
                  animate={
                    reduceMotion
                      ? { strokeDashoffset: RING_CIRCUMFERENCE * (1 - xpProgress) }
                      : undefined
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : { strokeDashoffset: RING_CIRCUMFERENCE * (1 - xpProgress) }
                  }
                  viewport={reduceMotion ? undefined : { once: true, amount: 0.6 }}
                  transition={{ duration: duration.slower, ease: ease.out }}
                />
              </svg>
              <div className={styles.ringCenter}>
                <span className={styles.levelLabel}>Level</span>
                <span className={styles.levelNumber}>
                  <CountUp value={content.level} />
                </span>
              </div>
            </div>

            <ul className={styles.chips}>
              {content.chips.map((chip, index) => (
                <motion.li
                  key={chip}
                  className={styles.chip}
                  initial={reduceMotion ? "visible" : "hidden"}
                  animate={reduceMotion ? "visible" : undefined}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={reduceMotion ? undefined : { once: true, amount: 0.6 }}
                  variants={scaleIn(index * stagger.loose)}
                >
                  {chip}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.priceNow}>
              <CountUp value={content.priceNow} />
              <Currency>{content.currency}</Currency>
            </span>
            <span className={styles.priceLater}>
              {formatPrice(content.priceLater, locale)}
              <Currency>{content.currency}</Currency>
            </span>
          </div>

          <a href="#" className={styles.cta}>
            {content.cta}
          </a>

          <p className={styles.scarcity}>
            {content.scarcity} {content.releaseLine(content.releaseDate)}
          </p>

          <button
            type="button"
            className={styles.trigger}
            onClick={() => setIsDetailsOpen(true)}
          >
            {content.detailsLabel}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isDetailsOpen && (
          <GameDetailsModal content={content} onClose={() => setIsDetailsOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
