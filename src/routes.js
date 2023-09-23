import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import ClientsPage from './pages/ClientsPage';
import Page404 from './pages/Page404';
import AddClientPage from './pages/AddClientPage'
import AddSensorPage from './pages/AddSensorPage'
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <ClientsPage /> },
        { path: 'dispositivos', element: <ClientsPage /> },
        { path: 'dispositivos/new', element: <AddClientPage/> },
        { path: 'sensors/new/:id', element: <AddSensorPage/> },

      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
