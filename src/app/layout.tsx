import type { Metadata } from "next";
import { fontDisplay, fontText, fontWordmark } from "./fonts";
import { SiteChrome } from "@/components/SiteChrome";
import { Header } from "@/components/Header";
import { siteContent } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempo — персональний планер",
  description:
    "Tempo — персональний планер для тих, хто хоче встигати більше, не втрачаючи ясності голови.",
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
        <Header content={siteContent.header} />
        {children}
      </body>
    </html>
  );
}
