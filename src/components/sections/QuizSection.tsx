"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { quizContent, type ModuleId } from "@/content/quiz";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/locale";
import { resolveTariff } from "@/lib/quiz-logic";
import { trackEvent } from "@/lib/analytics";
import { useSafeReducedMotion } from "@/lib/hooks/useSafeReducedMotion";
import { scrollToAnchor } from "@/lib/hooks/useLenis";
import { formatPrice } from "@/lib/format-price";
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
const AUTO_ADVANCE_MS = 250;
const TOTAL_STEPS = 4;

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
 */
export function QuizSection({ locale }: QuizSectionProps) {
  const quiz = quizContent[locale];
  const pricing = siteContent[locale].pricing;
  const game = siteContent[locale].game;
  const reduceMotion = useSafeReducedMotion();
  const [step, setStep] = useState(0); // 0 = intro, 1-4 = questions, 5 = result
  const [modules, setModules] = useState<Set<ModuleId>>(new Set());
  const [timeOptionId, setTimeOptionId] = useState<string | null>(null);
  const [experienceOptionId, setExperienceOptionId] = useState<string | null>(null);
  const [styleId, setStyleId] = useState<string | null>(null);
  const [gameBundleChecked, setGameBundleChecked] = useState(false);
  const hasRestoredRef = useRef(false);

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

  const toggleModule = (id: ModuleId) => {
    setModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const goToStep = (n: number) => {
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
      <div className={styles.container}>
        <h2 id="quiz-heading" className={styles.heading}>
          {quiz.h2}
        </h2>
        <p className={styles.sub}>{quiz.sub}</p>

        <div className={styles.card}>
          {step >= 1 && step <= TOTAL_STEPS && (
            <div className={styles.progressRow}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => goToStep(step === 1 ? 0 : step - 1)}
              >
                {quiz.backCta}
              </button>
              <span className={styles.progressLabel}>
                {quiz.progressLabel(step)}
              </span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="intro"
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={styles.step}
              >
                <p className={styles.introText}>{quiz.introText}</p>
                <button type="button" className={styles.primaryBtn} onClick={handleStart}>
                  {quiz.startCta}
                </button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={styles.step}
              >
                <h3 className={styles.question}>{quiz.step1.question}</h3>
                <p className={styles.note}>{quiz.step1.note}</p>
                <div className={styles.chips}>
                  {quiz.step1.modules.map((mod) => (
                    <button
                      key={mod.id}
                      type="button"
                      className={styles.chip}
                      data-selected={modules.has(mod.id)}
                      onClick={() => toggleModule(mod.id)}
                    >
                      <span aria-hidden="true">{mod.emoji}</span> {mod.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className={styles.primaryBtn}
                  onClick={() => goToStep(2)}
                >
                  {quiz.step1.nextCta}
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={styles.step}
              >
                <h3 className={styles.question}>{quiz.step2.question}</h3>
                <div className={styles.optionList}>
                  {quiz.step2.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={styles.optionBtn}
                      data-selected={timeOptionId === option.id}
                      onClick={() => handleTimeSelect(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={styles.step}
              >
                <h3 className={styles.question}>{quiz.step3.question}</h3>
                <div className={styles.optionList}>
                  {quiz.step3.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={styles.optionBtn}
                      data-selected={experienceOptionId === option.id}
                      onClick={() => handleExperienceSelect(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={styles.step}
              >
                <h3 className={styles.question}>{quiz.step4.question}</h3>
                <div className={styles.styleGrid}>
                  {quiz.step4.styles.map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      className={styles.stylePreview}
                      data-selected={styleId === style.id}
                      onClick={() => setStyleId(style.id)}
                    >
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
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className={styles.primaryBtn}
                  disabled={!styleId}
                  onClick={finishQuiz}
                >
                  {quiz.step4.nextCta}
                </button>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="result"
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={styles.step}
              >
                <h3 className={styles.resultTitle}>{quiz.result.title}</h3>
                <p className={styles.configLabel}>
                  {quiz.result.configLabel(
                    selectedModuleLabels.length > 0
                      ? selectedModuleLabels.join(", ")
                      : "—",
                    selectedStyle?.name ?? "—",
                  )}
                </p>

                <p className={styles.recommendation}>
                  {tariff === "start" && quiz.result.recommendation.start}
                  {tariff === "system" &&
                    quiz.result.recommendation.system(
                      selectedModuleLabels.join(", "),
                    )}
                  {tariff === "premium" &&
                    quiz.result.recommendation.premium(
                      premiumTriggerLabels.join(" і "),
                    )}
                </p>

                {churner && (
                  <p className={styles.extraLine}>{quiz.result.churnerLine}</p>
                )}

                {wantsGame && (
                  <div className={styles.gameBundle}>
                    <p className={styles.extraLine}>{quiz.result.wantsGameLine}</p>
                    <label className={styles.checkboxRow}>
                      <input
                        type="checkbox"
                        checked={gameBundleChecked}
                        onChange={(event) => setGameBundleChecked(event.target.checked)}
                      />
                      {quiz.result.wantsGameCheckboxLabel}
                    </label>
                  </div>
                )}

                <a href="#" className={styles.primaryBtn} onClick={handleCtaClick}>
                  {quiz.result.ctaPrimary(
                    quiz.result.tariffLabel[tariff],
                    formatPrice(totalPrice, locale),
                  )}
                </a>

                <button
                  type="button"
                  className={styles.secondaryBtn}
                  onClick={() => scrollToAnchor("#pricing-heading")}
                >
                  {quiz.result.ctaSecondary}
                </button>

                <button
                  type="button"
                  className={styles.restartBtn}
                  onClick={handleRestart}
                >
                  {quiz.result.restartCta}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
