import type { ProfileContent } from '../types/content';

export const profileContent: ProfileContent = {
  hero: {
    eyebrowKey: 'hero.eyebrow',
    titleKey: 'hero.title',
    nameKey: 'hero.name',
    professionKey: 'hero.profession',
    introKey: 'hero.intro',
    ctas: [
      { labelKey: 'hero.cta.primary', targetId: 'projects', variant: 'primary' },
      { labelKey: 'hero.cta.secondary', targetId: 'contact', variant: 'secondary' }
    ]
  },
  about: {
    photoAltKey: 'about.photoAlt',
    bioKeys: ['about.bio.first', 'about.bio.second'],
    summaryKeys: ['about.summary.items.product', 'about.summary.items.interface', 'about.summary.items.delivery']
  }
};
