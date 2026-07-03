import { useTranslation } from 'react-i18next';

type SectionHeaderProps = {
  titleKey: string;
  introKey: string;
};

export function SectionHeader({ titleKey, introKey }: SectionHeaderProps) {
  const { t } = useTranslation();

  const introText = t(introKey);

  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-semibold text-text sm:text-4xl lg:text-5xl">{t(titleKey)}</h2>
      {introText ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{introText}</p> : null}
    </div>
  );
}
