import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/70 bg-background/60 px-5 py-8 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{t('footer.copyright')}</p>
        <p>
          {new Date().getFullYear()} {t('hero.name')}
        </p>
      </div>
    </footer>
  );
}
