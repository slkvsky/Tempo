import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: "./fonts/Unbounded-Variable.woff2",
  variable: "--font-display",
  weight: "200 900",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const fontText = localFont({
  src: "./fonts/Onest-Variable.woff2",
  variable: "--font-text",
  weight: "100 900",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

/** Hero wordmark only — a distressed display face, not part of the general type scale. */
export const fontWordmark = localFont({
  src: "./fonts/BlackOpsOne-Regular.ttf",
  variable: "--font-wordmark",
  weight: "400",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
