import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar() {
  return ( 
    <div>      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">RBAC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>       
            <Nav.Link href="/user-login">Login</Nav.Link>   
            <Nav.Link href="/user-logout">Logout</Nav.Link>   
          </Nav>
        </Container>
      </Navbar>
    </div>   
  );
}

export default TopNavbar;