import type { Locale } from "@/lib/locale";

export type ModuleId = "money" | "habits" | "goals" | "health" | "food" | "projects";
export type TariffId = "start" | "system" | "premium";

export interface ModuleOption {
  id: ModuleId;
  emoji: string;
  label: string;
}

export interface TimeOption {
  id: string;
  label: string;
  wantsGame: boolean;
}

export interface ExperienceOption {
  id: string;
  label: string;
  churner: boolean;
}

export interface StyleOption {
  id: string;
  name: string;
  bg: string;
  accent: string;
}

export interface QuizContent {
  h2: string;
  sub: string;
  introText: string;
  startCta: string;
  progressLabel: (step: number) => string;
  backCta: string;
  step1: {
    question: string;
    note: string;
    nextCta: string;
    modules: readonly ModuleOption[];
  };
  step2: {
    question: string;
    options: readonly TimeOption[];
  };
  step3: {
    question: string;
    options: readonly ExperienceOption[];
  };
  step4: {
    question: string;
    nextCta: string;
    styles: readonly StyleOption[];
  };
  result: {
    title: string;
    configLabel: (modules: string, style: string) => string;
    recommendation: {
      start: string;
      system: (modules: string) => string;
      premium: (modules: string) => string;
    };
    churnerLine: string;
    wantsGameLine: string;
    wantsGameCheckboxLabel: string;
    tariffLabel: Record<TariffId, string>;
    ctaPrimary: (tariff: string, price: string) => string;
    ctaSecondary: string;
    restartCta: string;
  };
}

export const quizContent: Record<Locale, QuizContent> = {
  uk: {
    h2: "Збери свій Tempo за 30 секунд",
    sub: "Чотири питання — і ми покажемо конфігурацію та тариф, які підходять саме тобі.",
    introText: "Дізнайся, яка конфігурація Tempo — твоя.",
    startCta: "Почати →",
    progressLabel: (step) => `Питання ${step} з 4`,
    backCta: "← Назад",
    step1: {
      question: "Що хочеш навести до ладу в першу чергу?",
      note: "Календар і справи вже включені в будь-який тариф",
      nextCta: "Далі",
      modules: [
        { id: "money", emoji: "💰", label: "Гроші" },
        { id: "habits", emoji: "🔁", label: "Звички" },
        { id: "goals", emoji: "🎯", label: "Цілі" },
        { id: "health", emoji: "💪", label: "Здоровʼя" },
        { id: "food", emoji: "🍽", label: "Харчування" },
        { id: "projects", emoji: "📋", label: "Проекти" },
      ],
    },
    step2: {
      question: "Скільки часу готов(а) приділяти на день?",
      options: [
        { id: "minimal", label: "5 хвилин — мінімум і по суті", wantsGame: false },
        {
          id: "detailed",
          label: "10–15 хвилин — люблю розписувати детально",
          wantsGame: false,
        },
        { id: "game", label: "Хочу, щоб мотивація була як у грі 🎮", wantsGame: true },
      ],
    },
    step3: {
      question: "Ти вже вів(вела) планери?",
      options: [
        { id: "churner", label: "Так, але кидаю", churner: true },
        { id: "chaotic", label: "Веду, але хаотично", churner: false },
        { id: "first", label: "Це мій перший", churner: false },
      ],
    },
    step4: {
      question: "Обери стиль",
      nextCta: "Показати результат →",
      styles: [
        { id: "minimal", name: "Мінімалізм", bg: "#f3f0e7", accent: "#877962" },
        { id: "cozy", name: "Затишний", bg: "#e8dcc8", accent: "#a8623a" },
        { id: "classic", name: "Класичний", bg: "#d8d2c2", accent: "#2a2a2a" },
        { id: "bright", name: "Яскравий", bg: "#1a1a1a", accent: "#ff5a36" },
      ],
    },
    result: {
      title: "Твій Tempo зібрано",
      configLabel: (modules, style) => `Твої модулі: ${modules} · Стиль: ${style}`,
      recommendation: {
        start:
          "Тобі вистачить «Старту»: планер і звички без зайвого. Розширити модулі можна будь-коли — апгрейд доступний завжди.",
        system: (modules) =>
          `Ти обрав(ла) ${modules} — це рівно те, що входить у «Систему». Найпопулярніша конфігурація Tempo.`,
        premium: (modules) =>
          `З модулем «${modules}» тобі потрібен Premium — у ньому відкрито все, включно з майбутніми оновленнями.`,
      },
      churnerLine:
        "Tempo прощає пропуски: трекер не «рветься» через один день, а гарантія 14 днів прикриває, якщо не приживеться.",
      wantsGameLine:
        "Режим гри — це Tempo Game: XP за звички, рівні та серії днів. Зараз у беті — 490 ₴ замість 1 300 ₴ після релізу.",
      wantsGameCheckboxLabel: "Додати Tempo Game (бета) — 490 ₴",
      tariffLabel: { start: "Старт", system: "Систему", premium: "Premium" },
      ctaPrimary: (tariff, price) => `Забрати ${tariff} — ${price} ₴`,
      ctaSecondary: "Подивитись усі тарифи ↓",
      restartCta: "Пройти заново",
    },
  },
  en: {
    h2: "Build your Tempo in 30 seconds",
    sub: "Four questions — and we'll show you the exact setup and plan for you.",
    introText: "Find out which Tempo configuration is yours.",
    startCta: "Start →",
    progressLabel: (step) => `Question ${step} of 4`,
    backCta: "← Back",
    step1: {
      question: "What do you want to get in order first?",
      note: "Calendar and to-dos are included in every plan",
      nextCta: "Next",
      modules: [
        { id: "money", emoji: "💰", label: "Money" },
        { id: "habits", emoji: "🔁", label: "Habits" },
        { id: "goals", emoji: "🎯", label: "Goals" },
        { id: "health", emoji: "💪", label: "Health" },
        { id: "food", emoji: "🍽", label: "Food" },
        { id: "projects", emoji: "📋", label: "Projects" },
      ],
    },
    step2: {
      question: "How much time can you give it per day?",
      options: [
        { id: "minimal", label: "5 minutes — minimal and to the point", wantsGame: false },
        {
          id: "detailed",
          label: "10–15 minutes — I like to plan in detail",
          wantsGame: false,
        },
        { id: "game", label: "I want motivation to feel like a game 🎮", wantsGame: true },
      ],
    },
    step3: {
      question: "Have you kept a planner before?",
      options: [
        { id: "churner", label: "Yes, but I always quit", churner: true },
        { id: "chaotic", label: "I do, but chaotically", churner: false },
        { id: "first", label: "This is my first", churner: false },
      ],
    },
    step4: {
      question: "Pick a style",
      nextCta: "Show my result →",
      styles: [
        { id: "minimal", name: "Minimalist", bg: "#f3f0e7", accent: "#877962" },
        { id: "cozy", name: "Cozy", bg: "#e8dcc8", accent: "#a8623a" },
        { id: "classic", name: "Classic", bg: "#d8d2c2", accent: "#2a2a2a" },
        { id: "bright", name: "Bold", bg: "#1a1a1a", accent: "#ff5a36" },
      ],
    },
    result: {
      title: "Your Tempo is ready",
      configLabel: (modules, style) => `Your modules: ${modules} · Style: ${style}`,
      recommendation: {
        start:
          "Start has you covered: a planner and habits, nothing extra. You can add modules anytime — upgrading is always available.",
        system: (modules) =>
          `You picked ${modules} — that's exactly what's included in System. Tempo's most popular setup.`,
        premium: (modules) =>
          `With the ${modules} module, you need Premium — it unlocks everything, including future updates.`,
      },
      churnerLine:
        "Tempo forgives skipped days: the tracker doesn't 'break' over one missed day, and a 14-day guarantee has you covered if it doesn't stick.",
      wantsGameLine:
        "Game mode is Tempo Game: XP for habits, levels, and day streaks. In beta now — 490 ₴ instead of 1 300 ₴ after launch.",
      wantsGameCheckboxLabel: "Add Tempo Game (beta) — 490 ₴",
      tariffLabel: { start: "Start", system: "System", premium: "Premium" },
      ctaPrimary: (tariff, price) => `Get ${tariff} — ${price} ₴`,
      ctaSecondary: "See all plans ↓",
      restartCta: "Start over",
    },
  },
  es: {
    h2: "Arma tu Tempo en 30 segundos",
    sub: "Cuatro preguntas — y te mostramos la configuración y el plan que más te convienen.",
    introText: "Descubre cuál es tu configuración de Tempo.",
    startCta: "Empezar →",
    progressLabel: (step) => `Pregunta ${step} de 4`,
    backCta: "← Atrás",
    step1: {
      question: "¿Qué quieres poner en orden primero?",
      note: "El calendario y las tareas ya están incluidos en cualquier plan",
      nextCta: "Siguiente",
      modules: [
        { id: "money", emoji: "💰", label: "Dinero" },
        { id: "habits", emoji: "🔁", label: "Hábitos" },
        { id: "goals", emoji: "🎯", label: "Metas" },
        { id: "health", emoji: "💪", label: "Salud" },
        { id: "food", emoji: "🍽", label: "Comida" },
        { id: "projects", emoji: "📋", label: "Proyectos" },
      ],
    },
    step2: {
      question: "¿Cuánto tiempo estás dispuesto(a) a dedicarle al día?",
      options: [
        { id: "minimal", label: "5 minutos — lo mínimo y al grano", wantsGame: false },
        {
          id: "detailed",
          label: "10–15 minutos — me gusta detallar todo",
          wantsGame: false,
        },
        {
          id: "game",
          label: "Quiero que la motivación se sienta como en un juego 🎮",
          wantsGame: true,
        },
      ],
    },
    step3: {
      question: "¿Ya has llevado agendas antes?",
      options: [
        { id: "churner", label: "Sí, pero las abandono", churner: true },
        { id: "chaotic", label: "Llevo una, pero de forma caótica", churner: false },
        { id: "first", label: "Esta es mi primera", churner: false },
      ],
    },
    step4: {
      question: "Elige un estilo",
      nextCta: "Mostrar resultado →",
      styles: [
        { id: "minimal", name: "Minimalista", bg: "#f3f0e7", accent: "#877962" },
        { id: "cozy", name: "Acogedor", bg: "#e8dcc8", accent: "#a8623a" },
        { id: "classic", name: "Clásico", bg: "#d8d2c2", accent: "#2a2a2a" },
        { id: "bright", name: "Llamativo", bg: "#1a1a1a", accent: "#ff5a36" },
      ],
    },
    result: {
      title: "Tu Tempo está listo",
      configLabel: (modules, style) => `Tus módulos: ${modules} · Estilo: ${style}`,
      recommendation: {
        start:
          "Con Start te alcanza: agenda y hábitos sin nada de más. Puedes ampliar los módulos cuando quieras — el upgrade siempre está disponible.",
        system: (modules) =>
          `Elegiste ${modules} — eso es justo lo que incluye System. La configuración más popular de Tempo.`,
        premium: (modules) =>
          `Con el módulo de ${modules} necesitas Premium — ahí se desbloquea todo, incluidas las futuras actualizaciones.`,
      },
      churnerLine:
        "Tempo perdona los días saltados: el tracker no se 'rompe' por un día perdido, y una garantía de 14 días te cubre si no te termina de convencer.",
      wantsGameLine:
        "El modo juego es Tempo Game: XP por hábitos, niveles y rachas de días. Ahora en beta — 490 ₴ en vez de 1 300 ₴ tras el lanzamiento.",
      wantsGameCheckboxLabel: "Añadir Tempo Game (beta) — 490 ₴",
      tariffLabel: { start: "Start", system: "System", premium: "Premium" },
      ctaPrimary: (tariff, price) => `Consigue ${tariff} — ${price} ₴`,
      ctaSecondary: "Ver todos los planes ↓",
      restartCta: "Empezar de nuevo",
    },
  },
};
