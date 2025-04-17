import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css'

const Disclaimer = () => {
  return (


    <>

    <section className='disclamer baner-iner'>

    <Container className="">
      <Row className="align-items-center">
        <Col md={12}>

          <h2 className="fw-bold blog-h mt-2">Disclaimer</h2>
          <p className=" blog-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        </Col>
      </Row>
    </Container>
    </section>

    </>
  );
};

export default Disclaimer;
