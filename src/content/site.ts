import type { Locale } from "@/lib/locale";
import type { TariffId } from "@/content/quiz";

export interface MetaContent {
  title: string;
  description: string;
}

export interface HeroContent {
  navBrand: string;
  badge: string;
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
  attemptLabel: string;
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
  tablistLabel: string;
  tabLabel: (index: number, total: number) => string;
}

export interface PricingTier {
  id: TariffId;
  name: string;
  priceNow: number;
  priceThen: number;
  features: readonly string[];
  cta: string;
  badge?: string;
}

export interface PricingContent {
  h2: string;
  sub: string;
  tiers: readonly PricingTier[];
  bumpLabel: string;
  bumpPriceNow: number;
  bumpPriceThen: number;
  badges: string;
  currency: string;
  launchPriceLabel: string;
  laterPriceLabel: string;
}

export interface GameContent {
  badge: string;
  h2: string;
  hook: string;
  level: number;
  xpPercent: number;
  chips: readonly string[];
  priceNow: number;
  priceLater: number;
  releaseDate: string;
  releaseLine: (date: string) => string;
  scarcity: string;
  cta: string;
  detailsLabel: string;
  closeLabel: string;
  currency: string;
  nowHeading: string;
  now: readonly string[];
  betaHeading: string;
  beta: readonly string[];
  statusHeading: string;
  statusOk: string;
  statusWip: string;
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
  cursorStart: string;
  telegramText: string;
  telegramHref: string;
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
  legalLinks: readonly FooterLink[];
  copyright: string;
}

export interface HeaderContent {
  brand: string;
  navLinks: readonly FooterLink[];
  cta: string;
  cursorStart: string;
}

export interface SiteContent {
  meta: MetaContent;
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

export const siteContent: Record<Locale, SiteContent> = {
  uk: {
    meta: {
      title: "Tempo — персональний планер",
      description:
        "Tempo — персональний планер для тих, хто хоче встигати більше, не втрачаючи ясності голови.",
    },
    header: {
      brand: "Tempo",
      navLinks: [
        { label: "Як працює", href: "#how-heading" },
        { label: "Тарифи", href: "#pricing-heading" },
        { label: "Tempo Game", href: "#game-heading" },
        { label: "Питання", href: "#faq-heading" },
      ],
      cta: "Зібрати свій Tempo",
      cursorStart: "Почати",
    },
    hero: {
      navBrand: "Tempo",
      badge: "ПЕРСОНАЛЬНА СИСТЕМА ПЛАНУВАННЯ · 4.9/5 · 700+ КОРИСТУВАЧІВ",
      headlineLines: ["Живи у своєму темпі —", "а не в чужому дедлайні."],
      subline:
        "Гроші, звички, справи — в одному місці. І ти нарешті не кинеш це через тиждень.",
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
      attemptLabel: "спроба",
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
            "Юзаю tempo вже місяць і вперше за довгий час нічого не тримаю в голові – вона свіжа. Все в одному місці, і це відчуття контролю, не дуже то і вистачало.",
          name: "Карина",
          role: "23 роки",
        },
        {
          quote:
            "Не вірила, що якийсь планер щось змінить. Але задачі більше не губляться, а звички вперше дожили до другого тижня. вже порадила подружкам))",
          name: "Sashulec4",
          role: "19 років",
        },
        {
          quote: "злізла зі стреса завдяки ціьому, дякую.",
          name: "Nastya K.",
          role: "27 років",
        },
        {
          quote:
            "Купив дружині, а тепер користуємось обоє. (спочатку я думав що вона хоче з мене познущатися як завжди але в цей раз я дійсно вдячний їй за те що витратила мої гроші).",
          name: "Дмитрий",
          role: "34 роки",
        },
      ],
      tablistLabel: "Відгуки",
      tabLabel: (index, total) => `Відгук ${index} з ${total}`,
    },
    pricing: {
      h2: "Обери свій Tempo",
      sub: "Платиш один раз. Жодних підписок.",
      tiers: [
        {
          id: "start",
          name: "Старт",
          priceNow: 249,
          priceThen: 690,
          features: [
            "Планер: календар місяця, фокус, пріоритети тижня",
            "Звички: трекер-хітмап на місяць, % та графік",
            "Підтримка та допомога з налаштуванням у Telegram",
            "Модулі «Фінанси», «Цілі», «Здоровʼя» відкриваються в «Системі»",
          ],
          cta: "Забрати Старт",
        },
        {
          id: "system",
          name: "Система",
          priceNow: 550,
          priceThen: 1490,
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
          id: "premium",
          name: "Premium",
          priceNow: 790,
          priceThen: 2900,
          features: [
            "Все із «Системи»",
            "Харчування: меню на тиждень і список покупок",
            "Проекти: завдання зі статусами та % готовності",
            "Усі майбутні оновлення модулів — безкоштовно",
          ],
          cta: "Забрати Premium",
        },
      ],
      bumpLabel: "☑ Додати Tempo Game (бета) — веб-застосунок, де звички дають XP.",
      bumpPriceNow: 490,
      bumpPriceThen: 1300,
      badges:
        "Безпечна оплата через WayForPay · Visa / Mastercard / Apple Pay / Google Pay",
      currency: "₴",
      launchPriceLabel: "ціна запуску",
      laterPriceLabel: "далі —",
    },
    game: {
      badge: "НОВИНКА · РАННІЙ ДОСТУП",
      h2: "Tempo Game",
      hook: "Твоє життя прокачується як у грі: XP за звички, рівні, досягнення, серії днів.",
      level: 12,
      xpPercent: 68,
      chips: ["XP за звички", "Свої квести", "Серії днів", "Мапа прогресу", "Без підписок"],
      priceNow: 490,
      priceLater: 1300,
      releaseDate: "2 вересня 2026",
      releaseLine: (date) => `Реліз — ${date}.`,
      scarcity: "Місць у бета-тесті — 100. Далі ціна зросте.",
      cta: "Стати бета-тестером",
      detailsLabel: "Що всередині?",
      closeLabel: "Закрити",
      currency: "₴",
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
        "Ціну раннього доступу: 490 ₴ — після релізу 2 вересня 2026 буде 1 300 ₴",
        "Усі майбутні оновлення — безкоштовно назавжди. Платиш один раз, ціна фіксується",
        "Прямий вплив на продукт: твої ідеї потрапляють у наступні версії",
        "Закритий чат бета-тестерів у Telegram із прямим звʼязком з розробником",
      ],
      statusHeading: "Чесно про статус:",
      statusOk: "Компʼютер і ноутбук — працює повноцінно вже зараз",
      statusWip:
        "Android та iPhone — мобільні версії ще тестуються. Щойно відполіруємо — доступ зʼявиться в тебе автоматично, без доплат",
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
      sub: "Один платіж. Планер під тебе.",
      cta: "Зібрати свій Tempo →",
      ctaHref: "#quiz-heading",
      cursorStart: "Почати",
      telegramText: "Залишились питання? Напиши нам у Telegram — @tempo_help.",
      telegramHref: "https://t.me/tempo_help",
      stats: [
        { value: 3, suffix: "", label: "кроки до старту" },
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
      legalLinks: [
        { label: "Публічна оферта", href: "/oferta" },
        { label: "Політика повернення", href: "/refund" },
        { label: "Політика конфіденційності", href: "/privacy" },
      ],
      copyright: "© 2026 Tempo. Зроблено з ясністю в голові.",
    },
  },
  en: {
    meta: {
      title: "Tempo — your personal planner",
      description:
        "Tempo is a personal planner for people who want to get more done without losing their peace of mind.",
    },
    header: {
      brand: "Tempo",
      navLinks: [
        { label: "How it works", href: "#how-heading" },
        { label: "Pricing", href: "#pricing-heading" },
        { label: "Tempo Game", href: "#game-heading" },
        { label: "FAQ", href: "#faq-heading" },
      ],
      cta: "Build your Tempo",
      cursorStart: "Start",
    },
    hero: {
      navBrand: "Tempo",
      badge: "PERSONAL PLANNING SYSTEM · 4.9/5 · 700+ USERS",
      headlineLines: ["Live at your own tempo —", "not someone else's deadline."],
      subline:
        "Money, habits, to-dos — all in one place. And this time, you won't quit in a week.",
      wordmark: "TEMPO",
    },
    pain: {
      h2: "How many times have you already started “from Monday”?",
      items: [
        "You buy a beautiful new planner — and drop it in a week. Again.",
        "Your head is a mess of deadlines, “don't forget” notes, and the quiet panic that you've already missed something.",
        "Money just evaporates, and where it went is a mystery. You're back to living on fumes before payday.",
        "A graveyard of abandoned trackers and apps — and the guilt of breaking your promise to yourself. Again.",
      ],
      reframe: {
        leadStart: "It's not about ",
        leadHighlight: "willpower",
        leadEnd: ".",
        rest: "The planner just wasn't built for you. Tempo adapts to your life instead of the other way around — so you actually want to come back to it, not bury it in a drawer.",
      },
      attemptLabel: "attempt",
    },
    how: {
      h2: "A builder, not a template",
      sub: "Three steps and Tempo fits your goals. Start today, not “from Monday”.",
      steps: [
        {
          title: "Pick a design",
          text: "A few styles to match your taste — from minimalist to maximum coziness.",
        },
        {
          title: "Turn on modules",
          text: "Money, habits, goals, health — you switch on only what you'll actually use.",
        },
        {
          title: "Fill in your stuff",
          text: "Progress, percentages, charts — calculated automatically while you just live your life.",
        },
      ],
      footer: "5 minutes a day — and a clear head for the month ahead.",
    },
    testimonials: {
      h2: "Don't just take our word for it",
      items: [
        {
          quote:
            "I've been using Tempo for a month now, and for the first time in ages I'm not holding everything in my head — it feels clear. Everything's in one place, and that feeling of control was exactly what I was missing.",
          name: "Karina",
          role: "23 y.o.",
        },
        {
          quote:
            "I didn't believe any planner could change anything. But tasks stopped slipping through the cracks, and habits survived past week two for the first time. Already recommended it to my friends))",
          name: "Sashulec4",
          role: "19 y.o.",
        },
        {
          quote: "This got me off my stress, thank you.",
          name: "Nastya K.",
          role: "27 y.o.",
        },
        {
          quote:
            "Bought it for my wife, and now we both use it. (At first I thought she just wanted to mess with me as usual, but this time I'm genuinely grateful she spent my money).",
          name: "Dmitry",
          role: "34 y.o.",
        },
      ],
      tablistLabel: "Reviews",
      tabLabel: (index, total) => `Review ${index} of ${total}`,
    },
    pricing: {
      h2: "Pick your Tempo",
      sub: "Pay once. No subscriptions.",
      tiers: [
        {
          id: "start",
          name: "Start",
          priceNow: 249,
          priceThen: 690,
          features: [
            "Planner: month calendar, focus, weekly priorities",
            "Habits: month heatmap tracker, % and chart",
            "Support and setup help on Telegram",
            "The Money, Goals, and Health modules unlock in System",
          ],
          cta: "Get Start",
        },
        {
          id: "system",
          name: "System",
          priceNow: 550,
          priceThen: 1490,
          badge: "Most popular",
          features: [
            "Everything in Start",
            "Money: income, expenses, balance and chart",
            "Goals with an automatic progress bar",
            "Health: water, sleep, steps, workouts + chart",
            "The Food and Projects modules unlock in Premium",
          ],
          cta: "Get System",
        },
        {
          id: "premium",
          name: "Premium",
          priceNow: 790,
          priceThen: 2900,
          features: [
            "Everything in System",
            "Food: weekly menu and shopping list",
            "Projects: tasks with statuses and % complete",
            "All future module updates — free",
          ],
          cta: "Get Premium",
        },
      ],
      bumpLabel: "☑ Add Tempo Game (beta) — a web app where habits earn you XP.",
      bumpPriceNow: 490,
      bumpPriceThen: 1300,
      badges: "Secure payment via WayForPay · Visa / Mastercard / Apple Pay / Google Pay",
      currency: "₴",
      launchPriceLabel: "launch price",
      laterPriceLabel: "then —",
    },
    game: {
      badge: "NEW · EARLY ACCESS",
      h2: "Tempo Game",
      hook: "Your life levels up like a game: XP for habits, levels, achievements, day streaks.",
      level: 12,
      xpPercent: 68,
      chips: ["XP for habits", "Custom quests", "Day streaks", "Progress map", "No subscriptions"],
      priceNow: 490,
      priceLater: 1300,
      releaseDate: "September 2, 2026",
      releaseLine: (date) => `Launch — ${date}.`,
      scarcity: "100 beta spots available. Price goes up after that.",
      cta: "Become a beta tester",
      detailsLabel: "What's inside?",
      closeLabel: "Close",
      currency: "₴",
      nowHeading: "What already works today:",
      now: [
        "Game mode: XP for every habit, levels, achievements, day streaks",
        "Full editor: your own quests, XP and stats",
        "Day map and progress charts",
        "Vault: income and expense tracking (₴ + $)",
        "4 themes, your own avatar and nickname",
        "No subscriptions or sign-ups — your data stays with you",
      ],
      betaHeading: "What you get as a beta tester:",
      beta: [
        "The early-access price: 490 ₴ — after the September 2, 2026 launch it'll be 1 300 ₴",
        "All future updates — free forever. Pay once, price locked in",
        "Direct influence on the product: your ideas make it into the next versions",
        "A private Telegram chat for beta testers with a direct line to the developer",
      ],
      statusHeading: "The honest status:",
      statusOk: "Desktop and laptop — fully working right now",
      statusWip:
        "Android and iPhone — mobile versions are still in testing. As soon as we polish them, access appears automatically, no extra cost",
    },
    faq: {
      h2: "Questions you'll definitely have",
      sub: "And if not — you can still message us on Telegram.",
      items: [
        {
          question: "How is Tempo different from a regular planner?",
          answer:
            "A regular planner is the same for everyone — which is exactly why you drop it. Tempo is built around you: pick a design, turn on only the modules you'll actually use. Nothing extra — no reason to abandon it.",
        },
        {
          question: "Where does my data go?",
          answer:
            "Nowhere. Your data stays only with you — no cloud, no sign-up, no “free because you're the product”. It's your planner, not someone else's analytics.",
        },
        {
          question: "Is Tempo Game a different app?",
          answer:
            "It's a separate web app in early access, where your Tempo habits level up your character: XP, levels, quests. Buy it separately or bundled with the planner — at the beta-test price, which disappears after launch.",
        },
        {
          question: "What devices does it work on?",
          answer:
            "Desktop and laptop — fully, right now. Mobile versions for Android and iPhone are still in testing — access appears automatically, no extra cost, as soon as we polish them.",
        },
        {
          question: "Will there be more payments later?",
          answer:
            "No. Pay once, the price is locked in forever. All future module updates are free. No subscriptions quietly charging you a year later.",
        },
      ],
    },
    finalCta: {
      h2: "Start before another Monday rolls around.",
      sub: "One payment. A planner built for you.",
      cta: "Build your Tempo →",
      ctaHref: "#quiz-heading",
      cursorStart: "Start",
      telegramText: "Still have questions? Message us on Telegram — @tempo_help.",
      telegramHref: "https://t.me/tempo_help",
      stats: [
        { value: 3, suffix: "", label: "steps to get started" },
        { value: 100, suffix: "%", label: "of your data stays with you" },
      ],
      wordmark: "TEMPO",
    },
    footer: {
      brand: "Tempo",
      navLinks: [
        { label: "Pricing", href: "#pricing-heading" },
        { label: "Tempo Game", href: "#game-heading" },
        { label: "FAQ", href: "#faq-heading" },
      ],
      tagline: "Plan at your own tempo.",
      contactLabel: "Message us on Telegram",
      contactHref: "https://t.me/tempo_help",
      legalLinks: [
        { label: "Terms of Service", href: "/en/oferta" },
        { label: "Refund Policy", href: "/en/refund" },
        { label: "Privacy Policy", href: "/en/privacy" },
      ],
      copyright: "© 2026 Tempo. Made with a clear head.",
    },
  },
  es: {
    meta: {
      title: "Tempo — tu agenda personal",
      description:
        "Tempo es una agenda personal para quienes quieren lograr más sin perder la claridad mental.",
    },
    header: {
      brand: "Tempo",
      navLinks: [
        { label: "Cómo funciona", href: "#how-heading" },
        { label: "Precios", href: "#pricing-heading" },
        { label: "Tempo Game", href: "#game-heading" },
        { label: "Preguntas", href: "#faq-heading" },
      ],
      cta: "Arma tu Tempo",
      cursorStart: "Empezar",
    },
    hero: {
      navBrand: "Tempo",
      badge: "SISTEMA DE PLANIFICACIÓN PERSONAL · 4.9/5 · +700 USUARIOS",
      headlineLines: ["Vive a tu propio ritmo —", "no al plazo de otro."],
      subline:
        "Dinero, hábitos, tareas — todo en un solo lugar. Y esta vez no lo dejarás en una semana.",
      wordmark: "TEMPO",
    },
    pain: {
      h2: "¿Cuántas veces ya empezaste «desde el lunes»?",
      items: [
        "Compras una agenda nueva y bonita — y la abandonas en una semana. Otra vez.",
        "Tu cabeza es un caos de plazos, notas de «no lo olvides» y el pánico silencioso de que ya se te escapó algo.",
        "El dinero se evapora y no sabes a dónde fue. Vuelves a llegar a fin de mes con lo justo.",
        "Un cementerio de trackers y apps abandonadas — y la culpa de no haber cumplido, otra vez, la palabra que te diste a ti mismo(a).",
      ],
      reframe: {
        leadStart: "No se trata de ",
        leadHighlight: "fuerza de voluntad",
        leadEnd: ".",
        rest: "La agenda simplemente no estaba pensada para ti. Tempo se adapta a tu vida, no al revés — por eso dan ganas de volver a usarla, no de esconderla en un cajón.",
      },
      attemptLabel: "intento",
    },
    how: {
      h2: "Un constructor, no una plantilla",
      sub: "Tres pasos y Tempo se ajusta a tus objetivos. Empiezas hoy, no «desde el lunes».",
      steps: [
        {
          title: "Elige un diseño",
          text: "Varios estilos a tu gusto — del minimalismo a la máxima comodidad.",
        },
        {
          title: "Activa los módulos",
          text: "Dinero, hábitos, metas, salud — activas solo lo que realmente vas a usar.",
        },
        {
          title: "Registra tus cosas",
          text: "El progreso, los porcentajes, los gráficos — se calculan solos mientras tú simplemente vives.",
        },
      ],
      footer: "5 minutos al día — y la cabeza despejada para todo el mes.",
    },
    testimonials: {
      h2: "No solo lo decimos nosotros",
      items: [
        {
          quote:
            "Llevo un mes usando Tempo y por primera vez en mucho tiempo no tengo que guardar todo en la cabeza — se siente ligera. Todo está en un solo lugar, y esa sensación de control era justo lo que me faltaba.",
          name: "Karina",
          role: "23 años",
        },
        {
          quote:
            "No creía que una agenda pudiera cambiar algo. Pero las tareas ya no se me escapan, y por primera vez mis hábitos sobrevivieron más de una semana. Ya se la recomendé a mis amigas))",
          name: "Sashulec4",
          role: "19 años",
        },
        {
          quote: "Esto me ayudó a dejar el estrés, gracias.",
          name: "Nastya K.",
          role: "27 años",
        },
        {
          quote:
            "Se lo compré a mi esposa, y ahora lo usamos los dos. (Al principio pensé que quería fastidiarme como siempre, pero esta vez de verdad le agradezco haber gastado mi dinero).",
          name: "Dmitry",
          role: "34 años",
        },
      ],
      tablistLabel: "Reseñas",
      tabLabel: (index, total) => `Reseña ${index} de ${total}`,
    },
    pricing: {
      h2: "Elige tu Tempo",
      sub: "Pagas una vez. Sin suscripciones.",
      tiers: [
        {
          id: "start",
          name: "Start",
          priceNow: 249,
          priceThen: 690,
          features: [
            "Agenda: calendario mensual, foco, prioridades semanales",
            "Hábitos: tracker tipo mapa de calor mensual, % y gráfico",
            "Soporte y ayuda para configurarlo en Telegram",
            "Los módulos de Dinero, Metas y Salud se desbloquean en System",
          ],
          cta: "Consigue Start",
        },
        {
          id: "system",
          name: "System",
          priceNow: 550,
          priceThen: 1490,
          badge: "El más popular",
          features: [
            "Todo lo de Start",
            "Dinero: ingresos, gastos, balance y gráfico",
            "Metas con barra de progreso automática",
            "Salud: agua, sueño, pasos, deporte + gráfico",
            "Los módulos de Comida y Proyectos se desbloquean en Premium",
          ],
          cta: "Consigue System",
        },
        {
          id: "premium",
          name: "Premium",
          priceNow: 790,
          priceThen: 2900,
          features: [
            "Todo lo de System",
            "Comida: menú semanal y lista de compras",
            "Proyectos: tareas con estados y % completado",
            "Todas las futuras actualizaciones de módulos — gratis",
          ],
          cta: "Consigue Premium",
        },
      ],
      bumpLabel: "☑ Añadir Tempo Game (beta) — una app web donde tus hábitos dan XP.",
      bumpPriceNow: 490,
      bumpPriceThen: 1300,
      badges: "Pago seguro con WayForPay · Visa / Mastercard / Apple Pay / Google Pay",
      currency: "₴",
      launchPriceLabel: "precio de lanzamiento",
      laterPriceLabel: "después —",
    },
    game: {
      badge: "NUEVO · ACCESO ANTICIPADO",
      h2: "Tempo Game",
      hook: "Tu vida sube de nivel como en un videojuego: XP por hábitos, niveles, logros, rachas de días.",
      level: 12,
      xpPercent: 68,
      chips: ["XP por hábitos", "Misiones propias", "Rachas de días", "Mapa de progreso", "Sin suscripciones"],
      priceNow: 490,
      priceLater: 1300,
      releaseDate: "2 de septiembre de 2026",
      releaseLine: (date) => `Lanzamiento — ${date}.`,
      scarcity: "Quedan 100 cupos en la beta. Después el precio sube.",
      cta: "Ser beta tester",
      detailsLabel: "¿Qué incluye?",
      closeLabel: "Cerrar",
      currency: "₴",
      nowHeading: "Lo que ya funciona hoy:",
      now: [
        "Modo juego: XP por cada hábito, niveles, logros, rachas de días",
        "Editor completo: tus propias misiones, XP y estadísticas",
        "Mapa de días y gráficos de progreso",
        "Tesorería: control de ingresos y gastos (₴ + $)",
        "4 temas, tu propio avatar y apodo",
        "Sin suscripciones ni registros — tus datos son solo tuyos",
      ],
      betaHeading: "Lo que obtienes como beta tester:",
      beta: [
        "El precio de acceso anticipado: 490 ₴ — después del lanzamiento del 2 de septiembre de 2026 será 1 300 ₴",
        "Todas las futuras actualizaciones — gratis para siempre. Pagas una vez, el precio queda fijo",
        "Influencia directa en el producto: tus ideas llegan a las próximas versiones",
        "Chat privado de beta testers en Telegram con contacto directo con el desarrollador",
      ],
      statusHeading: "La verdad sobre el estado actual:",
      statusOk: "Computadora y laptop — funciona por completo desde ya",
      statusWip:
        "Android e iPhone — las versiones móviles siguen en pruebas. En cuanto las pulamos, el acceso aparecerá automáticamente, sin costo extra",
    },
    faq: {
      h2: "Las preguntas que seguro te van a surgir",
      sub: "Y si no — igual puedes escribirnos por Telegram.",
      items: [
        {
          question: "¿En qué se diferencia Tempo de una agenda normal?",
          answer:
            "Una agenda normal es igual para todos — y por eso la abandonas. Tempo se arma a tu medida: eliges el diseño, activas solo los módulos que realmente vas a usar. Nada de más — ninguna razón para dejarla.",
        },
        {
          question: "¿A dónde van mis datos?",
          answer:
            "A ningún lado. Tus datos se quedan solo contigo — sin nube, sin registro, sin «gratis porque el producto eres tú». Es tu agenda, no la analítica de otro.",
        },
        {
          question: "¿Tempo Game es otra aplicación?",
          answer:
            "Es una app web independiente en acceso anticipado, donde tus hábitos de Tempo suben de nivel a tu personaje: XP, niveles, misiones. Se compra por separado o junto con la agenda — al precio de la beta, que desaparece después del lanzamiento.",
        },
        {
          question: "¿En qué dispositivos funciona?",
          answer:
            "Computadora y laptop — al 100% desde ya. Las versiones móviles para Android e iPhone siguen en pruebas — el acceso aparecerá automáticamente, sin costo extra, en cuanto las terminemos de pulir.",
        },
        {
          question: "¿Habrá más pagos después?",
          answer:
            "No. Pagas una vez, el precio queda fijo para siempre. Todas las futuras actualizaciones de los módulos son gratis. Nada de suscripciones que te cobren sin darte cuenta un año después.",
        },
      ],
    },
    finalCta: {
      h2: "Empieza antes de que llegue otro lunes.",
      sub: "Un solo pago. Una agenda hecha para ti.",
      cta: "Arma tu Tempo →",
      ctaHref: "#quiz-heading",
      cursorStart: "Empezar",
      telegramText: "¿Todavía tienes preguntas? Escríbenos por Telegram — @tempo_help.",
      telegramHref: "https://t.me/tempo_help",
      stats: [
        { value: 3, suffix: "", label: "pasos para empezar" },
        { value: 100, suffix: "%", label: "de tus datos se quedan contigo" },
      ],
      wordmark: "TEMPO",
    },
    footer: {
      brand: "Tempo",
      navLinks: [
        { label: "Precios", href: "#pricing-heading" },
        { label: "Tempo Game", href: "#game-heading" },
        { label: "Preguntas", href: "#faq-heading" },
      ],
      tagline: "Planifica a tu propio ritmo.",
      contactLabel: "Escríbenos por Telegram",
      contactHref: "https://t.me/tempo_help",
      legalLinks: [
        { label: "Términos y condiciones", href: "/es/oferta" },
        { label: "Política de devoluciones", href: "/es/refund" },
        { label: "Política de privacidad", href: "/es/privacy" },
      ],
      copyright: "© 2026 Tempo. Hecho con la cabeza despejada.",
    },
  },
};
