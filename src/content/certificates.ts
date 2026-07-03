import type { Certificate } from '../types/content';

export const certificates: Certificate[] = [
  {
    id: 'frontend-architecture',
    titleKey: 'certificates.items.frontendArchitecture.title',
    issuerKey: 'certificates.items.frontendArchitecture.issuer',
    periodKey: 'certificates.items.frontendArchitecture.period',
    descriptionKey: 'certificates.items.frontendArchitecture.description',
    link: 'https://example.com/certificate/informatics-teacher'
  },
  {
    id: 'ux-engineering',
    titleKey: 'certificates.items.uxEngineering.title',
    issuerKey: 'certificates.items.uxEngineering.issuer',
    periodKey: 'certificates.items.uxEngineering.period',
    descriptionKey: 'certificates.items.uxEngineering.description',
    link: 'https://example.com/certificate/education-technology'
  }
];
