import localFont from "next/font/local";

/**
 * Oswald — the one typeface for all Ukrainian copy on the site (display
 * headings and body text alike), mirroring how Black Ops One below is the
 * one typeface for the English-only hero wordmark. Self-hosted as five
 * static weights rather than the variable file: fontTools' variable-font
 * merge doesn't support merging `fvar`/`VarStore` tables, so the Cyrillic
 * and Latin subsets (each already a valid variable face on their own) were
 * instanced at 300/400/500/600/700 first, merged as static fonts, then
 * subset down to Cyrillic + Latin + basic punctuation. Covers every
 * font-weight actually used in the codebase (400/500/600/700). Note: this
 * subset doesn't include the ₴ glyph (Oswald doesn't ship one) — it falls
 * back to Arial for that one character, which is expected and fine.
 */
export const fontDisplay = localFont({
  src: [
    { path: "./fonts/Oswald-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Oswald-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Oswald-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Oswald-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Oswald-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const fontText = localFont({
  src: [
    { path: "./fonts/Oswald-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Oswald-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Oswald-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Oswald-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Oswald-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-text",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

/**
 * Hero wordmark only — a distressed display face, not part of the general type
 * scale. It renders exactly two strings ("TEMPO" and the header brand), so it's
 * subset to printable ASCII (U+0020–007E) and converted to woff2: 162 KB of
 * uncompressed TTF down to ~3.7 KB, off the critical path.
 *
 * NOTE: the subset is Latin-only. If this face is ever applied to Cyrillic copy
 * it will silently fall back to Arial — re-run the subset with the extra range
 * if that's ever needed.
 */
export const fontWordmark = localFont({
  src: "./fonts/BlackOpsOne-Subset.woff2",
  variable: "--font-wordmark",
  weight: "400",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
