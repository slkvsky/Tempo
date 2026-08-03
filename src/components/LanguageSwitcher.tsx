"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, localeNames, localizedHref, type Locale } from "@/lib/locale";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  locale: Locale;
}

/** Compact inline UA / EN / ES switcher — links to the same page under the other locale's path. */
export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Language" className={styles.switcher}>
      {locales.map((target) => (
        <Link
          key={target}
          href={localizedHref(pathname ?? "/", target)}
          aria-current={target === locale ? "true" : undefined}
          aria-label={localeNames[target]}
          className={styles.option}
          data-active={target === locale}
        >
          {localeLabels[target]}
        </Link>
      ))}
    </nav>
  );
}
