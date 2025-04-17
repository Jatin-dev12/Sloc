import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import ofc from '../assets/Imgs/ofc.svg'
import call from '../assets/Imgs/call.svg'
import mal from '../assets/Imgs/mal.svg'



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <>
      <section className="disclamer baner-iner">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <h2 className="fw-bold blog-h mt-2">Contact us</h2>
              <p className="blog-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-text ">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={10} className="all-border contact-set">
              <Row className="">
                <Col md={6} className="justify-content-center btm-s">
                <div className='form-set'>
                <h5>Let’s Connect!</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3 input-group">
                      <span className="input-group-text">🇮🇳 +91</span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-check mb-3 text-white">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        id="agreeCheck"
                        required
                      />
                      <label className="form-check-label" htmlFor="agreeCheck">
                        I agree to be contacted via Call, SMS, WhatsApp & Email
                      </label>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-light text-dark">
                        Connect Us
                      </button>
                    </div>
                  </form>
                  </div>
                </Col>
                <Col md={6} className="justify-content-center cntnct align-content-center btm-s ">
   <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-start">
                <img src={ofc} />
              <span>15th Floor, Ocus Quantum, Sector-51,<br/>
              Gurugram, Haryana - 122003</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
            <img src={call} />

              <span>contact@sloc.in</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
            <img src={mal} />

              <span>+919971094108</span>
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

export default Contact;
