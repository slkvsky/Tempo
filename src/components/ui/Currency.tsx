interface CurrencyProps {
  children: string;
}

/**
 * The display font's subset doesn't include a ₴ glyph (see the note in
 * `app/fonts.ts`), so it silently falls back to Arial for that one
 * character. At the large price sizes, Arial's glyph collides with the
 * negative `--tracking-snug` letter-spacing tuned for Oswald's shapes —
 * this resets tracking to normal and gives it a little breathing room so
 * it stops visually overlapping the preceding digit.
 */
export function Currency({ children }: CurrencyProps) {
  return (
    <span style={{ letterSpacing: "normal", marginLeft: "0.15em" }}>{children}</span>
  );
}
