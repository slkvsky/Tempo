"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Same intent as Motion's `useReducedMotion`, but safe to use for values
 * that affect the initial render tree (e.g. picking between two
 * `useTransform` output ranges).
 *
 * Motion's hook reads the real browser preference synchronously on the
 * client via `useState(prefersReducedMotion.current)`, but has no such
 * signal server-side — so branching render output on its raw value
 * produces a hydration mismatch whenever the visitor actually has reduced
 * motion enabled (server renders the "motion" tree, client's first paint
 * renders the "reduced" tree). This defers to `false` — matching what SSR
 * always renders — until after mount, then flips to the real value on the
 * next client-only render, which is not compared against server HTML.
 */
export function useSafeReducedMotion(): boolean {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && Boolean(reduceMotion);
}
