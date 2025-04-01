import "./App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "./assets/Imgs/Search.svg";
import { Card } from "react-bootstrap";
import { Form, Button, InputGroup, Dropdown, DropdownButton, } from "react-bootstrap";
import Round from "./assets/Imgs/welcm-scrol.png";
import f1 from './assets/Imgs/f1.png'
import f2 from './assets/Imgs/f2.png'
import f3 from './assets/Imgs/f3.png'
import Arrow from './assets/Imgs/up-arrow.svg'
import Cta from './assets/Imgs/Cta-scrol.png'



const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet:"1948 - 3700 Sq.Ft.",
    image: f1 // Replace with actual image URL
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet:"1948 - 3700 Sq.Ft.",

    image: f2

  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet:"1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3
  }
];

  const testimonials = [
    {
      id: 1,
      name: "SAM SAMPLETON",
      image: "/placeholder.svg?height=80&width=80",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 2,
      name: "JANE DOE",
      image: "/placeholder.svg?height=80&width=80",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
  ]


function App() {
  return (
    <>
      <main>
        <section className="Main-banner">
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
                    <h3 className="text-primary">1M+</h3>
                    <p>Sed ut Perspiciatis</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-bottom">
                  <Card className="">
                    <h3 className="text-primary">500K+</h3>
                    <p>Lorem Ipsum</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-right">
                  <Card>
                    <h3 className="text-primary">24/7</h3>
                    <p>Consectetur Adipiscing Elit, Sed Do</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="left-brdr">
                  <Card className="">
                    <h3 className="text-primary">1M+</h3>
                    <p>Sed ut Perspiciatis</p>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="featured">
          <Container className="full">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">  <h2 className="same-head">FEATURED PROJECTS</h2>
                <p className="same-head-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center" >
                <Button variant="dark">See more Projects</Button>
              </Col>
            </Row>
            <Row>
              {projects.map((project) => (
                <Col md={4} key={project.id} className="features-list p-0">
                  <Card className="">
                    <Card.Img variant="top" src={project.image} alt={project.title}  />
                    <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc">
                        <span>{project.size}</span> <span>{project.feet}</span><span>{project.location}</span>
                      </Card.Text>
                      <Card.Title>{project.title}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">{project.price}</Card.Text>
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

        <section className="Cta position-relative">
      <Container>
        <Row className="d-flex align-items-center justify-content-center ">
          <Col md={8}>
            <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
            <p className="same-head-p">
              Explore the best properties in your preferred location. Start your
              journey to a perfect home with us.
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

  <section className="social-proof">
    <Container fluid className="py-5">
      <Row className="align-items-center">
        <Col md={4} className="mb-4 mb-md-0">
          <div className="ps-md-4">
            <h2 className="fw-bold mb-3">
              SOCIAL PROOF
            </h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Button
              variant="primary"
              className="d-flex align-items-center justify-content-center"
              style={{ width: "48px", height: "48px", padding: 0 }}
            >
            </Button>
          </div>
        </Col>

        <Col md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={index !== 0 ? "mt-4 pt-4 border-top" : ""}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <div className="position-relative" style={{ width: "80px", height: "80px" }}>
                      <img src={Arrow} />

                      </div>
                    </Col>
                    <Col>
                      <div className="position-relative">
                        <div className="position-absolute" style={{ top: "-20px", right: "0" }}>
                          <span className="text-muted" style={{ fontSize: "40px", opacity: "0.2" }}>
                            &ldquo;&ldquo;
                          </span>
                        </div>
                        <h5 className="mb-2">{testimonial.name}</h5>
                        <p className="text-muted mb-0">{testimonial.text}</p>
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
          <Container className="full">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">  <h2 className="same-head">Latest Blogs</h2>
                <p className="same-head-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center" >
                <Button variant="dark">See more Blogs</Button>
              </Col>
            </Row>
            <Row>
              {projects.map((project) => (
                <Col md={4} key={project.id} className="features-list p-0">
                  <Card className="">
                    <Card.Img variant="top" src={project.image} alt={project.title}  />
                    <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc">
                        <span>{project.size}</span> <span>{project.feet}</span><span>{project.location}</span>
                      </Card.Text>
                      <Card.Title>{project.title}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">{project.price}</Card.Text>
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

export default App;
