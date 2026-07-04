import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import type { SectionId } from '../../types/content';

type SectionShellProps = PropsWithChildren<{
  id: SectionId;
  className?: string;
}>;

export function SectionShell({ id, className = '', children }: SectionShellProps) {
  return (
    <motion.section
      id={id}
      className={`relative scroll-mt-24 min-h-auto px-4 py-8 sm:min-h-[calc(100vh-5rem)] sm:px-14 sm:py-10 lg:px-24 lg:py-14 flex items-center ${className}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl w-full">{children}</div>
    </motion.section>
  );
}
