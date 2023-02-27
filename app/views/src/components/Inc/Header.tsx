import React, { useContext, useEffect } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { logoutUser } from '../../services/UserRequest';
import BtnLink from '../Button/BtnLink';

const Header = () => {
  // Récupérer le context
  const [users, setUsers] = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {
    console.log(users)
  }, [users])

  const handleLogout = async () => {
      await logoutUser()
      setTimeout(() => {
        navigate('/login')
        window.location.reload();
      }, 1000)
  }

  let menu;

  if (users) {
    menu = (
      <Link to='/login' className='btn btn-primary mx-2' onClick={handleLogout}>Logout</Link>
    )
  } else {
    menu = (
      <>
        <BtnLink link='/login' placeholder='Login' className='btn btn-dark mx-2' />  
        <BtnLink link='/register' placeholder='Register' className='btn btn-secondary mx-2' />  
      </>
    )
  }

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
          {menu}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header