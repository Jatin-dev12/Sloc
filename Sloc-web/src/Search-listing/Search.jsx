import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Bg from "./sbg.png";
import Plus from "./plus.svg";
import Arrow from "../assets/Imgs/up-arrow.svg";

import f1 from "../assets/Imgs/f1.png";
import f2 from "../assets/Imgs/f2.png";
import f3 from "../assets/Imgs/f3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Card } from "react-bootstrap";

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
function list() {
  return (
    <main className="searc-listing">


      <section className="Main-banner listing-maina" data-speed="1.5">
        <Container>
          <Row className=" align-items-center">
            <Col md={6} className="top-co align-items-center">
              <h1 className=" animate__animated animate__fadeInLeft">
                Explore Project in City name
              </h1>

              <p>
                Explore expert blogs on buying, selling, investing, and living
                in your perfect space. Knowledge that moves with the market.{" "}
              </p>
            </Col>
            <Col md={6}>
              <img src={Bg} className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <div className="d-flex align-items-md-center searc-bar home-serch justify-content-between searchlisting-bar">
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
              placeholder="Search by Developer or Project"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button className="all-same-ani" variant="primary">
            Search
          </Button>
        </div>
      </section>

      <section className="Blog-listing">
        <Container>
          <Row className="blog-select mb-5">
            <Col md={6}>
              <Button variant="dark" className="latest filter">
                {" "}
                XYZ City <img src={Plus} className="pluss" />{" "}
              </Button>

              <Button variant="dark" className="latest filter">
                {" "}
                Apartment <img src={Plus} className="pluss" />
              </Button>

              <Button variant="dark" className="latest filter">
                {" "}
                Property ID <img src={Plus} className="pluss" />
              </Button>
            </Col>
            <Col md={6} className="search-filterr">
              <DropdownButton
                id="Sort by"
                title="Sort by"
                variant="outline-light"
                className="me-2 sortby"
              >
                <Dropdown.Item href="#">Apartment</Dropdown.Item>
                <Dropdown.Item href="#">House</Dropdown.Item>
                <Dropdown.Item href="#">Condo</Dropdown.Item>
              </DropdownButton>

              <p className="Bysearch">by search Result : 9</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section  className="featured listing-mania pt-4" >

        <Container className="full">

        <Row className="features-row listing-ki">
             {projects.map((project, index) => (
                 <Col key={project.id} className="features-list p-0 dip-column" md={4}>
                   <Card
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
                   </Card>
                 </Col>
             ))}
</Row>

<Row className="features-row listing-ki mt-5">
             {projects.map((project, index) => (
                 <Col key={project.id} className="features-list p-0 dip-column" md={4}>
                   <Card
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
                   </Card>
                 </Col>
             ))}
</Row>


<Row className="features-row listing-ki mt-5">
             {projects.map((project, index) => (
                 <Col key={project.id} className="features-list p-0 dip-column" md={4}>
                   <Card
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
                   </Card>
                 </Col>
             ))}
</Row>
<Row className="align-items-center justify-content-center">
<Button variant="dark" className="load-more ">  Load More</Button>
</Row>
        </Container>
      </section>


    </main>
  );
}

export default list;
