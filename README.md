# Tempo

Лендинг персонального планера Tempo.

## Стек

- **Next.js 15** (App Router), `output: 'export'` — статичний білд
- **TypeScript** strict, без `any`
- **Tailwind v4** — вся тема через CSS-змінні (`src/styles/theme.css`)
- **Motion** (`motion/react`) — анімація появи, курсор
- **Lenis** — інерційний скрол (вимкнено на мобільних і при
  `prefers-reduced-motion`)
- Локальні шрифти (`next/font/local`): **Unbounded** (дисплей) і
  **Onest** (текст), самостійно засабсечені під кирилицю + латиницю
  (`fonttools`), ~43–87 КБ кожен
- Halftone-текстура на hero — сирий WebGL (без Three.js), власний
  фрагментний шейдер

## Структура

```
src/
  app/            — layout, page, шрифти, глобальні стилі
  components/
    sections/     — Hero, HeroMobile
    ui/            — HalftoneCanvas, GrainOverlay, CustomCursor, OrbitMark
    motion/        — MaskedLines + варіанти анімації
  content/        — типізовані тексти (site.ts)
  styles/         — theme.css (дизайн-токени)
  lib/            — motion-tokens.ts (JS-двійник CSS-токенів для Motion),
                    хуки (useLenis)
```

## Команди

```bash
npm run dev           # дев-сервер
npm run build          # статичний білд у out/
npm run lint            # ESLint
npm run format:check     # перевірка Prettier
npm run format            # автоформатування
```
