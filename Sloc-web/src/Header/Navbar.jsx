import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Imgs/SLOC.png'

export default function Header() {
  return (
    <>
    <main>
{/* <section className='Topbar'>
        <Container>
         <Row className='justify-content-between'>
<Col>
<p>Search Land of Choice</p>
</Col>
<Col className='d-flex'>
<Col className='Side d-flex gap-3  justify-content-end' > <p>+971 4 542 4200</p>
<p>+919971094108</p></Col>


<p>contact@sloc.in</p>

</Col>
         </Row>
        </Container>
      </section> */}
<Navbar expand="md" className="Main-nav" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">
      <p className="Logo">SLOC</p>
    </Navbar.Brand>

    {/* Toggle Button */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {/* Collapsible Nav Items */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About Us</Nav.Link>
        <Nav.Link href="/Blogs">Blogs</Nav.Link>
        <Nav.Link href="#" className="cntnct">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </main>
    </>
  )
}
