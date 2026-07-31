"use client";

import { motion } from "motion/react";
import type { PricingContent, PricingTier } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { fadeRise } from "@/components/motion/variants";
import { CountUp } from "@/components/motion/CountUp";
import { stagger } from "@/lib/motion-tokens";
import { parseLeadingNumber } from "@/lib/parse-leading-number";
import styles from "./PricingSection.module.css";

interface PricingSectionProps {
  content: PricingContent;
}

function TierPrice({ price }: { price: string }) {
  const parsed = parseLeadingNumber(price);
  if (!parsed) return <>{price}</>;

  return (
    <>
      <CountUp value={parsed.value} />
      {parsed.rest}
    </>
  );
}

function TierCard({ tier, index }: { tier: PricingTier; index: number }) {
  const reduceMotion = useSafeReducedMotion();
  const highlighted = Boolean(tier.badge);

  return (
    <motion.li
      className={`${styles.tier} ${highlighted ? styles.tierHighlighted : ""}`}
      initial={reduceMotion ? "visible" : "hidden"}
      animate={reduceMotion ? "visible" : undefined}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
      variants={fadeRise(index * stagger.loose)}
    >
      {highlighted && <span className={styles.glow} aria-hidden="true" />}

      {tier.badge && <span className={styles.badge}>{tier.badge}</span>}

      <h3 className={styles.tierName}>{tier.name}</h3>
      <p className={styles.tierPrice}>
        <TierPrice price={tier.price} />
      </p>

      <ul className={styles.featureList}>
        {tier.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            {feature}
          </li>
        ))}
      </ul>

      <a href="#" className={`${styles.cta} ${highlighted ? styles.ctaHighlighted : ""}`}>
        {tier.cta}
      </a>
    </motion.li>
  );
}

/**
 * Pricing — the one section on the page allowed a real accent color, since
 * it's the conversion moment. Three tiers, the middle one elevated with a
 * glow and its own hue; the price itself counts up on scroll-into-view.
 */
export function PricingSection({ content }: PricingSectionProps) {
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      aria-labelledby="pricing-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <div className={styles.container}>
        <h2 id="pricing-heading" className={styles.heading}>
          {content.h2}
        </h2>
        <p className={styles.sub}>{content.sub}</p>

        <ul className={styles.tiers}>
          {content.tiers.map((tier, index) => (
            <TierCard key={tier.name} tier={tier} index={index} />
          ))}
        </ul>

        <motion.p
          className={styles.bump}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion ? "visible" : undefined}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
          variants={fadeRise(content.tiers.length * stagger.loose)}
        >
          {content.bump}
        </motion.p>

        <p className={styles.guarantee}>{content.guarantee}</p>
        <p className={styles.badges}>{content.badges}</p>
      </div>
    </section>
  );
}
