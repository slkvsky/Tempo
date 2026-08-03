"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * One shared subscription for the whole page, rather than one per component.
 *
 * Twelve components call this hook. With the previous `useState` +
 * `useEffect(() => setMounted(true))` implementation, each one queued its own
 * post-hydration state flip, so the first client render was followed by twelve
 * separate section-subtree re-renders in a single tick — a guaranteed long task
 * right when the page is trying to become interactive. `useSyncExternalStore`
 * over a single MediaQueryList collapses that into one.
 */
function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/**
 * The server has no way to know the visitor's motion preference, so the
 * server snapshot is always `false` — matching what SSR renders. React swaps
 * in the real client value after hydration without a mismatch, which is the
 * same guarantee the old `mounted` flag provided.
 */
function getServerSnapshot() {
  return false;
}

export function useSafeReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
