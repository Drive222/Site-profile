import { useTranslation } from 'react-i18next';
import { sectionRoutes } from '../../routes/sections';
import { usePortfolio } from '../../state/usePortfolio';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const { t } = useTranslation();
  const { activeSection, isMobileNavOpen, scrollToSection, setMobileNavOpen } = usePortfolio();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
        <button
          type="button"
          className="text-left"
          onClick={() => scrollToSection('hero')}
          aria-label={t('routes.hero')}
        >
          <span className="block text-sm font-semibold text-text sm:text-base">{t('hero.name')}</span>
          <span className="block text-[10px] uppercase tracking-[0.18em] text-muted sm:text-xs">{t('hero.profession')}</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t('nav.ariaLabel')}>
          {sectionRoutes.map((route) => {
            const isActive = activeSection === route.id;

            return (
              <button
                key={route.id}
                type="button"
                onClick={() => scrollToSection(route.id)}
                className={`rounded px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-primary text-background shadow-glow' : 'text-muted hover:bg-surface hover:text-text'
                }`}
              >
                {t(route.labelKey)}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 text-text sm:h-10 sm:w-10 lg:hidden"
            aria-label={t(isMobileNavOpen ? 'nav.menuClose' : 'nav.menuOpen')}
            aria-expanded={isMobileNavOpen}
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          >
            <span className="flex w-4 flex-col gap-1" aria-hidden="true">
              <span className={`h-0.5 bg-current transition ${isMobileNavOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`h-0.5 bg-current transition ${isMobileNavOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition ${isMobileNavOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {isMobileNavOpen ? (
        <nav className="border-t border-border/70 bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden" aria-label={t('nav.ariaLabel')}>
          <div className="mx-auto grid max-w-7xl gap-2">
            {sectionRoutes.map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => scrollToSection(route.id)}
                className={`rounded px-3 py-3 text-left text-sm font-medium ${
                  activeSection === route.id ? 'bg-primary text-background' : 'text-muted hover:bg-surface hover:text-text'
                }`}
              >
                {t(route.labelKey)}
              </button>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
