import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem('jwt');
  const role =  localStorage.getItem('role');
  //return isAuthenticated ? <Outlet /> : <Navigate to="/user-login" replace />;
  
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/user-login" replace />;
  }

  // OPTIONAL: Restrict admin-only pages
  const isAdminRoute = location.pathname.startsWith('/admin');
  if (isAdminRoute && role !== 'Admin') {
    return <Navigate to="/user-dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
