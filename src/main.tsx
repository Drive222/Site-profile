import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n';
import { PortfolioProvider } from './state/PortfolioProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </HelmetProvider>
  </StrictMode>
);
