import { useId } from "react";

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

/**
 * Film-grain texture built from an SVG feTurbulence filter blended over the
 * layer beneath it — zero network bytes, no raster image.
 */
export function GrainOverlay({ className, opacity = 0.18 }: GrainOverlayProps) {
  const filterId = `grain-filter-${useId()}`;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }}
    >
      <svg width="0" height="0">
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={3}
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: "-2px",
          filter: `url(#${filterId})`,
        }}
      />
    </div>
  );
}
