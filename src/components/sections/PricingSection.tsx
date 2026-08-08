"use client";

import { motion } from "motion/react";
import type { PricingContent, PricingTier } from "@/content/site";
import type { Locale } from "@/lib/locale";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { useSpinWhenVisible } from "@/lib/hooks/useSpinWhenVisible";
import { fadeRise } from "@/components/motion/variants";
import { CountUp } from "@/components/motion/CountUp";
import { Currency } from "@/components/ui/Currency";
import { stagger } from "@/lib/motion-tokens";
import { formatPrice } from "@/lib/format-price";
import { paymentLinks } from "@/content/payment-links";
import styles from "./PricingSection.module.css";

interface PricingSectionProps {
  content: PricingContent;
  locale: Locale;
}

function TierPrice({
  priceNow,
  priceThen,
  content,
  locale,
}: {
  priceNow: number;
  priceThen: number;
  content: PricingContent;
  locale: Locale;
}) {
  return (
    <>
      <CountUp value={priceNow} />
      <Currency>{content.currency}</Currency> · {content.launchPriceLabel} (
      {content.laterPriceLabel} {formatPrice(priceThen, locale)}
      <Currency>{content.currency}</Currency>)
    </>
  );
}

function TierCard({
  tier,
  index,
  content,
  locale,
}: {
  tier: PricingTier;
  index: number;
  content: PricingContent;
  locale: Locale;
}) {
  const reduceMotion = useSafeReducedMotion();
  const highlighted = Boolean(tier.badge);
  const { ref: tierRef, isVisible } = useSpinWhenVisible<HTMLLIElement>();

  return (
    <motion.li
      ref={tierRef}
      className={`${styles.tier} ${highlighted ? styles.tierHighlighted : ""}`}
      data-spin={isVisible}
      initial={reduceMotion ? "visible" : "hidden"}
      animate={reduceMotion ? "visible" : undefined}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
      variants={fadeRise(index * stagger.loose)}
    >
      
      {tier.badge && <span className={styles.badge}>{tier.badge}</span>}

      <h3 className={styles.tierName}>{tier.name}</h3>
      <p className={styles.tierPrice}>
        <TierPrice priceNow={tier.priceNow} priceThen={tier.priceThen} content={content} locale={locale} />
      </p>

      <ul className={styles.featureList}>
        {tier.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={paymentLinks.tariff[tier.id] ?? "#"}
        className={`${styles.cta} ${highlighted ? styles.ctaHighlighted : ""}`}
      >
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
export function PricingSection({ content, locale }: PricingSectionProps) {
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
            <TierCard key={tier.name} tier={tier} index={index} content={content} locale={locale} />
          ))}
        </ul>

        <p className={styles.badges}>{content.badges}</p>
      </div>
    </section>
  );
}
