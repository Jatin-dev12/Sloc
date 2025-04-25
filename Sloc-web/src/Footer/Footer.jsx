import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTelegram,
} from "react-icons/fa";
import Logo from "../assets/Imgs/Footer-logo.png";
import Instagram from "../assets/Imgs/ig.svg";
import Facebook from "../assets/Imgs/facbook.svg";
import linkdin from "../assets/Imgs/Linkdin.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <>
          {location.pathname !== "/Disclaimer" && (
      <section className="Disclamer">
        <Container>
          <p className="Dis">
            Disclaimer : The content provided on this website is for information
            purposes only and does not constitute an offer to avail any service.
            The prices mentioned are subject to change without prior notice, and
            the availability of properties mentioned is not guaranteed. Users of
            this website are hereby advised to exercise due diligence and to
            independently validate and verify all information about any property
            / project before deciding to purchase the same or taking any other
            action. The images displayed on the website are for representation
            purposes only and may not reflect the actual properties accurately.
            Please note that this is the official website of an authorized
            marketing partner. The content, design, and information on this
            website are protected by copyright and other intellectual property
            rights. Any unauthorized use or reproduction of the content may
            violate applicable laws. All trademarks are the property of their
            respective owners.
          </p>
        </Container>
      </section>
            )}

      <footer className="">
        <Container>
          <Row className="mb-4 justify-content-between">
            <Col lg={5} md={6} className="mb-4 mb-md-0 p-md-0">
              <div className="footer-logo">
                <Link to="/">
                  <p className="Logo">SLOC</p>
                </Link>
              </div>
              <p className="my-3 set-wi">
                We bring you the finest real estate choices with trust and
                excellence. Get set to Dream, Discover, and Deal.
              </p>

              <div className="mb-2">
                <h6 className="text-uppercase ft-font">FOLLOW US AT</h6>
              </div>
              <div className="d-flex gap-4 mt-4">
                <Link
                  to="https://www.linkedin.com/company/india-sloc"
                  target="blank"
                  className=""
                >
                  <img src={linkdin} />
                </Link>

                <Link to="https://www.instagram.com/sloc.in/" className="" target='blank'>
                  <img src={Instagram} />
                </Link>
                <Link to="https://www.facebook.com/sloc.in" className="" target='blank'>
                  <img src={Facebook} />
                </Link>
              </div>
            </Col>

            <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0 res-st">
              <h6 className="text-uppercase ft-font mb-3">QUICK LINKS</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none  ">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about-us" className="text-decoration-none  ">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog-listing" className="text-decoration-none  ">
                    BLOG
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact-us" className="text-decoration-none  ">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0 res-st">
              <h6 className="text-uppercase ft-font mb-3">Policies</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/disclaimer" className="text-decoration-none  ">
                    Disclaimer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy-policy" className="text-decoration-none  ">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms-and-conditions" className="text-decoration-none  ">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={2} md={6} className="mb-4 mb-md-0 res-st">
              <h6 className="text-uppercase ft-font mb-3">INFORMATION</h6>
              <p className=" mb-1">15th Floor, Ocus Quantum,</p>
              <p className=" mb-1">Sector-51, Gurugram, Haryana, 122003 </p>
              <p className=" my-3">
                <a href="mailto:contact@sloc.in">contact@sloc.in</a>{" "}
              </p>
              <p className=" mb-1">
                <a href="tel:+919971094108">+919971094108</a>
              </p>
            </Col>
          </Row>

          <Row className="border-top-set pt-3 mt-2">
            <Col className="text-center ">
              <p className="mb-0 copyright">
                © Copyright 2025 | All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
