import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../App.css";
import ofc from "../assets/Imgs/ofc.svg";
import call from "../assets/Imgs/call.svg";
import mal from "../assets/Imgs/mal.svg";
import "intl-tel-input/build/css/intlTelInput.css";
import bg from "./bg.png";
import Instagram from "../assets/Imgs/ig.svg";
import Facebook from "../assets/Imgs/facbook.svg";
import linkdin from "../assets/Imgs/Linkdin.svg";
import social from "../assets/Imgs/social-media.svg";
import gf from "./Loader.gif";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: true,
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: "",
  });

  const phoneInputRef = useRef(null);
  const intlTelInstance1 = useRef(null);

  const [countryCode, setCountryCode] = useState("+91"); // Default to India
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (phoneInputRef.current) {
  //     import("intl-tel-input")
  //       .then((intlTelInput) => {
  //         intlTelInstance.current = intlTelInput.default(
  //           phoneInputRef.current,
  //           {
  //             initialCountry: "in",
  //             separateDialCode: true,
  //             utilsScript:
  //               "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  //           }
  //         );

  //         const updatePhoneNumber = () => {
  //           const selectedCountryData =
  //             intlTelInstance.current.getSelectedCountryData();
  //           const rawInput = phoneInputRef.current.value || "";

  //           setCountryCode(`+${selectedCountryData.dialCode}`);
  //           setFormData((prev) => ({
  //             ...prev,
  //             mobile: rawInput.replace(/[^0-9]/g, ""),
  //           }));
  //         };

  //         phoneInputRef.current.addEventListener("input", updatePhoneNumber);
  //         phoneInputRef.current.addEventListener(
  //           "countrychange",
  //           updatePhoneNumber
  //         );

  //         // Set initial country code
  //         updatePhoneNumber();

  //         return () => {
  //           phoneInputRef.current.removeEventListener(
  //             "input",
  //             updatePhoneNumber
  //           );
  //           phoneInputRef.current.removeEventListener(
  //             "countrychange",
  //             updatePhoneNumber
  //           );
  //         };
  //       })
  //       .catch((error) => {
  //         console.error("Failed to load intl-tel-input:", error);
  //       });

  //     return () => {
  //       if (intlTelInstance.current) {
  //         intlTelInstance.current.destroy();
  //       }
  //     };
  //   }
  // }, []);
  
    useEffect(() => {
      console.log("useEffect: Initializing intl-tel-input");
    
      if (phoneInputRef.current) {
        // Function to fetch country code based on user location
        const getCountryCodeFromLocation = async () => {
          try {
            // Fallback to 'in' if location fetching fails
            let countryCode = "in";
    
            // Use ipapi.co to get country code based on IP (no geolocation permission needed)
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();
            if (data && data.country_code) {
              countryCode = data.country_code.toLowerCase();
              console.log("Fetched country code from IP:", countryCode);
            } else {
              console.warn("No country code found, using fallback: in");
            }
    
            return countryCode;
          } catch (error) {
            console.error("Failed to fetch country code:", error);
            return "in"; // Fallback country code
          }
        };
    
        // Load intl-tel-input and initialize with dynamic country
        getCountryCodeFromLocation().then((initialCountry) => {
          import("intl-tel-input")
            .then((intlTelInput) => {
              console.log("intl-tel-input: Module loaded");
    
              intlTelInstance1.current = intlTelInput.default(phoneInputRef.current, {
                initialCountry: initialCountry,
                separateDialCode: true,
                utilsScript:
                  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
              });
              console.log("intl-tel-input: Initialized with country", initialCountry, intlTelInstance1.current);
    
              const updatePhoneNumber = () => {
                console.log("updatePhoneNumber: Triggered");
                const selectedCountryData = intlTelInstance1.current.getSelectedCountryData();
                const rawInput = phoneInputRef.current.value || "";
    
                console.log("Selected country:", selectedCountryData);
                console.log("Raw input:", rawInput);
    
                const newCountryCode = `+${selectedCountryData.dialCode}`;
                setCountryCode(newCountryCode);
                console.log("Country code updated to:", newCountryCode);
    
                const phoneNumber = rawInput.replace(/[^0-9]/g, "");
                setFormData((prev) => ({
                  ...prev,
                  mobile: phoneNumber,
                }));
                console.log("formData.mobile updated to:", phoneNumber);
              };
    
              // Initialize country code
              updatePhoneNumber();
    
              // Add event listeners
              phoneInputRef.current.addEventListener("countrychange", () => {
                console.log("Event: countrychange fired");
                updatePhoneNumber();
              });
              phoneInputRef.current.addEventListener("input", () => {
                console.log("Event: input fired");
                updatePhoneNumber();
              });
    
              console.log("Event listeners added");
    
              // Cleanup event listeners
              return () => {
                console.log("Cleanup: Removing event listeners");
                phoneInputRef.current.removeEventListener("countrychange", updatePhoneNumber);
                phoneInputRef.current.removeEventListener("input", updatePhoneNumber);
              };
            })
            .catch((error) => {
              console.error("intl-tel-input: Failed to load", error);
            });
        });
    
        // Cleanup intl-tel-input instance
        return () => {
          if (intlTelInstance1.current) {
            console.log("Cleanup: Destroying intl-tel-input");
            intlTelInstance1.current.destroy();
          }
        };
      } else {
        console.warn("phoneInputRef: Not available");
      }
    }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: "" }));
    }

    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (name === "agree") {
      setErrors((prev) => ({ ...prev, agree: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      mobile: "",
      email: "",
      agree: "",
    };
    let isValid = true;

    // Check if name is entered (you can add more specific validation here)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate mobile number (only digits, 6-10 digits)
    if (!formData.mobile) {
      newErrors.mobile = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.mobile)) {
      newErrors.mobile = "Phone number must contain only digits";
      isValid = false;
    }
    else if (formData.mobile.length < 6 || formData.mobile.length > 15) {
      newErrors.mobile = "Please enter a valid phone number";
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
      newErrors.agree = "You must agree to the terms";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://admin.sloc.in/";
  const bitrixToken = import.meta.env.VITE_BITRIX_TOKEN || "s94cvkguwyrljt7f";
  const apiToken =
    import.meta.env.VITE_API_TOKEN || "AzlrVK30FVdEx0TwrRwqYrQTL";
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, submitting data:", formData);
      const fullMobileNumber = `${countryCode}${formData.mobile}`;

      // Extract project name from URL
      const url = window.location.href; // e.g., http://localhost:5173/project/godrej-miraya
      const projectSlugArray = url.split("/project/");
      const projectSlug = projectSlugArray[1] || "Unknown Project";

      // Format project name: remove hyphens, capitalize first letter of each word
      const projectName = projectSlug
        .split("-")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      console.log("Formatted projectName:", projectName);
      // 2. Contact Us API call
      const contactUsUrl = `${baseUrl}api/contact-us`;
      const contactUsResponse = await axios.post(
        contactUsUrl,
        {
          name: formData.name,
          email: formData.email,
          // mobile: fullMobileNumber,
          mobile: formData.mobile,
        },
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!contactUsResponse.data.success) {
        throw new Error(
          "Contact Us API failed: " +
            (contactUsResponse.data.message || "Unknown error")
        );
      }
      console.log("Contact Us API response:", contactUsResponse.data);

      // Prepare API URL with form data
      const apiUrl =
        `https://sloc.bitrix24.in/rest/1/s94cvkguwyrljt7f/crm.lead.add.json?` +
        `FIELDS[TITLE]=SLOC_Webform` +
        `&FIELDS[NAME]=${encodeURIComponent(formData.name)}` +
        `&FIELDS[EMAIL][0][VALUE]=${formData.email}` +
        `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
        `&FIELDS[PHONE][0][VALUE]=${fullMobileNumber}` +
        `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
        `&FIELDS[SOURCE_ID]=UC_R2M98V` +
        `&FIELDS[UF_CRM_1745260289]=${url}`;

      // Make API call
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("API response:", data);
          // Reset the form fields after successful submit
          setFormData({
            name: "",
            mobile: "",
            email: "",
            agree: false,
          });
          setErrors({}); // Clear any old errors
          // handleShow(); // Open the modal
          navigate("/thank-you", { state: { projectSlug, fromContactUs: true } });
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    } else {
      console.log("Form has errors, not submitting");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Helmet>
        <title>Contact SLOC - Leading Real Estate Company in India</title>
        <meta
          property="og:title"
          content="Contact SLOC - Leading Real Estate Company in India"
        />
        <meta
          property="og:description"
          content="Reach out to SLOC for expert guidance in investing property in India. Our team of real estate professionals is ready to help with all your property needs."
        />
      </Helmet>
      <section className="disclamer baner-iner contact-banner">
        <Button variant="dark" className="ssksk" onClick={handleShow}>
          x
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          dialogClassName="popup-modal"
        >
          <div className="popup-card">
            <Button variant="dark" className="ssksk" onClick={handleClose}>
              x
            </Button>
            <Modal.Header className="popup-header"></Modal.Header>
            <Modal.Body className="popup-body">
              <Modal.Title>Thank you for reaching out!</Modal.Title>
              One of our representatives will get in touch with you soon.
            </Modal.Body>
            <Modal.Footer className="popup-footer"></Modal.Footer>
          </div>
        </Modal>
        <Container>
          <Row className="align-items-center mobile-set">
            <Col md={6} className="animate__animated animate__fadeInLeft">
              <h2 className="fw-bold blog-h mt-2">
                Let’s <br />
                Connect
              </h2>
              <p className="blog-p">
                Helping you is what we do best. Whether you need info,
                <br /> advice, or a friendly chat; we’ve got you!
              </p>
            </Col>
            <Col md={6}>
              <img src={bg} className="img-fluid" />
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
                  <div className="form-set">
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
                            const value = e.target.value
                              .replace(/[^a-zA-Z\s]/g, "")
                              .slice(0, 30);
                            setFormData((prev) => ({
                              ...prev,
                              name: value,
                            }));
                          }}
                        />

                        {errors.name && (
                          <span style={{ color: "red" }}>{errors.name}</span>
                        )}
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
                            const value = e.target.value
                              .replace(/[^0-9]/g, "")
                              .slice(0, 15);
                            setFormData((prev) => ({
                              ...prev,
                              mobile: value,
                            }));
                          }}
                        />
                      </div>
                      {errors.mobile && (
                        <span style={{ color: "red" }}>{errors.mobile}</span>
                      )}

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
                        {errors.email && (
                          <span style={{ color: "red" }}>{errors.email}</span>
                        )}
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
                        <label
                          className="form-check-label"
                          htmlFor="agreeCheck"
                        >
                          I agree to be contacted via Call, SMS, WhatsApp &
                          Email
                        </label>
                      </div>
                      {errors.agree && (
                        <span style={{ color: "red" }}>{errors.agree}</span>
                      )}

                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-light text-dark"
                        >
                          Submit
                        </button>

                        {loading && (
                          <div className="loader">
                            <img
                              src={gf}
                              style={{ width: "50px", height: "50px" }}
                              className="loderr"
                            />
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </Col>
                <Col
                  md={6}
                  className="justify-content-center cntnct align-content-center btm-s "
                >
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <img src={ofc} />
                      <span>
                        15th Floor, Ocus Quantum, Sector-51,
                        <br />
                        Gurugram, Haryana - 122003
                      </span>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <img src={call} />
                      <span className="link-bl">
                        {" "}
                        <a href="tel:+919971094108">+919971094108</a>
                      </span>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <img src={mal} />
                      <span className="link-bl">
                        {" "}
                        <a href="mailto:contact@sloc.in">contact@sloc.in</a>
                      </span>
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

                        <Link
                          to="https://www.instagram.com/sloc.in/"
                          className=""
                          target="blank"
                        >
                          <img src={Instagram} />
                        </Link>
                        <Link
                          to="https://www.facebook.com/sloc.in"
                          className=""
                          target="blank"
                        >
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
