import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { oferta, legalUi } from "@/content/legal";

const locale = "uk" as const;
const doc = oferta[locale];
const ui = legalUi[locale];

export const metadata: Metadata = {
  title: `${doc.title} — Tempo`,
};

export default function OfertaPage() {
  return <LegalPage doc={doc} backHref="/" backLabel={ui.back} updatedLabel={ui.updated} />;
}
