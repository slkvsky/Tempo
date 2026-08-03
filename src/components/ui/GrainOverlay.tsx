interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

/**
 * Film-grain texture: a 128×128 tiled noise bitmap blended over the layer
 * beneath it.
 *
 * This was previously an SVG `feTurbulence` filter. WebKit rasterizes
 * turbulence on the CPU and re-evaluates it whenever the filtered region's
 * transform changes — and two of the three instances live inside the hero's
 * scroll-driven `transform`, so it was regenerating full-viewport procedural
 * noise on every scroll frame. A pre-baked tile is a cached bitmap the
 * compositor can simply repeat, at ~8 KB and visually the same.
 */
export function GrainOverlay({ className, opacity = 0.18 }: GrainOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        backgroundImage: "url(/noise.png)",
        backgroundRepeat: "repeat",
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }}
    />
  );
}
