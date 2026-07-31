"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { HeaderContent } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { scrollToAnchor } from "@/lib/hooks/useLenis";
import { maskRise } from "@/components/motion/variants";
import styles from "./Header.module.css";

interface HeaderProps {
  content: HeaderContent;
}

/** Past this many px of scroll, the header gets its glass background. */
const SCROLL_THRESHOLD = 8;

/**
 * Persistent site header — fixed above every section, not just the Hero's
 * own scroll-away nav row. Same brand type treatment as Hero's top-left
 * label (`--font-display`). The CTA uses the neutral cream `--color-9`
 * (the same tone Hero's own CTA used) rather than the orange accent: that
 * color is reserved for the Pricing/Game "buy" moments, and the header is
 * present on every screen, not just the checkout ones.
 */
export function Header({ content }: HeaderProps) {
  const reduceMotion = useSafeReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#") || href === "#") return;
    event.preventDefault();
    scrollToAnchor(href);
  };

  return (
    <motion.header
      className={styles.header}
      data-scrolled={isScrolled}
      initial={reduceMotion ? "visible" : "hidden"}
      animate="visible"
      variants={maskRise(0.4, 1, "-100%")}
    >
      <a href="#" className={styles.brand}>
        {content.brand}
      </a>

      <nav className={styles.navWrap}>
        <ul className={styles.nav}>
          {content.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#final-cta-heading"
        data-cursor-text="Почати"
        className={styles.cta}
        onClick={(event) => handleNavClick(event, "#final-cta-heading")}
      >
        {content.cta}
      </a>
    </motion.header>
  );
}
