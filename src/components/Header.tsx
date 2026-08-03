"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { getLocaleFromPathname } from "@/lib/locale";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { scrollToAnchor } from "@/lib/hooks/useLenis";
import { maskRise } from "@/components/motion/variants";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import styles from "./Header.module.css";

/** Past this many px of scroll, the header gets its glass background. */
const SCROLL_THRESHOLD = 8;

/**
 * Persistent site header — fixed above every section, not just the Hero's
 * own scroll-away nav row. Same brand type treatment as Hero's top-left
 * label (`--font-display`). The CTA uses the neutral cream `--color-9`
 * (the same tone Hero's own CTA used) rather than the orange accent: that
 * color is reserved for the Pricing/Game "buy" moments, and the header is
 * present on every screen, not just the checkout ones.
 *
 * Locale-aware without needing props from the (shared, single) root layout:
 * it reads its own locale off the current pathname, since `/`, `/en/*` and
 * `/es/*` all render under the same `app/layout.tsx`.
 */
export function Header() {
  const reduceMotion = useSafeReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname ?? "/");
  const content = siteContent[locale].header;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    // Track the last value in a ref so `setState` is only dispatched when the
    // threshold is actually crossed, rather than on every scroll event.
    let wasScrolled = window.scrollY > SCROLL_THRESHOLD;
    setIsScrolled(wasScrolled);

    const onScroll = () => {
      const next = window.scrollY > SCROLL_THRESHOLD;
      if (next === wasScrolled) return;
      wasScrolled = next;
      setIsScrolled(next);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#") || href === "#") return;
    event.preventDefault();
    scrollToAnchor(href);
  };

  const homeHref = locale === "uk" ? "/" : `/${locale}/`;

  return (
    <motion.header
      className={styles.header}
      data-scrolled={isScrolled}
      initial={reduceMotion ? "visible" : "hidden"}
      animate="visible"
      variants={maskRise(0.4, 1, "-100%")}
    >
      <a href={homeHref} className={styles.brand}>
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

      <div className={styles.actions}>
        <LanguageSwitcher locale={locale} />
        <a
          href="#quiz-heading"
          data-cursor-text={content.cursorStart}
          className={styles.cta}
          onClick={(event) => handleNavClick(event, "#quiz-heading")}
        >
          {content.cta}
        </a>
      </div>
    </motion.header>
  );
}
