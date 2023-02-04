import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import BtnLink from '../Button/BtnLink';
import BtnSubmit from '../Button/BtnSubmit';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid="xl">
        <Navbar.Brand>CergyOnHair</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <BtnLink link='/' placeholder='Home' className='btn-link' />
            </Nav.Link>
            <Nav.Link>
              <BtnLink link='/users' placeholder='Users' className='btn-link' />  
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <BtnLink link='/login' placeholder='Login' className='btn btn-dark' />  
          <BtnLink link='/register' placeholder='Register' className='btn btn-secondary' />  
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header