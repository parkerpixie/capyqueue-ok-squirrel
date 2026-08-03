import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './asset-path-fix.js';
import './styles.css';
import './overrides.css';
import './brand-refresh.css';
import './blondie.css';
import './asset-path-fix.css';
import './brand-enhancements.js';
import './blondie-enhancements.js';

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
