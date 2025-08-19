import React, { useEffect, useState } from 'react';
import { login } from '../services/AuthService';
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

    const sendUser = async () => {
      try {
        var decodedToken = await login(user);
        if(decodedToken != null) {
          console.log("Login successful, navigating to dashboard");          
          
          localStorage.setItem('role', decodedToken.role);

          if (decodedToken.role === "Admin") {
             navigate("/admin-dashboard");
          }
          else if ((decodedToken.role === "Editor") || (decodedToken.role === "Viewer")){
             navigate("/user-dashboard");
          }
         
        } else {
            setError(decodedToken.message);
        }
      } catch (ex) {      
        console.error('Error fetching items:', ex);
        const msg = ex.response?.data?.message || ex.message || "Login failed";
        setError(msg);
        alert('login failed --> ' + msg);
      }
    };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    sendUser();
  };
  
    useEffect(() => {
      
    }, []); 

  return (  
    <form onSubmit={handleSubmit} style={{ padding: '20px',textAlign:'left' }}>
      <label>username</label>
      <input type="text" name="username" placeholder="name" value={user.username} onChange={handleChange} />
      <label>Password</label>
      <input type="password" name="password" placeholder="password" value={user.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
