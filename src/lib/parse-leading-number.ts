/**
 * Splits a leading integer (e.g. "249" in "249 ₴ · ціна запуску...") from
 * the rest of a price string, so the number can be animated as a counter
 * while the surrounding copy renders untouched.
 */
export function parseLeadingNumber(text: string): { value: number; rest: string } | null {
  const match = /^\d+(?:[\s ]\d+)*/.exec(text);
  if (!match) return null;

  const value = Number(match[0].replace(/\s/g, ""));
  if (Number.isNaN(value)) return null;

  return { value, rest: text.slice(match[0].length) };
}
