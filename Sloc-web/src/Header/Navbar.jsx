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

      <Navbar className='Main-nav'>
        <Container >
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>


            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="#">Blogs</Nav.Link>
            <Nav.Link href="#" className='cntnct'>Contact Us</Nav.Link>


          </Nav>
        </Container>
      </Navbar>

    </main>
    </>
  )
}
