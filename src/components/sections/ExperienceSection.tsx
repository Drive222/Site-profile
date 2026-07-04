import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { educationItems, experienceItems } from '../../content/experience';
import type { TimelineItem } from '../../types/content';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

type TimelineListProps = {
  titleKey: string;
  items: TimelineItem[];
};

function TimelineList({ titleKey, items }: TimelineListProps) {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-xl font-semibold text-text">{t(titleKey)}</h3>
      <ol className="mt-5 grid gap-4">
        {items.map((item) => (
          <motion.li
            key={item.id}
            className="rounded-2xl border border-border bg-surface/70 p-4 shadow-soft backdrop-blur sm:p-5"
            whileHover={{ x: 4, borderColor: 'hsl(var(--color-primary) / 0.65)' }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-text">{t(item.titleKey)}</h4>
                <p className="mt-1 text-sm font-medium text-primary">{t(item.organizationKey)}</p>
              </div>
              <p className="text-sm font-semibold text-muted">{t(item.periodKey)}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{t(item.descriptionKey)}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <SectionHeader titleKey="experience.title" introKey="experience.intro" />
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <TimelineList titleKey="experience.workTitle" items={experienceItems} />
        <TimelineList titleKey="experience.educationTitle" items={educationItems} />
      </div>
    </SectionShell>
  );
}
