import { useEffect } from 'react';
import type { SectionId } from '../types/content';
import { usePortfolio } from '../state/usePortfolio';

export function useSectionObserver(sectionIds: SectionId[]) {
  const { setActiveSection } = usePortfolio();

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return undefined;
    }

    function updateActiveSection() {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const offsets = sections.map((section) => {
        const top = section.getBoundingClientRect().top - headerHeight;
        return { id: section.id as SectionId, top };
      });

      const current = offsets
        .filter((entry) => entry.top <= 20)
        .sort((a, b) => b.top - a.top)[0] ?? offsets.sort((a, b) => Math.abs(a.top) - Math.abs(b.top))[0];

      if (current?.id) {
        setActiveSection(current.id);
      }
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [sectionIds, setActiveSection]);
}
