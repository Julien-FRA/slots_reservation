import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarContainer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CergyOnHair</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="me-auto">
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/users">Users</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/dashboard/shop">Dashboard</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;