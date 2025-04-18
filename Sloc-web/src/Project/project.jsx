import React, { useEffect, useRef, useState } from 'react';
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
import Temp from './temp.png'
import Struc from './home.png'
import jog from './joging.png'
import silent from './silent.png'
import spa from './spa.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import lib from './lib.png'
import tr from './24.png'
import stake from './staking.png'
import gym from './gym.png'
import red from './red.png'
import kach from './kach.png'
import dubai from './dubai.png'
import WelcomeLogo from '../assets/Imgs/back-scrol-BsNhHslO.png'
import air from './air.png'
import f1 from './1st.png'
import f2 from './2nd.png'
import f3 from './3rd.png'
import Arrow from "../assets/Imgs/up-arrow.svg";
import pro1 from "../assets/Imgs/f1.png";
import pro2 from "../assets/Imgs/f2.png";
import pro3 from "../assets/Imgs/f3.png";
import NextArrow from '../assets/Imgs/right.svg';
import PrevArrow from '../assets/Imgs/left.svg';
import { Accordion } from 'react-bootstrap';
import Char from './Chart'


function project() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    agree: '',
  });
  const phoneInputRef1 = useRef(null);
  const phoneInputRef = useRef(null);
  const intlTelInstance = useRef(null);

  // Initialize intl-tel-input
  useEffect(() => {
    if (phoneInputRef.current) {
      import('intl-tel-input').then((intlTelInput) => {
        intlTelInstance.current = intlTelInput.default(phoneInputRef.current, {
          initialCountry: 'in',
          separateDialCode: true,
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });

        // Sync input value with formData on change
        phoneInputRef.current.addEventListener('input', () => {
          const fullNumber = intlTelInstance.current.getNumber();
          setFormData((prev) => ({
            ...prev,
            mobile: fullNumber || phoneInputRef.current.value,
          }));
        });

        // Validate on country change or input
        phoneInputRef.current.addEventListener('countrychange', () => {
          const fullNumber = intlTelInstance.current.getNumber();
          setFormData((prev) => ({
            ...prev,
            mobile: fullNumber || phoneInputRef.current.value,
          }));
        });
      }).catch((error) => {
        console.error('Failed to load intl-tel-input:', error);
      });

      return () => {
        if (intlTelInstance.current) {
          intlTelInstance.current.destroy();
        }
      };
    }
  }, []);
  useEffect(() => {
    if (phoneInputRef1.current) {
      import('intl-tel-input').then((intlTelInput) => {
        intlTelInstance.current = intlTelInput.default(phoneInputRef1.current, {
          initialCountry: 'in',
          separateDialCode: true,
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });

        // Sync input value with formData on change
        phoneInputRef1.current.addEventListener('input', () => {
          const fullNumber = intlTelInstance.current.getNumber();
          setFormData((prev) => ({
            ...prev,
            mobile: fullNumber || phoneInputRef1.current.value,
          }));
        });

        // Validate on country change or input
        phoneInputRef1.current.addEventListener('countrychange', () => {
          const fullNumber = intlTelInstance.current.getNumber();
          setFormData((prev) => ({
            ...prev,
            mobile: fullNumber || phoneInputRef1.current.value,
          }));
        });
      }).catch((error) => {
        console.error('Failed to load intl-tel-input:', error);
      });

      return () => {
        if (intlTelInstance.current) {
          intlTelInstance.current.destroy();
        }
      };
    }
  }, []);
  const properties = [
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
  ];

const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: pro1, // Replace with actual image URL
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: pro2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: pro3,
  },
  {
    id: 4,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: pro3,
  },
];

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));

  if (name === 'name') {
    setErrors((prev) => ({ ...prev, name: '' }));
  }

  if (name === 'email') {
    setErrors((prev) => ({ ...prev, email: '' }));
  }

  if (name === 'agree') {
    setErrors((prev) => ({ ...prev, agree: '' }));
  }
};

const validateForm = () => {
  const newErrors = {
    name: '',
    mobile: '',
    email: '',
    agree: '',
  };
  let isValid = true;

  // Check if name is entered (you can add more specific validation here)
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
    isValid = false;
  }

  // Validate mobile number (only digits, 6-10 digits)
  if (!formData.mobile) {
    newErrors.mobile = 'Phone number is required';
    isValid = false;
  } else if (!/^\d+$/.test(formData.mobile)) {
    newErrors.mobile = 'Phone number must contain only digits';
    isValid = false;
  } else if (formData.mobile.length < 6 || formData.mobile.length > 10) {
    newErrors.mobile = 'Phone number must be between 6 and 10 digits';
    isValid = false;
  }

  // Check if email is entered (basic validation can be done here if needed)
  if (!formData.email) {
    newErrors.email = 'Email is required';
    isValid = false;
  }

  // Check if the user agrees to the terms
  if (!formData.agree) {
    newErrors.agree = 'You must agree to the terms';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};


const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log('Form is valid, submitting data:', formData);
    // Add form submission logic here (e.g., API call)
  } else {
    console.log('Form has errors, not submitting');
  }
};
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
                <p className='loction'><img src={location} style={{ marginRight: "10px" }} /> SECTOR-103, GURUGRAM</p>
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
                    {/* <span className="input-group-text">🇮🇳 +91</span> */}
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      name="mobile"
                      ref={phoneInputRef1}
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

        <section className="welcome overview">


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
                <button type="text" className="btn btn-light comn-btn">
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
                        <img src={Icon} className="text-primary me-2 " />
                        <span>Villa</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>Well-connected to dwarka expressway</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>Provide easy access to major hubs in Gurgaon and Delhi</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>Total land area of the project is approximately 15 acres</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>One of the lowest density project on dwarka expressway </span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
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

        <section className="Cta position-relative">
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
          <Container className='full amni'>
            <Row className=" px-5 ">
              <h3 className="section-title same-head">Amenities  </h3>
              <p className="section-subtitle same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>

            <Row className="text text-center alliance mt-5 px-5 ">
              <Col md={4} className='brdr'>
                <img src={Temp} />


              </Col>
              <Col md={4} className='brdr'>
                <img src={jog} />
              </Col>
              <Col md={4} className='brdr'>
                <img src={silent} />
              </Col>


            </Row>
            <Row className="text text-center alliance  px-5 ">
              <Col md={4} className='brdr'>
                <img src={spa} />


              </Col>
              <Col md={4} className='brdr'>
                <img src={lib} />

              </Col>
              <Col md={4} className='brdr'>
                <img src={tr} />

              </Col>



            </Row>
            <Row className="text text-center alliance px-5 ">
              <Col md={4} className='brdr'>
                <img src={stake} />


              </Col>
              <Col md={4} className='brdr'>
                <img src={gym} />

              </Col>
              <Col md={4} className='brdr'>
                <img src={silent} />

              </Col>



            </Row>
          </Container>
        </section>

        <section className="pricing position-relative same-space">
          <Container className='full amni'>
            <Row className=" px-5 ">
              <h3 className="section-title same-head">layout & pricing  </h3>
              <p className="section-subtitle same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>


          </Container>
          <div className="slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={false}
        modules={[Navigation]}
        loop={true}
        autoplay={true}

        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {properties.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="property-card position-relative">
              <div className="ribbon-set">
                <img src={red}  />
              </div>
              <div className="card-content">
                <div> <img src={Icon} className="text-primary me-2 " /></div>
             <div><h3>{item.type}</h3>
                <p>{item.size}</p></div>

              </div>
              <button className="comn-btn">Get Full Pricing & Layout Now</button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </section>

        <section className="Cta position-relative left-side-move">
          <Container>
            <Row className="d-flex align-items-center justify-content-center px-5 ">
              <Col md={6}>
                <h2 className="same-head">Location Advantages</h2>
                <p className="same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
                <img src={back} alt="" className="back-roll"
                />

              </Col>

              <Col md={6} className="text-md-end text-center">
              <div className='grid-r'>
                <Col md={6}>
<img src={kach} />

                </Col>
                <Col md={6}>
<img src={dubai} />

                </Col>
                <Col md={6}>
<img src={air} />

                </Col>
                <Col md={6}>
<img src={kach} />

                </Col>

              </div>

              </Col>
            </Row>
          </Container>
        </section>

        <section className="social-proof position-relative img-scrol">
                  <img className="Move" src={WelcomeLogo}  />
                  <Container className="">
                    <Row className="align-items-center justify-content-between">
                      <Col md={5} className="mb-4 mb-md-0">
                        <div className="ps-md-4">
                          <h2 className="same-head">Gallery  </h2>
                          <p className="same-head-p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                          <button className="comn-btn">Get Brochure</button>

                        </div>
                        {/* <img src={soback} className="soc-img" alt="" /> */}
                      </Col>

                      <Col md={7} className="align-items-top rounded-0">
                        <div className='over'>
                               <Row className='achivments'>

                                <Col className='image-showcase'>
                                <img src={f1} />
                                <img src={f2} />
                                <img src={f3} />
                                <img src={f1} />




                                </Col>


                               </Row>
                               </div>
                      </Col>
                    </Row>
                  </Container>
        </section>

        <section className='faqs'>
        <Container fluid className="px-5">
      <h2 className="same-head">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="same-head-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Container>

        </section>

        <section className='blog-text btm-space faqqs'>

              <Container fluid className="">
          <Row className=' justify-content-center'>
              <Col md={10} className='all-border'>
              <Accordion defaultActiveKey="0" className="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
          </Accordion.Body>
        </Accordion.Item>

        {[1, 2, 3].map((item) => (
          <Accordion.Item eventKey={`${item}`} key={item}>
            <Accordion.Header>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?
            </Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
              </Col>
            </Row>

          </Container>
        </section>

        <section className="Cta position-relative left-side-move meeting">
          <Container>
            <Row className="d-flex align-items-center justify-content-center px-5 ">
              <Col md={6}>
                <h2 className="same-head">Schedule Meeting</h2>
                <p className="same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <hr/>
                <p className='mb-4'>15th Floor, Ocus Quantum, Sector-51,<br/> Gurugram, Haryana - 122003</p>
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
                <img src={back} alt="" className="back-roll"
                />

              </Col>

              <Col md={6} className="text-md-end text-center">
              <div className='form-set'>
                <h5>Enter details to schedule meeting</h5>
                <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                      </div>

                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                          name="mobile"
                          ref={phoneInputRef}
                          minLength={6}
                          maxLength={15}
                        />
                      </div>
                        {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                      </div>

                      <div className="form-check mb-3 text-white">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          id="agreeCheck"
                        />
                        <label className="form-check-label" htmlFor="agreeCheck">
                          I agree to be contacted via Call, SMS, WhatsApp & Email
                        </label>
                      </div>
                      {errors.agree && <span style={{ color: 'red' }}>{errors.agree}</span>}

                      <div className="d-grid">
                        <button type="submit" className="btn btn-light text-dark">
                          Connect Us
                        </button>
                      </div>
                    </form>
                  </div>

              </Col>
            </Row>
          </Container>
        </section>

        <section  className="featured similar">

  <Container className="full">
           <Row className="mb-4 d-flex py-md-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">similar Projects</h2>
                <p className="same-head-p">
                Discover a handpicked selection of luxurious homes, prime plots, and commercial landmarks from India’s most trusted developers.
                </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center">
                <div className="custom-swiper-nav d-flex gap-4 justify-content-md-end mb-3">
                  <img src={PrevArrow} alt="Previous" className="swiper-button-prev-custom" />
                  <img src={NextArrow} alt="Next" className="swiper-button-next-custom" />
                </div>
              </Col>
            </Row>
    <Row className="features-row">
              <Swiper
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Navigation]}
                breakpoints={{
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 3 },
                }}
              >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <Col className="features-list p-0 dip-column">

                <Card
                  className={`custom-card card-${index} box-${index}`}
    style={{ position: 'relative', zIndex: 2 }}
                >
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc">
                      <span>{project.size}</span> <span>{project.feet}</span>
                      <span>{project.location}</span>
                    </Card.Text>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-primary font-weight-bold">
                      {project.price}
                    </Card.Text>
                    <Button className="Up-arrow-btn">
                      <img src={Arrow} />
                    </Button>
                  </Card.Body>

                </Card>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  </Container>
        </section>

        <section  className="featured calculater pt-0">

  <Container className="full">
           <Row className="mb-4 d-flex py-md-4 align-content-center">
              <Col md={12} className="align-content-center">
                <h2 className="same-head">EMI Calculator</h2>
                <p className="same-head-p">
                Discover a handpicked selection of luxurious homes, prime plots, and commercial landmarks from India’s most trusted developers.
                </p>
              </Col>
<Char />

    </Row>
  </Container>
        </section>

      </main>


    </>
  )
}

export default project