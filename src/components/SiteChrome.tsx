"use client";

import { useLenis } from "@/lib/hooks/useLenis";
import { CustomCursor } from "@/components/ui/CustomCursor";

/** Client-only page chrome: inertial scroll + the custom cursor companion. */
export function SiteChrome() {
  useLenis();
  return <CustomCursor />;
}
