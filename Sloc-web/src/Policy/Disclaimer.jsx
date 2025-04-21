import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css'
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (


    <>

    <section className='disclamer baner-iner'>

    <Container className="">
      <Row className="align-items-center">
        <Col md={12}>

          <h2 className="fw-bold blog-h mt-2">Disclaimer</h2>
          <p className=" blog-p">
          Transparency matters! Here's everything you need to know before you proceed.
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
          The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of the properties mentioned is not guaranteed.
          </p><br/>
          <p>
          Users of this website are hereby advised to exercise due diligence and to independently validate and verify all information about any property/project before deciding to purchase the same or taking any other action. The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately.
          </p><br/>
          <p>Please note that this is the official website of an authorized marketing partner. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. All trademarks are the property of their respective owners.</p>
        </Col>
      </Row>
    </Container>
    </section>

    </>
  );
};

export default Disclaimer;
