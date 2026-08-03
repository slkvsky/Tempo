export const locales = ["uk", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

export const localeLabels: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
  es: "ES",
};

export const localeNames: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  es: "Español",
};

const PREFIXED_LOCALES = locales.filter((locale) => locale !== defaultLocale);

/** Reads the locale off a pathname like `/en/oferta/` — falls back to the default locale. */
export function getLocaleFromPathname(pathname: string): Locale {
  for (const locale of PREFIXED_LOCALES) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return defaultLocale;
}

/** Strips the locale prefix off a pathname, e.g. `/en/oferta/` -> `/oferta/`. */
export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (locale === defaultLocale) return pathname || "/";
  const rest = pathname.slice(`/${locale}`.length);
  return rest === "" ? "/" : rest;
}

/** Builds the equivalent path for another locale, preserving the current sub-path. */
export function localizedHref(pathname: string, target: Locale): string {
  const rest = stripLocaleFromPathname(pathname);
  if (target === defaultLocale) return rest;
  return rest === "/" ? `/${target}/` : `/${target}${rest}`;
}
