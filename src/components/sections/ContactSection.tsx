import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { contactContent } from '../../content/contact';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

export function ContactSection() {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SectionShell id="contact">
      <SectionHeader titleKey="contact.title" introKey="contact.intro" />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-2xl border border-border bg-surface/75 p-5 shadow-soft backdrop-blur">
          <h3 className="text-xl font-semibold text-text">{t('contact.emailLabel')}</h3>
          <a className="mt-3 inline-flex text-primary underline-offset-4 hover:underline" href={`mailto:${contactContent.email}`}>
            {contactContent.email}
          </a>

          <h3 className="mt-8 text-xl font-semibold text-text">{t('contact.linksTitle')}</h3>
          <ul className="mt-3 grid gap-2">
            {contactContent.links.map((link) => (
              <li key={link.id}>
                <a
                  className="text-muted underline-offset-4 hover:text-text hover:underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <form className="rounded-2xl border border-border bg-surface/75 p-5 shadow-soft backdrop-blur" onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-text">{t('contact.form.title')}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-text">
              {t('contact.form.nameLabel')}
              <input
                className="rounded-xl border border-border bg-background/70 px-3 py-3 text-sm font-normal text-text outline-none transition placeholder:text-muted/70 focus:border-primary"
                name="name"
                placeholder={t('contact.form.namePlaceholder')}
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-text">
              {t('contact.form.emailLabel')}
              <input
                className="rounded-xl border border-border bg-background/70 px-3 py-3 text-sm font-normal text-text outline-none transition placeholder:text-muted/70 focus:border-primary"
                name="email"
                placeholder={t('contact.form.emailPlaceholder')}
                type="email"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-text">
            {t('contact.form.messageLabel')}
            <textarea
              className="min-h-36 rounded-xl border border-border bg-background/70 px-3 py-3 text-sm font-normal text-text outline-none transition placeholder:text-muted/70 focus:border-primary"
              name="message"
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </label>
          <motion.button
            type="submit"
            className="mt-5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-background shadow-glow hover:bg-primary/90"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('contact.form.submit')}
          </motion.button>
        </form>
      </div>
    </SectionShell>
  );
}
