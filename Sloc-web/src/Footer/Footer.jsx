import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaSnapchat, FaTelegram } from 'react-icons/fa';
import Logo from '../assets/Imgs/Footer-logo.png'
import Instagram from '../assets/Imgs/ig.svg'
import Facebook from '../assets/Imgs/facbook.svg'
import linkdin from '../assets/Imgs/Linkdin.svg'


const Footer = () => {
  return (
    <>
    <section className="Disclamer">
<Container>
  <p className='Dis'>Disclaimer : The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed. Users of this website are hereby advised to exercise due diligence and to independently validate and verify all information about any property / project before deciding to purchase the same or taking any other action. The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. All trademarks are the property of their respective owners.</p>
</Container>
    </section>
    <footer className="">
      <Container>
        <Row className="mb-4 justify-content-between">
          <Col lg={5} md={6} className="mb-4 mb-md-0 p-0">
            <div className="footer-logo">
           <a href='/'><p className='Logo'>SLOC</p></a>
            </div>
            <p className="my-3 set-wi">
            We bring you the finest real estate choices with trust and excellence. Get set to Dream, Discover, and Deal.
            </p>

            <div className="mb-2">
              <h6 className="text-uppercase ft-font">FOLLOW US AT</h6>
            </div>
            <div className="d-flex gap-4 mt-4">
              <a href="#" className="">
                <img src={linkdin} />
              </a>
              {/* <a href="#" className="">
              <img src={Twitter} />
              </a> */}
              <a href="#" className="">
              <img src={Instagram} />
              </a>
              <a href="#" className="">
              <img src={Facebook} />
              </a>
              {/* <a href="#" className="">
              <img src={telegram} />
              </a> */}
            </div>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">QUICK LINKS</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">BLOG</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">CONTACT US</a>
              </li>

            </ul>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">Policies</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">Disclaimer </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none  small">Terms & Conditions</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">INFORMATION</h6>
            <p className="small mb-1">15th Floor, Ocus Quantum,</p>
            <p className="small mb-1">Sector-51, Gurugram, Haryana</p>
            <p className="small mb-3">122003 </p>
            <p className="small my-3">contact@sloc.in</p>
            <p className="small mb-1">+971 4 542 4200</p>
          </Col>
        </Row>

        <Row className='border-top-set pt-3 mt-2'>
          <Col className="text-center small">
            <p className="mb-0 copyright">© Copyright 2025 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default Footer;
