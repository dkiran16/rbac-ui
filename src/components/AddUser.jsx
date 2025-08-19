import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {getAllRoles} from '../services/RoleService';
import {addUser} from '../services/UserService';

const AddUser = () => {
  const [user, setUser] = useState({ username: '', password: '', roleId: 0 });
  const [roles, setRoles] = useState([]);
  
    const fetchRoles = async () => {
      try {      
        var data = await getAllRoles();
        setRoles(data);
      } catch (ex) {      
        //setError(err.message);
        console.error('Error fetching items:', ex);
      }
    };

    const saveUser = async () => {
      try {
        var data = await addUser(user);
      } catch (ex) {      
        //setError(err.message);
        console.error('Error fetching items:', ex);
      }
    };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    saveUser();
  };

  
    useEffect(() => {
      //alert('test- RoleList- mounted'); 
      fetchRoles();
    }, []); 

  return (
    <div>
       <h3 style={{textAlign:'left'}}   >Add User</h3>
    
    <form onSubmit={handleSubmit} style={{ padding: '20px',textAlign:'left' }}>
      <label>username</label>
      <input name="username" placeholder="name" value={user.username} onChange={handleChange} />
      <label>Password</label>
      <input name="password" placeholder="password" value={user.password} onChange={handleChange} />
      <label>Role</label>
      <select name="roleId" onChange={handleChange}>        
        <option>select role</option>
        {
          roles.map( (role, index) => (
            <option key={index} value={role.id}>{ role.name }</option>            
          ))
        }
      </select>
      <button type="submit">Save User</button>
    </form>
    </div>
  );
};

export default AddUser;
