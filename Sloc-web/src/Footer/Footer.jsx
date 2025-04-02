import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaSnapchat, FaTelegram } from 'react-icons/fa';
import Logo from '../assets/Imgs/Logo.png'
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
              <a href="#" className="">
              <img src={Twitter} />
              </a>
              <a href="#" className="">
              <img src={Instagram} />
              </a>
              <a href="#" className="">
              <img src={Facebook} />
              </a>
              <a href="#" className="">
              <img src={telegram} />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">QUICK LINKS</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">ABOUT US</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">MENU</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">PROPERTIES LIST</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">CONTACT US</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">BLOG</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">PROPERTIES</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">GORHE VRINDAVAN</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">SMARTWORLD THE EDITION</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark small">GODREJ ARISTOCRAT</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h6 className="text-uppercase ft-font mb-3">INFORMATION</h6>
            <p className="small mb-1">13TH FLOOR, DLF QUANTUM</p>
            <p className="small mb-1">SECTOR-61, GURGAON, HARYANA -</p>
            <p className="small mb-3">122003</p>
            <p className="small mb-1">+971 4 547 4700</p>
            <p className="small mb-1">+919971094168</p>
          </Col>
        </Row>

        <Row className='border-top pt-3 mt-2'>
          <Col className="text-center small">
            <p className="mb-0 copyright">© COPYRIGHT 2024-25 | ALL RIGHTS RESERVED</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
