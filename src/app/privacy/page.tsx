import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy, legalUi } from "@/content/legal";

const locale = "uk" as const;
const doc = privacyPolicy[locale];
const ui = legalUi[locale];

export const metadata: Metadata = {
  title: `${doc.title} — Tempo`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      doc={doc}
      backHref="/"
      backLabel={ui.back}
      updatedLabel={ui.updated}
      permalinkLabel={ui.permalink}
    />
  );
}
