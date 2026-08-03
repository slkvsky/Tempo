import type { Locale } from "@/lib/locale";

const NUMBER_FORMAT_LOCALE: Record<Locale, string> = {
  uk: "uk-UA",
  en: "en-US",
  es: "es-ES",
};

/** Formats a UAH amount with a locale-appropriate thousands separator, e.g. 1490 -> "1,490". */
export function formatPrice(amount: number, locale: Locale = "uk"): string {
  return new Intl.NumberFormat(NUMBER_FORMAT_LOCALE[locale]).format(Math.round(amount));
}
