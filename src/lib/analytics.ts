declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Pushes to `window.dataLayer` (the standard GTM/GA4 convention) so the
 * quiz's funnel events are pickup-able by whatever analytics/retargeting
 * setup gets wired in later, without this codebase depending on a specific
 * vendor SDK. No-ops safely if dataLayer was never initialized.
 */
export function trackEvent(event: string, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
