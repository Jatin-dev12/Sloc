import React from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import Bl from '../assets/Imgs/Blog-detail.svg';
import '../App.css'
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (


    <>

    <section className='blog-detailss'>

    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={7}>
          <div className="mb-2">
            <Badge bg="" className="date">March 10, 2025</Badge>
            <Badge bg="                                                                                                                                                                                                                                                                                                                                                     " className='apartmanet'>Architecture</Badge>
          </div>
          <h2 className="fw-bold blog-h mt-3">BLOG 1 HEADING</h2>
          <p className="text-muted blog-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className='author'><strong>Author:</strong> Ravi Prakash Sharma</p>
        </Col>
        <Col md={5}>
          <Image
            src={Bl} // Replace with actual image URL or import
            alt="Blog Visual"
            fluid

          />
        </Col>
      </Row>

    </Container>

    </section>

    <section className='blog-text'>
        <Container fluid className="">
    <Row className=' justify-content-center'>
        <Col md={10} className='all-border'>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p><br/>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
        </Col>
      </Row>
    </Container>
    </section>

    </>
  );
};

export default BlogSection;
