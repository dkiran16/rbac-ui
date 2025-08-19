import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminTopNavbar from './AdminTopNavbar';
import UserTopNavbar from './UserTopNavbar';
import PublicAppLayout from './PublicAppLayout';

const AppLayout = () => {    
    // const [showAdminTopNavbar,setShowAdminTopNavbar] = useState(false);
    // const [showUserTopNavbar,setShowUserTopNavbar] = useState(false);

  const isAuthenticated = !!localStorage.getItem('jwt');
  const role =  localStorage.getItem('role');

  return (
    <>
     {role === "Admin" && <AdminTopNavbar />}
     {(role === "Editor") && <UserTopNavbar />}
     {(role === "Viewer") && <PublicAppLayout />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
