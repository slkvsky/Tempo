import { Hero } from "@/components/sections/Hero";
import { HeroMobile } from "@/components/sections/HeroMobile";
import { PainSection } from "@/components/sections/PainSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GameSection } from "@/components/sections/GameSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { siteContent } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero content={siteContent.hero} />
        <HeroMobile content={siteContent.hero} />
        <PainSection content={siteContent.pain} />
        <HowItWorks content={siteContent.how} />
        <TestimonialsSection content={siteContent.testimonials} />
        <PricingSection content={siteContent.pricing} />
        <GameSection content={siteContent.game} />
        <FaqSection content={siteContent.faq} />
        <FinalCtaSection content={siteContent.finalCta} />
      </main>
      <div className={styles.spacer} aria-hidden="true" />
      <Footer content={siteContent.footer} />
    </>
  );
}
