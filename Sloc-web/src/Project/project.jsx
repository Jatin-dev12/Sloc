import React from 'react'
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import { Card } from "react-bootstrap";
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import location from './navigate.svg'
import Round from "../assets/Imgs/rt.png";
import Counter from "../Animations/CountUp/CountUp";
import over1 from './over1.svg'
import over2 from './over2.svg'
import over3 from './over3.svg'
import over4 from './over4.svg'
import Icon from '../assets/Imgs/list-icon.svg'
import back from '../assets/Imgs/back-cta.png'

import Struc from './home.png'

function project() {


  return (
    <>
    <main className='project-page'>
 <section className="Main-banner project-baner" data-speed="1.5">
    <Container>
        <Navbar expand="md" className="Main-nav pr" collapseOnSelect>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Overview</Nav.Link>
                <Nav.Link href="/About">Highlights</Nav.Link>
                <Nav.Link href="/Blogs">Amenities</Nav.Link>
                <Nav.Link href="/Blogs">Layout & Pricing</Nav.Link>

                <Nav.Link href="/Blogs">Gallery</Nav.Link>

                <Nav.Link href="/Blogs">EMI Calculator</Nav.Link>

                <Nav.Link href="#" className="cntnct">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Container>
          <Container>
            <Row>
              <Col md={12} className="top-co text-center" >
                <h1>GODREJ VRIKSHYA</h1>
                <p className='loction'><img src={location} style={{marginRight:"10px"}}/> SECTOR-103, GURUGRAM</p>
              </Col>
              <Col>


              </Col>
            </Row>
          </Container>

            <div className='info'>

            <div className='top-line-info'>
                <p>Project RERA No: RC/REP/HARERA/GGM/846/578/2024/73 <span className='brkr'> |  </span>https://haryanarera.gov.in</p>
            </div>
          <div className="d-flex align-items-md-center searc-bar  justify-content-between">

          <div className='form-set'>
                  <form >
                  <h5 className='m-0'>Enquire Now</h5>

                    <div className=" set-ww">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Name"
                        name="name"

                        required
                      />
                    </div>

                    <div className=" input-group long-one">
                      <span className="input-group-text">🇮🇳 +91</span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        name="mobile"

                        required
                      />
                    </div>

                    <div className=" set-ww">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Enter Email"
                        name="email"

                        required
                      />
                    </div>

                    <div className="form-check  text-white">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agree"

                        id="agreeCheck"
                        required
                      />
                      <label className="form-check-label" htmlFor="agreeCheck">
                        I agree to be contacted via <span className='diff-color'>Call, SMS, WhatsApp & Email</span>
                      </label>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-light text-dark">
                        Submit
                      </button>
                    </div>
                  </form>
                  </div>
          </div>
          <div className='lastbar'>
<h6>Find Your Perfect Home with Unbeatable Disc ounts – Up to XX% OFF!</h6>
          </div>
          </div>
        </section>

        <section  className="welcome overview">


  <Container className="py-5 mt-5">
    <Row className="mb-4 d-flex">
      <Col md={6} className="align-content-end head">
        <img src={Round} alt="scroling" className="scrol-top" />

        <h2 className="same-head" >
        Overview
        </h2>
        <p className="same-head-p">
        Godrej Vrikshya – Inspired by Trees, is a luxury residential project situated in Sector-103, Gurugram, along the Dwarka Expressway. Spanning approximately 15 acres, the development comprises six towers, each rising up to 30 floors, offering a total of 621 apartments.
This project offers 2.5 acres of Resort-Style Central Greens, a grand Club-House, an olympic-length infinity edge swimming pool, zen garden, yoga deck, multipurpose court, spa and salon.
This project ensures seamless connectivity to Delhi and other parts of Gurgaon.
        </p>
        <button type="text" className="btn btn-light text-dark">
        Get Brochure
                      </button>
      </Col>
      <Col md={6} className="d-flex flex-wrap four-col-st" >
        <Col md={6} lg={6} className="right res">
          <Card className="">
          <img src={over1} />
            <p>Spanning approximately 15 acres</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-bottom res">
          <Card className="">
          <img src={over2} />

            <p>Resort-Style Central Greens</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-right res" >
          <Card>
          <img src={over3} />

            <p>3 & 4 BHK Apartments</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="left-brdr res">
          <Card className="">
          <img src={over4} />

            <p>3.30 Crore* onwards</p>
          </Card>
        </Col>
      </Col>
    </Row>
  </Container>
</section>



  <section className="list-home">

          <Container fluid className="p-0 px-5">
            <Row className="mb-3 d-flex py-4 align-content-center">
              <Col md={12} className="align-content-center px-5">

                <h2 className="same-head">Highlights</h2>
                <p className="same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           </p>
              </Col>

            </Row>
          </Container>
        </section>
              <section className="blog-text home-text ">
                <Container fluid>
                  <Row className="justify-content-center">
                    <Col md={10} className="all-border contact-set">
                      <Row className="">
                        <Col md={6} className="justify-content-center btm-s">
<img src={Struc} className='home-struct' />
                        </Col>
                        <Col md={6} className="justify-content-center cntnct align-content-center btm-s struk-li ">
             <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Villa</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Well-connected to dwarka expressway</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Provide easy access to major hubs in Gurgaon and Delhi</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Total land area of the project is approximately 15 acres</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>One of the lowest density project on dwarka expressway </span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Approximately 75% is dedicated to open spaces </span>
                    </li>
                    {/* <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Based on forest theme with 800+ trees</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Includes resort-style amenities in 90,000 Sq.Ft. clubhouse</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <img src={Icon} className="text-primary me-2 "/>
                      <span>Equipped with high-end interiors and Italian marble flooring</span>
                    </li> */}
                  </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>


                <section  className="Cta position-relative">
                        <Container>
                          <Row className="d-flex align-items-center justify-content-center ">
                            <Col md={8}>
                              <h2 className="same-head">Let’s Find Your Perfect Property!</h2>
                              <p className="same-head-p">
                              Your dream home or investment is just a step away. Connect with SLOC today and make it yours!
                              </p>
                              <img src={back} alt="" className="back-roll"
                              />

                            </Col>

                            <Col md={4} className="text-md-end text-center">
                              {/* <img src={Cta} alt="" className="scroll-img" /> */}
                              <Button variant="dark" className="banner-button">
                                Contact us for More info
                              </Button>
                            </Col>
                          </Row>
                        </Container>
                      </section>



                          <section className="assistance-section position-relative same-space ">
                          <Container className='full'>
                          <Row className=" px-5 ">
                              <h3 className="section-title same-head">Amenities  </h3>
                              <p className="section-subtitle same-head-p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </p>
                              </Row>

                              <Row className="text text-center alliance mt-5 px-5 ">
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>

                              </Row>
                              <Row className="text text-center alliance  px-5 ">
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>



                              </Row>
                              <Row className="text text-center alliance px-5 ">
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>
                                <Col md={3} className='brdr'>
                                </Col>



                              </Row>
                            </Container>
                          </section>


    </main>


    </>
  )
}

export default project