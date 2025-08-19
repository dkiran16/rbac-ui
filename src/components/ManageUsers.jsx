import { Button, Container } from 'react-bootstrap';
import AddUser from './AddUser';
import UserList from './UserList';
import React, { useState } from 'react';


const ManageUsers = () =>{
    
      const [showAddUser, setShowAddUser] = useState(false);
        const handleAddUserClick = () => {
            setShowAddUser(true); // or toggle with !showAddRoles
        };

    return (
        <div>
            <Container>
                <h2>ManageUsers</h2>
                {!showAddUser && (
                    <Button variant="primary" onClick={handleAddUserClick}>
                    + Add User
                    </Button>
                )}
                

                {showAddUser && <AddUser onBack={() => setShowAddUser(false)}/>}
                <UserList/>
            </Container>
        </div>
    );

}

export default ManageUsers;