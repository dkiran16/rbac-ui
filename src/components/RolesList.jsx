import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { getAllRoles } from '../services/RoleService';

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  //TODO: get data from API
    const fetchData = async () => {
      try {
        const apiData = await getAllRoles();
        setRoles(apiData);
      } 
      catch (ex) {
        //setError(err.message);
        console.error('Error fetching items:', ex);
      }
    };

  useEffect(() => {
    //alert('test- RoleList- mounted');    
    fetchData();
  }, []); 


  return (
  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Role Name</th>
          <th>Descriptions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          roles.map( (role, index) => (
            <tr key={index}>
              <td>{ role.id }</td>
              <td>{ role.name }</td>
              <td>{ role.description }</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </div>);
}

export default RoleList;
