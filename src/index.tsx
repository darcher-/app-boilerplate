import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'Components';
import { logWebVitals } from 'Resources';

createRoot(document.body).render(
  <React.StrictMode>
    <main
      role="main"
      key="__approot"
    >
      <App />
    </main>
  </React.StrictMode>,
);

logWebVitals(console.info);
