import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear stored token
    localStorage.removeItem('jwt');

    // Optional: clear other app state if needed (like Redux, etc.)

    // Redirect to login or home
    navigate('/user-login', { replace: true });
  }, [navigate]);
  const msg = "Logedout Succesfully..";
  console.log(msg);
  return msg; // or return a loading spinner/message
};

export default UserLogout;
