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
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t(hero.eyebrowKey)}</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-6xl">
            {t(hero.titleKey)}
          </h1>
          <div className="mt-6 space-y-2">
            <p className="text-xl font-semibold text-primary sm:text-2xl">{t(hero.nameKey)}</p>
            <p className="text-base text-muted sm:text-lg">{t(hero.professionKey)}</p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{t(hero.introKey)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hero.ctas.map((cta) => (
              <motion.button
                key={cta.labelKey}
                type="button"
                onClick={() => scrollToSection(cta.targetId)}
                className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition sm:w-auto ${
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
          className="relative mx-auto w-full max-w-[28rem] overflow-visible lg:max-w-none"
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
