# Портфолио Software Engineer & Creative Developer

Современный сайт-портфолио на React, TypeScript, Vite, Tailwind CSS, i18next, react-helmet-async и Framer Motion.

## Быстрый запуск

Установить зависимости:

```bash
npm install
```

Запустить dev-сервер Vite:

```bash
npm run dev
```

Обычно сайт откроется по адресу:

```text
http://127.0.0.1:5173/
```

## Запуск через Live Server

React + TypeScript + Vite нельзя корректно запускать через Live Server прямо из `src/`, потому что браузер не умеет сам компилировать `.tsx`, Tailwind и npm-модули.

Правильный вариант для Live Server:

1. Соберите проект:

```bash
npm run build
```

2. Откройте папку `dist/`.

3. Запустите `dist/index.html` через VS Code Live Server.

В `vite.config.ts` уже стоит:

```ts
base: './'
```

Это нужно, чтобы собранные CSS и JS подключались относительными путями и нормально работали через Live Server.

## Проверка проекта

```bash
npm run lint
npm run build
```

## Структура проекта

```text
src/
  components/
    effects/       Анимированный canvas-фон со звездами
    layout/        Навигация, переключатель языка, переключатель темы, footer
    sections/      Секции страницы, которые берут данные из src/content/
    ui/            Общие UI-обертки и заголовки секций
  content/         Типизированные данные портфолио
  hooks/           Логика отслеживания активной секции
  locales/         Переводы EN, RU, KG
  routes/          Список секций для навигации и smooth scroll
  state/           Состояние UI, мобильного меню и темы
  types/           Общие TypeScript-типы для контента
```

## Как редактировать контент

Основные данные портфолио находятся в `src/content/`.

- `profile.ts` — hero, CTA-кнопки и ключи для блока About
- `skills.ts` — группы навыков
- `projects.ts` — карточки проектов, теги и ссылки
- `experience.ts` — опыт работы и образование
- `certificates.ts` — сертификаты
- `contact.ts` — email и ссылки

В файлах `src/content/` хранятся не готовые тексты, а ключи переводов. Сами тексты нужно менять в `src/locales/`.

## Как редактировать переводы

Файлы переводов:

- `src/locales/en.json`
- `src/locales/ru.json`
- `src/locales/kg.json`

Структура ключей должна совпадать во всех трех файлах. Компоненты получают весь статический текст через `t(...)`, поэтому если ключ отсутствует, это будет заметно во время разработки.

## Как менять цвета темы

Цвета темы находятся в `src/index.css`.

Темная тема задана в `:root`, светлая тема переопределяется в `[data-theme='light']`.

Главные CSS-переменные:

- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-border`

Tailwind подключает эти переменные в `tailwind.config.ts`, поэтому классы `bg-primary`, `text-text`, `bg-surface`, `border-border` и похожие автоматически меняются вместе с темой.

## Анимации

- `src/components/effects/StarryBackground.tsx` рисует фиксированный звездный фон на Canvas.
- `src/components/ui/SectionShell.tsx` добавляет reveal-анимации секций при скролле.
- Карточки, кнопки и элементы навыков используют Framer Motion для hover/tap эффектов.
- Фон учитывает `prefers-reduced-motion`: при включенном снижении движения звезды остаются визуально, но перестают плавно двигаться.
