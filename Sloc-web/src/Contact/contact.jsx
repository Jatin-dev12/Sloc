import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import ofc from '../assets/Imgs/ofc.svg'
import call from '../assets/Imgs/call.svg'
import mal from '../assets/Imgs/mal.svg'
import 'intl-tel-input/build/css/intlTelInput.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    agree: '',
  });

  const phoneInputRef = useRef(null);
  const intlTelInstance = useRef(null);

  // Initialize intl-tel-input
  useEffect(() => {
    if (phoneInputRef.current) {
      import('intl-tel-input').then((intlTelInput) => {
        intlTelInstance.current = intlTelInput.default(phoneInputRef.current, {
          initialCountry: 'in',
          separateDialCode: true,
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });

        // Sync input value with formData on change
        phoneInputRef.current.addEventListener('input', () => {
          const fullNumber = intlTelInstance.current.getNumber();
          setFormData((prev) => ({
            ...prev,
            mobile: fullNumber || phoneInputRef.current.value,
          }));
        });

        // Validate on country change or input
        phoneInputRef.current.addEventListener('countrychange', () => {
          const fullNumber = intlTelInstance.current.getNumber();
          setFormData((prev) => ({
            ...prev,
            mobile: fullNumber || phoneInputRef.current.value,
          }));
        });
      }).catch((error) => {
        console.error('Failed to load intl-tel-input:', error);
      });

      return () => {
        if (intlTelInstance.current) {
          intlTelInstance.current.destroy();
        }
      };
    }
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'name') {
      setErrors((prev) => ({ ...prev, name: '' }));
    }

    if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (name === 'agree') {
      setErrors((prev) => ({ ...prev, agree: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      mobile: '',
      email: '',
      agree: '',
    };
    let isValid = true;

    // Check if name is entered (you can add more specific validation here)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate mobile number (only digits, 6-10 digits)
    if (!formData.mobile) {
      newErrors.mobile = 'Phone number is required';
      isValid = false;
    } else if (!/^\d+$/.test(formData.mobile)) {
      newErrors.mobile = 'Phone number must contain only digits';
      isValid = false;
    } else if (formData.mobile.length < 6 || formData.mobile.length > 10) {
      newErrors.mobile = 'Phone number must be between 6 and 10 digits';
      isValid = false;
    }

    // Check if email is entered (basic validation can be done here if needed)
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Check if the user agrees to the terms
    if (!formData.agree) {
      newErrors.agree = 'You must agree to the terms';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, submitting data:', formData);
      // Add form submission logic here (e.g., API call)
    } else {
      console.log('Form has errors, not submitting');
    }
  };


  return (
    <>
      <section className="disclamer baner-iner">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <h2 className="fw-bold blog-h mt-2">Let’s <br/>Connect</h2>
              <p className="blog-p">
              Helping you is what we do best. Whether you need info,<br/> advice, or a friendly chat; we’ve got you!

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
                        />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                      </div>

                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                          name="mobile"
                          ref={phoneInputRef}
                          minLength={6}
                          maxLength={15}
                        />
                      </div>
                        {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                      </div>

                      <div className="form-check mb-3 text-white">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          id="agreeCheck"
                        />
                        <label className="form-check-label" htmlFor="agreeCheck">
                          I agree to be contacted via Call, SMS, WhatsApp & Email
                        </label>
                      </div>
                      {errors.agree && <span style={{ color: 'red' }}>{errors.agree}</span>}

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
            <li className="mb-3 d-flex align-items-center">
                <img src={ofc} />
              <span>15th Floor, Ocus Quantum, Sector-51,<br/>
              Gurugram, Haryana - 122003</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
            <img src={call} />
            <span>+919971094108</span>


            </li>
            <li className="mb-3 d-flex align-items-center">
            <img src={mal} />
            <span>contact@sloc.in</span>
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
