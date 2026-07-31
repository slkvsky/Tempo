export interface HeroContent {
  navBrand: string;
  navCta: string;
  headlineLines: readonly string[];
  subline: string;
  wordmark: string;
}

export interface PainReframe {
  leadStart: string;
  leadHighlight: string;
  leadEnd: string;
  rest: string;
}

export interface PainContent {
  h2: string;
  items: readonly string[];
  reframe: PainReframe;
}

export interface HowStep {
  title: string;
  text: string;
}

export interface HowContent {
  h2: string;
  sub: string;
  steps: readonly HowStep[];
  footer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsContent {
  h2: string;
  items: readonly Testimonial[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: readonly string[];
  cta: string;
  badge?: string;
}

export interface PricingContent {
  h2: string;
  sub: string;
  tiers: readonly PricingTier[];
  bump: string;
  guarantee: string;
  badges: string;
}

export interface GameContent {
  badge: string;
  h2: string;
  hook: string;
  level: number;
  xpPercent: number;
  chips: readonly string[];
  priceNow: string;
  priceLater: string;
  scarcity: string;
  cta: string;
  detailsLabel: string;
  nowHeading: string;
  now: readonly string[];
  betaHeading: string;
  beta: readonly string[];
  statusHeading: string;
  statusOk: string;
  statusWip: string;
  refund: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  h2: string;
  sub: string;
  items: readonly FaqItem[];
}

export interface FinalCtaStat {
  value: number;
  suffix: string;
  label: string;
}

export interface FinalCtaContent {
  h2: string;
  sub: string;
  cta: string;
  ctaHref: string;
  stats: readonly FinalCtaStat[];
  wordmark: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  brand: string;
  navLinks: readonly FooterLink[];
  tagline: string;
  contactLabel: string;
  contactHref: string;
  copyright: string;
}

export interface HeaderContent {
  brand: string;
  navLinks: readonly FooterLink[];
  cta: string;
}

export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  pain: PainContent;
  how: HowContent;
  testimonials: TestimonialsContent;
  pricing: PricingContent;
  game: GameContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
}

export const siteContent: SiteContent = {
  header: {
    brand: "Tempo",
    navLinks: [
      { label: "Як працює", href: "#how-heading" },
      { label: "Тарифи", href: "#pricing-heading" },
      { label: "Tempo Game", href: "#game-heading" },
      { label: "Питання", href: "#faq-heading" },
    ],
    cta: "Почати безкоштовно",
  },
  hero: {
    navBrand: "Tempo",
    navCta: "Почати безкоштовно",
    headlineLines: ["Живи у своєму темпі —", "а не в чужому дедлайні."],
    subline:
      "Планер, який підлаштовується під тебе, а не навпаки. Більше встигаєш, менше хаосу в голові.",
    wordmark: "TEMPO",
  },
  pain: {
    h2: "Скільки разів ти вже починав(ла) «з понеділка»?",
    items: [
      "Купуєш новий красивий планер — і кидаєш через тиждень. Знову.",
      "У голові каша з дедлайнів, «треба не забути» і тихої паніки, що ти вже щось прогавив(ла).",
      "Гроші розчиняються в повітрі, а куди — загадка. До зарплати знову доживаєш на «нулях».",
      "Цвинтар покинутих трекерів і застосунків — і почуття провини, що знову не втримав(ла) слово собі.",
    ],
    reframe: {
      leadStart: "Справа не в ",
      leadHighlight: "силі волі",
      leadEnd: ".",
      rest: "Планер просто був не про тебе. Tempo підлаштовується під твоє життя, а не навпаки — тому до нього хочеться повертатися, а не ховати в шухляду.",
    },
  },
  how: {
    h2: "Конструктор, а не шаблон",
    sub: "Три кроки — і Tempo під твої цілі. Починаєш сьогодні, а не «з понеділка».",
    steps: [
      {
        title: "Обери дизайн",
        text: "Кілька стилів на вибір смаку — від мінімалізму до максимального затишку.",
      },
      {
        title: "Увімкни модулі",
        text: "Гроші, звички, цілі, здоровʼя — вмикаєш лише те, чим реально користуватимешся.",
      },
      {
        title: "Впиши свої справи",
        text: "Прогрес, відсотки, графіки — рахуються самі, поки ти просто живеш.",
      },
    ],
    footer: "5 хвилин на день — і спокій у голові на місяць вперед.",
  },
  testimonials: {
    h2: "Це кажемо не тільки ми",
    items: [
      {
        quote:
          "Дівчата, я просто в захваті від цього планера, вау. Юзаю вже місяць і нарешті перестала забувати все на світі. Раніше жила в хаосі, а тепер прям відчуваю себе людиною, яка все контролює. Однозначно беріть.",
        name: "Карина",
        role: "23 роки",
      },
      {
        quote:
          "Чесно, не вірила, що якийсь планер змінить моє життя, але ось я тут і пишу відгук, бо реально вразило. Всі задачі в одному місці, нічого не губиться. Подружкам вже порадила.",
        name: "Sashulec4",
        role: "19 років",
      },
      {
        quote:
          "Коротше кажучи, взяла планер і жодного разу не пошкодувала. Раніше постійно все забувала і жила в шаленому стресі, а тепер усе спокійно розкладено по поличках. Мій мозок нарешті зітхнув з полегшенням.",
        name: "Nastya K.",
        role: "27 років",
      },
      {
        quote:
          "Купив для дружини, але чесно — сам теж зацікавився. Це справді зручна річ: усе розписано по днях і тижнях, нічого не губиться. Думав, що це все для дівчат, але ні, це стереотипи.",
        name: "Дмитрий",
        role: "34 роки",
      },
    ],
  },
  pricing: {
    h2: "Обери свій Tempo",
    sub: "Платиш один раз. Жодних підписок. Гарантія 14 днів на будь-який тариф.",
    tiers: [
      {
        name: "Старт",
        price: "249 ₴ · ціна запуску (далі — 690 ₴)",
        features: [
          "Планер: календар місяця, фокус, пріоритети тижня",
          "Звички: трекер-хітмап на місяць, % та графік",
          "Підтримка та допомога з налаштуванням у Telegram",
          "Модулі «Фінанси», «Цілі», «Здоровʼя» відкриваються в «Системі»",
        ],
        cta: "Забрати Старт",
      },
      {
        name: "Система",
        price: "550 ₴ · ціна запуску (далі — 1 490 ₴)",
        badge: "Найпопулярніший",
        features: [
          "Все зі «Старту»",
          "Фінанси: доходи, витрати, баланс та діаграма",
          "Цілі з автоматичним прогрес-баром",
          "Здоровʼя: вода, сон, кроки, спорт + графік",
          "Модулі «Харчування» і «Проекти» відкриваються в Premium",
        ],
        cta: "Забрати Систему",
      },
      {
        name: "Premium",
        price: "790 ₴ · ціна запуску (далі — 2 900 ₴)",
        features: [
          "Все із «Системи»",
          "Харчування: меню на тиждень і список покупок",
          "Проекти: завдання зі статусами та % готовності",
          "Усі майбутні оновлення модулів — безкоштовно",
        ],
        cta: "Забрати Premium",
      },
    ],
    bump: "☑ Додати Tempo Game (бета) — веб-застосунок, де звички дають XP. +490 ₴ (замість 1 300 ₴ після релізу)",
    guarantee:
      "14 днів — повернемо гроші без питань. Напиши в Telegram — повернемо, навіть якщо просто передумав(ла).",
    badges:
      "Безпечна оплата через WayForPay · Visa / Mastercard / Apple Pay / Google Pay",
  },
  game: {
    badge: "НОВИНКА · РАННІЙ ДОСТУП",
    h2: "Tempo Game",
    hook: "Твоє життя прокачується як у грі: XP за звички, рівні, досягнення, серії днів.",
    level: 12,
    xpPercent: 68,
    chips: ["XP за звички", "Свої квести", "Серії днів", "Мапа прогресу", "Без підписок"],
    priceNow: "490 ₴",
    priceLater: "1 300 ₴",
    scarcity: "Місць у бета-тесті — 100. Далі ціна зросте.",
    cta: "Стати бета-тестером",
    detailsLabel: "Що всередині?",
    nowHeading: "Що працює вже сьогодні:",
    now: [
      "Ігровий режим: XP за кожну звичку, рівні, досягнення, серії днів",
      "Повний редактор: свої квести, XP та характеристики",
      "Мапа днів і графіки прогресу",
      "Скарбниця: облік доходів і витрат (₴ + $)",
      "4 теми, свій аватар та нікнейм",
      "Без підписок і реєстрацій — дані тільки в тебе",
    ],
    betaHeading: "Що отримуєш як бета-тестер:",
    beta: [
      "Ціну раннього доступу: 490 ₴ — після релізу буде 1 300 ₴",
      "Усі майбутні оновлення — безкоштовно назавжди. Платиш один раз, ціна фіксується",
      "Прямий вплив на продукт: твої ідеї потрапляють у наступні версії",
      "Закритий чат бета-тестерів у Telegram із прямим звʼязком з розробником",
    ],
    statusHeading: "Чесно про статус:",
    statusOk: "Компʼютер і ноутбук — працює повноцінно вже зараз",
    statusWip:
      "Android та iPhone — мобільні версії ще тестуються. Щойно відполіруємо — доступ зʼявиться в тебе автоматично, без доплат",
    refund: "Не зайшло? Протягом 14 днів повернемо гроші без питань.",
  },
  faq: {
    h2: "Питання, які точно виникнуть",
    sub: "А якщо ні — все одно можеш написати нам у Telegram.",
    items: [
      {
        question: "Чим Tempo відрізняється від звичайного планера?",
        answer:
          "Звичайний планер один для всіх — і саме тому ти його кидаєш. Tempo збирається під тебе: обираєш дизайн, вмикаєш тільки ті модулі, якими реально користуватимешся. Немає зайвого — немає причин закинути.",
      },
      {
        question: "Куди йдуть мої дані?",
        answer:
          "Нікуди. Дані зберігаються тільки в тебе — без хмари, без реєстрації, без «безкоштовно, бо ти товар». Це твій планер, а не чиясь аналітика.",
      },
      {
        question: "А якщо не сподобається?",
        answer:
          "14 днів на роздуми. Не зайшло — пишеш нам у Telegram, повертаємо гроші без питань і без форм на 10 сторінок.",
      },
      {
        question: "Tempo Game — це інший застосунок?",
        answer:
          "Це окремий веб-застосунок у ранньому доступі, де твої звички з Tempo прокачуються як персонаж: XP, рівні, квести. Купується окремо або разом з планером — за ціною бета-тесту, якої після релізу вже не буде.",
      },
      {
        question: "На яких пристроях це працює?",
        answer:
          "Комп'ютер і ноутбук — повноцінно вже зараз. Мобільні версії для Android та iPhone ще тестуються — доступ з'явиться автоматично, без доплат, щойно ми їх відполіруємо.",
      },
      {
        question: "Будуть ще платежі потім?",
        answer:
          "Ні. Платиш один раз, ціна фіксується назавжди. Усі майбутні оновлення модулів — безкоштовно. Жодних підписок, які непомітно спишуться через рік.",
      },
    ],
  },
  finalCta: {
    h2: "Почни, поки не настав ще один понеділок.",
    sub: "Один платіж. Планер під тебе. 14 днів, щоб передумати.",
    cta: "Почати з Tempo",
    ctaHref: "https://t.me/tempo_help",
    stats: [
      { value: 3, suffix: "", label: "кроки до старту" },
      { value: 14, suffix: "", label: "днів на повернення грошей" },
      { value: 100, suffix: "%", label: "даних лишається у тебе" },
    ],
    wordmark: "TEMPO",
  },
  footer: {
    brand: "Tempo",
    navLinks: [
      { label: "Тарифи", href: "#pricing-heading" },
      { label: "Tempo Game", href: "#game-heading" },
      { label: "Питання", href: "#faq-heading" },
    ],
    tagline: "Плануй у своєму темпі.",
    contactLabel: "Написати в Telegram",
    contactHref: "https://t.me/tempo_help",
    copyright: "© 2026 Tempo. Зроблено з ясністю в голові.",
  },
};
