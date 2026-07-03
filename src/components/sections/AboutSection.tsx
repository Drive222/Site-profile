import { useTranslation } from 'react-i18next';
import teacherPhoto from '../../assets/uploads/foto.png';
import { profileContent } from '../../content/profile';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

export function AboutSection() {
  const { t } = useTranslation();
  const { about } = profileContent;

  return (
    <SectionShell id="about" className="bg-surface/25 backdrop-blur-sm">
      <SectionHeader titleKey="about.title" introKey="about.intro" />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-background/70 shadow-soft">
          <img
            src={teacherPhoto}
            alt={t(about.photoAltKey)}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-8">
          <div className="space-y-5 text-lg leading-8 text-muted">
            {about.bioKeys.map((bioKey) => (
              <p key={bioKey}>{t(bioKey)}</p>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text">{t('about.summary.title')}</h3>
            <ul className="mt-4 grid gap-3">
              {about.summaryKeys.map((summaryKey) => (
                <li key={summaryKey} className="rounded-xl border border-border bg-background/55 px-4 py-3 text-muted shadow-soft">
                  {t(summaryKey)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
