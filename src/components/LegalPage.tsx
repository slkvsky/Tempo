import Link from "next/link";
import type { LegalDoc } from "@/content/legal";
import styles from "./LegalPage.module.css";

interface LegalPageProps {
  doc: LegalDoc;
  backHref: string;
  backLabel: string;
  updatedLabel: string;
}

/** Plain, static rendering for the legal documents — no motion needed here. */
export function LegalPage({ doc, backHref, backLabel, updatedLabel }: LegalPageProps) {
  return (
    <main
      className={styles.main}
      style={{
        paddingBlock: "var(--space-section-md)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <div className={styles.container}>
        <Link href={backHref} className={styles.back}>
          {backLabel}
        </Link>

        <h1 className={styles.title}>{doc.title}</h1>
        <p className={styles.updated}>
          {updatedLabel} {doc.updated}
        </p>
        {doc.intro && <p className={styles.intro}>{doc.intro}</p>}

        {doc.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
