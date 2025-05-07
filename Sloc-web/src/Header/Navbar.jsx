import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [fopen, setFopen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91"); // Default to India
  const intlTelInstance = useRef(null);
  const phoneInputRef2 = useRef(null);

  useEffect(() => {
    if (phoneInputRef2.current && fopen) {
      import("intl-tel-input")
        .then((intlTelInput) => {
          intlTelInstance.current = intlTelInput.default(
            phoneInputRef2.current,
            {
              initialCountry: "in",
              separateDialCode: true,
              utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            }
          );

          const updatePhoneNumber = () => {
            const selectedCountryData = intlTelInstance.current.getSelectedCountryData();
            const rawInput = phoneInputRef2.current.value || "";

            setCountryCode(`+${selectedCountryData.dialCode}`);
            setFormData2((prev) => ({
              ...prev,
              mobile: rawInput.replace(/[^0-9]/g, ""),
            }));
          };

          phoneInputRef2.current.addEventListener("input", updatePhoneNumber);
          phoneInputRef2.current.addEventListener("countrychange", updatePhoneNumber);

          // Set initial country code
          updatePhoneNumber();

          return () => {
            phoneInputRef2.current.removeEventListener("input", updatePhoneNumber);
            phoneInputRef2.current.removeEventListener("countrychange", updatePhoneNumber);
          };
        })
        .catch((error) => {
          console.error("Failed to load intl-tel-input:", error);
        });

      return () => {
        if (intlTelInstance.current) {
          intlTelInstance.current.destroy();
        }
      };
    }
  }, [fopen]);

  const handleChange2 = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;
    if (name === 'name') {
      newValue = value.replace(/[^a-zA-Z\s]/g, '').slice(0, 30);
    } else if (name === 'email') {
      newValue = value.slice(0, 30);
    } else if (name === 'mobile') {
      if (!/^\d*$/.test(value)) {
        return;
      }
      newValue = value.slice(0, 15);
    }

    setFormData2((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : newValue,
    }));

    setErrors2((prev) => ({ ...prev, [name]: '' }));
  };

  const [formData2, setFormData2] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: false,
  });

  const [errors2, setErrors2] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: "",
  });

  const location = useLocation();

  const validateForm2 = () => {
    const newErrors = {
      name: '',
      mobile: '',
      email: '',
      agree: '',
    };
    let isValid = true;

    if (!formData2.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData2.mobile) {
      newErrors.mobile = 'Phone number is required';
      isValid = false;
    }
    if (!formData2.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData2.agree) {
      newErrors.agree = 'You must agree to the terms';
      isValid = false;
    }

    setErrors2(newErrors);
    return isValid;
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (validateForm2()) {
      // Combine country code with mobile number for submission
      const fullMobileNumber = `${countryCode}${formData2.mobile}`;

      const url = window.location.href;
      const projectSlugArray = url.split('/project/');
      const projectSlug = projectSlugArray[1] || 'Unknown Project';

      const projectName = projectSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

      const apiUrl = `https://sloc.bitrix24.in/rest/1/s94cvkguwyrljt7f/crm.lead.add.json?` +
        `FIELDS[TITLE]=SLOC_Webform` +
        `&FIELDS[NAME]=${(formData2.name)}` +
        `&FIELDS[EMAIL][0][VALUE]=${(formData2.email)}` +
        `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
        `&FIELDS[PHONE][0][VALUE]=${(fullMobileNumber)}` +
        `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
        `&FIELDS[SOURCE_ID]=UC_R2M98V` +
        `&FIELDS[UF_CRM_1745260289]=${(url)}`;

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          setFormData2({
            name: '',
            mobile: '',
            email: '',
            agree: false,
          });
          setErrors2({});
          open();
          handleShow();
        })
        .catch(error => {
          console.error('API error:', error);
        });
    }
  };

  const isActive = (path) => location.pathname === path;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const open = () => setFopen(false);
  const close = () => setFopen(true);

  return (
    <>
      <main className="menu">
        <Modal show={fopen} onHide={open} centered dialogClassName="popup-modal">
          <div className="popup-card c">
            <Button variant="dark" className='ssksk' onClick={open}>
              x
            </Button>

            <Modal.Body className="popup-body">
              <div
                className="form-set"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-offset="10"
              >
                <h5>Enter details to schedule meeting</h5>
                <form onSubmit={handleSubmit2}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      name="name"
                      value={formData2.name}
                      onChange={handleChange2}
                    />
                    {errors2.name && <span style={{ color: 'red' }}>{errors2.name}</span>}
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      name="mobile"
                      value={formData2.mobile}
                      ref={phoneInputRef2}
                      minLength={6}
                      maxLength={15}
                      onChange={handleChange2}
                    />
                    {errors2.mobile && <span style={{ color: 'red' }}>{errors2.mobile}</span>}
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      name="email"
                      value={formData2.email}
                      onChange={handleChange2}
                    />
                    {errors2.email && <span style={{ color: 'red' }}>{errors2.email}</span>}
                  </div>

                  <div className="form-check mb-3 text-white">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="agree"
                      checked={formData2.agree}
                      onChange={handleChange2}
                      id="agreeCheck"
                    />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      I agree to be contacted via Call, SMS, WhatsApp & Email
                    </label>
                  </div>
                  {errors2.agree && <span style={{ color: 'red' }}>{errors2.agree}</span>}

                  <div className="d-grid">
                    <button type="submit" className="btn btn-light text-dark">
                      Submit
                    </button>
                    {loading && <div className="loader">Submitting...</div>}
                  </div>
                </form>
              </div>
            </Modal.Body>
          </div>
        </Modal>

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

        <Navbar expand="lg" className="Main-nav" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <p className="Logo">SLOC</p>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  data-text="Home"
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className={`nav-link ${isActive("/about-us") ? "active" : ""}`}
                  data-text="About Us"
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                  data-text="Blogs"
                >
                  Blogs
                </Link>
                <Link
                  className={`nav-link cntnct all-same-ani ${isActive("/contact") ? "active" : ""}`}
                  // onClick={close}
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </main>
    </>
  );
}