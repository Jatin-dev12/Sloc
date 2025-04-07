import React, { useEffect, useRef } from 'react';
import "../App.css";
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
import Round from "../assets/Imgs/rt.png";
import f1 from "../assets/Imgs/f1.png";
import f2 from "../assets/Imgs/f2.png";
import f3 from "../assets/Imgs/f3.png";
import Arrow from "../assets/Imgs/up-arrow.svg";
import Cta from "../assets/Imgs/Cta-scrol.png";
import sam from "../assets/Imgs/sam.png";
import grl from "../assets/Imgs/grl.png";
import testi from "../assets/Imgs/testimonal.svg";
import blog1 from "../assets/Imgs/blog-1.png";
import blog2 from "../assets/Imgs/blog-2.png";
import blog3 from "../assets/Imgs/blog-3.png";
import Counter from "../CountUp/CountUp";
import Logo from "../assets/Imgs/scroll.png";  // Assuming this is your header image
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";
const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: f1, // Replace with actual image URL
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: f2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
  },
];

const testimonials = [
  {
    id: 1,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 2,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 3,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 4,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
];

const Blogs = [
  {
    id: 1,
    name: "Blog 1",
    image: blog1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
];

function About() {
  const logoTargetRef = useRef(null);  // Ref for the target position in the Home section
  const logoRef = useRef(null); // Reference for logo image in the header

  // Handle scroll event to trigger animation for image following the cursor
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Dynamically adjust the position of the logo based on scroll position
      if (logoRef.current) {
        const scrollPercentage = scrollPosition / 500; // Adjust denominator to control speed
        gsap.to(logoRef.current, {
          y: scrollPercentage * 100, // Moves the logo down based on scroll
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add cursor-follow effect for the logo
  const handleMouseMove = (e) => {
    const logo = logoRef.current;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Apply slight movement of the logo to follow the mouse
    if (logo) {
      gsap.to(logo, {
        x: (mouseX - window.innerWidth / 2) / 10,
        y: (mouseY - window.innerHeight / 2) / 10,
        ease: "power2.out",
      });
    }
  };

  // Attach mousemove event listener to follow the cursor
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    // Define the rocket element
    const rocket = document.getElementById("rocket-image");

    // Define the circle images and the section
    const circles = document.querySelectorAll(".circle-image");
    const section = document.getElementById("All");

    // Define the featured cards
    const featuredCards = document.querySelectorAll(".features-list .card");

    // Create a ScrollMagic Scene for the rocket movement
    const scene = new ScrollMagic.Scene({
      triggerElement: "#header", // Trigger when the header enters the viewport
      triggerHook: 0, // Trigger the scene when the header enters the viewport
      duration: "100%", // Duration of the scroll animation
    })
      .on("progress", (event) => {
        const progress = event.progress; // Progress of the scroll
        gsap.to(rocket, {
          // Move the rocket based on scroll progress
          x: progress * window.innerWidth * 0.4, // Horizontal movement based on scroll
          y: progress * window.innerHeight * 1, // Vertical movement based on scroll
          scale: 1 + progress * 0.8, // Make it slightly larger as it moves
          ease: "power1.out", // Smooth easing
        });
      })
      .addTo(controller); // Add the scene to the ScrollMagic controller

    // ScrollMagic Scene for section1 to trigger the glowing effect and background color change
    const sectionScene = new ScrollMagic.Scene({
      triggerElement: "#All", // Trigger the section1
      triggerHook: 0.1, // Trigger when the section enters the middle of the viewport
      duration: "100%", // Duration for the effect
    })
      .on("enter", () => {
        // Apply the glowing effect to the circle images
        circles.forEach((circle, index) => {
          gsap.to(circle, {
            opacity: 1,
            scale: 1.5,
            glowFilter: "blur(10px)", // Apply a glow effect
            duration: 0.5,
            delay: index * 0.2, // Stagger the animation for the circles
          });
        });

        // Change the background color of the section to a magical gradient
        gsap.to(section, {
          background: "linear-gradient(45deg, #ff69b4, #ff1493)", // Magical gradient
          duration: 0.5,
        });
      })
      .on("leave", () => {
        // Reset the glow and background when leaving the section
        circles.forEach((circle) => {
          gsap.to(circle, {
            opacity: 0,
            scale: 0.5,
            glowFilter: "blur(0px)", // Remove the glow effect
            duration: 0.5,
          });
        });

        gsap.to(section, {
          background: "none", // Reset background to default
          duration: 0.5,
        });
      })
      .addTo(controller); // Add the scene to the ScrollMagic controller

    // Create a ScrollMagic Scene for changing the background color of featured cards
    const featuredScene = new ScrollMagic.Scene({
      triggerElement: ".featured", // Trigger when the "featured" section is in view
      triggerHook: 0.5, // Trigger when the section is at the middle of the viewport
      duration: "100%", // Duration of the animation
    })
      .on("enter", () => {
        // Change the background color of the featured cards
        gsap.to(featuredCards, {
          backgroundColor: "#ffeb3b", // Change to a bright yellow (can customize)
          duration: 0.5,
          stagger: 0.2, // Stagger the background color change for each card
        });
      })
      .on("leave", () => {
        // Reset the background color of the cards when leaving the section
        gsap.to(featuredCards, {
          backgroundColor: "white", // Reset to default white
          duration: 0.5,
        });
      })
      .addTo(controller); // Add the scene to the ScrollMagic controller

    // Clean up the scenes when the component is unmounted
    return () => {
      scene.destroy();
      sectionScene.destroy();
      featuredScene.destroy();
    };
  }, []);


  return (
    <>
                      <img src={Logo} alt="Logo"
                                id="rocket-image" // The ID to select the rocket element
          className="rocket-image"
                      />

      <main className='position-relative' >
        <section className="Main-banner"  >
          <Container>
            <Row>
              <Col>
                <h1>Search Land Of Choice</h1>
              </Col>
            </Row>
          </Container>
          <div className="d-flex align-items-center searc-bar  justify-content-between">
            <DropdownButton
              id="dropdown-city"
              title="City"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">New York</Dropdown.Item>
              <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
              <Dropdown.Item href="#">Chicago</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id="dropdown-property"
              title="Property Type"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">Apartment</Dropdown.Item>
              <Dropdown.Item href="#">House</Dropdown.Item>
              <Dropdown.Item href="#">Condo</Dropdown.Item>
            </DropdownButton>

            <InputGroup className="me-2 ">
              <InputGroup.Text>
                <img src={Search} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search by location or property ID....."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />{" "}
            </InputGroup>

            <Button variant="primary">Search</Button>
          </div>
        </section>



        <section className="featured" id="section2">
          <Container className="full">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                {" "}
                <h2 className="same-head">FEATURED PROJECTS</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-end text-end align-content-center"
              >
                <Button variant="dark">See more Projects</Button>
              </Col>
            </Row>
            <Row>
              {projects.map((project) => (
                <Col md={4} key={project.id} className="features-list p-0">
                  <Card className="">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                    />
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
              ))}
            </Row>
          </Container>
        {/* Empty div to serve as a target for the logo */}
        <div ref={logoTargetRef} className="logo-target" style={{ height: '50px', backgroundColor: '#f0f0f0' }}>
          {/* Logo target section */}
        </div>
        </section>
        <section className="welcome">
          <Container className="py-5">
            <Row className="mb-4 d-flex">
              <Col md={6} className=" align-content-end head">
                <img src={Round} alt="scroling" className="scrol-top" />
                <h2 className="same-head">WELCOME TO SLOC</h2>
                <p className="same-head-p">
                  SLOC – "Search Land of Choice" is a leading real estate
                  company in India dedicated to providing exceptional property
                  solutions. With a focus on customer satisfaction and market
                  expertise, SLOC has built a reputation as a trusted name in
                  the industry. Collaborating with top-tier real estate brands
                  like Godrej, DLF, and many more, SLOC offers a diverse range
                  of properties, including luxurious apartments, plots, villas,
                  and commercial space.
                </p>
              </Col>
              <Col md={6} className="d-flex flex-wrap four-col-st">
                <Col md={6} lg={6} className="right">
                  <Card className="">
                    <h3 className="text-primary">
                      <Counter className="Counter-no" to={1} from={0} />
                      M+
                    </h3>
                    <p>Sed ut Perspiciatis</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-bottom">
                  <Card className="">
                  <h3 className="text-primary">
                      <Counter className="Counter-no" to={500} from={0} />
                      K
                    </h3>                    <p>Lorem Ipsum</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-right">
                  <Card>
                  <h3 className="text-primary">
                      <Counter className="Counter-no" to={24} from={0} />
                      /7
                    </h3>                     <p>Consectetur Adipiscing Elit, Sed Do</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="left-brdr">
                  <Card className="">
                  <h3 className="text-primary">
                      <Counter className="Counter-no" to={1} from={0} />
                      M+
                    </h3>                    <p>Sed ut Perspiciatis</p>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
                <p className="same-head-p">
                  Explore the best properties in your preferred location. Start
                  your journey to a perfect home with us.
                </p>
              </Col>
              <Col md={4} className="text-end">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="social-proof position-relative">
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">SOCIAL PROOF</h2>
                  <p className="same-head-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="Up-arrow-btn">
                    <img src={Arrow} />
                  </Button>
                </div>
              </Col>

              <Col md={6} className="align-items-top rounded-0">
                <Card className="sticky-box position-sticky rounded-0">
                  <Card.Body className="p-0 pt-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={index !== 0 ? "mt-4 pt-4 border-top" : ""}
                      >
                        <Row className="align-items-top inner-set">
                          <Col xs="auto">
                            <div
                              className="position-relative"
                              style={{ width: "110px", height: "80px" }}
                            >
                              <img
                                src={testimonial.image}
                                alt=""
                                className="img-fluid "
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="position-relative">
                              <div
                                className="position-absolute"
                                style={{ top: "-50px", right: "0" }}
                              >
                                <span
                                  className="text-muted"
                                  style={{ fontSize: "40px", opacity: "0.2" }}
                                >
                                  <img src={testi} />
                                </span>
                              </div>
                              <h5 className="mb-2 socail-name">
                                {testimonial.name}
                              </h5>
                              <p className="text-muted mb-0 social-p">
                                {testimonial.text}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="featured blogs">
          <Container className="">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                {" "}
                <h2 className="same-head">Latest Blogs</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-end text-end align-content-center"
              >
                <Button variant="dark">See more Blogs</Button>
              </Col>
            </Row>
            <Row>
              {Blogs.map((Blogs) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  <Card className=" position-relative">
                    <Card.Img
                      variant="top"
                      src={Blogs.image}
                      alt={Blogs.title}
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{Blogs.date}</span>
                        <span>{Blogs.catagory}</span>
                      </Card.Text>
                      <Card.Title>{Blogs.name}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">
                        {Blogs.text}
                      </Card.Text>
                      <Button className="Up-arrow-btn">
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default About;
