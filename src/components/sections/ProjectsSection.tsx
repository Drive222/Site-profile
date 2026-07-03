import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import fotoImage from '../../assets/uploads/foto.png';
import webDevImage from '../../assets/uploads/231 Web Development - Websites, Applications and Software.jpg';
import wordImage from '../../assets/uploads/Word.jpg';
import excelImage from '../../assets/uploads/Excel.jpg';
import powerpointImage from '../../assets/uploads/Power Point.jpg';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

const galleryItems = [
  {
    id: 'gallery-1',
    title: 'Уроки в классе',
    src: fotoImage,
    alt: 'Фото урока информатики в классе'
  },
  {
    id: 'gallery-2',
    title: 'Проекты веб-разработки',
    src: webDevImage,
    alt: 'Фото учебного проекта по веб-разработке'
  },
  {
    id: 'gallery-3',
    title: 'Текстовые задания',
    src: wordImage,
    alt: 'Фото документа для обучения в Word'
  },
  {
    id: 'gallery-4',
    title: 'Таблицы и анализ',
    src: excelImage,
    alt: 'Фото электронных таблиц в Excel'
  },
  {
    id: 'gallery-5',
    title: 'Презентации и дизайн',
    src: powerpointImage,
    alt: 'Фото презентации и дизайн-материалов'
  }
];

export function ProjectsSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const length = galleryItems.length;

  const current = galleryItems[activeIndex];
  const left = galleryItems[(activeIndex - 1 + length) % length];
  const right = galleryItems[(activeIndex + 1) % length];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  return (
    <SectionShell id="projects" className="bg-surface/15 backdrop-blur-xl">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader titleKey="projects.title" introKey="projects.intro" />
        <div className="flex items-center gap-3 rounded-full border border-border bg-background/70 px-3 py-2 shadow-soft">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/80 text-text transition hover:border-primary hover:text-primary"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/80 text-text transition hover:border-primary hover:text-primary"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-2 py-4 lg:px-8">
        <div className="absolute left-3 hidden h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl lg:block" />
        <div className="absolute right-3 hidden h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl lg:block" />

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 z-20 hidden h-16 w-16 items-center justify-center rounded-full border border-border/70 bg-background/80 text-text transition hover:border-primary hover:text-primary lg:flex"
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="flex w-full max-w-6xl items-center justify-center gap-4">
          <motion.div
            key={left.id}
            className="hidden w-72 shrink-0 overflow-hidden rounded-3xl border border-border/40 bg-background/70 shadow-soft lg:block"
            initial={{ opacity: 0.5, scale: 0.95, x: -20 }}
            animate={{ opacity: 0.75, scale: 0.95, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={left.src} alt={left.alt} className="h-72 w-full object-cover" />
            <div className="p-4 text-sm font-semibold text-text">{left.title}</div>
          </motion.div>

          <motion.div
            key={current.id}
            className="relative overflow-hidden rounded-[2.5rem] border border-primary/60 bg-background/80 p-1 shadow-[0_30px_80px_rgba(56,189,248,0.18)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <div className="overflow-hidden rounded-[2.25rem] bg-black">
              <img src={current.src} alt={current.alt} className="h-[26rem] w-full object-cover" />
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-6 mb-6 rounded-3xl bg-black/60 px-5 py-4 text-white shadow-soft backdrop-blur">
              <h3 className="text-2xl font-semibold">{current.title}</h3>
            </div>
          </motion.div>

          <motion.div
            key={right.id}
            className="hidden w-72 shrink-0 overflow-hidden rounded-3xl border border-border/40 bg-background/70 shadow-soft lg:block"
            initial={{ opacity: 0.5, scale: 0.95, x: 20 }}
            animate={{ opacity: 0.75, scale: 0.95, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={right.src} alt={right.alt} className="h-72 w-full object-cover" />
            <div className="p-4 text-sm font-semibold text-text">{right.title}</div>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 z-20 hidden h-16 w-16 items-center justify-center rounded-full border border-border/70 bg-background/80 text-text transition hover:border-primary hover:text-primary lg:flex"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </SectionShell>
  );
}
