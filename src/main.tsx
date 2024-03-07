import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router/router';

const container = document.getElementById('root');

if (!container) {
  throw new Error('The root container was not found. Failed to mount react application');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
