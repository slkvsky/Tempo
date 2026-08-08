import type { TariffId } from "@/content/quiz";

/**
 * WayForPay checkout links, filled in one at a time as they're created.
 * `null` means the link doesn't exist yet — callers fall back to "#".
 */
export const paymentLinks: {
  tariff: Record<TariffId, string | null>;
  tariffWithGame: Record<TariffId, string | null>;
  game: string | null;
} = {
  tariff: {
    start: "https://secure.wayforpay.com/button/bd6d789e95656",
    system: "https://secure.wayforpay.com/button/be52e6daca546",
    premium: "https://secure.wayforpay.com/button/beac20fe5f794",
  },
  tariffWithGame: {
    start: "https://secure.wayforpay.com/button/b6e2dba172be8",
    system: "https://secure.wayforpay.com/button/b7fdcb2d46d74",
    premium: "https://secure.wayforpay.com/button/b891324a98ee4",
  },
  game: "https://secure.wayforpay.com/button/bd65f3be286be",
};
