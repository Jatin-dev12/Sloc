import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col,Modal ,Button } from 'react-bootstrap';
import '../App.css';
import ofc from '../assets/Imgs/ofc.svg'
import call from '../assets/Imgs/call.svg'
import mal from '../assets/Imgs/mal.svg'
import 'intl-tel-input/build/css/intlTelInput.css';
import bg from './bg.png'
import Instagram from "../assets/Imgs/ig.svg";
import Facebook from "../assets/Imgs/facbook.svg";
import linkdin from "../assets/Imgs/Linkdin.svg";
import social from "../assets/Imgs/social-media.svg";
import gf from './Loader.gif'

import { Link } from "react-router-dom";
import axios from 'axios';

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
    }
    // else if (formData.mobile.length < 6 || formData.mobile.length > 10) {
    //   newErrors.mobile = 'Phone number must be between 6 and 10 digits';
    //   isValid = false;
    // }
    // else if (formData.mobile.length > 10) {
    //   newErrors.mobile = 'Phone number must be between 6 and 10 digits';
    //   isValid = false;
    // }
    // Check if email is entered (basic validation can be done here if needed)
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Invalid email format";
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log('Form is valid, submitting data:', formData);

  //     // Get current URL for source
  //     const url = window.location.href; // e.g., http://localhost:5173/contact

  //     // Prepare API URL with form data
  //     const apiUrl = `https://sloc.bitrix24.in/rest/1/s94cvkguwyrljt7f/crm.lead.add.json?` +
  //       `FIELDS[TITLE]=SLOC_Webform` +
  //       `&FIELDS[NAME]=${encodeURIComponent(formData.name)}` +
  //       `&FIELDS[EMAIL][0][VALUE]=${encodeURIComponent(formData.email)}` +
  //       `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
  //       `&FIELDS[PHONE][0][VALUE]=${encodeURIComponent(formData.mobile)}` +
  //       `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
  //       `&FIELDS[SOURCE_ID]=UC_R2M98V` +
  //       `&FIELDS[SOURCE_DESCRIPTION]=Contact Page` +
  //       `&FIELDS[UF_CRM_1745260289]=${encodeURIComponent(url)}`;

  //     // Make API call
  //     fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('API response:', data);
  //         // Reset the form fields after successful submit
  //         setFormData({
  //           name: '',
  //           mobile: '',
  //           email: '',
  //           agree: false,
  //         });
  //         setErrors({}); // Clear any old errors
  //         handleShow(); // Open the modal
  //       })
  //       .catch(error => {
  //         console.error('API error:', error);
  //       });
  //   } else {
  //     console.log('Form has errors, not submitting');
  //   }
  // };

  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://admin.sloc.in/';
  const bitrixToken = import.meta.env.VITE_BITRIX_TOKEN || 's94cvkguwyrljt7f';
  const apiToken = import.meta.env.VITE_API_TOKEN || 'AzlrVK30FVdEx0TwrRwqYrQTL';
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      console.log('Form is valid, submitting data:', formData);

      try {
        // 1. Bitrix24 API call
        const url = window.location.href;
        const bitrixApiUrl = `https://sloc.bitrix24.in/rest/1/${bitrixToken}/crm.lead.add.jsondd?` +
          `FIELDS[TITLE]=SLOC_Webform` +
          `&FIELDS[NAME]=${encodeURIComponent(formData.name)}` +
          `&FIELDS[EMAIL][0][VALUE]=${encodeURIComponent(formData.email)}` +
          `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
          `&FIELDS[PHONE][0][VALUE]=${encodeURIComponent(formData.mobile)}` +
          `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
          `&FIELDS[SOURCE_ID]=UC_R2M98V` +
          `&FIELDS[SOURCE_DESCRIPTION]=Contact Page` +
          `&FIELDS[UF_CRM_1745260289]=${encodeURIComponent(url)}`;

        const bitrixResponse = await fetch(bitrixApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const bitrixData = await bitrixResponse.json();
        if (!bitrixResponse.ok || !bitrixData.result) {
          throw new Error('Bitrix API failed: ' + (bitrixData.error_description || 'Unknown error'));
        }
        console.log('Bitrix API response:', bitrixData);

        // 2. Contact Us API call
        const contactUsUrl = `${baseUrl}api/contact-us`;
        const contactUsResponse = await axios.post(
          contactUsUrl,
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
          },
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!contactUsResponse.data.success) {
          throw new Error('Contact Us API failed: ' + (contactUsResponse.data.message || 'Unknown error'));
        }
        console.log('Contact Us API response:', contactUsResponse.data);

        // Reset form and show modal
        setFormData({ name: '', mobile: '', email: '', agree: false });
        setErrors({});
        setLoading(false);
        handleShow(true);
      } catch (error) {
        setLoading(false);
        console.error('API error:', error);
        setErrors({ submit: 'Failed to submit form. Please try again.' });
      }
    } else {
      console.log('Form has errors, not submitting');
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <section className="disclamer baner-iner contact-banner">
      <Button variant="dark" className='ssksk' onClick={handleShow}>
              x
            </Button>
      <Modal show={show} onHide={handleClose} centered dialogClassName="popup-modal">
        <div className="popup-card">
        <Button variant="dark" className='ssksk' onClick={handleClose}>
              x
            </Button>
          <Modal.Header className="popup-header">
          </Modal.Header>
          <Modal.Body className="popup-body">
          <Modal.Title>Thank you for reaching out!</Modal.Title>
            One of our representatives will get in touch with you soon.
          </Modal.Body>
          <Modal.Footer className="popup-footer">

          </Modal.Footer>
        </div>
      </Modal>
        <Container>
          <Row className="align-items-center mobile-set">
            <Col md={6} className="animate__animated animate__fadeInLeft">
              <h2 className="fw-bold blog-h mt-2">Let’s <br/>Connect</h2>
              <p className="blog-p">
              Helping you is what we do best. Whether you need info,<br/> advice, or a friendly chat; we’ve got you!

              </p>
            </Col>
            <Col md={6}>
            <img src={bg} className="img-fluid"/>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-text "
      >
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
  onChange={(e) => {
    // Allow only alphabets and spaces, and limit to 30 characters
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '').slice(0, 30);
    setFormData((prev) => ({
      ...prev,
      name: value,
    }));
  }}
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
    value={formData.mobile}
    minLength={6}
    maxLength={15}
    onKeyPress={(e) => {
      // Allow only numeric input
      const isNumeric = /^[0-9]*$/.test(e.key);
      if (!isNumeric) {
        e.preventDefault();
      }
    }}
    onChange={(e) => {
      const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 15);
      setFormData((prev) => ({
        ...prev,
        mobile: value,
      }));
    }}
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
                          onChange={(e) => {
                            const value = e.target.value.slice(0, 30);
                            setFormData((prev) => ({
                              ...prev,
                              email: value,
                            }));
                          }}
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
                          Submit
                        </button>

                        {loading && <div className="loader">
  <img src={gf} style={{ width: '50px', height: '50px' }} className='loderr' />
                          </div>}

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
            <span className="link-bl"> <a href="tel:+919971094108">+919971094108</a></span>


            </li>
            <li className="mb-3 d-flex align-items-center">
            <img src={mal} />
            <span className="link-bl"> <a href="mailto:contact@sloc.in" >contact@sloc.in</a></span>
            </li>
            <li className="mb-3 d-flex align-items-center">
            <img src={social} />
            <div className="d-flex  mt-4 link-social">
                            <Link
                              to="https://www.linkedin.com/company/india-sloc"
                              target="blank"
                              className=""
                            >
                              <img src={linkdin} />
                            </Link>

                            <Link to="https://www.instagram.com/sloc.in/" className="" target='blank'>
                              <img src={Instagram} />
                            </Link>
                            <Link to="https://www.facebook.com/sloc.in" className="" target='blank'>
                              <img src={Facebook} />
                            </Link>
                          </div>
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
