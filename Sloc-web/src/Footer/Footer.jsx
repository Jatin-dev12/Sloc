import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaSnapchat, FaTelegram } from 'react-icons/fa';
import Logo from '../assets/Imgs/SLOC.png'
import Instagram from '../assets/Imgs/ig.svg'
import Facebook from '../assets/Imgs/facbook.svg'
import Twitter from '../assets/Imgs/twiter.svg'
import linkdin from '../assets/Imgs/Linkdin.svg'
import telegram from '../assets/Imgs/telegram.svg'





const Footer = () => {
  return (
    <footer className="">
      <Container>
        <Row className="mb-4 justify-content-between">
          <Col lg={5} md={6} className="mb-4 mb-md-0">
            <div className="footer-logo">
              <img src={Logo} />
            </div>
            <p className=" my-3">
              We Are A Team Of Seasoned And Innovative Professionals, Whether You Want A Rejuvenating Swimming Pool Addition Or Appealing Landscaping Features.
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
                <a href="#" className="text-decoration-none text-dark small">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">BLOG</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">CONTACT US</a>
              </li>

            </ul>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">Policies</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">Disclaimer </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">Terms & Conditions</a>
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
            <p className="small mb-1">+919971094108</p>
          </Col>
        </Row>

        <Row className='border-top pt-3 mt-2'>
          <Col className="text-center small">
            <p className="mb-0 copyright">© Copyright 2025 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
