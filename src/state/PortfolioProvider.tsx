import { type PropsWithChildren, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import type { SectionId } from '../types/content';
import { initialPortfolioState, PortfolioContext, portfolioReducer, type ThemeMode } from './portfolioContext';

const themeStorageKey = 'portfolio-theme';

function readStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return initialPortfolioState.theme;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : initialPortfolioState.theme;
}

export function PortfolioProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(portfolioReducer, initialPortfolioState, (stateValue) => ({
    ...stateValue,
    theme: readStoredTheme()
  }));
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    window.localStorage.setItem(themeStorageKey, state.theme);
  }, [state.theme]);

  const setActiveSection = useCallback((sectionId: SectionId) => {
    dispatch({ type: 'setActiveSection', sectionId });
  }, []);

  const setMobileNavOpen = useCallback((isOpen: boolean) => {
    dispatch({ type: 'setMobileNavOpen', isOpen });
  }, []);

  const setTheme = useCallback((theme: ThemeMode) => {
    dispatch({ type: 'setTheme', theme });
  }, []);

  const toggleTheme = useCallback(() => {
    dispatch({ type: 'toggleTheme' });
  }, []);

  const scrollToSection = useCallback(
    (sectionId: SectionId) => {
      const target = document.getElementById(sectionId);
      if (!target) {
        return;
      }

      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${sectionId}`);
      dispatch({ type: 'setActiveSection', sectionId });
      setMobileNavOpen(false);
    },
    [setMobileNavOpen]
  );

  const value = useMemo(
    () => ({
      ...state,
      mainRef,
      setActiveSection,
      setMobileNavOpen,
      setTheme,
      toggleTheme,
      scrollToSection
    }),
    [scrollToSection, setActiveSection, setMobileNavOpen, setTheme, state, toggleTheme]
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}
