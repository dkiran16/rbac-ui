import React, { useEffect, useState } from 'react';
import { getAllUsers} from '../services/UserService'
import { Table } from 'react-bootstrap'; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {      
      var data = await getAllUsers();
      setUsers(data);
    } catch (ex) {      
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
              <th>User Name</th>
              <th>Role Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.roleName}</td>
              </tr>
            ))}
          </tbody>
      </Table>
    </div>
  );
};

export default UserList;
