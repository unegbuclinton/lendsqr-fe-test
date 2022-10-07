import { Outlet } from 'react-router-dom';

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
  // {
  //   path: '/login',
  //   element: <LogIn />
  // },
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
