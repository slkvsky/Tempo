interface OrbitMarkProps {
  className?: string;
}

/** Abstract rhythm/cycle mark — three offset orbit rings, echoes tempo. */
export function OrbitMark({ className }: OrbitMarkProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="24" rx="22" ry="9" stroke="currentColor" strokeWidth="1.1" />
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        stroke="currentColor"
        strokeWidth="1.1"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        stroke="currentColor"
        strokeWidth="1.1"
        transform="rotate(120 24 24)"
      />
    </svg>
  );
}
