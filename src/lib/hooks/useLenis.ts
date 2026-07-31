"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Custom events any component can dispatch to pause/resume Lenis — e.g. a
 * modal that needs the background page to stop scrolling while it's open.
 * Lenis drives scroll itself via rAF, so `document.body.style.overflow`
 * alone doesn't stop it; it has to be told to `.stop()`.
 */
const LENIS_STOP_EVENT = "lenis:stop";
const LENIS_START_EVENT = "lenis:start";

export function stopLenis() {
  window.dispatchEvent(new Event(LENIS_STOP_EVENT));
}

export function startLenis() {
  window.dispatchEvent(new Event(LENIS_START_EVENT));
}

/**
 * The live Lenis instance, when one is running (desktop, motion allowed).
 * Module-scoped rather than context/state so any component — including
 * ones that never render inside a particular provider tree — can reach it
 * synchronously from a click handler.
 */
let activeLenis: Lenis | null = null;

/**
 * Smoothly scrolls to an anchor target, accounting for the fixed header's
 * height so the destination heading doesn't land underneath it. Uses
 * Lenis's own `.scrollTo` when it's running (in sync with the rest of the
 * page's inertial scroll); falls back to native smooth-scroll on mobile /
 * reduced-motion, where `useLenis` never starts an instance.
 */
export function scrollToTarget(target: string | HTMLElement, offset = 0) {
  const el = (
    typeof target === "string" ? document.querySelector(target) : target
  ) as HTMLElement | null;
  if (!el) return;

  if (activeLenis) {
    activeLenis.scrollTo(el, { offset, duration: 1.2 });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
}

/**
 * In-page anchor navigation shared by the Header's nav and the Footer's
 * (identical) links: reads the fixed header's actual rendered height so
 * the destination heading clears it, then hands off to `scrollToTarget`.
 */
export function scrollToAnchor(href: string, extraOffset = 4) {
  if (!href.startsWith("#") || href === "#") return;
  const target = document.querySelector(href);
  if (!target) return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  scrollToTarget(target as HTMLElement, -(headerHeight + extraOffset));
}

/**
 * Inertial scroll for pointer/trackpad input. Skipped on touch devices
 * (native momentum scrolling already feels right there and Lenis fighting
 * it costs battery for no gain) and under prefers-reduced-motion.
 */
export function useLenis() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isMobile || prefersReducedMotion) return;

    const lenis = new Lenis({ lerp: 0.1 });
    activeLenis = lenis;

    const onStop = () => lenis.stop();
    const onStart = () => lenis.start();
    window.addEventListener(LENIS_STOP_EVENT, onStop);
    window.addEventListener(LENIS_START_EVENT, onStart);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener(LENIS_STOP_EVENT, onStop);
      window.removeEventListener(LENIS_START_EVENT, onStart);
      lenis.destroy();
      activeLenis = null;
    };
  }, []);
}
