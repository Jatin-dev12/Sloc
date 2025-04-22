import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaSnapchat, FaTelegram } from 'react-icons/fa';
import Logo from '../assets/Imgs/Footer-logo.png'
import Instagram from '../assets/Imgs/ig.svg'
import Facebook from '../assets/Imgs/facbook.svg'
import linkdin from '../assets/Imgs/Linkdin.svg'
import { Link } from 'react-router-dom';


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
          <Col lg={5} md={6} className="mb-4 mb-md-0 p-md-0">
            <div className="footer-logo">
          <Link to='/'><p className='Logo'>SLOC</p></Link>
            </div>
            <p className="my-2" >
            We bring you the finest real estate choices with trust and excellence. Get set to Dream, Discover, and Deal.

            </p>
             <p className="my-3 set-wi">HARYANA RERA - HRERA-PKL-REA-3396-2025</p>

            <div className="mb-2">
              <h6 className="text-uppercase ft-font">FOLLOW US AT</h6>
            </div>
            <div className="d-flex gap-4 mt-4">
             <Link to="#" className="">
                <img src={linkdin} />
              </Link>
              {/*<Link to="#" className="">
              <img src={Twitter} />
              </Link> */}
             <Link to="#" className="">
              <img src={Instagram} />
              </Link>
             <Link to="#" className="">
              <img src={Facebook} />
              </Link>
              {/*<Link to="#" className="">
              <img src={telegram} />
              </Link> */}
            </div>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0 res-st">
            <h6 className="text-uppercase ft-font mb-3">QUICK LINKS</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
               <Link to="/" className="text-decoration-none  ">Home</Link>
              </li>
              <li className="mb-2">
               <Link to="/About" className="text-decoration-none  ">About Us</Link>
              </li>
              <li className="mb-2">
               <Link to="/Blogs" className="text-decoration-none  ">BLOG</Link>
              </li>
              <li className="mb-2">
               <Link to="/contact" className="text-decoration-none  ">CONTACT US</Link>
              </li>

            </ul>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0 res-st">
            <h6 className="text-uppercase ft-font mb-3">Policies</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
               <Link to="/Disclaimer" className="text-decoration-none  ">Disclaimer </Link>
              </li>
              <li className="mb-2">
               <Link to="/Privacy" className="text-decoration-none  ">Privacy Policy</Link>
              </li>
              <li className="mb-2">
               <Link to="/Terms" className="text-decoration-none  ">Terms & Conditions</Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0 res-st">
            <h6 className="text-uppercase ft-font mb-3">INFORMATION</h6>
            <p className=" mb-1">15th Floor, Ocus Quantum,</p>
            <p className=" mb-1">Sector-51, Gurugram, Haryana</p>
            <p className=" mb-3">122003 </p>
            <p className=" my-3">contact@sloc.in</p>
            <p className=" mb-1">+919971094108</p>
          </Col>
        </Row>

        <Row className='border-top-set pt-3 mt-2'>
          <Col className="text-center ">
            <p className="mb-0 copyright">© Copyright 2025 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default Footer;
