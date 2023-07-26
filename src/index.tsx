import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Overview from './pages/OverviewPage';
import AlgSetPage from './pages/AlgSetPage';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

const router = createBrowserRouter([
  {
    path: '',
    element: <Overview />,
  },
  {
    path: 'sets/:set',
    element: <AlgSetPage />,
  }
]);

root.render(
  <RouterProvider router={router} />
);
