import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './overrides.css';
import './brand-refresh.css';
import './blondie.css';
import './final-fixes.css';
import './dbt-lab.css';
import './dbt-engine.css';
import './feelings-wheel.css';
import './brand-enhancements.js';
import './blondie-enhancements.js';
import './asset-path-fixes.js';
import './dbt-lab.js';
import './feelings-wheel.js';
import './dbt-engine.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  });
}
