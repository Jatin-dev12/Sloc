import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Imgs/SLOC.png";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <main className="menu">
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
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  data-text="Home"
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className={`nav-link ${isActive("/about-us") ? "active" : ""}`}
                  data-text="About Us"
                >
                  About Us
                </Link>
                <Link
                  to="/blog-listing"
                  className={`nav-link ${isActive("/blog-listing") ? "active" : ""}`}
                  data-text="Blogs"
                >
                  Blogs
                </Link>
                <Link
                  to="/contact-us"
                  className={`nav-link cntnct all-same-ani ${
                    isActive("/contact") ? "active" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </main>
    </>
  );
}
