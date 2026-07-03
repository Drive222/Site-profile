import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skillGroups } from '../../content/skills';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <SectionShell id="skills">
      <SectionHeader titleKey="skills.title" introKey="skills.intro" />
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.article
            key={group.id}
            className="rounded-2xl border border-border bg-surface/70 p-5 shadow-soft backdrop-blur"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          >
            <h3 className="text-xl font-semibold text-text">{t(group.titleKey)}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{t(group.descriptionKey)}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.li
                  key={item.labelKey}
                  className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-sm font-medium text-text"
                  whileHover={{ y: -2, borderColor: 'hsl(var(--color-primary))' }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {t(item.labelKey).slice(0, 1)}
                  </span>
                  <span>{t(item.labelKey)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
