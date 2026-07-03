import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        ink: 'hsl(var(--color-text) / <alpha-value>)',
        paper: 'hsl(var(--color-background) / <alpha-value>)',
        moss: 'hsl(var(--color-primary) / <alpha-value>)',
        rust: 'hsl(var(--color-accent) / <alpha-value>)',
        steel: 'hsl(var(--color-secondary) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 70px hsl(var(--color-shadow) / 0.18)',
        glow: '0 0 48px hsl(var(--color-primary) / 0.22)'
      }
    }
  },
  plugins: []
} satisfies Config;
