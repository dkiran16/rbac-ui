import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AdminTopNavbar() {
  return ( 
    <div>      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">RBAC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>       
            <Nav.Link href="/user-dashboard">User Dashboard</Nav.Link> 
            <Nav.Link href="/admin-dashboard">Admin Dashboard</Nav.Link> 
            <Nav.Link href="/user-login">Login</Nav.Link>   
            <Nav.Link href="/user-logout">Logout</Nav.Link>   
          </Nav>
        </Container>
      </Navbar>
    </div>   
  );
}

export default AdminTopNavbar;