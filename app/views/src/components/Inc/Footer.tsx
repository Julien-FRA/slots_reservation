import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import BtnLink from '../Button/BtnLink';
import BtnSubmit from '../Button/BtnSubmit';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='fixed-bottom'>
      <Container fluid="xl">
        <Navbar.Brand className='d-block mx-auto'>Copyright©2023 CergyOnHair</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Footer