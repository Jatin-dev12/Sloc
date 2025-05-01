/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import { Card } from "react-bootstrap";
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import location from "./imgs/navigate.svg";
import Round from "../assets/Imgs/rt.png";
import Counter from "../Animations/CountUp/CountUp";
import over1 from "./imgs/over1.svg";
import over2 from "./imgs/over2.svg";
import over3 from "./imgs/over3.svg";
import over4 from "./imgs/over4.svg";
import Icon from "../assets/Imgs/list-icon.svg";
import back from "../assets/Imgs/back-cta.png";
import Temp from "./imgs/tem.png";
import Struc from "./imgs/home.png";
import jog from "./imgs/joging.png";
import silent from "./imgs/silent.png";
import spa from "./imgs/spa.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import lib from "./imgs/lib.png";
import tr from "./imgs/24.png";
import stake from "./imgs/staking.png";
import gym from "./imgs/gym.png";
import red from "./imgs/red.png";
import Time from "./imgs/timer.png";
import WelcomeLogo from "../assets/Imgs/back-scrol-BsNhHslO.png";
import f1 from "./imgs/1st.png";
import f2 from "./imgs/2nd.png";
import f3 from "./imgs/3rd.png";
import Arrow from "../assets/Imgs/up-arrow.svg";
import pro1 from "../assets/Imgs/f1.png";
import pro2 from "../assets/Imgs/f2.png";
import pro3 from "../assets/Imgs/f3.png";
import NextArrow from "../assets/Imgs/right.svg";
import PrevArrow from "../assets/Imgs/left.svg";
import { Accordion } from "react-bootstrap";
import Char from "./Chart";
import { Link, useParams } from "react-router-dom";
import Instagram from "../assets/Imgs/ig.svg";
import Facebook from "../assets/Imgs/facbook.svg";
import linkdin from "../assets/Imgs/Linkdin.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from "axios";
import logo from './imgs/logo.png';
import backpg from './imgs/p.jpg'

gsap.registerPlugin(ScrollTrigger);

function project() {




  const projects = [
    {
      id: 1,
      title: "GODREJ VRIKSHYA",
      price: "₹ 3.30 CR* ONWARDS",
      location: "SECTOR 49, GURGAON",
      size: "3 & 4 BHK",
      feet: "1948 - 3700 Sq.Ft.",
      image: pro1, // Replace with actual image URL
    },
    {
      id: 2,
      title: "SMARTWORLD THE EDITION",
      price: "₹ 6.50 CR* ONWARDS",
      location: "SECTOR 66, GURGAON",
      size: "3 & 4 BHK",
      feet: "1948 - 3700 Sq.Ft.",

      image: pro2,
    },
    {
      id: 3,
      title: "GODREJ ARISTOCRAT",
      price: "₹ 5.53 CR* ONWARDS",
      location: "SECTOR 62, GURGAON",
      feet: "1948 - 3700 Sq.Ft.",

      size: "3 & 4 BHK",
      image: pro3,
    },
    {
      id: 4,
      title: "GODREJ ARISTOCRAT",
      price: "₹ 5.53 CR* ONWARDS",
      location: "SECTOR 62, GURGAON",
      feet: "1948 - 3700 Sq.Ft.",

      size: "3 & 4 BHK",
      image: pro3,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: "",
  });
  const [formData1, setFormData1] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: false,
  });

  const [errors1, setErrors1] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: "",
  });
  const phoneInputRef1 = useRef(null);
  const phoneInputRef = useRef(null);
  const intlTelInstance = useRef(null);
  const handleChange1 = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData1((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "name") {
      setErrors1((prev) => ({ ...prev, name: "" }));
    }

    if (name === "email") {
      setErrors1((prev) => ({ ...prev, email: "" }));
    }

    if (name === "agree") {
      setErrors1((prev) => ({ ...prev, agree: "" }));
    }
  };
  const validateForm1 = () => {
    const newErrors = {
      name: "",
      mobile: "",
      email: "",
      agree: "",
    };
    let isValid = true;

    // Check if name is entered (you can add more specific validation here)
    if (!formData1.name.trim()) {
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
    // else if (formData.mobile.length < 6 || formData.mobile.length > 10) {
    //   newErrors.mobile = "Phone number must be between 6 and 10 digits";
    //   isValid = false;
    // }

    // Check if email is entered (basic validation can be done here if needed)
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData1.email) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(formData1.email)) {
    newErrors.email = "Invalid email format";
    isValid = false;
  }

    // Check if the user agrees to the terms
    if (!formData1.agree) {
      newErrors.agree = "You must agree to the terms";
      isValid = false;
    }

    setErrors1(newErrors);
    return isValid;
  };
  // Initialize intl-tel-input
  useEffect(() => {
    if (phoneInputRef.current) {
      import("intl-tel-input")
        .then((intlTelInput) => {
          intlTelInstance.current = intlTelInput.default(
            phoneInputRef.current,
            {
              initialCountry: "in",
              separateDialCode: true,
              utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            }
          );

          // Sync input value with formData on change
          phoneInputRef.current.addEventListener("input", () => {
            const fullNumber = intlTelInstance.current.getNumber();
            setFormData((prev) => ({
              ...prev,
              mobile: fullNumber || phoneInputRef.current.value,
            }));
          });

          // Validate on country change or input
          phoneInputRef.current.addEventListener("countrychange", () => {
            const fullNumber = intlTelInstance.current.getNumber();
            setFormData((prev) => ({
              ...prev,
              mobile: fullNumber || phoneInputRef.current.value,
            }));
          });
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
  }, []);
  useEffect(() => {
    if (phoneInputRef1.current) {
      import("intl-tel-input")
        .then((intlTelInput) => {
          intlTelInstance.current = intlTelInput.default(
            phoneInputRef1.current,
            {
              initialCountry: "in",
              separateDialCode: true,
              utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            }
          );

          // Sync input value with formData on change
          phoneInputRef1.current.addEventListener("input", () => {
            const fullNumber = intlTelInstance.current.getNumber();
            setFormData((prev) => ({
              ...prev,
              mobile: fullNumber || phoneInputRef1.current.value,
            }));
          });

          // Validate on country change or input
          phoneInputRef1.current.addEventListener("countrychange", () => {
            const fullNumber = intlTelInstance.current.getNumber();
            setFormData((prev) => ({
              ...prev,
              mobile: fullNumber || phoneInputRef1.current.value,
            }));
          });
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
  }, []);
  const properties = [
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
    { type: "4.5 BHK + SQ", size: "3605 SQ. FT ONWARDS" },
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     title: "GODREJ VRIKSHYA",
  //     price: "₹ 3.30 CR* ONWARDS",
  //     location: "SECTOR 49, GURGAON",
  //     size: "3 & 4 BHK",
  //     feet: "1948 - 3700 Sq.Ft.",
  //     image: pro1, // Replace with actual image URL
  //   },
  //   {
  //     id: 2,
  //     title: "SMARTWORLD THE EDITION",
  //     price: "₹ 6.50 CR* ONWARDS",
  //     location: "SECTOR 66, GURGAON",
  //     size: "3 & 4 BHK",
  //     feet: "1948 - 3700 Sq.Ft.",

  //     image: pro2,
  //   },
  //   {
  //     id: 3,
  //     title: "GODREJ ARISTOCRAT",
  //     price: "₹ 5.53 CR* ONWARDS",
  //     location: "SECTOR 62, GURGAON",
  //     feet: "1948 - 3700 Sq.Ft.",

  //     size: "3 & 4 BHK",
  //     image: pro3,
  //   },
  //   {
  //     id: 4,
  //     title: "GODREJ ARISTOCRAT",
  //     price: "₹ 5.53 CR* ONWARDS",
  //     location: "SECTOR 62, GURGAON",
  //     feet: "1948 - 3700 Sq.Ft.",

  //     size: "3 & 4 BHK",
  //     image: pro3,
  //   },
  // ];

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
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   let newErrors = {};

  //   if (!formData.name.trim()) newErrors.name = "Name is required.";
  //   if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
  //   if (!formData.email.trim()) newErrors.email = "Email is required.";
  //   if (!formData.agree) newErrors.agree = "You must agree before submitting.";

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     // Proceed with form submit
  //     console.log("Form submitted:", formData);
  //   }
  // };

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
    // else if (formData.mobile.length < 6 || formData.mobile.length > 10) {
    //   newErrors.mobile = "Phone number must be between 6 and 10 digits";
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form is valid, submitting data:", formData);
  //     // Add form submission logic here (e.g., API call)
  //     handleShow();
  //   } else {
  //     console.log("Form has errors, not submitting");
  //   }
  // };
  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   if (validateForm1()) {
  //     console.log("Form is valid, submitting data:", formData);
  //     // Add form submission logic here (e.g., API call)

  //     // Reset the form fields after successful submit
  //     setFormData1({
  //       name: '',
  //       mobile: '',
  //       email: '',
  //       agree: false,
  //     });
  //     setErrors1({}); // Optional: also clear any old errors

  //     handleShow(); // Show success modal
  //   } else {
  //     console.log("Form has errors, not submitting");
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form is valid, submitting data:", formData);
  //     // Add form submission logic here (e.g., API call)

  //     // Reset the form fields after successful submit
  //     setFormData({
  //       name: '',
  //       mobile: '',
  //       email: '',
  //       agree: false,
  //     });
  //     setErrors({}); // Optional: also clear any old errors

  //     handleShow(); // Show success modal
  //   } else {
  //     console.log("Form has errors, not submitting");
  //   }
  // };



  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   if (validateForm1()) {
  //     console.log("Form is valid, submitting data:", formData1);

  //     // Extract project name from URL
  //     const url = window.location.href; // e.g., http://localhost:5173/project/godrej-miraya
  //     const projectSlug = url.split('/project/')[1]?.replace(/-/g, ' ') || 'Unknown Project';
  //     const projectName = projectSlug
  //       .split(' ')
  //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //       .join(' '); // e.g., Godrej Miraya

  //     // Prepare API URL with form data
  //     const apiUrl = `https://sloc.bitrix24.in/rest/1/s94cvkguwyrljt7f/crm.lead.add.json?` +
  //       `FIELDS[TITLE]=SLOC_Webform` +
  //       `&FIELDS[NAME]=${encodeURIComponent(formData1.name)}` +
  //       `&FIELDS[EMAIL][0][VALUE]=${encodeURIComponent(formData1.email)}` +
  //       `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
  //       `&FIELDS[PHONE][0][VALUE]=${encodeURIComponent(formData1.mobile)}` +
  //       `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
  //       `&FIELDS[SOURCE_ID]=UC_R2M98V` +
  //       `&FIELDS[SOURCE_DESCRIPTION]=${encodeURIComponent(projectName)}` +
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
  //         setFormData1({
  //           name: '',
  //           mobile: '',
  //           email: '',
  //           agree: false,
  //         });
  //         setFormData({
  //           mobile: '',
  //         });
  //         setErrors1({}); // Clear any old errors
  //         handleShow(); // Show success modal
  //       })
  //       .catch(error => {
  //         console.error('API error:', error);
  //       });
  //   } else {
  //     console.log("Form has errors, not submitting");
  //   }
  // };

    // Handle form submission
    const handleSubmit1 = async (e) => {
      e.preventDefault();
      if (validateForm1()) {
        console.log('Form is valid, submitting data:', formData);

        try {
          // 1. Bitrix24 API call
          const url = window.location.href;
          const bitrixApiUrl = `https://sloc.bitrix24.in/rest/1/${bitrixToken}/crm.lead.add.json?` +
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
              name: formData1.name,
              email: formData1.email,
              mobile: formData1.mobile,
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
          setFormData1({ name: '', mobile: '', email: '', agree: false });
          setErrors1({});
          handleShow(true);
        } catch (error) {
          console.error('API error:', error);
          setErrors({ submit: 'Failed to submit form. Please try again.' });
        }
      } else {
        console.log('Form has errors, not submitting');
      }
    };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form is valid, submitting data:", formData);
  //     // Add form submission logic here (e.g., API call)

  //     // Reset the form fields after successful submit
  //     setFormData({
  //       name: '',
  //       mobile: '',
  //       email: '',
  //       agree: false,
  //     });
  //     setErrors({}); // Optional: also clear any old errors

  //     handleShow(); // Show success modal
  //   } else {
  //     console.log("Form has errors, not submitting");
  //   }
  // };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log('Form is valid, submitting data:', formData);

  //     // Extract project name from URL
  //     const url = window.location.href; // e.g., http://localhost:5173/project/godrej-miraya
  //     const projectSlug = url.split('/project/')[1]?.replace(/-/g, ' ') || 'Unknown Project';
  //     const projectName = projectSlug
  //       .split(' ')
  //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //       .join(' '); // e.g., Godrej Miraya

  //     // Prepare API URL with form data
  //     const apiUrl = `https://sloc.bitrix24.in/rest/1/s94cvkguwyrljt7f/crm.lead.add.json?` +
  //       `FIELDS[TITLE]=SLOC_Webform` +
  //       `&FIELDS[NAME]=${encodeURIComponent(formData.name)}` +
  //       `&FIELDS[EMAIL][0][VALUE]=${encodeURIComponent(formData.email)}` +
  //       `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
  //       `&FIELDS[PHONE][0][VALUE]=${encodeURIComponent(formData.mobile)}` +
  //       `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
  //       `&FIELDS[SOURCE_ID]=UC_R2M98V` +
  //       `&FIELDS[SOURCE_DESCRIPTION]=${encodeURIComponent(projectName)}` +
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

   const baseUrl = import.meta.env.VITE_BASE_URL || 'https://admin.sloc.in/';
    const bitrixToken = import.meta.env.VITE_BITRIX_TOKEN || 's94cvkguwyrljt7f';
    const apiToken = import.meta.env.VITE_API_TOKEN || 'AzlrVK30FVdEx0TwrRwqYrQTL';
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form is valid, submitting data:', formData);

        try {
          // 1. Bitrix24 API call
          const url = window.location.href;
          const bitrixApiUrl = `https://sloc.bitrix24.in/rest/1/${bitrixToken}/crm.lead.add.json?` +
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
          handleShow(true);
        } catch (error) {
          console.error('API error:', error);
          setErrors({ submit: 'Failed to submit form. Please try again.' });
        }
      } else {
        console.log('Form has errors, not submitting');
      }
    };

  const navbarRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#second-section",
      start: "bottom center",
      onEnter: () => {
        navbarRef.current.classList.add("nav-bg-change");
      },
      onLeaveBack: () => {
        navbarRef.current.classList.remove("nav-bg-change");
      },
    });
  }, []);

  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  console.log('allprojectss...................',allProjects);
  console.log("Immediately after useState: ", project);


  const generateSlug = (name) => {
    console.log('generateSlug: Input name:', name);
    const result = name
      ? name
          .trim()
          .toLowerCase()
          .normalize('NFKD') // Normalize Unicode characters
          .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      : 'untitled-project';
    console.log('generateSlug: Output slug:', result);
    return result;
  };
  const [bannerImage, setBannerImage] = useState(''); // Default fallback image

  // useEffect(() => {
  //   console.log('useEffect: Starting with slug:', slug);

  //   const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
  //   console.log('useEffect: Base URL:', baseUrl);

  //   const apiUrl = `${baseUrl}api/projects`;
  //   console.log('useEffect: API URL:', apiUrl);

  //   console.log('useEffect: Initiating axios GET request');
  //   axios
  //     .get(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log('useEffect: Axios response received:', response);
  //       console.log('useEffect: Response data:', response.data);

  //       if (response.data.success) {
  //         console.log('useEffect: API request successful');
  //         console.log('useEffect: Searching for project with slug:', slug);

  //         const projectData = response.data.data.find((p) => {
  //           const projectSlug = generateSlug(p.name);
  //           console.log(
  //             'useEffect: Comparing project slug:',
  //             projectSlug,
  //             'with target slug:',
  //             slug
  //           );
  //           return projectSlug === slug;
  //         });
  //         setAllProjects(response.data); // Set all projects

  //         console.log('useEffect: Found project data:', projectData);
  //         console.log('useEffect: All projects data:', response.data.data);

  //         if (projectData) {
  //           console.log('useEffect: Project found, setting project state');
  //           const projectState = {
  //             id: projectData.id,
  //             project_id: projectData.project_id,
  //             title: projectData.name || 'Untitled Project',
  //             slug: projectData.slug || generateSlug(projectData.name),
  //             price: projectData.tag_price
  //               ? `₹ ${projectData.tag_price} CR* ONWARDS`
  //               : 'Price on Request',
  //             // location: projectData.address || 'Unknown Location',
  //             // size: projectData.specification || 'N/A',
  //             // feet: projectData.feet || 'Contact for details', // Replace hardcoded value

  //         size: projectData.pricing_layout[0]?.title || '', // Use title from first index of pricing_layout
  //         feet: projectData.pricing_layout[0]?.description || '', // Use description from first index of pricing_layout
  //         location: projectData.property.name || '',
  //             image: projectData.hero_img || 'https://via.placeholder.com/300',
  //             overview: projectData.overview_content || 'No overview available.',
  //             amenities: projectData.amenities || [],
  //             properties: projectData.property_types || [
  //               { type: 'N/A', size: 'Contact for details' },
  //             ],
  //             // Add all missing fields
  //             calling_number: projectData.calling_number || 'N/A',
  //             gallery_images: projectData.gallery_image || [],
  //             disclaimer: projectData.disclaimer || 'No disclaimer available.',
  //             highlights: projectData.highlights || 'No highlights available.',
  //             rera_num_on_img: projectData.rera_num_on_img || 'N/A',
  //             schedule_meeting: projectData.schedule_meeting || 'N/A',
  //             sectors: projectData.sectors || 'N/A',
  //             specification: projectData.specification || 'N/A',
  //             state: projectData.state || { name: 'Unknown', city: {} },
  //             state_rera_num_on_img: projectData.state_rera_num_on_img || 'N/A',
  //             tag_line: projectData.tag_line || 'N/A',
  //             url: projectData.url || 'N/A',
  //             whatsapp_number: projectData.whatsapp_number || 'N/A',
  //             property: projectData.property || { id: null, name: 'N/A' },
  //             location_advantages: projectData.location_advantages || [],
  //           };

  //           console.log('useEffect: Setting project state with:', projectState);

  //           setProject(projectState);

  //             // Set banner image with validation

  //         } else {
  //           console.log('useEffect: Project not found in data');
  //           // setError('Project not found');
  //         }
  //       } else {
  //         console.log('useEffect: API request unsuccessful');
  //         // setError('Project not found');
  //       }
  //     })
  //     .catch((err) => {
  //       console.error('useEffect: Error fetching project:', err);
  //       console.error('useEffect: Error details:', {
  //         message: err.message,
  //         response: err.response,
  //         request: err.request,
  //       });
  //     })
  //     .finally(() => {
  //       console.log('useEffect: Request completed, setting loading to false');
  //     });
  // }, [slug]);

  useEffect(() => {
    console.log('useEffect: Starting with slug:', slug);

    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
    const apiUrl = `${baseUrl}api/projects`;

    console.log('useEffect: Base URL:', baseUrl);
    console.log('useEffect: API URL:', apiUrl);

    const fetchProjectData = async () => {
      try {
        console.log('useEffect: Initiating axios GET request');
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
          },
        });

        console.log('useEffect: Axios response received:', response);
        const projects = response.data?.data || [];

        setAllProjects(response.data); // Store all raw response data

        const projectData = projects.find((p) => {
          const projectSlug = generateSlug(p.name);
          return projectSlug === slug;
        });

        console.log('useEffect: Found project data:', projectData);

        if (projectData) {
          const heroImage = projectData.hero_img_original?.startsWith('http')
            ? projectData.hero_img_original
            : '';

          const projectState = {
            id: projectData.id,
            project_id: projectData.project_id,
            title: projectData.name || 'Untitled Project',
            slug: projectData.slug || generateSlug(projectData.name),
            price: projectData.tag_price
              ? `₹ ${projectData.tag_price} CR* ONWARDS`
              : 'Price on Request',
            size: projectData.pricing_layout?.[0]?.title || '',
            feet: projectData.pricing_layout?.[0]?.description || '',
            location: projectData.property?.name || '',
            image: projectData.hero_img || 'https://via.placeholder.com/300',
            overview: projectData.overview_content || 'No overview available.',
            amenities: projectData.amenities || [],
            properties: projectData.property_types || [{ type: 'N/A', size: 'Contact for details' }],
            calling_number: projectData.calling_number || 'N/A',
            gallery_images: projectData.gallery_image_original || [],
            disclaimer: projectData.disclaimer || 'No disclaimer available.',
            highlights: projectData.highlights || 'No highlights available.',
            rera_num_on_img: projectData.rera_num_on_img || 'N/A',
            schedule_meeting: projectData.schedule_meeting || 'N/A',
            sectors: projectData.sectors || 'N/A',
            specification: projectData.specification || 'N/A',
            state: projectData.state || { name: 'Unknown', city: {} },
            state_rera_num_on_img: projectData.state_rera_num_on_img || 'N/A',
            tag_line: projectData.tag_line || 'N/A',
            url: projectData.url || 'N/A',
            whatsapp_number: projectData.whatsapp_number || 'N/A',
            property: projectData.property || { id: null, name: 'N/A' },
            location_advantages: projectData.location_advantages || [],
          };

          console.log('useEffect: Setting project state with:', projectState);
          setProject(projectState);
          setBannerImage(heroImage);
        } else {
          console.warn('useEffect: Project not found for slug:', slug);
          setBannerImage(backpg);
        }
      } catch (err) {
        console.error('useEffect: Error fetching project:', err.message);
        console.error('Details:', err.response || err.request || err);
      } finally {
        console.log('useEffect: Request completed');
      }
    };

    fetchProjectData();
  }, [slug]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <main className="project-page">
              <Modal show={show} onHide={handleClose} centered dialogClassName="popup-modal">
                <div className="popup-card">
                <Button variant="dark" className='ssksk' onClick={handleClose}>
                      x
                    </Button>
                  <Modal.Header className="popup-header">
        <p class="Logo">SLOC</p>
                  </Modal.Header>
                  <Modal.Body className="popup-body">
                  <Modal.Title>Thank you for reaching out!</Modal.Title>
                    One of our representatives will get in touch with you soon.
                  </Modal.Body>
                  <Modal.Footer className="popup-footer">

                  </Modal.Footer>
                </div>
              </Modal>
        <section className="Main-banner project-baner" data-speed="1.5"
  style={{
    backgroundImage: `url(${bannerImage || ''})`,
  }}>
          <Container>
            <Navbar expand="lg" className="Main-nav pr " ref={navbarRef} collapseOnSelect>
              <Container className="end-toend">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#Overview">Overview</Nav.Link>
                    <Nav.Link href="#highlight">Highlights</Nav.Link>
                    <Nav.Link href="#Amenities">Amenities</Nav.Link>
                    <Nav.Link href="#Layout">Layout & Pricing</Nav.Link>

                    <Nav.Link href="#Gallery">Gallery</Nav.Link>

                    <Nav.Link href="#Emi">EMI Calculator</Nav.Link>

                    <Nav.Link href="#call" className="cntnct all-same-ani">
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
          <Container>
            <Row>
              <Col
                md={12}
                className="top-co text-center"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-offset="100"
              >
                {/* <h1>GODREJ VRIKSHYA</h1> */}
                <h1>{project?.title}</h1>
                <p className="loction">
                  <img src={location} style={{ marginRight: "10px" }} />{" "}
                  {/* SECTOR-103, GURUGRAM */}
                  {project?.location}
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <div className="info">
            <div className="top-line-info">
              <p>
                {/* Project RERA No: RC/REP/HARERA/GGM/846/578/2024/73 */}
                {project?.rera_num_on_img}
                {" "}
                <span className="brkr"> | </span>
                {/* https://haryanarera.gov.in */}
                {project?.url}
              </p>
            </div>
            <div className="d-flex align-items-md-center searc-bar  justify-content-between">
              <div className="form-set">
              <form onSubmit={handleSubmit}>
            <h5 className="m-0">Enquire Now</h5>

            <div className="set-ww">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                // onChange={handleChange}
                onChange={(e) => {
                  // Allow only alphabets and spaces
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setFormData((prev) => ({
                    ...prev,
                    name: value,
                  }));
                }}
              />
              {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>

            <div className="input-group long-one">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Mobile Number"
                name="mobile"
                value={formData.mobile}
                ref={phoneInputRef1}
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
                  // Ensure only numbers are set in the value
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setFormData((prev) => ({
                    ...prev,
                    mobile: value,
                  }));
                }}
              />
              {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
            </div>

            <div className="set-ww">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>

            <div className="form-check text-white">
              <input
                className="form-check-input"
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                id="agreeCheck"
              />
              <label className="form-check-label" htmlFor="agreeCheck">
                I agree to be contacted via{" "}
                <span className="diff-color">Call, SMS, WhatsApp & Email</span>
              </label>
              {errors.agree && <span className="text-danger">{errors.agree}</span>}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-light text-dark all-same-ani">
                Submit
              </button>
            </div>
          </form>
              </div>
            </div>
            <div className="lastbar" id="second-section">
              <h6>
                Find Your Perfect Home with Unbeatable Disc ounts – Up to XX%
                OFF!
              </h6>
            </div>
          </div>
        </section>

        <section className="welcome overview" id="Overview">
          <Container className="py-md-5 mt-md-5">
            <Row className="mb-4 d-flex">
              <Col md={6} className="align-content-end head">
                <img src={Round} alt="scroling" className="scrol-top" />

                <h2
                  className="same-head"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="300"
                >
                  Overview
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="300"
                >
                  {/* Godrej Vrikshya – Inspired by Trees, is a luxury residential
                  project situated in Sector-103, Gurugram, along the Dwarka
                  Expressway. Spanning approximately 15 acres, the development
                  comprises six towers, each rising up to 30 floors, offering a
                  total of 621 apartments. This project offers 2.5 acres of
                  Resort-Style Central Greens, a grand Club-House, an
                  olympic-length infinity edge swimming pool, zen garden, yoga
                  deck, multipurpose court, spa and salon. This project ensures
                  seamless connectivity to Delhi and other parts of Gurgaon. */}
                  {project?.overview}
                </p>
                <button
                  type="text"
                  className="btn btn-light comn-btn all-same-ani"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="300"
                >
                  Get Brochure
                </button>
              </Col>
              <Col
                md={6}
                className="d-flex flex-wrap four-col-st"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-offset="300"
              >
                <Col md={6} lg={6} className="right res">
                  <Card className="">
                    <img src={over1} />
                    <p>Spanning approximately 15 acres</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-bottom res">
                  <Card className="">
                    <img src={over2} />

                    <p>Resort-Style Central Greens</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-right res">
                  <Card>
                    <img src={over3} />

                    <p>3 & 4 BHK Apartments</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="left-brdr res">
                  <Card className="">
                    <img src={over4} />

                    <p>3.30 Crore* onwards</p>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="list-home" id="highlight">
          <Container fluid className="p-0 px-5">
            <Row className="mb-3 d-flex py-4 align-content-center">
              <Col md={12} className="align-content-center px-5">
                <h2 className="same-head">Highlights</h2>
                <p className="same-head-p">
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
                  {project?.highlights}
                  {" "}
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="blog-text home-text ">
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={10} className="all-border contact-set">
                <Row className="">
                  <Col md={6} className="justify-content-center btm-s">
                    <img
                      src={Struc}
                      className="home-struct"
                      data-aos="zoom-in"
                    />
                  </Col>
                  <Col
                    md={6}
                    className="justify-content-center cntnct align-content-center btm-s struk-li "
                  >
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>Villa</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>Well-connected to dwarka expressway</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>
                          Provide easy access to major hubs in Gurgaon and Delhi
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>
                          Total land area of the project is approximately 15
                          acres
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>
                          One of the lowest density project on dwarka expressway{" "}
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <img src={Icon} className="text-primary me-2 " />
                        <span>
                          Approximately 75% is dedicated to open spaces{" "}
                        </span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">Let’s Find Your Perfect Property!</h2>
                <p className="same-head-p">
                  Your dream home or investment is just a step away. Connect
                  with SLOC today and make it yours!
                </p>
                <img src={back} alt="" className="back-roll" />
              </Col>

              <Col md={4} className="text-md-end text-center">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button variant="dark" className="banner-button all-same-ani">
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="assistance-section position-relative same-space aminites"
          id="Amenities"
        >
          <Container fluid className=" amni">
            <Row className=" px-5 mb-5 ">
              <h3 className="section-title same-head">Amenities </h3>
              <p className="section-subtitle same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>



    {/* Dynamically rendering amenities in rows of three columns */}
    {project?.amenities?.reduce((rows, amenity, index) => {
      // Create a new row every 3 items
      if (index % 3 === 0) {
        rows.push([]);
      }
      rows[rows.length - 1].push(amenity);
      return rows;
    }, []).map((row, rowIndex) => (
      <Row key={rowIndex} className="text text-center alliance px-5">
        {row.map((amenity) => (
          <Col md={4} className="brdr" key={amenity.id}>
            <div
              className="amenity-placeholder"
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-offset="100"
            >
              {/* Placeholder or icon can go here */}
            </div>
            <img
              src={Temp} // Use dynamic source for the image if needed
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-offset="100"
              alt={amenity.name}
            />
            <h6
              className="aminites-adv"
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-offset="100"
            >
              {amenity.name}
            </h6>
          </Col>
        ))}
      </Row>
    ))}
          </Container>
        </section>

        <section className="pricing position-relative same-space" id="Layout">
          <Container className="full amni">
            <Row className=" px-5 ">
              <h3 className="section-title same-head">layout & pricing </h3>
              <p className="section-subtitle same-head-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
          </Container>
          <div className="slider-container">
            <Swiper

              slidesPerView={3}
              spaceBetween={40}
              navigation={false}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}

              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {project?.properties.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="property-card position-relative"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="100"
                  >
                    <div className="ribbon-set">
                      <img src={red} />
                    </div>
                    <div className="card-content">
                      <div>
                        {" "}
                        <img src={Icon} className="text-primary me-2 " />
                      </div>
                      <div>
                        <h3>{item.type}</h3>
                        <p>{item.size}</p>
                      </div>
                    </div>
                    <button className="comn-btn all-same-ani">
                      Get Full Pricing & Layout Now
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="Cta position-relative left-side-move">
          <Container>
            <Row className="d-flex align-items-center justify-content-center px-5 ">
              <Col md={6}>
                <h2
                  className="same-head"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="300"
                >
                  Location Advantages
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button
                  variant="dark"
                  className="banner-button all-same-ani"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="300"
                >
                  Contact us for More info
                </Button>
                <img src={back} alt="" className="back-roll" />
              </Col>

              <Col
                md={6}
                className="text-md-end text-center"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-offset="300"
              >
                <div className="row">
                  {/* <Col md={6}>
                    <div className="kach">
                          <h6>Burj Khalifa </h6>
                          <div className="kack-inline">
                            <img src={Time} className="kckck" />
                            <span>40 Min</span>
                          </div>
                    </div>
                  </Col>
                  <Col md={6}>
                  <div className="kach">
                          <h6>Burj Khalifa </h6>
                          <div className="kack-inline">
                            <img src={Time} className="kckck" />
                            <span>40 Min</span>
                          </div>
                    </div>
                  </Col>
                  <Col md={6}>
                  <div className="kach">
                          <h6>Burj Khalifa </h6>
                          <div className="kack-inline">
                            <img src={Time} className="kckck" />
                            <span>40 Min</span>
                          </div>
                    </div>
                  </Col>
                  <Col md={6}>
                  <div className="kach">
                          <h6>Burj Khalifa </h6>
                          <div className="kack-inline">
                            <img src={Time} className="kckck" />
                            <span>40 Min</span>
                          </div>
                    </div>
                  </Col> */}
                  {project?.location_advantages.map((advantage, index) => (
                <Col md={6} key={index}>
                  <div className="kach">
                    <h6>{advantage.location}</h6>
                    <div className="kack-inline">
                      <img src={Time} className="kckck" alt="Time icon" />
                      <span>{advantage.distance}</span>
                    </div>
                  </div>
                </Col>
              ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="social-proof position-relative img-scrol"
          id="Gallery"
        >
          <img className="Move" src={WelcomeLogo} />
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4 ons">
                  <h2 className="same-head">Gallery </h2>
                  <p className="same-head-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="comn-btn all-same-ani">
                    Get Brochure
                  </Button>
                </div>
                {/* <img src={soback} className="soc-img" alt="" /> */}
              </Col>

              <Col md={7} className="align-items-top rounded-0">
                <div className="over">
                  <Row className="achivments">
                    <Col className="image-showcase">
                    {project?.gallery_images && project.gallery_images.length > 0 ? (
  project.gallery_images.map((imgUrl, idx) => (
    <img key={idx} src={imgUrl} alt={`gallery-${idx}`} />
  ))
) : (
  <p>No images available</p>
)}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="faqs">
          <Container fluid className="px-5">
            <h2
              className="same-head"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-offset="300"
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p
              className="same-head-p"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-offset="300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Container>
        </section>

        <section className="blog-text btm-space faqqs">
          <Container fluid className="">
            <Row className=" justify-content-center">
              <Col md={10} className="all-border">
                <Accordion defaultActiveKey="0" className="">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                      Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                      Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
                      Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
                    </Accordion.Body>
                  </Accordion.Item>

                  {[1, 2, 3].map((item) => (
                    <Accordion.Item
                      eventKey={`${item}`}
                      key={item}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-sine"
                    >
                      <Accordion.Header>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                        Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore
                        Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud
                        Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea
                        Commodo Consequat.{" "}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="Cta position-relative left-side-move meeting" id="call">
          <Container>
            <Row className="d-flex align-items-center justify-content-center px-5 ">
              <Col md={6}>
                <h2
                  className="same-head"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="100"
                >
                  Schedule Meeting
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="100"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <hr
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="100"
                />
                <p
                  className="mb-4"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="100"
                >
                  15th Floor, Ocus Quantum, Sector-51,
                  <br /> Gurugram, Haryana - 122003
                </p>
                <Button
                  variant="dark"
                  className="banner-button"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="100"
                >
                  Contact us for More info
                </Button>
                <img src={back} alt="" className="back-roll" />
              </Col>

              <Col md={6} className="text-md-end text-center">
                <div
                  className="form-set"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="100"
                >
                  <h5>Enter details to schedule meeting</h5>
                  <form onSubmit={handleSubmit1}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={formData.name}
                        // onChange={handleChange1}
                        onChange={(e) => {
                          // Allow only alphabets and spaces
                          const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                          setFormData((prev) => ({
                            ...prev,
                            name: value,
                          }));
                        }}
                      />
                      {errors1.name && (
                        <span style={{ color: "red" }}>{errors1.name}</span>
                      )}
                    </div>

                    <div className="mb-3">
                    <input
                type="tel"
                className="form-control"
                placeholder="Enter Mobile Number"
                name="mobile"
                value={formData.mobile}
                ref={phoneInputRef}
                minLength={6}
                maxLength={15}

                onChange={(e) => {
                  // Ensure only numbers are set in the value
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setFormData((prev) => ({
                    ...prev,
                    mobile: value,
                  }));
                }}
              />

                    </div>
                    {errors1.mobile && (
                      <span style={{ color: "red" }}>{errors1.mobile}</span>
                    )}

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={formData1.email}
                        onChange={handleChange1}
                      />
                      {errors1.email && (
                        <span style={{ color: "red" }}>{errors1.email}</span>
                      )}
                    </div>

                    <div className="form-check mb-3 text-white">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agree"
                        checked={formData1.agree}
                        onChange={handleChange1}
                        id="agreeCheck"
                      />
                      <label className="form-check-label" htmlFor="agreeCheck">
                        I agree to be contacted via Call, SMS, WhatsApp & Email
                      </label>
                    </div>
                    {errors1.agree && (
                      <span style={{ color: "red" }}>{errors1.agree}</span>
                    )}

                    <div className="d-grid">
                      <button type="submit" className="btn btn-light text-dark">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="featured similar">
          <Container className="full">
            <Row className="mb-4 d-flex py-md-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">similar Projects</h2>
                <p className="same-head-p">
                  Discover a handpicked selection of luxurious homes, prime
                  plots, and commercial landmarks from India’s most trusted
                  developers.
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-end text-end align-content-center"
              >
                <div className="custom-swiper-nav d-flex gap-4 justify-content-md-end mb-3">
                  <img
                    src={PrevArrow}
                    alt="Previous"
                    className="swiper-button-prev-custom"
                  />
                  <img
                    src={NextArrow}
                    alt="Next"
                    className="swiper-button-next-custom"
                  />
                </div>
              </Col>
            </Row>
            <Row className="features-row">
              <Swiper
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                modules={[Navigation]}
                breakpoints={{
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
        {allProjects?.data && allProjects?.data.map((project, index) => (
          <SwiperSlide key={project.id}>
            <Col
              className="features-list p-0 dip-column"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <Card
                className={`custom-card card-${index} box-${index}`}
                style={{ position: "relative", zIndex: 2 }}
              >
                <Card.Img
                  variant="top"
                  src={project.hero_img}
                  alt={project.name}
                />
                <Card.Body className="uper-space">
                  <Card.Text className="mb-4 btn-loc uprkro">
                    {project.specification ? (
                      <>
                        <span>{project.specification.split(' ')[0]}</span>{" "}
                        <span>Sq.Ft.</span>
                      </>
                    ) : null}
                    {project.sectors ? <span>{project.sectors}</span> : null}
                  </Card.Text>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text className="text-primary font-weight-bold">
                    ₹{project.tag_price} {project.tag_price ? 'CR* ONWARDS' : 'Price on Request'}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={`/project/${project.slug || generateSlug(project.name)}`}
                    className="Up-arrow-btn"
                  >
                    <img src={Arrow} alt="Arrow" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </SwiperSlide>
        ))}
              </Swiper>
            </Row>
          </Container>
        </section>

        <section className="featured calculater pt-0" id="Emi">
          <Container className="full">
            <Row className="mb-4 d-flex py-md-4 align-content-center">
              <Col md={12} className="align-content-center">
                <h2 className="same-head">EMI Calculator</h2>
                <p className="same-head-p">
                  Discover a handpicked selection of luxurious homes, prime
                  plots, and commercial landmarks from India’s most trusted
                  developers.
                </p>
              </Col>
              <Char />
            </Row>
          </Container>
        </section>

        <section className="Disclamer">
          <Container>
            <p className="Dis">
              Disclaimer : The content provided on this website is for
              information purposes only and does not constitute an offer to
              avail any service. The prices mentioned are subject to change
              without prior notice, and the availability of properties mentioned
              is not guaranteed. Users of this website are hereby advised to
              exercise due diligence and to independently validate and verify
              all information about any property / project before deciding to
              purchase the same or taking any other action. The images displayed
              on the website are for representation purposes only and may not
              reflect the actual properties accurately. Please note that this is
              the official website of an authorized marketing partner. The
              content, design, and information on this website are protected by
              copyright and other intellectual property rights. Any unauthorized
              use or reproduction of the content may violate applicable laws.
              All trademarks are the property of their respective owners.
            </p>
          </Container>
        </section>
        <footer className="">
          <Container>
            <Row className="mb-4 ">
              <Col lg={3} md={6} className="mb-4 mb-md-0 p-md-0 align-content-center">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} />
                  </Link>
                </div>




              </Col>
              <Col lg={4} md={6} sm={12 } className="mb-4 mb-md-0 res-st wi align-content-center justify-content-center">
               <p className="my-3 rerera ">
                  HARYANA RERA - HRERA-PKL-REA-3396-2025
                </p>
                </Col>


            <Col lg={5} md={12} sm={12} className="mb-4 mb-md-0 res-st  wi newfotr align-content-center justify-content-end">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/disclaimer" className="text-decoration-none  ">
                    Disclaimer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy-policy" className="text-decoration-none  ">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms-and-conditions" className="text-decoration-none  ">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </Col>




            </Row>

            <Row className="border-top-set pt-3 mt-2">
              <Col className="text-center ">
                <p className="mb-0 copyright">
                  © Copyright 2025 | All Rights Reserved
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </main>
    </>
  );
}

export default project;
