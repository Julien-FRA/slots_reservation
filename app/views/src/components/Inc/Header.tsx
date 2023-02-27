import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import BtnLink from '../Button/BtnLink';
import BtnSubmit from '../Button/BtnSubmit';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid="xl">
        <Navbar.Brand>CergyOnHair</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav>
              <BtnLink link='/' placeholder='Home' className='btn-link' />
            </Nav>
            <Nav>
              <BtnLink link='/profil' placeholder='Profil' className='btn-link' />  
            </Nav>
            <Nav>
              <BtnLink link='/dashboard/shop' placeholder='Dashboard' className='btn-link' />  
            </Nav>
            <Nav>
              <BtnLink link='/dashboard/shop' placeholder='Dashboard' className='btn-link' />  
            </Nav>
          </Nav>
          <Form className="d-flex">
          <BtnLink link='/login' placeholder='Login' className='btn btn-dark mx-2' />  
          <BtnLink link='/register' placeholder='Register' className='btn btn-secondary mx-2' />  
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header