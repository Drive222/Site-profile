import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { StarryBackground } from './components/effects/StarryBackground';
import { AboutSection } from './components/sections/AboutSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { LanguagesSection } from './components/sections/LanguagesSection';
import { Navigation } from './components/layout/Navigation';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { useSectionObserver } from './hooks/useSectionObserver';
import { sectionRoutes } from './routes/sections';
import { usePortfolio } from './state/usePortfolio';

const observedSectionIds = sectionRoutes.map((route) => route.id);

function App() {
  const { t, i18n } = useTranslation();
  const { mainRef } = usePortfolio();

  useSectionObserver(observedSectionIds);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <StarryBackground />
      <Navigation />
      <main ref={mainRef} className="relative z-10 pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LanguagesSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}

export default App;
