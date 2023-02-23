import { Container, Navbar } from 'react-bootstrap';

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