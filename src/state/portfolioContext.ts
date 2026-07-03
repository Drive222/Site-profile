import { createContext, type RefObject } from 'react';
import type { SectionId } from '../types/content';

export type ThemeMode = 'dark' | 'light';

export type PortfolioState = {
  activeSection: SectionId;
  isMobileNavOpen: boolean;
  theme: ThemeMode;
};

export type PortfolioAction =
  | { type: 'setActiveSection'; sectionId: SectionId }
  | { type: 'setMobileNavOpen'; isOpen: boolean }
  | { type: 'setTheme'; theme: ThemeMode }
  | { type: 'toggleTheme' };

export type PortfolioContextValue = PortfolioState & {
  mainRef: RefObject<HTMLElement>;
  setActiveSection: (sectionId: SectionId) => void;
  setMobileNavOpen: (isOpen: boolean) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  scrollToSection: (sectionId: SectionId) => void;
};

export const initialPortfolioState: PortfolioState = {
  activeSection: 'hero',
  isMobileNavOpen: false,
  theme: 'dark'
};

export const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function portfolioReducer(state: PortfolioState, action: PortfolioAction): PortfolioState {
  switch (action.type) {
    case 'setActiveSection':
      return { ...state, activeSection: action.sectionId };
    case 'setMobileNavOpen':
      return { ...state, isMobileNavOpen: action.isOpen };
    case 'setTheme':
      return { ...state, theme: action.theme };
    case 'toggleTheme':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      return state;
  }
}
