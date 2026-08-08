import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@/content/legal";
import styles from "./LegalPage.module.css";

interface LegalPageProps {
  doc: LegalDoc;
  backHref: string;
  backLabel: string;
  updatedLabel: string;
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className={styles.paragraph}>{block.text}</p>;
    case "list":
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "note":
      return <p className={styles.note}>{block.text}</p>;
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
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
            {section.blocks.map((block, index) => (
              <LegalBlockView key={index} block={block} />
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
