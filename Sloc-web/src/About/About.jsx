  import React, { useState, useEffect } from "react";
  import { Row, Col, Card } from "react-bootstrap";
  import Container from "react-bootstrap/Container";
  import Round from "../assets/Imgs/rt.webp";
  import white from "../assets/Imgs/white.svg";
  import Mision from "../assets/Imgs/Mission.svg";
  import Vision from "../assets/Imgs/Vision.svg";
  import conect from "../assets/Imgs/connect.svg";
  import select from "../assets/Imgs/select.svg";
  import buy from "../assets/Imgs/buy.svg";
  import cus from "../assets/Imgs/customer.svg";
  import Line from "../assets/Imgs/Line-mid.webp";
  import side from "../assets/Imgs/back-scrol.webp";

  import Award from "../assets/Imgs/award.svg";
  import Achive from "../assets/Imgs/Achive.webp";
  import very from "../assets/Alliance-imgs/verifyed.svg";
  import expert from "../assets/Alliance-imgs/expert.svg";
  import free from "../assets/Alliance-imgs/free.svg";
  import best from "../assets/Alliance-imgs/best.svg";
  import Timeline from "./Timeline.jsx";
  import { Link } from "react-router-dom";
  import { Helmet } from "react-helmet";
  import axios from "axios";
import { useLocation } from 'react-router-dom';
  const services = [
    {
      title: "Property Listings",
      desc: "Discover a curated selection of premium residential and commercial properties across India.",
    },
    {
      title: "Site Visits & Consultation",
      desc: "Get expert-guided tours and honest advice to help you make informed decisions.",
    },
    {
      title: "Legal & Documentation Support",
      desc: "From paperwork to compliance, we ensure your buying journey is smooth and secure.",
    },
    {
      title: "NRI Assistance",
      desc: "Dedicated services for NRIs looking to invest or buy property in India with ease and clarity.",
    },
    {
      title: "Loan Assistance",
      desc: "Partnering with top banks to help you secure competitive interest rates and smooth approvals.",
    },
  ];
  const awards = [
    {
      id: 1,
      year: "Certified Gold Partner by Godrej Properties (FY 2024-25)",
      image: Award,
    },
    {
      id: 2,
      year: "#3000 Crore Club Gold Category Partner for the launch of the project Godrej Zenith",
      image: Award,
    },
    {
      id: 3,
      year: "Shining Star Award by DLF for the project DLF Privana South",
      image: Award,
    },
    {
      id: 4,
      year: "Certificate of Achievement for the successful execution of Godrej Aristocrat",
      image: Award,
    },
  ];
  const features = [
    {
      icons: very,
      title: "Trusted Expertise",
      description:
        "Years of experience and deep market insights will guide your every decision.",
    },
    {
      icons: expert,
      title: "Verified Listings Only",
      description:
        "Offering handpicked and authenticated properties for a secure and worry-free experience.",
    },
    {
      icons: free,
      title: "Personalized Approach",
      description:
        "Get property solutions tailored to match your lifestyle, budget, and goals.",
    },
    {
      icons: best,
      title: "Seamless Experience",
      description:
        "Enjoy a transparent, reliable, and smooth process from your first inquiry to your final deal.",
    },
  ];
  function About() {
  const location = useLocation();
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
const [ogImage, setOgImage] = useState('');
const [clients, setClients] = useState([]);
  useEffect(() => {
    const currentPath = location.pathname.replace(/^\/|\/$/g, '');
    const baseUrl = import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
    const metasApi = `${baseUrl}api/metas`;
    const clientsApi = `${baseUrl}api/clients`;
    Promise.all([
      axios.get(metasApi, {
        headers: { Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL` },
      }),
      axios.get(clientsApi, {
        headers: { Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL` },
      }),
    ])
      .then(([metaRes, clientsRes]) => {
        // Handle Meta
        if (metaRes.data.success && Array.isArray(metaRes.data.data)) {
          const matchedMeta = metaRes.data.data.find(
            (item) => item.page && item.page.slug === currentPath
          );
          if (matchedMeta) {
            setMetaTitle(matchedMeta.meta_title);
            setMetaDescription(matchedMeta.meta_description);
            setOgImage(matchedMeta.og_image);
          } else {
            console.warn(`No meta found for slug: ${currentPath}`);
          }
        }
        // Handle Clients
        if (clientsRes.data.success && Array.isArray(clientsRes.data.data)) {
          setClients(clientsRes.data.data);
        } else {
          console.error("Invalid clients response");
        }
      })
      .catch((error) => {
        console.error("API call failed", error);
      });
  }, [location.pathname]);
  // Split logos into rows of 4
  const groupedClients = [];
  for (let i = 0; i < clients.length; i += 4) {
    groupedClients.push(clients.slice(i, i + 4));
  }
    return (
      <main className="aboutpage">
        <Helmet>
          <title>{metaTitle} </title>
          <meta
            property="og:title"
            content={metaTitle}
          />
          <meta
            property="og:description"
            content={metaDescription}
          />
<meta property="og:image" content={ogImage}></meta>
          <meta name="description" content={metaDescription}></meta>
        </Helmet>
        <section className="Main-banner About-banner" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <h1 className="animate__animated animate__fadeInLeft">
                  Shaping Property Dreams!{" "}
                </h1>
                <p>
                  SLOC is your trusted partner in discovering premium homes, top
                  locations, and lifestyle investments.
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </section>
        <section className="welcome about-sloc">
          <Container className="py-md-5 pb-0">
            <Row className="mb-4 d-flex">
              <Col md={6} className=" align-content-end head">
                <img src={Round} alt="scroling" className="uper-set" />
                <h2
                  className="same-head "
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  About Sloc
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  We’re more than just real estate advisors; we’re a team that
                  understands how important the right space can be. A home isn’t
                  just four walls; it’s where life happens. An investment is more
                  than simply a number; it represents the shaping of your future.
                  That's why we do what we do: with heart, honesty, and a genuine
                  desire to assist you in finding what works best for you. Whether
                  you're buying, selling, or simply exploring your options, we're
                  here to guide you with relevant insights and support you as a
                  friend would.
                  <br />
                  Real people + Real spaces + Real connections = the SLOC Success.
                </p>
              </Col>
              <Col md={6} className="d-flex flex-wrap four-col-st">
                <Container
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  {/* Mission */}
                  <Row className="align-items-center my-4 p-3 ">
                    <Col xs={3} className="text-center">
                      <img src={Mision} />
                    </Col>
                    <Col xs={9}>
                      <h5>
                        <strong>OUR MISSION</strong>
                      </h5>
                      <p className="mb-0 text-muted">
                        We aim to connect people with properties that match their
                        dreams, goals, and lifestyles through honest advice and
                        exceptional service.{" "}
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  {/* Vision */}
                  <Row className="align-items-center my-4 p-3">
                    <Col xs={3} className="text-center">
                      <img src={Vision} />
                    </Col>
                    <Col xs={9}>
                      <h5>
                        <strong>OUR VISION</strong>
                      </h5>
                      <p className="mb-0 text-muted">
                        To be the most trusted name in real estate by creating
                        experiences that feel personal, seamless, and truly
                        rewarding.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="services-section text-white">
          <Container>
            <div className="head-serv">
              <h3 className="same-head">SERVICES</h3>
              <p className="same-head-p">
                We offer expert solutions for every step of your property journey.
              </p>
            </div>
            {services.map((service, idx) => (
              <Row
                key={idx}
                className="service-row py-3 align-items-center border-bottom border-white"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-offset="10"
              >
                <Col md={5} xs={12}>
                  <h5 className="mb-1">{service.title}</h5>
                </Col>
                <Col md={5} xs={12}>
                  <p className="mb-0">{service.desc}</p>
                </Col>
                <Col
                  md={2}
                  xs={12}
                  className="text-md-end text-start mt-2 mt-md-0"
                >
                  <div className=" mx-md-3">
                    <img src={white} alt="" />
                  </div>
                </Col>
              </Row>
            ))}
          </Container>
        </section>
        <section className="assistance-section position-relative ">
          <Container>
            <h3 className="section-title same-head">END TO END ASSISTANCE</h3>
            <p className="section-subtitle same-head-p">
              We walk with you from start to sold!
            </p>
            <img src={side} className="side-set" />
            <Row
              className="gy-5 flex-column"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-offset="10"
            >
              <Col md={12} className="connect">
                <div className="step-text">
                  <img src={Line} alt="" />
                  <div className="dumy-ass">
                    <h6 className="step-title">CONNECT</h6>
                    <p className="step-desc">
                      Talk to our experts and let us understand your exact needs.
                    </p>
                  </div>
                </div>
                <div className="step-box text-center text-md-start">
                  <img src={conect} alt="CONNECT" className="step-icon mb-3" />
                  <h5 className="step-number">01</h5>
                </div>
              </Col>
              <Col md={12} className="select ">
                <div className="step-text">
                  <img src={Line} alt="" />
                  <div className="dumy-ass">
                    <h6 className="step-title">SELECT</h6>
                    <p className="step-desc">
                      Choose from a curated list of verified, trusted properties
                      tailored to your preferences.
                    </p>
                  </div>
                </div>
                <div className="step-box text-center text-md-start">
                  <img src={select} alt="SELECT" className="step-icon mb-3" />
                  <h5 className="step-number">02</h5>
                </div>
              </Col>
              <Col md={12} className="buy">
                <div className="step-text">
                  <img src={Line} alt="" />
                  <div className="dumy-ass">
                    <h6 className="step-title">BUY</h6>
                    <p className="step-desc">
                      Seal the deal with confidence, complete with all legal
                      documentation and guidance.
                    </p>
                  </div>
                </div>
                <div className="step-box text-center text-md-start">
                  <img src={buy} alt="BUY" className="step-icon mb-3" />
                  <h5 className="step-number">03</h5>
                </div>
              </Col>
              <Col md={12} className="cus">
                <div className="step-text">
                  <img src={Line} alt="" />
                  <div className="dumy-ass">
                    <h6 className="step-title">CUSTOMER SUPPORT</h6>
                    <p className="step-desc">
                      From loan help to resale support, we’ve got your back even
                      after the purchase.
                    </p>
                  </div>
                </div>
                <div className="step-box text-center text-md-start">
                  <img
                    src={cus}
                    alt="CUSTOMER SUPPORT"
                    className="step-icon mb-3"
                  />
                  <h5 className="step-number">04</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="assistance-section position-relative same-space aline ">
       <Container fluid>
      <Row className="px-5 mb-5">
        <h3
          className="section-title same-head"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-offset="200"
        >
          Our Alliances
        </h3>
        <p
          className="section-subtitle same-head-p"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-offset="200"
        >
          We’re backed by a network of reputed developers and property
          experts.
        </p>
      </Row>
      {groupedClients.map((row, rowIndex) => (
        <Row key={rowIndex} className="text text-center alliance px-5 ">
          {row.map((client, index) => (
            <Col key={index} md={3} className="brdr">
              <img
                src={client.logo} // Ensure your API returns a `logo` field with image URL
                alt={client.name || "Client Logo"}
                className="phli"
                data-aos="zoom-in"
                data-aos-easing="ease-in-sine"
                data-aos-offset="10"
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
        </section>
        <section className="achivments same-space">
          <Container className="">
            <Row className="align-items-center ">
              <Col
                md={4}
                className="mb-4 mb-md-0"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-offset="10"
              >
                <h2 className="same-head">AWARDS</h2>
                <p className="same-head-p">
                  Have a glance at our milestones of trust and achievements of
                  excellence.
                </p>
              </Col>
              <Col md={8} className="px-3">
                <div className="over">
                  <Row className="achivments">
                    {awards.map((award) => (
                      <Col md={6} key={award.id} className="mb-4">
                        <Card
                          className=" position-relative overflow-hidden"
                          data-aos="fade-up"
                          data-aos-easing="ease"
                          data-aos-offset="10"
                        >
                          <Card.Body className="p-4 achiv">
                            <img src={Achive} className="corner" />
                            <div className=" mb-3">
                              <img src={award.image} />
                            </div>
                            <div className="">
                              {/* <h5 className="fw-bold">{award.title}</h5> */}
                              <p className="small text-muted">{award.year}</p>
                            </div>
                            {/* Decorative corner elements */}
                            <div
                              className="position-absolute"
                              style={{ top: 10, right: 10, opacity: 0.1 }}
                            ></div>
                            <div
                              className="position-absolute"
                              style={{ bottom: 10, left: 10, opacity: 0.1 }}
                            ></div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="same-space why-us"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-offset="10"
        >
          <Container>
            <div className=" mb-5">
              <h3 className="same-head" style={{ color: "#ffffff" }}>
                WHY CHOOSE US
              </h3>
              <p className="same-head-p" style={{ color: "#ffffff" }}>
                We're here to make your property search easier, offering expert
                guidance and a personal touch at every step.{" "}
              </p>
            </div>
            <Row className="g-4">
              {features.map((feature, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3} className="p-0">
                  <Card className="why-choose">
                    <div className="mb-3">
                      <img
                        src={feature.icons}
                        alt={feature.title}
                        style={{ width: "80px", height: "80px" }}
                      />{" "}
                    </div>
                    <h5 className="">{feature.title}</h5>
                    <p>{feature.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="time-sec">
          <Timeline />
        </section>
      </main>
    );
  }
  export default About;
