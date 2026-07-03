import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '../../state/usePortfolio';

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = usePortfolio();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      aria-label={t(isDark ? 'theme.toggleToLight' : 'theme.toggleToDark')}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-surface/80 text-text shadow-soft transition hover:border-primary/70 hover:text-primary"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <span
        className={`absolute h-4 w-4 rounded-full transition ${
          isDark ? 'scale-100 bg-primary shadow-[0_0_24px_hsl(var(--color-primary)/0.65)]' : 'scale-75 bg-accent'
        }`}
        aria-hidden="true"
      />
      <span
        className={`absolute h-4 w-4 rounded-full bg-surface transition ${
          isDark ? 'translate-x-1.5 -translate-y-1.5 opacity-100' : 'translate-x-4 -translate-y-4 opacity-0'
        }`}
        aria-hidden="true"
      />
    </motion.button>
  );
}
