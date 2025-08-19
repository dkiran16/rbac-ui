import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { addRole } from '../services/RoleService';

const AddRole = ( { onBack } ) => {
  const [role, setRole] = useState({ id: 0, name: '', description: '' });

  const handleChange = (e) => {
    setRole({ ...role, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
    //TODO: Send the data to API
    const fetchData = async (data) => {
          try {
            const apiData = await addRole(data);
            setRole(apiData);
          } 
          catch (ex) {
            //setError(err.message);
            console.error('Error fetching items:', ex);
          }
        };
     fetchData(role);
    };    
        
    
 

  return (
    <div>
      <h3 style={{ textAlign: 'left' }}>Add Roles</h3>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <label>Id</label>
        <input type="text"
          name="id"
          placeholder="id"
          value={role.id}
          onChange={handleChange}
        />
        <label>Name</label>
        <input type="text"
          name="name"
          placeholder="name"
          value={role.name}
          onChange={handleChange}
        />
        <label>Description</label>
        <input type="text"
          name="description"
          placeholder="description"
          value={role.description}
          onChange={handleChange}
        />
        <Button variant="secondary"  onClick={onBack}>Cancel</Button>
        <Button variant="success" type="submit">Save</Button>
      </form>
    </div>
  );
};

export default AddRole;
