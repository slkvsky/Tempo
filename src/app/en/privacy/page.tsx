import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy, legalUi } from "@/content/legal";

const locale = "en" as const;
const doc = privacyPolicy[locale];
const ui = legalUi[locale];

export const metadata: Metadata = {
  title: `${doc.title} — Tempo`,
};

export default function PrivacyPageEn() {
  return <LegalPage doc={doc} backHref="/en/" backLabel={ui.back} updatedLabel={ui.updated} />;
}
