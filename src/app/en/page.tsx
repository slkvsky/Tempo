import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroMobile } from "@/components/sections/HeroMobile";
import { PainSection } from "@/components/sections/PainSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { QuizSection } from "@/components/sections/QuizSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GameSection } from "@/components/sections/GameSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { siteContent } from "@/content/site";
import styles from "../page.module.css";

const locale = "en" as const;
const content = siteContent[locale];

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function HomeEn() {
  return (
    <>
      <main className={styles.main}>
        <Hero content={content.hero} />
        <HeroMobile content={content.hero} />
        <PainSection content={content.pain} />
        <HowItWorks content={content.how} />
        <TestimonialsSection locale={locale} />
        <QuizSection locale={locale} />
        <PricingSection content={content.pricing} locale={locale} />
        <GameSection locale={locale} />
        <FaqSection content={content.faq} />
        <FinalCtaSection content={content.finalCta} />
      </main>
      <div className={styles.spacer} aria-hidden="true" />
      <Footer content={content.footer} />
    </>
  );
}
