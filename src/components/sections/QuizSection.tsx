"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { quizContent, type ModuleId } from "@/content/quiz";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/locale";
import { resolveTariff } from "@/lib/quiz-logic";
import { trackEvent } from "@/lib/analytics";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { useSpinWhenVisible } from "@/lib/hooks/useSpinWhenVisible";
import { scrollToAnchor } from "@/lib/hooks/useLenis";
import { formatPrice } from "@/lib/format-price";
import { duration, stagger, ease } from "@/lib/motion-tokens";
import { fadeRise, popIn, scaleIn, wipeReveal } from "@/components/motion/variants";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { OrbitMark } from "@/components/ui/OrbitMark";
import styles from "./QuizSection.module.css";

interface QuizSectionProps {
  locale: Locale;
}

/*
 * Content is imported here by `locale` rather than received as a prop from
 * the (Server Component) page: `quiz`/`game` contain template functions
 * (e.g. `progressLabel`, `releaseLine`), and functions can't cross the RSC
 * server->client prop boundary — Next throws at build time if they try.
 */

const STORAGE_KEY = "tempo-quiz-state";
const AUTO_ADVANCE_MS = 420;
const TOTAL_STEPS = 4;

/** Springs have no CSS twin, so — like `popIn`'s own inline spring — this
 * stays local instead of living in `motion-tokens.ts`. */
const SELECT_SPRING = { type: "spring", stiffness: 380, damping: 34 } as const;

/**
 * Directional slide with a touch of depth: forward steps enter from the
 * right with a slight rotateY recede, back navigation reverses it. Keyed
 * `hidden`/`visible`/`exit` (Motion's standard names, not custom ones) so
 * every child inside a step can carry the shared `fadeRise`/`popIn`/
 * `scaleIn`/`wipeReveal` variants via ordinary Motion variant propagation —
 * no new exports needed in `variants.ts`.
 */
const stepVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
    rotateY: direction > 0 ? -9 : 9,
    scale: 0.97,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: duration.base,
      ease: ease.out,
      staggerChildren: stagger.loose,
      delayChildren: 0.06,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -32 : 32,
    rotateY: direction > 0 ? 7 : -7,
    scale: 0.98,
    transition: { duration: duration.fast, ease: ease.in },
  }),
};

const chipStagger: Variants = {
  visible: { transition: { staggerChildren: stagger.tight } },
};

interface StoredState {
  completed: boolean;
  modules: ModuleId[];
  timeOptionId: string | null;
  experienceOptionId: string | null;
  styleId: string | null;
  gameBundleChecked: boolean;
}

function readStoredState(): StoredState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredState;
  } catch {
    return null;
  }
}

function writeStoredState(state: StoredState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage unavailable (private mode, quota) — quiz still works, just won't persist
  }
}

/**
 * "Збери свій Tempo" — a single configurator section standing in for what
 * used to be separate tests, placed above the pricing grid rather than
 * replacing it. Four questions, each its own screen (mobile-first, no
 * scrolling within a step), building toward a tariff recommendation. State
 * persists to localStorage so a returning visitor sees their result
 * immediately instead of retaking the quiz.
 *
 * Presentation is a "technical blueprint plate" — sharp corners, a
 * graph-paper grid, a perimeter progress stroke, and a live animated
 * `OrbitMark` core whose three rings lock in one at a time as questions get
 * answered. Deliberately NOT Game/Pricing's chamfered/spinning-border HUD
 * skin: reusing that exact trio a third time is what made this section read
 * as a copy of the Game block instead of its own thing.
 */
export function QuizSection({ locale }: QuizSectionProps) {
  const quiz = quizContent[locale];
  const pricing = siteContent[locale].pricing;
  const game = siteContent[locale].game;
  const reduceMotion = useSafeReducedMotion();
  /*
   * One IntersectionObserver instead of three: the heading/sub used to have
   * their own separate Motion `whileInView` triggers, and the plate's sweep
   * had its own via `useSpinWhenVisible` — three observers firing (and
   * causing their own React re-renders) within the same scroll frame right
   * as the section entered view. `viewRef` sits on `.container` (so it
   * covers the heading/sub too, not just the plate) and now drives all of
   * it: the heading/sub reveal, the sweep's on-screen gating, and (via
   * `hasEnteredView` below) the Core's one-time draw-in.
   */
  const { ref: viewRef, isVisible: sectionInView } = useSpinWhenVisible<HTMLDivElement>();
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [step, setStep] = useState(0); // 0 = intro, 1-4 = questions, 5 = result
  const [direction, setDirection] = useState(1);
  const [modules, setModules] = useState<Set<ModuleId>>(new Set());
  const [timeOptionId, setTimeOptionId] = useState<string | null>(null);
  const [experienceOptionId, setExperienceOptionId] = useState<string | null>(null);
  const [styleId, setStyleId] = useState<string | null>(null);
  const [gameBundleChecked, setGameBundleChecked] = useState(false);
  const hasRestoredRef = useRef(false);

  // Once the section has been seen, keep the heading/Core's reveal settled
  // — don't re-hide them if the section scrolls back out of view.
  useEffect(() => {
    if (sectionInView) setHasEnteredView(true);
  }, [sectionInView]);

  // Gates the step-4 style-card tilt: Motion's `whileHover` binds
  // pointerenter/leave, and on touch a tap fires pointerenter without a
  // matching leave, leaving the card stuck mid-tilt.
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (hasRestoredRef.current) return;
    hasRestoredRef.current = true;
    const stored = readStoredState();
    if (stored?.completed) {
      setModules(new Set(stored.modules));
      setTimeOptionId(stored.timeOptionId);
      setExperienceOptionId(stored.experienceOptionId);
      setStyleId(stored.styleId);
      setGameBundleChecked(stored.gameBundleChecked);
      setStep(5);
    }
  }, []);

  const wantsGame =
    quiz.step2.options.find((o) => o.id === timeOptionId)?.wantsGame ?? false;
  const churner =
    quiz.step3.options.find((o) => o.id === experienceOptionId)?.churner ?? false;
  const tariff = resolveTariff(modules);
  const selectedStyle = quiz.step4.styles.find((s) => s.id === styleId);

  // OrbitMark has exactly 3 rings for 4 questions: rings lock after
  // questions 1-3, and the 4th (style) question is what the completion
  // glow/pop on the result screen celebrates instead.
  const lockedRings = Math.min(Math.max(step - 1, 0), 3);
  const railTransition = reduceMotion
    ? { duration: 0 }
    : { duration: duration.slow, ease: ease.out };

  const toggleModule = (id: ModuleId) => {
    setModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const goToStep = (n: number) => {
    setDirection(n >= step ? 1 : -1);
    setStep(n);
    if (n >= 1 && n <= TOTAL_STEPS) trackEvent("quiz_step", { step: n });
  };

  const handleStart = () => {
    trackEvent("quiz_start");
    goToStep(1);
  };

  const handleTimeSelect = (id: string) => {
    setTimeOptionId(id);
    window.setTimeout(() => goToStep(3), AUTO_ADVANCE_MS);
  };

  const handleExperienceSelect = (id: string) => {
    setExperienceOptionId(id);
    window.setTimeout(() => goToStep(4), AUTO_ADVANCE_MS);
  };

  const finishQuiz = () => {
    const resolvedTariff = resolveTariff(modules);
    const resolvedWantsGame =
      quiz.step2.options.find((o) => o.id === timeOptionId)?.wantsGame ?? false;
    setGameBundleChecked(resolvedWantsGame);
    writeStoredState({
      completed: true,
      modules: Array.from(modules),
      timeOptionId,
      experienceOptionId,
      styleId,
      gameBundleChecked: resolvedWantsGame,
    });
    trackEvent("quiz_complete", {
      tariff: resolvedTariff,
      modules: Array.from(modules),
      wantsGame: resolvedWantsGame,
    });
    goToStep(5);
  };

  const handleRestart = () => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    }
    setModules(new Set());
    setTimeOptionId(null);
    setExperienceOptionId(null);
    setStyleId(null);
    setGameBundleChecked(false);
    setStep(0);
  };

  const tier = pricing.tiers.find((t) => t.id === tariff);
  const totalPrice = (tier?.priceNow ?? 0) + (gameBundleChecked ? game.priceNow : 0);

  const selectedModuleLabels = quiz.step1.modules
    .filter((m) => modules.has(m.id))
    .map((m) => m.label);
  const premiumTriggerLabels = quiz.step1.modules
    .filter((m) => modules.has(m.id) && (m.id === "food" || m.id === "projects"))
    .map((m) => m.label);

  const handleCtaClick = () => {
    trackEvent("quiz_cta_click", { tariff });
  };

  return (
    <section
      aria-labelledby="quiz-heading"
      className={styles.section}
      style={{
        paddingBlock: "var(--space-section-lg)",
        paddingInline: "var(--layout-margin)",
      }}
    >
      <span className={styles.sectionBg} aria-hidden="true" />
      <span className={styles.sectionScrim} aria-hidden="true" />

      <div ref={viewRef} className={styles.container}>
        <motion.h2
          id="quiz-heading"
          className={styles.heading}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion || hasEnteredView ? "visible" : "hidden"}
          variants={fadeRise(0)}
        >
          {quiz.h2}
        </motion.h2>
        <motion.p
          className={styles.sub}
          initial={reduceMotion ? "visible" : "hidden"}
          animate={reduceMotion || hasEnteredView ? "visible" : "hidden"}
          variants={fadeRise(0.08)}
        >
          {quiz.sub}
        </motion.p>

        <div className={styles.plate} data-inview={sectionInView}>
          <span className={styles.grid} aria-hidden="true" />
          <span className={styles.ticks} aria-hidden="true" />
          <span
            className={styles.innerFrame}
            data-complete={step >= 5}
            aria-hidden="true"
          />
          <span className={styles.sweep} aria-hidden="true" />
          <div className={styles.rail} aria-hidden="true">
            <motion.span
              className={`${styles.railEdge} ${styles.railTop}`}
              initial={false}
              animate={{ scaleX: step >= 1 ? 1 : 0 }}
              transition={railTransition}
            />
            <motion.span
              className={`${styles.railEdge} ${styles.railRight}`}
              initial={false}
              animate={{ scaleY: step >= 2 ? 1 : 0 }}
              transition={railTransition}
            />
            <motion.span
              className={`${styles.railEdge} ${styles.railBottom}`}
              initial={false}
              animate={{ scaleX: step >= 3 ? 1 : 0 }}
              transition={railTransition}
            />
            <motion.span
              className={`${styles.railEdge} ${styles.railLeft}`}
              initial={false}
              animate={{ scaleY: step >= 4 ? 1 : 0 }}
              transition={railTransition}
            />
          </div>

          {step >= 1 && step <= TOTAL_STEPS && (
            <div className={styles.headerRail}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => goToStep(step === 1 ? 0 : step - 1)}
              >
                {quiz.backCta}
              </button>
              <span
                className={styles.progressLabel}
                role="progressbar"
                aria-valuenow={step}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
              >
                {quiz.progressLabel(step)}
              </span>
            </div>
          )}

          <span
            className={styles.core}
            data-ready={hasEnteredView}
            data-locked={lockedRings}
            data-complete={step >= 5}
          >
            <span className={styles.coreGlow} aria-hidden="true" />
            <OrbitMark className={styles.coreMark} />
          </span>

          <div className={styles.stepViewport}>
            <AnimatePresence mode="wait" custom={direction}>
              {step === 0 && (
                <motion.div
                  key="intro"
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? { opacity: 1, x: 0 } : "visible"}
                  exit={reduceMotion ? undefined : "exit"}
                  className={`${styles.step} ${styles.introStep}`}
                >
                  <p className={styles.introText}>
                    {reduceMotion ? (
                      quiz.introText
                    ) : (
                      <MaskedLines lines={[quiz.introText]} staggerAmount={stagger.base} />
                    )}
                  </p>
                  <motion.button
                    type="button"
                    className={styles.primaryBtn}
                    variants={reduceMotion ? undefined : scaleIn(0)}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    onClick={handleStart}
                  >
                    {quiz.startCta}
                  </motion.button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? { opacity: 1, x: 0 } : "visible"}
                  exit={reduceMotion ? undefined : "exit"}
                  className={styles.step}
                >
                  <h3 className={styles.question}>{quiz.step1.question}</h3>
                  <p className={styles.note}>{quiz.step1.note}</p>
                  <motion.div
                    className={styles.chips}
                    variants={reduceMotion ? undefined : chipStagger}
                  >
                    {quiz.step1.modules.map((mod) => {
                      const selected = modules.has(mod.id);
                      return (
                        <motion.button
                          key={mod.id}
                          type="button"
                          className={styles.chip}
                          data-selected={selected}
                          variants={reduceMotion ? undefined : popIn(0, 0.9)}
                          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                          onClick={() => toggleModule(mod.id)}
                        >
                          <span aria-hidden="true">{mod.emoji}</span>
                          <span>{mod.label}</span>
                          {selected && !reduceMotion && (
                            <motion.span
                              className={styles.chipRipple}
                              aria-hidden="true"
                              initial={{ scale: 0.7, opacity: 0.5 }}
                              animate={{ scale: 1.9, opacity: 0 }}
                              transition={{ duration: duration.base, ease: ease.out }}
                            />
                          )}
                          <AnimatePresence>
                            {selected && (
                              <motion.span
                                className={styles.chipCheck}
                                aria-hidden="true"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={SELECT_SPRING}
                              >
                                ✓
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                  <motion.button
                    type="button"
                    className={styles.primaryBtn}
                    variants={reduceMotion ? undefined : fadeRise(0)}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    onClick={() => goToStep(2)}
                  >
                    {quiz.step1.nextCta}
                  </motion.button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? { opacity: 1, x: 0 } : "visible"}
                  exit={reduceMotion ? undefined : "exit"}
                  className={styles.step}
                >
                  <h3 className={styles.question}>{quiz.step2.question}</h3>
                  <div className={styles.optionList}>
                    {quiz.step2.options.map((option) => {
                      const selected = timeOptionId === option.id;
                      return (
                        <motion.button
                          key={option.id}
                          type="button"
                          className={styles.optionBtn}
                          data-selected={selected}
                          variants={reduceMotion ? undefined : fadeRise(0)}
                          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                          onClick={() => handleTimeSelect(option.id)}
                        >
                          {selected && (
                            <motion.span
                              layoutId="quiz-select-time"
                              className={styles.optionHighlight}
                              transition={reduceMotion ? { duration: 0 } : SELECT_SPRING}
                            />
                          )}
                          <span>{option.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? { opacity: 1, x: 0 } : "visible"}
                  exit={reduceMotion ? undefined : "exit"}
                  className={styles.step}
                >
                  <h3 className={styles.question}>{quiz.step3.question}</h3>
                  <div className={styles.optionList}>
                    {quiz.step3.options.map((option) => {
                      const selected = experienceOptionId === option.id;
                      return (
                        <motion.button
                          key={option.id}
                          type="button"
                          className={styles.optionBtn}
                          data-selected={selected}
                          variants={reduceMotion ? undefined : fadeRise(0)}
                          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                          onClick={() => handleExperienceSelect(option.id)}
                        >
                          {selected && (
                            <motion.span
                              layoutId="quiz-select-experience"
                              className={styles.optionHighlight}
                              transition={reduceMotion ? { duration: 0 } : SELECT_SPRING}
                            />
                          )}
                          <span>{option.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? { opacity: 1, x: 0 } : "visible"}
                  exit={reduceMotion ? undefined : "exit"}
                  className={styles.step}
                >
                  <h3 className={styles.question}>{quiz.step4.question}</h3>
                  <div className={styles.styleGrid}>
                    {quiz.step4.styles.map((style) => {
                      const selected = styleId === style.id;
                      return (
                        <motion.button
                          key={style.id}
                          type="button"
                          className={styles.stylePreview}
                          data-selected={selected}
                          variants={reduceMotion ? undefined : fadeRise(0)}
                          whileHover={
                            canHover && !reduceMotion
                              ? { y: -6, rotateX: 7, rotateY: -7, scale: 1.02 }
                              : undefined
                          }
                          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                          transition={SELECT_SPRING}
                          onClick={() => setStyleId(style.id)}
                        >
                          {selected && (
                            <motion.span
                              layoutId="quiz-select-style"
                              className={styles.styleRing}
                              aria-hidden="true"
                              transition={reduceMotion ? { duration: 0 } : SELECT_SPRING}
                            />
                          )}
                          <span
                            className={styles.styleSwatch}
                            style={{ background: style.bg }}
                            aria-hidden="true"
                          >
                            <span
                              className={styles.styleSwatchAccent}
                              style={{ background: style.accent }}
                            />
                          </span>
                          <span className={styles.styleName}>{style.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                  <motion.button
                    type="button"
                    className={styles.primaryBtn}
                    variants={reduceMotion ? undefined : fadeRise(0)}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    disabled={!styleId}
                    onClick={finishQuiz}
                  >
                    {quiz.step4.nextCta}
                  </motion.button>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="result"
                  custom={direction}
                  variants={reduceMotion ? undefined : stepVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? { opacity: 1, x: 0 } : "visible"}
                  exit={reduceMotion ? undefined : "exit"}
                  className={styles.step}
                >
                  <h3 className={styles.resultTitle}>
                    {reduceMotion ? (
                      quiz.result.title
                    ) : (
                      <MaskedLines lines={[quiz.result.title]} />
                    )}
                  </h3>

                  <div className={styles.configLabelWrap}>
                    <motion.p
                      className={styles.configLabel}
                      variants={reduceMotion ? undefined : wipeReveal(0.1)}
                    >
                      {quiz.result.configLabel(
                        selectedModuleLabels.length > 0
                          ? selectedModuleLabels.join(", ")
                          : "—",
                        selectedStyle?.name ?? "—",
                      )}
                    </motion.p>
                  </div>

                  <motion.p
                    className={styles.recommendation}
                    variants={reduceMotion ? undefined : fadeRise(0)}
                  >
                    {tariff === "start" && quiz.result.recommendation.start}
                    {tariff === "system" &&
                      quiz.result.recommendation.system(
                        selectedModuleLabels.join(", "),
                      )}
                    {tariff === "premium" &&
                      quiz.result.recommendation.premium(
                        premiumTriggerLabels.join(" і "),
                      )}
                  </motion.p>

                  {churner && (
                    <motion.p
                      className={styles.extraLine}
                      variants={reduceMotion ? undefined : fadeRise(0)}
                    >
                      {quiz.result.churnerLine}
                    </motion.p>
                  )}

                  {wantsGame && (
                    <motion.div
                      className={styles.gameBundle}
                      variants={reduceMotion ? undefined : fadeRise(0)}
                    >
                      <p className={styles.extraLine}>{quiz.result.wantsGameLine}</p>
                      <label className={styles.checkboxRow}>
                        <input
                          type="checkbox"
                          checked={gameBundleChecked}
                          onChange={(event) => setGameBundleChecked(event.target.checked)}
                        />
                        {quiz.result.wantsGameCheckboxLabel}
                      </label>
                    </motion.div>
                  )}

                  <motion.a
                    href="#"
                    className={styles.primaryBtn}
                    variants={reduceMotion ? undefined : scaleIn(0)}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    onClick={handleCtaClick}
                  >
                    {quiz.result.ctaPrimary(
                      quiz.result.tariffLabel[tariff],
                      formatPrice(totalPrice, locale),
                    )}
                  </motion.a>

                  <motion.button
                    type="button"
                    className={styles.secondaryBtn}
                    variants={reduceMotion ? undefined : fadeRise(0)}
                    onClick={() => scrollToAnchor("#pricing-heading")}
                  >
                    {quiz.result.ctaSecondary}
                  </motion.button>

                  <motion.button
                    type="button"
                    className={styles.restartBtn}
                    variants={reduceMotion ? undefined : fadeRise(0)}
                    onClick={handleRestart}
                  >
                    {quiz.result.restartCta}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
