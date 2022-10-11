import { Outlet } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboardLayout/DashboardLayout';
import EmptyState from '../components/molecules/emptystate/EmptyState';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/loginPage/Login';
import UserDetails from '../pages/userdetails/UserDetails';

export const privateRoutes = [
  {
    path: 'dashboard/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <div>Hello World</div>,
      },
      {
        path: 'smart',
        element: <p>Living the life</p>,
      },
      {
        path: 'contact',
        element: <h1>New Year</h1>,
      },
    ],
  },
];

export const publicRoutes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/test',
    element: <UserDetails />,
  },
  {
    path: '*',
    element: (
      <DashboardLayout>
        <EmptyState />
      </DashboardLayout>
    ),
  },

  {
    path: '/sign',
    element: <div>Public</div>,
    children: [
      {
        path: 'no-path',
        element: <div> Hello World</div>,
      },
    ],
  },
];
