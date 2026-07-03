export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'projects'
  | 'languages'
  | 'experience'
  | 'certificates'
  | 'contact';

export type TranslationKey = string;

export type NavRoute = {
  id: SectionId;
  labelKey: TranslationKey;
};

export type CtaVariant = 'primary' | 'secondary';

export type HeroCta = {
  labelKey: TranslationKey;
  targetId: SectionId;
  variant: CtaVariant;
};

export type ProfileContent = {
  hero: {
    eyebrowKey: TranslationKey;
    titleKey: TranslationKey;
    nameKey: TranslationKey;
    professionKey: TranslationKey;
    introKey: TranslationKey;
    ctas: HeroCta[];
  };
  about: {
    photoAltKey: TranslationKey;
    bioKeys: TranslationKey[];
    summaryKeys: TranslationKey[];
  };
};

export type SkillItem = {
  labelKey: TranslationKey;
};

export type SkillGroup = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  items: SkillItem[];
};

export type ProjectLink = {
  labelKey: TranslationKey;
  href: string;
};

export type Project = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  imageAltKey: TranslationKey;
  tagKeys: TranslationKey[];
  links: ProjectLink[];
};

export type TimelineItem = {
  id: string;
  titleKey: TranslationKey;
  organizationKey: TranslationKey;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
};

export type Certificate = {
  id: string;
  titleKey: TranslationKey;
  issuerKey: TranslationKey;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
  link?: string;
};

export type ContactLink = {
  id: string;
  labelKey: TranslationKey;
  href: string;
};

export type ContactContent = {
  email: string;
  links: ContactLink[];
};
