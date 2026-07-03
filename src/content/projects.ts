import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'classroom-portal',
    titleKey: 'projects.items.interfaceLab.title',
    descriptionKey: 'projects.items.interfaceLab.description',
    imageAltKey: 'projects.items.interfaceLab.imageAlt',
    tagKeys: ['projects.tags.education', 'projects.tags.python', 'projects.tags.ui'],
    links: [
      { labelKey: 'projects.links.live', href: 'https://example.com' },
      { labelKey: 'projects.links.source', href: 'https://github.com/example/classroom-portal' }
    ]
  },
  {
    id: 'interactive-lessons',
    titleKey: 'projects.items.dataStory.title',
    descriptionKey: 'projects.items.dataStory.description',
    imageAltKey: 'projects.items.dataStory.imageAlt',
    tagKeys: ['projects.tags.java', 'projects.tags.interactive', 'projects.tags.lesson'],
    links: [
      { labelKey: 'projects.links.live', href: 'https://example.com' },
      { labelKey: 'projects.links.caseStudy', href: 'https://example.com/lesson-plan' }
    ]
  },
  {
    id: 'coding-club',
    titleKey: 'projects.items.systemsKit.title',
    descriptionKey: 'projects.items.systemsKit.description',
    imageAltKey: 'projects.items.systemsKit.imageAlt',
    tagKeys: ['projects.tags.cpp', 'projects.tags.c', 'projects.tags.education'],
    links: [
      { labelKey: 'projects.links.source', href: 'https://github.com/example/coding-club' },
      { labelKey: 'projects.links.docs', href: 'https://example.com/resources' }
    ]
  }
];
