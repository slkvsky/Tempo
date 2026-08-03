"use client";

import { motion } from "motion/react";
import type { FooterContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { fadeRise, scaleIn } from "@/components/motion/variants";
import { scrollToAnchor } from "@/lib/hooks/useLenis";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { HERO_PHOTO } from "@/lib/hero-photo";
import styles from "./Footer.module.css";

interface FooterProps {
  content: FooterContent;
}

/**
 * The "reveal" footer — fixed behind the page (see page.module.css's
 * `.main`, which reserves a 100svh spacer at the end via margin-bottom).
 * As the last section scrolls past, this stays pinned to the viewport
 * bottom, so it looks like it slides out from underneath rather than
 * scrolling in like a normal element. Same 100svh full-bleed footprint,
 * OrbitMark, and display-type scale as the Hero, so the page visually
 * opens and closes with the same gesture.
 *
 * Content animates on mount, not `whileInView`: a `position: fixed`
 * element is pinned to the viewport from the very first frame, so
 * IntersectionObserver considers it "in view" immediately regardless of
 * whether the opaque page content above is still covering it — the
 * reveal here is a z-index trick, not a real scroll-into-view event.
 */
export function Footer({ content }: FooterProps) {
  const reduceMotion = useSafeReducedMotion();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#") || href === "#") return;
    event.preventDefault();
    scrollToAnchor(href);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.kenBurns}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PHOTO.src}
            srcSet={HERO_PHOTO.srcSet}
            sizes={HERO_PHOTO.sizes}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={styles.bgImage}
          />
        </div>
        <div className={styles.breathe} />
        <GrainOverlay opacity={0.18} />
        <div className={styles.scrim} />
      </div>

      <motion.div
        className={styles.middle}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={scaleIn(0.05)}
      >
        <OrbitMark className={styles.mark} />
        <p className={styles.tagline}>{content.tagline}</p>
        <a
          href={content.contactHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          <span
            aria-hidden="true"
            className={styles.contactIcon}
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.05 3.53 17.98 19.6c-.23 1.04-.85 1.3-1.72.81l-4.75-3.5-2.29 2.2c-.25.25-.47.47-.96.47l.34-4.86 8.85-8c.38-.35-.09-.54-.6-.2L6.1 12.7l-4.8-1.5c-1.04-.32-1.06-1.04.22-1.54L19.7 2.28c.87-.32 1.63.2 1.35 1.25Z'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.05 3.53 17.98 19.6c-.23 1.04-.85 1.3-1.72.81l-4.75-3.5-2.29 2.2c-.25.25-.47.47-.96.47l.34-4.86 8.85-8c.38-.35-.09-.54-.6-.2L6.1 12.7l-4.8-1.5c-1.04-.32-1.06-1.04.22-1.54L19.7 2.28c.87-.32 1.63.2 1.35 1.25Z'/%3E%3C/svg%3E")`,
            }}
          />
          <span className={styles.contactLabel}>{content.contactLabel}</span>
        </a>
      </motion.div>

      <motion.div
        className={styles.bottom}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={fadeRise(0.1, 8)}
      >
        <nav className={styles.legalLinks}>
          {content.legalLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.legalLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <span>{content.copyright}</span>
      </motion.div>
    </footer>
  );
}
