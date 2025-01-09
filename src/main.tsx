import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { DietProvider } from './context/DietContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DietProvider>
      <App />
    </DietProvider>
  </StrictMode>,
);
