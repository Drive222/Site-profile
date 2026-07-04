import { useTranslation } from 'react-i18next';

type SectionHeaderProps = {
  titleKey: string;
  introKey: string;
};

export function SectionHeader({ titleKey, introKey }: SectionHeaderProps) {
  const { t } = useTranslation();

  const introText = t(introKey);

  return (
    <div className="mb-8 max-w-3xl sm:mb-10">
      <h2 className="text-2xl font-semibold text-text sm:text-3xl lg:text-5xl">{t(titleKey)}</h2>
      {introText ? <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base lg:text-lg">{introText}</p> : null}
    </div>
  );
}
