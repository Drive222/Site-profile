import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { profileContent } from '../../content/profile';
import { usePortfolio } from '../../state/usePortfolio';
import { SectionShell } from '../ui/SectionShell';
import { InteractiveEarth } from './InteractiveEarth';

export function HeroSection() {
  const { t } = useTranslation();
  const { scrollToSection } = usePortfolio();
  const { hero } = profileContent;

  return (
    <SectionShell id="hero">
      <div className="grid min-h-[calc(100vh-12rem)] items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t(hero.eyebrowKey)}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
            {t(hero.titleKey)}
          </h1>
          <div className="mt-6 space-y-2">
            <p className="text-2xl font-semibold text-primary">{t(hero.nameKey)}</p>
            <p className="text-lg text-muted">{t(hero.professionKey)}</p>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t(hero.introKey)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hero.ctas.map((cta) => (
              <motion.button
                key={cta.labelKey}
                type="button"
                onClick={() => scrollToSection(cta.targetId)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  cta.variant === 'primary'
                    ? 'bg-primary text-background shadow-glow hover:bg-primary/90'
                    : 'border border-border bg-surface/70 text-text hover:border-primary/70 hover:bg-surface'
                }`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t(cta.labelKey)}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="relative overflow-visible"
          whileHover={{ y: -6, rotate: -0.35 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <div className="aspect-[4/3] bg-transparent overflow-visible">
            <InteractiveEarth />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
