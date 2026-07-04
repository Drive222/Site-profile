import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { certificates } from '../../content/certificates';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

export function CertificatesSection() {
  const { t } = useTranslation();

  return (
    <SectionShell id="certificates" className="bg-surface/25 backdrop-blur-sm">
      <SectionHeader titleKey="certificates.title" introKey="certificates.intro" />
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {certificates.map((certificate) => (
          <motion.article
            key={certificate.id}
            className="rounded-2xl border border-border bg-surface/75 p-4 shadow-soft backdrop-blur sm:p-5"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 210, damping: 24 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-text">{t(certificate.titleKey)}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{t(certificate.issuerKey)}</p>
              </div>
              <p className="text-sm font-semibold text-muted">{t(certificate.periodKey)}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{t(certificate.descriptionKey)}</p>
            {certificate.link ? (
              <a
                href={certificate.link}
                className="mt-5 inline-flex rounded-full border border-border px-3 py-2 text-sm font-semibold text-text transition hover:border-primary/70 hover:bg-primary/10 hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                {t('certificates.view')}
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
