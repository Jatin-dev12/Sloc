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
import Counter from "../Animations/CountUp/CountUp";
import New from '../assets/Imgs/SLOC.png'
import back from '../assets/Imgs/back-cta.png'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollMagic from "scrollmagic";
import Logo from '../assets/Imgs/back-scrol.png'
// import soback from '../assets/Imgs/back-scrol.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NextArrow from '../assets/Imgs/right.svg';
import PrevArrow from '../assets/Imgs/left.svg';
import { Flip } from 'gsap/Flip';
import Logo1 from '../assets/Imgs/back-scrol.png'
import BottomImg1 from '../assets/Imgs/back-scrol.png'
import BottomImg2 from '../assets/Imgs/back-scrol.png'
import BottomImg3 from '../assets/Imgs/back-scrol.png'
import BottomImg4 from '../assets/Imgs/back-scrol.png'

const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: f1, // Replace with actual image URL
    bottomImage: BottomImg1,
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: f2,
    bottomImage: BottomImg2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg3,
  },
  {
    id: 4,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg4,
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
    BlogImage: BottomImg1,
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
];

gsap.registerPlugin(ScrollTrigger);
function About() {
  const logoRefs = useRef(null);
  const containerRefs = useRef(null);
  //1.) WELCOME TO SLOC section
  useEffect(() => {
    // Create a smoother timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRefs.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.2, // smoother scrub
        markers: false,
      }
    })
      .fromTo(logoRefs.current,
        {
          opacity: 0,
          y: -300,
          x: 200,
          scale: 1.4
        },
        {
          opacity: 1,
          y: 150,
          x: 450,
          scale: 0.6,
          ease: "power3.out"
        }
      )
      .to(logoRefs.current,
        {
          opacity: 0,
          y: 450,
          x: 580,
          scale: 0.2,
          ease: "power3.inOut"
        }
      );

  }, []);




  //3.) Testimonials section
  const logoRefs1 = useRef(null);
  const containerRefs1 = useRef(null);
  useEffect(() => {
    // Create a smoother timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRefs1.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.2, // smoother scrub
        markers: false,
      }
    })
      .fromTo(logoRefs1.current,
        {
          opacity: 0,
          y: -900,
          x: 1300,
        },
        {
          opacity: 1,
          y: 50,
          x: 550,
          ease: "power3.out"
        },
        {
          opacity: 2,
          y: 100,
          x: 650,
          ease: "power3.out"
        }
      )
      .to(logoRefs1.current,
        {
          opacity: 0,
          y: 550,
          x: 550,
          scale: 0.2,
          ease: "power3.inOut"
        }
      );

  }, []);


  //2.) FEATURED PROJECTS section

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const bottomImageRefs = useRef([]);
  const section2ImageRef = useRef(null);



  useEffect(() => {
    const boxes = boxRefs.current;
    const images = imageRefs.current;
    const bottomImages = bottomImageRefs.current;
    const section2Image = section2ImageRef.current;

    // Top Images Animation
    images.forEach((img, index) => {
      const box = boxes[index];

      const xOffset = () => {
        const boxRect = box.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.fromTo(
        img,
        {
          x: 0,
          y: -150,
          scale: 1,
          opacity: 1,
          visibility: "hidden",
        },
        {
          x: xOffset,
          y: 300,
          scale: 1,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            // start: "top center",
            start: "top center+=125",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const imgRect = img.getBoundingClientRect();
              const boxRect = box.getBoundingClientRect();
              const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
              if (isInside) {
                box.style.backgroundColor = "#EFF7FE";
              } else {
                box.style.backgroundColor = "";
              }
            },
          },
        }
      );
    });

    // Bottom Images Animation
    bottomImages.forEach((img, index) => {
      const box = boxes[index];

      const xOffset = () => {
        const boxRect = box.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.fromTo(
        img,
        { y: -100, opacity: 0, visibility: "hidden", x: xOffset },
        {
          y: 100,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "bottom-=400 bottom",
            end: "bottom+=200 bottom",
            scrub: 3,
          },
        }
      );
    });

    // Section 2: Bottom images move into right-side image
    bottomImages.forEach((img) => {
      const xOffset = () => {
        const imgRect = img.getBoundingClientRect();
        const section2ImgRect = section2Image.getBoundingClientRect();
        return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.to(img, {
        x: xOffset,
        y: 500,
        scale: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
          end: "bottom+=300 center",
          scrub: 2,
          onEnter: () => gsap.set(img, { visibility: "visible" }),
          onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
        },
      });
    });

    // Section 2: Move top images only
    gsap.to(images, {
      y: 500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Reset background color of boxes when section2Ref is reached
    gsap.to(boxes, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center", // When top of section2Ref hits center of viewport
        onEnter: () => {
          boxes.forEach((box) => {
            box.style.backgroundColor = ""; // Reset to default
          });
        },
      },
    });
  }, []);
  const blogsectionRef = useRef(null);
  const BlogimageRefs = useRef([]);
  const BlogsboxRefs = useRef([]);
  const BlogBottomImageRefs = useRef([]);
  const BlogsBottomsectionRef = useRef(null);

  useEffect(() => {
    const boxes = BlogsboxRefs.current;
    const images = BlogimageRefs.current;
    const blogsbottomImages = BlogBottomImageRefs.current;
    const blogssection2Image = BlogsBottomsectionRef.current;

    // Bottom Images: Emerge from inside boxes downward

    images.forEach((img, index) => {
      const box = boxes[index];

      const xOffset = () => {
        const boxRect = box.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.fromTo(
        img,
        {
          x: 0,
          y: -150,
          scale: 1,
          opacity: 1,
          visibility: "hidden",
        },
        {
          x: xOffset,
          y: 300,
          scale: 1,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogsectionRef.current,
            // start: "top center", // Changed from "top top" to start when top of section hits center of viewport
            start: "top center+=155",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const imgRect = img.getBoundingClientRect();
              const boxRect = box.getBoundingClientRect();
              const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
              if (isInside) {
                box.style.backgroundColor = "#EFF7FE";
              } else {
                box.style.backgroundColor = "";
              }
            },
          },
        }
      );
    });
    blogsbottomImages.forEach((img, index) => {
      const box = boxes[index];

      const xOffset = () => {
        const boxRect = box.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.fromTo(
        img,
        { y: -100, opacity: 1, visibility: "hidden", x: xOffset }, // Start hidden
        {
          y: 100,
          opacity: 1,
          visibility: "visible", // Become visible when moving
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogsectionRef.current,
            start: "bottom-=200 bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });

    // Section 2: Bottom images move into right-side image
    blogsbottomImages.forEach((img) => {
      const xOffset = () => {
        const imgRect = img.getBoundingClientRect();
        const section2ImgRect = blogssection2Image.getBoundingClientRect();
        return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.to(img, {
        x: xOffset,
        y: 500,
        scale: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => gsap.set(img, { visibility: "visible" }), // Ensure visibility when animation starts
          onLeaveBack: () => gsap.set(img, { visibility: "hidden" }) // Hide when scrolling back up
        },
      });
    });

    // Section 2: Move top images only
    gsap.to(images, {
      y: 500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: BlogsBottomsectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <main id="All" >

        <section className="Main-banner" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} >
                <h1>Search Land Of Choice</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
              </Col>
              <Col>




                {/* Dont Edit this this for animation  */}
                <div className="animated-logo">
                  <div className="image-wrapper">
                    <img
                      src={Logo}
                      alt="Logo"
                      id="rocket-image"
                      className="rocket-image main-image"
                    />
                    <div className="split-images" >
                      <img src={Logo} alt="Split 1" className="split-image" />
                      <img src={Logo} alt="Split 2" className="split-image" />
                      <img src={Logo} alt="Split 3" className="split-image" />
                    </div>
                  </div>
                </div>
                {/* Dont Edit this this for animation End */}

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
              />
            </InputGroup>

            <Button variant="primary">Search</Button>
          </div>
        </section>

        <section ref={containerRefs} className="welcome">
          <img className="Move" src={Logo} ref={logoRefs} />

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

        <section ref={section1Ref} className="featured">
          {/* Floating Images Container */}
          <div className="featured-floating-imgs">
            <div className="image-stack">
              <img
                ref={(el) => (imageRefs.current[0] = el)}
                className="initial-image"
                src={Logo1}
                alt="img1"
              />
              <img
                ref={(el) => (imageRefs.current[1] = el)}
                className="initial-image"
                src={Logo1}
                alt="img2"
              />
              <img
                ref={(el) => (imageRefs.current[2] = el)}
                className="initial-image"
                src={Logo1}
                alt="img3"
              />
            </div>
          </div>
          <Container className="full">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">FEATURED PROJECTS</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center">
                <div className="custom-swiper-nav d-flex gap-4 justify-content-end mb-3">
                  <img src={PrevArrow} alt="Previous" className="swiper-button-prev-custom" />
                  <img src={NextArrow} alt="Next" className="swiper-button-next-custom" />
                </div>
              </Col>
            </Row>
            <Row className="features-row">
              <Swiper
                // spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Navigation]}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.id}>
                    <Col className="features-list p-0 dip-column">
                      <Card
                        ref={(el) => (boxRefs.current[index] = el)} // Applied ref to each card
                        className={`custom-card card-${index}  box-${index}`} // Added box classes
                      >
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
                        <img
                          ref={(el) => (bottomImageRefs.current[index] = el)}
                          className="bottom-image"
                          src={project.bottomImage}
                          alt={`bottom-img-${project.id}`}
                        />
                      </Card>
                    </Col>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Row>
          </Container>

        </section>

        <section ref={section2Ref} className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
                <p className="same-head-p">
                  Explore the best properties in your preferred location. Start
                  your journey to a perfect home with us.
                </p>
                <img src={back} alt="" className="back-roll" ref={section2ImageRef}
                />

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

        <section ref={containerRefs1} className="social-proof position-relative">
          <img className="Move" src={Logo} ref={logoRefs1} />
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">Testimonials </h2>
                  <p className="same-head-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="Up-arrow-btn">
                    <img src={Arrow} />
                  </Button>
                </div>
                {/* <img src={soback} className="soc-img" alt="" /> */}
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
                          <Col xs="auto img-hide">
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
                          <Col className="px-4">
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

        <section className="featured blogs" ref={blogsectionRef}>
          <div className="featured-floating-imgs">
            <div className="image-stack">
              <img
                ref={(el) => (BlogimageRefs.current[0] = el)}
                className="initial-image"
                src={Logo1}
                alt="img1"
              />
              <img
                ref={(el) => (BlogimageRefs.current[1] = el)}
                className="initial-image"
                src={Logo1}
                alt="img2"
              />
              <img
                ref={(el) => (BlogimageRefs.current[2] = el)}
                className="initial-image"
                src={Logo1}
                alt="img3"
              />
            </div>
          </div>
          <Container className="">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">

                <h2 className="same-head">Latest Blogs</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              {Blogs.map((Blogs, index) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  {/* <Card className=" position-relative"> */}
                  <Card
                    ref={(el) => (BlogsboxRefs.current[index] = el)} // Applied ref to each card
                    className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
                  >
                    <Card.Img
                      variant="top"
                      src={Blogs.image}
                      alt={Blogs.title}
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{Blogs.date}</span>
                        <span>{Blogs.catagory} SDFSDF</span>
                      </Card.Text>
                      <Card.Title>{Blogs.name}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">
                        {Blogs.text}
                      </Card.Text>
                      <Button className="Up-arrow-btn" href="/details">
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                  <img
                    ref={(el) => (BlogBottomImageRefs.current[index] = el)}
                    className="bottom-image"
                    src={Blogs.BlogImage}
                    alt={`bottom-img-${Blogs.id}`}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <div className="position relative" ref={BlogsBottomsectionRef} >

        </div>
      </main>
    </>
  );
}

export default About;


