import type { ModuleId, TariffId } from "@/content/quiz";

/**
 * Mutually exclusive, exhaustive — no tie-breaks needed. Premium's
 * food/projects modules take priority over System's money/goals/health,
 * which in turn take priority over Start (habits-only or nothing picked).
 */
export function resolveTariff(modules: ReadonlySet<ModuleId>): TariffId {
  if (modules.has("food") || modules.has("projects")) return "premium";
  if (modules.has("money") || modules.has("goals") || modules.has("health"))
    return "system";
  return "start";
}
