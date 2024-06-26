import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Contacts } from '../pages/Contacts';
import { Lab } from '../components/Lab';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/lab',
        element: <Lab />,
      },
    ],
  },
]);
