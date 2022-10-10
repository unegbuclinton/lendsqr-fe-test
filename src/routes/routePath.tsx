import { Outlet } from 'react-router-dom';
import SideBar from '../components/molecules/sidebar/SideBar';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/loginPage/Login';

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
    element: <SideBar />,
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
