/**
 * JS-consumable twin of the duration/easing tokens in `src/styles/theme.css`.
 * Motion (motion/react) drives animation off the main thread via JS, so it
 * cannot read CSS custom properties — these values must stay numerically
 * identical to their `--duration-*` / `--ease-*` counterparts.
 */

export const duration = {
  fast: 0.3,
  base: 0.65,
  slow: 1.075,
  slower: 1.25,
  reveal: 3,
} as const;

export const stagger = {
  tight: 0.03,
  base: 0.05,
  loose: 0.08,
  wide: 0.1,
} as const;

export const ease = {
  out: [0.22, 1, 0.36, 1],
  outSoft: [0.31, 0.75, 0.22, 1],
  inOut: [0.76, 0, 0.24, 1],
  in: [0.55, 0, 0.7, 0],
} as const;
