import { createBrowserRouter } from 'react-router-dom';
import { CatalogPage } from '../../../pages/CatalogPage';
import { ErrorPage } from '../../../pages/ErrorPage';
import { MainLayout } from '../../MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
    ],
  },
]);
