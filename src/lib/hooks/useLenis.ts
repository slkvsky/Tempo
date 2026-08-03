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
 * Re-arms the (self-suspending) rAF loop. Programmatic scrolls have to call
 * this: with the loop idle there's nothing ticking `lenis.raf`, so a
 * `scrollTo` would set a target and never animate toward it.
 */
let wakeLenis: (() => void) | null = null;

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
    wakeLenis?.();
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
 *
 * Two things here are load-bearing for Safari:
 *
 * 1. The rAF loop only runs while a scroll is actually in flight. It used to
 *    tick every frame for the lifetime of the page, which kept the compositor
 *    awake — and every one of those frames re-ran the hero's scroll-linked
 *    transforms even when nothing was moving.
 * 2. Touch devices are detected via `(pointer: coarse)` rather than a width
 *    breakpoint, so iPads (and a narrow desktop window, which was wrongly
 *    getting native scroll) are classified correctly.
 */
export function useLenis() {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || prefersReducedMotion) return;

    // Slightly higher lerp than the default: shortens the settle tail, so the
    // page stops re-compositing sooner after the wheel stops.
    const lenis = new Lenis({ lerp: 0.14 });
    activeLenis = lenis;

    let rafId = 0;
    let running = false;
    let idleFrames = 0;
    let lastScroll = Number.NaN;

    // Keep ticking briefly after movement stops rather than cutting out the
    // first still frame: `scrollTo` sets its target before the position starts
    // changing, so an immediate exit would strand a programmatic scroll.
    const IDLE_FRAMES_BEFORE_SLEEP = 20;
    // Lenis eases toward its target asymptotically, so the position keeps
    // changing by ever-smaller fractions and is never bit-for-bit equal to the
    // previous frame for seconds. Anything below half a pixel is invisible, so
    // that counts as stopped.
    const IDLE_EPSILON_PX = 0.5;

    const tick = (time: number) => {
      lenis.raf(time);

      // Idleness is measured from the scroll position itself. Lenis emits a
      // `scroll` event from inside `raf()`, so subscribing to that to detect
      // activity would just keep re-arming the loop forever.
      const current = lenis.animatedScroll;
      const moved = Math.abs(current - lastScroll) > IDLE_EPSILON_PX;
      idleFrames = moved ? 0 : idleFrames + 1;
      lastScroll = current;

      if (idleFrames < IDLE_FRAMES_BEFORE_SLEEP) {
        rafId = requestAnimationFrame(tick);
      } else {
        running = false;
        rafId = 0;
      }
    };

    const wake = () => {
      idleFrames = 0;
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(tick);
    };
    wakeLenis = wake;

    // Any input that could start a scroll re-arms the loop.
    window.addEventListener("wheel", wake, { passive: true });
    window.addEventListener("keydown", wake, { passive: true });
    window.addEventListener("touchstart", wake, { passive: true });

    const onStop = () => lenis.stop();
    const onStart = () => {
      lenis.start();
      wake();
    };
    window.addEventListener(LENIS_STOP_EVENT, onStop);
    window.addEventListener(LENIS_START_EVENT, onStart);

    // One tick to settle initial state (e.g. a deep link restoring scroll).
    wake();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", wake);
      window.removeEventListener("keydown", wake);
      window.removeEventListener("touchstart", wake);
      window.removeEventListener(LENIS_STOP_EVENT, onStop);
      window.removeEventListener(LENIS_START_EVENT, onStart);
      lenis.destroy();
      activeLenis = null;
      wakeLenis = null;
    };
  }, []);
}
