
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import ProtectedRoute from './ProtectedRoute';
import ManageUsers from './components/ManageUsers';
import ManageRoles from './components/ManageRoles';
import NotFoundPage from './components/NotFound';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import HomePage from './components/Home';
import AppLayout from './AppLayout';
import PublicAppLayout from './PublicAppLayout';
import UserLogout from './UserLogout';

const MyRouter = createBrowserRouter(
  [    
    {
      path: '/',
      element: <PublicAppLayout />,   // 👈 Wrap public pages
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: 'home', element: <HomePage /> },
        { path: 'user-login', element: <UserLogin /> },
        { path: 'user-logout', element: <UserLogout /> }
      ]
    },
    {
      path: '*',
      element: <NotFoundPage/>
    },
    {
      element: <ProtectedRoute />,
      children:[{
        element: <AppLayout/>,
        children: [
          {
              path:'/admin-dashboard',
              element: <AdminDashboard />
          },
          {
              path:'/user-dashboard',
              element: <UserDashboard/>
          },
          {
            path: '/manage-roles',
            element: <ManageRoles />
          },
          {
            path: '/manage-users',
            element: <ManageUsers />
          },
        ]
      }],
    }
  ]
);

export default MyRouter;