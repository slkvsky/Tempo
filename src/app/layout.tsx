import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { fontDisplay, fontText, fontWordmark } from "./fonts";
import { SiteChrome } from "@/components/SiteChrome";
import { Header } from "@/components/Header";
import { siteContent } from "@/content/site";
import "./globals.css";

/**
 * Fallback metadata for the shared root layout. `/`, `/en/*` and `/es/*` all
 * render under this single layout (the project is a static export, so a
 * true per-locale `<html lang>` would need a `[locale]` root segment with no
 * unprefixed `/` — out of scope here); each locale's page exports its own
 * `metadata` that overrides this, and `Header` corrects `document.lang` on
 * mount once it knows which locale it's rendering.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.tempo.in.ua"),
  title: siteContent.uk.meta.title,
  description: siteContent.uk.meta.description,
  openGraph: {
    title: siteContent.uk.meta.title,
    description: siteContent.uk.meta.description,
    url: "/",
    siteName: "Tempo",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.uk.meta.title,
    description: siteContent.uk.meta.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${fontDisplay.variable} ${fontText.variable} ${fontWordmark.variable} h-full`}
    >
      <body className="min-h-full">
        <SiteChrome />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
