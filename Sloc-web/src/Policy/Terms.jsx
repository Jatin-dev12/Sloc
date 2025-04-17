import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import { FaCheckCircle } from "react-icons/fa";
import Icon from '../assets/Imgs/list-icon.svg'

const Terms = () => {
  return (


    <>

    <section className='terms baner-iner'>

    <Container className="">
      <Row className="align-items-center">
        <Col md={12}>

          <h2 className="fw-bold blog-h mt-2">Terms &<br/>
          Conditions</h2>
          <p className=" blog-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>

      </Row>

    </Container>

    </section>

    <section className='blog-text btm-space'>
        <Container fluid className="">
    <Row className=' justify-content-center'>
        <Col md={10} className='all-border'>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p><br/>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
          <Row className=' justify-content-center mt-5 list-term'>
        <Col md={6} >
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-start">
              <img src={Icon} className="text-primary me-2 "/>
              <span>VRV/VRF air-conditioning system for year-round comfort</span>
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
              <span>One of the lowest density project on dwarka expressway</span>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-start">
              <img src={Icon} className="text-primary me-2 "/>
              <span>Approximately 75% is dedicated to open spaces</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
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
            </li>
          </ul>
        </Col>
      </Row>
        </Col>
      </Row>

    </Container>
    </section>

    </>
  );
};

export default Terms;
