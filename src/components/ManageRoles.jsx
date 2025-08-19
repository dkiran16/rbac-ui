
import AddRole from './AddRole';
import RolesList from './RolesList';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function ManageRoles() {
  
  const [showAddRoles, setShowAddRoles] = useState(false);

  const handleAddRolesClick = () => {
    setShowAddRoles(true); // or toggle with !showAddRoles
  };

    return (
    <div>    
        <Container>
        <h2>ManageRoles</h2>
          {!showAddRoles && (
            <Button variant="primary" onClick={handleAddRolesClick}>
              + Add Roles
            </Button>
          )}

          {showAddRoles && <AddRole onBack={() => setShowAddRoles(false)}/>}
          <RolesList />
        </Container>
    </div>
  );
}

export default ManageRoles;