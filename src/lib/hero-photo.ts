/**
 * The one photo used by both heroes and the footer.
 *
 * Served as a plain `srcset` rather than `next/image` because the project is a
 * static export with `images.unoptimized`, under which `next/image` renders a
 * bare `<img>` with no srcset at all — every device was downloading *and
 * decoding* the full 2560×1440 frame (~14.7 MB of bitmap in memory). The 1280
 * variant cuts that to ~3.7 MB on phones, which matters far more than the file
 * size here.
 */
export const HERO_PHOTO = {
  src: "/hero-2560.webp",
  srcSet: "/hero-1280.webp 1280w, /hero-2560.webp 2560w",
  sizes: "100vw",
  width: 2560,
  height: 1440,
} as const;
