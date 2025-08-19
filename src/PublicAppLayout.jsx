// PublicAppLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from './TopNavbar';

const PublicAppLayout = () => {
  return (
    <div>
      {/* Optional: Add a navbar or header here if you want */}
      <TopNavbar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicAppLayout;
