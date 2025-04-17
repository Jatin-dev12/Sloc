import React from 'react'
import { Row, Col , Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Arrow from "../assets/Imgs/up-arrow.svg";
import blog1 from "../assets/Imgs/blog-1.png";
import blog2 from "../assets/Imgs/blog-2.png";
import { Card } from "react-bootstrap";
import '../App.css'

import blog3 from "../assets/Imgs/blog-3.png";
const Blogsdata = [
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
  {
    id: 4,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 5,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 6,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 7,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 8,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 9,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 10,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 11,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 12,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
];

function Blogs() {
  return (
    <main className='blog-page'>

     <section className="Main-banner Blogs-banner" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} >
                <h1>Real<br/>
                Estate Blogs</h1>
                <p>Explore expert blogs on buying, selling, investing, and living in your perfect space.<br/> Knowledge that moves with the market. </p>
              </Col>
              <Col>



              </Col>
            </Row>
          </Container>

        </section>


        <section className='Blog-listing'>
            <Container>
                <Row className='blog-select mb-5'>
                    <Col md={12}>
<Button variant='dark' className='active'> All</Button>
<Button variant='dark' className='latest'> Latest Blogs</Button>

<Button variant='dark' className='latest'> Apartment</Button>

<Button variant='dark' className='latest'> Villa</Button>

<Button variant='dark' className='latest'> project</Button>


                    </Col>
                </Row>
            </Container>
        </section>


                <section className="featured blogs  all-blogs" >
                                  <Container className="">

                    <Row>
                      {Blogsdata.map((Blogsdata, index) => (
                        <Col md={4} key={Blogsdata.id} className="features-list p-0">
                          {/* <Card className=" position-relative"> */}
                          <Card

                            className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
                          >
                            <Card.Img
                              variant="top"
                              src={Blogsdata.image}
                              alt={Blogsdata.title}
                            />
                            <Card.Body className="uper-space">
                              <Card.Text className="mb-4 btn-loc top-set">
                                <span className="black">{Blogsdata.date}</span>
                                <span>{Blogsdata.catagory} </span>
                              </Card.Text>
                              <Card.Title>{Blogsdata.name}</Card.Title>

                              <Card.Text className="text-primary font-weight-bold">
                                {Blogsdata.text}
                              </Card.Text>
                              <Button className="Up-arrow-btn" href='/details'>
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

  )
}

export default Blogs