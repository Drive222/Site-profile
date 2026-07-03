import type { SkillGroup } from '../types/content';

export const skillGroups: SkillGroup[] = [
  {
    id: 'classroom',
    titleKey: 'skills.groups.frontend.title',
    descriptionKey: 'skills.groups.frontend.description',
    items: [
      { labelKey: 'skills.items.react' },
      { labelKey: 'skills.items.typescript' },
      { labelKey: 'skills.items.vite' },
      { labelKey: 'skills.items.tailwind' }
    ]
  },
  {
    id: 'subjects',
    titleKey: 'skills.groups.creative.title',
    descriptionKey: 'skills.groups.creative.description',
    items: [
      { labelKey: 'skills.items.webgl' },
      { labelKey: 'skills.items.canvas' },
      { labelKey: 'skills.items.motion' },
      { labelKey: 'skills.items.designSystems' }
    ]
  },
  {
    id: 'pedagogy',
    titleKey: 'skills.groups.engineering.title',
    descriptionKey: 'skills.groups.engineering.description',
    items: [
      { labelKey: 'skills.items.node' },
      { labelKey: 'skills.items.testing' },
      { labelKey: 'skills.items.accessibility' },
      { labelKey: 'skills.items.performance' }
    ]
  }
];
