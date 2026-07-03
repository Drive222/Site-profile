import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, type SupportedLanguage } from '../../i18n';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const handleChangeLanguage = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const activeLanguage = useMemo(
    () => supportedLanguages.find((language) => i18n.language === language) ?? supportedLanguages[0],
    [i18n.language]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }

    return undefined;
  }, [isOpen]);

  return (
    <div className="relative" ref={switcherRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('language.label')}
        className="inline-flex h-10 min-w-[72px] items-center justify-between gap-2 rounded-full border border-border/70 bg-surface/65 px-3 text-xs font-semibold text-text shadow-soft transition hover:bg-background/80"
      >
        <span>{t(`language.${activeLanguage}`)}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
          ▼
        </span>
      </button>

      {isOpen ? (
        <div
          className="absolute right-0 z-20 mt-2 w-28 overflow-hidden rounded-2xl border border-border/70 bg-background shadow-soft"
          role="listbox"
          aria-label={t('language.label')}
        >
          {supportedLanguages.map((language) => {
            const isActive = activeLanguage === language;

            return (
              <button
                key={language}
                type="button"
                onClick={() => handleChangeLanguage(language)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs font-semibold transition ${
                  isActive
                    ? 'bg-accent text-background'
                    : 'text-text hover:bg-surface hover:text-text'
                }`}
                role="option"
                aria-selected={isActive}
              >
                <span>{t(`language.${language}`)}</span>
                {isActive ? <span>✓</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
