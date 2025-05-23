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

import over1 from "./imgs/over1.svg";
import over2 from "./imgs/over2.svg";
import over3 from "./imgs/over3.svg";
import over4 from "./imgs/over4.svg";
import Icon from "../assets/Imgs/list-icon.svg";
import back from "../assets/Imgs/back-cta.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import red from "./imgs/red.webp";
import Time from "./imgs/timer.webp";
import WelcomeLogo from "../assets/Imgs/back-scrol-BsNhHslO.webp";
import Arrow from "../assets/Imgs/up-arrow.svg";
import NextArrow from "../assets/Imgs/right.svg";
import PrevArrow from "../assets/Imgs/left.svg";
import { Accordion } from "react-bootstrap";
import Char from "./Chart";
import { Link, useNavigate, useParams } from "react-router-dom";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from "axios";
import logo from "./imgs/logo.webp";
import gf from "../Contact/Loader.gif";
import { FaWhatsapp } from "react-icons/fa";
import call from "../mobile/call.svg";
import { Helmet } from "react-helmet";
import { FiPhoneCall } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);
const isMobileView = () => window.innerWidth < 768;
function project() {
  // const currentPath = window.location.pathname + window.location.search; // Gets the path + query string, e.g., "/project/dlf-arbour?utm-source=test"
  const currentPath = window.location.pathname + window.location.search;
  const encodedPath = encodeURIComponent(currentPath);
  const [isMobile, setIsMobile] = useState(isMobileView());
  const [loading, setLoading] = useState(false);
  const [fopen, setFopen] = useState(false);
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
  const [formData1, setFormData1] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: true,
  });
  const [errors1, setErrors1] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: "",
  });
  const [formData2, setFormData2] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: true,
  });
  const [errors2, setErrors2] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: "",
  });
  const phoneInputRef1 = useRef(null);
  const phoneInputRef2 = useRef(null);
  const phoneInputRef = useRef(null);
  const intlTelInstance = useRef(null);
  const intlTelInstance1 = useRef(null);
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
  const handleChange2 = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;
    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 30);
    } else if (name === "email") {
      newValue = value.slice(0, 30);
    } else if (name === "mobile") {
      if (!/^\d*$/.test(value)) {
        return; // Ignore non-digit input
      }
      newValue = value.slice(0, 15);
    }
    setFormData2((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));
    setErrors2((prev) => ({ ...prev, [name]: "" }));
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
    if (!formData1.mobile) {
      newErrors.mobile = "Phone number is required";
      isValid = false;
    } else if (formData1.mobile.length < 6 || formData1.mobile.length > 15) {
      newErrors.mobile = "Please enter a valid phone number";
      isValid = false;
    }
    // Check if email is entered (basic validation can be done here if needed)
    if (!formData1.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData1.email)
    ) {
      newErrors.email = "Please enter a valid email address";
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
  const validateForm2 = () => {
    console.log("Validating formData2:", formData2);
    const newErrors = {
      name: "",
      mobile: "",
      email: "",
      agree: "",
    };
    let isValid = true;
    if (!formData2.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData2.mobile) {
      newErrors.mobile = "Phone number is required";
      isValid = false;
    } else if (formData2.mobile.length < 6 || formData2.mobile.length > 15) {
      newErrors.mobile = "Please enter a valid phone number";
      isValid = false;
    }
    if (!formData2.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData2.email)
    ) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData2.agree) {
      newErrors.agree = "You must agree to the terms";
      isValid = false;
    }
    console.log("Validation result:", { isValid, newErrors });
    setErrors2(newErrors);
    return isValid;
  };
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://admin.sloc.in/";
  const apiToken =
    import.meta.env.VITE_API_TOKEN || "AzlrVK30FVdEx0TwrRwqYrQTL";
  const [countryCode, setCountryCode] = useState(""); // Default to India
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
            // console.log("intl-tel-input: Module loaded");
            intlTelInstance1.current = intlTelInput.default(
              phoneInputRef.current,
              {
                initialCountry: initialCountry,
                separateDialCode: true,
                utilsScript:
                  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
              }
            );
            console.log(
              "intl-tel-input: Initialized with country",
              initialCountry,
              intlTelInstance1.current
            );
            const updatePhoneNumber = () => {
              console.log("updatePhoneNumber: Triggered");
              const selectedCountryData =
                intlTelInstance1.current.getSelectedCountryData();
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
              phoneInputRef.current.removeEventListener(
                "countrychange",
                updatePhoneNumber
              );
              phoneInputRef.current.removeEventListener(
                "input",
                updatePhoneNumber
              );
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
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (phoneInputRef1.current) {
      // Function to fetch country code based on user location
      const getCountryCodeFromLocation = async () => {
        try {
          let countryCode = "in"; // Fallback to 'in' if fetching fails
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
            intlTelInstance.current = intlTelInput.default(
              phoneInputRef1.current,
              {
                initialCountry: initialCountry,
                separateDialCode: true,
                utilsScript:
                  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
              }
            );
            console.log(
              "intl-tel-input: Initialized with country",
              initialCountry
            );
            const updatePhoneNumber = () => {
              const selectedCountryData =
                intlTelInstance.current.getSelectedCountryData();
              const rawInput = phoneInputRef1.current.value || "";
              setCountryCode(`+${selectedCountryData.dialCode}`);
              console.log(
                "Country code set to:",
                `+${selectedCountryData.dialCode}`
              );
              setFormData1((prev) => ({
                ...prev,
                mobile: rawInput.replace(/[^0-9]/g, ""),
              }));
            };
            phoneInputRef1.current.addEventListener("input", updatePhoneNumber);
            phoneInputRef1.current.addEventListener(
              "countrychange",
              updatePhoneNumber
            );
            // Set initial country code
            updatePhoneNumber();
            return () => {
              phoneInputRef1.current.removeEventListener(
                "input",
                updatePhoneNumber
              );
              phoneInputRef1.current.removeEventListener(
                "countrychange",
                updatePhoneNumber
              );
            };
          })
          .catch((error) => {
            console.error("Failed to load intl-tel-input:", error);
          });
      });
      return () => {
        if (intlTelInstance.current) {
          intlTelInstance.current.destroy();
        }
      };
    }
  }, []);
  useEffect(() => {
    if (phoneInputRef2.current && fopen) {
      // Function to fetch country code based on user location
      const getCountryCodeFromLocation = async () => {
        try {
          let countryCode = "in"; // Fallback to 'in' if fetching fails
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
            intlTelInstance.current = intlTelInput.default(
              phoneInputRef2.current,
              {
                initialCountry: initialCountry,
                separateDialCode: true,
                utilsScript:
                  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
              }
            );
            console.log(
              "intl-tel-input: Initialized with country",
              initialCountry
            );
            const updatePhoneNumber = () => {
              const selectedCountryData =
                intlTelInstance.current.getSelectedCountryData();
              const rawInput = phoneInputRef2.current.value || "";
              setCountryCode(`+${selectedCountryData.dialCode}`);
              setFormData2((prev) => ({
                ...prev,
                mobile: rawInput.replace(/[^0-9]/g, ""),
              }));
            };
            phoneInputRef2.current.addEventListener("input", updatePhoneNumber);
            phoneInputRef2.current.addEventListener(
              "countrychange",
              updatePhoneNumber
            );
            // Set initial country code
            updatePhoneNumber();
            return () => {
              phoneInputRef2.current.removeEventListener(
                "input",
                updatePhoneNumber
              );
              phoneInputRef2.current.removeEventListener(
                "countrychange",
                updatePhoneNumber
              );
            };
          })
          .catch((error) => {
            console.error("Failed to load intl-tel-input:", error);
          });
      });
      return () => {
        if (intlTelInstance.current) {
          intlTelInstance.current.destroy();
        }
      };
    }
  }, [fopen]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "mobile") {
      // Use the full number from intl-tel-input
      const fullNumber = intlTelInstance.current?.getNumber() || value;
      setFormData((prev) => ({
        ...prev,
        mobile: fullNumber,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
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
    } else if (formData.mobile.length < 6 || formData.mobile.length > 15) {
      newErrors.mobile = "Please enter a valid phone number";
      isValid = false;
    }
    // Check if email is entered (basic validation can be done here if needed)
    // if (!formData.email) {
    //   newErrors.email = "Email is required";
    //   isValid = false;
    // }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
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
  const navigate = useNavigate();
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if (validateForm1()) {
      setLoading(true);
      console.log("Form is valid, submitting data:", formData1);
      const fullMobileNumber = `${countryCode}${formData1.mobile}`;
      console.log("asajsdjkas", fullMobileNumber);
      // Extract project name and URL parts
      const url = window.location.href; // e.g., http://localhost:5173/project/godrej-miraya?utm_source=...
      const projectSlugArray = url.split("/project/");
      const projectSlug =
        projectSlugArray[1]?.split("?")[0] || "Unknown Project"; // Get part before '?'
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
          name: formData1.name,
          email: formData1.email,
          mobile: fullMobileNumber,
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
        `&FIELDS[NAME]=${encodeURIComponent(formData1.name)}` +
        `&FIELDS[EMAIL][0][VALUE]=${formData1.email}` +
        `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
        `&FIELDS[PHONE][0][VALUE]=${fullMobileNumber}` +
        `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
        `&FIELDS[SOURCE_ID]=UC_R2M98V` +
        `&FIELDS[SOURCE_DESCRIPTION]=${encodeURIComponent(projectName)}` +
        `&FIELDS[UF_CRM_1745260289]=${encodeURIComponent(url)}`;
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
          setFormData1({
            name: "",
            mobile: "",
            email: "",
            agree: false,
          });
          setErrors1({}); // Clear any old errors
          navigate("/thank-you", { state: { projectSlug } });
          setLoading(false);
        })
        .catch((error) => {
          console.error("API error:", error);
          setLoading(false);
        });
    } else {
      console.log("Form has errors, not submitting");
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (validateForm2()) {
      setLoading(true);
      // Combine country code with mobile number for submission
      const fullMobileNumber = `${countryCode}${formData2.mobile}`;
      console.log("asajsdjkas", fullMobileNumber);
      console.log("Form is valid, submitting data:", formData2);
      // Extract project name and URL parts
      const url = window.location.href; // e.g., http://localhost:5173/project/godrej-miraya?utm_source=...
      console.log("//////////////////////", "url", url);
      const projectSlugArray = url.split("/project/");
      const projectSlug =
        projectSlugArray[1]?.split("?")[0] || "Unknown Project"; // Get part before '?'
      console.log("//////////////////////", "projectSlug", projectSlug);
      // Format project name: remove hyphens, capitalize first letter of each word
      const projectName = projectSlug
        .split("-")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      // 2. Contact Us API call
      const contactUsUrl = `${baseUrl}api/contact-us`;
      const contactUsResponse = await axios.post(
        contactUsUrl,
        {
          name: formData2.name,
          email: formData2.email,
          mobile: fullMobileNumber,
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
        `&FIELDS[NAME]=${encodeURIComponent(formData2.name)}` +
        `&FIELDS[EMAIL][0][VALUE]=${encodeURIComponent(formData2.email)}` +
        `&FIELDS[EMAIL][0][VALUE_TYPE]=WORK` +
        `&FIELDS[PHONE][0][VALUE]=${fullMobileNumber}` +
        `&FIELDS[PHONE][0][VALUE_TYPE]=WORK` +
        `&FIELDS[SOURCE_ID]=UC_R2M98V` +
        `&FIELDS[SOURCE_DESCRIPTION]=${encodeURIComponent(projectName)}` +
        `&FIELDS[UF_CRM_1745260289]=${encodeURIComponent(url)}`;
      // Make API call
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFormData2({
            name: "",
            mobile: "",
            email: "",
            agree: false,
          });
          setErrors2({});
          navigate("/thank-you", { state: { projectSlug } });
          setLoading(false);
        })
        .catch((error) => {
          console.error("API error:", error);
          setLoading(false);
        });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      console.log("Form is valid, submitting data:", formData);
      const fullMobileNumber = `${countryCode}${formData.mobile}`;
      console.log("Full mobile number:", fullMobileNumber);
      // Extract project name and URL parts
      const url = window.location.href; // e.g., http://localhost:5173/project/godrej-miraya?utm_source=...
      console.log("Current URL:", url);
      const projectSlugArray = url.split("/project/");
      const projectSlug =
        projectSlugArray[1]?.split("?")[0] || "Unknown Project"; // Get part before '?'
      console.log("Project slug:", projectSlug);
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
          mobile: fullMobileNumber,
          source_url:url,
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
        `&FIELDS[SOURCE_DESCRIPTION]=${encodeURIComponent(projectName)}` +
        `&FIELDS[UF_CRM_1745260289]=${encodeURIComponent(url)}`; // Send full URL
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
          navigate("/thank-you", { state: { projectSlug } });
          setLoading(false);
        })
        .catch((error) => {
          console.error("API error:", error);
          setLoading(false);
        });
    } else {
      console.log("Form has errors, not submitting");
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
  // console.log('allprojectss...................', allProjects);
  // console.log("Immediately after useState: ", project);
  const generateSlug = (name) => {
    // console.log('generateSlug: Input name:', name);
    const result = name
      ? name
          .trim()
          .toLowerCase()
          .normalize("NFKD") // Normalize Unicode characters
          .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      : "untitled-project";
    // console.log('generateSlug: Output slug:', result);
    return result;
  };
  const [bannerImage, setBannerImage] = useState("/src/assets/Imgs/Baner.webp"); // Default fallback image
  useEffect(() => {
    // console.log('useEffect: Starting with slug:', slug);
    const baseUrl =
      import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
    // console.log('useEffect: Base URL:', baseUrl);
    const apiUrl = `${baseUrl}api/projects`;
    // console.log('useEffect: API URL:', apiUrl);
    // console.log('useEffect: Initiating axios GET request');
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      })
      .then((response) => {
        // console.log('useEffect: Axios response received:', response);
        // console.log('useEffect: Response data:', response.data);
        if (response.data.success) {
          // console.log('useEffect: API request successful');
          // console.log('useEffect: Searching for project with slug:', slug);
          const projectData = response.data.data.find((p) => {
            const projectSlug = generateSlug(p.name);
            // console.log(
            //   'useEffect: Comparing project slug:',
            //   projectSlug,
            //   'with target slug:',
            //   slug
            // );
            return projectSlug === slug;
          });
          setAllProjects(response.data); // Set all projects
          console.log("useEffect: Found project data:", projectData);
          console.log("useEffect: All projects data:", response.data.data);
          if (projectData) {
            console.log("useEffect: Project found, setting project state");
            const projectState = {
              id: projectData.id,
              project_id: projectData.project_id,
              title: projectData.name || "Untitled Project",
              slug: projectData.slug || generateSlug(projectData.name),
              price: projectData.tag_price
                ? `${projectData.tag_price} `
                : "Price on Request",
              size: projectData.pricing_layout[0]?.title || "",
              feet: projectData.pricing_layout[0]?.description || "",
              location: projectData.address || "",
              image: projectData.hero_img || "https://via.placeholder.com/300",
              overview:
                projectData.overview_content || "No overview available.",
              amenities: projectData.amenities || [],
              properties: projectData.property_types || [
                { type: "N/A", size: "Contact for details" },
              ],
              calling_number: projectData.calling_number || "N/A",
              gallery_images: projectData.gallery_image || [],
              disclaimer: projectData.disclaimer || "No disclaimer available.",
              highlights: projectData.highlights || "No highlights available.",
              rera_num_on_img: projectData.rera_num_on_img || "N/A",
              mobile_banner: projectData.mobile_banner || "N/A",
              schedule_meeting: projectData.schedule_meeting || "N/A",
              sectors: projectData.sectors || "N/A",
              specification: projectData.specification || "N/A",
              state: projectData.state || { name: "Unknown", city: {} },
              state_rera_num_on_img: projectData.state_rera_num_on_img || "N/A",
              tag_line: projectData.tag_line || "N/A",
              url: projectData.url || "N/A",
              whatsapp_number: projectData.whatsapp_number || "N/A",
              property: projectData.property || { id: null, name: "N/A" },
              faqs: projectData.faqs?.faqs || [],
              highlights_image_original:
                projectData?.highlights_image_original || "",
              pricing_layout: projectData.pricing_layout || [],
              location_advantages: projectData.location_advantages || [],
              overview_highlights: projectData.overview_highlights || [],
              highlights_content: projectData.highlights_content
                ? JSON.parse(projectData.highlights_content)
                : [],
              address: projectData.address || "N/A",
              mobile_banner_original: projectData.mobile_banner_original || [],
              similar_project: projectData.similar_project || [], // Added similar_project
              seo_title: projectData.seo_title || [], // Added similar_project
              seo_description: projectData.seo_description || [], // Added similar_project
              brochure_title:projectData.brochure_title || [],
              brochure_description:projectData.brochure_description || [],

            };
            // console.log('useEffect: Setting project state with:', projectState);
            setProject(projectState);
            // Determine if the device is mobile based on window width
            const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
            // Set banner image based on device type
            const heroImage = isMobile
              ? projectData.mobile_banner_original &&
                projectData.mobile_banner_original.startsWith("http")
                ? projectData.mobile_banner_original // Use mobile_banner for mobile
                : "/src/assets/Imgs/Baner.webp" // Fallback for mobile
              : projectData.hero_img_original &&
                projectData.hero_img_original.startsWith("http")
              ? projectData.hero_img_original // Use hero_img_original for desktop
              : "/src/assets/Imgs/Baner.webp"; // Fallback for desktop
            console.log("asdjkashdjhasdkjhs heroo imagee", heroImage);
            // console.log('useEffect: Setting banner image:', heroImage);
            setBannerImage(heroImage);
          } else {
            // console.log('useEffect: Project not found in data');
            setBannerImage("/src/assets/Imgs/Baner.webp");
          }
        } else {
          console.log("useEffect: API request unsuccessful");
          // setError('Project not found');
        }
      })
      .catch((err) => {
        // console.error('useEffect: Error fetching project:', err);
        // console.error('useEffect: Error details:', {
        //   message: err.message,
        //   response: err.response,
        //   request: err.request,
        // });
      })
      .finally(() => {
        // console.log('useEffect: Request completed, setting loading to false');
      });
  }, [slug]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const open = () => setFopen(false);
  const close = () => setFopen(true);
  const projectRoute = window.location.pathname; // e.g., "/project/godrej-air"
  const cleanedRoute = projectRoute.slice(1); // e.g., "project/godrej-air"
  return (
    <>
      <Helmet>
        <title>{project?.seo_title}</title>
        <meta property="og:title" content={project?.seo_title} />
        <meta property="og:description" content={project?.seo_description} />
        <meta name="description" content={project?.seo_description} />
      </Helmet>
      <main className="project-page">
        <Modal
          show={fopen}
          onHide={open}
          centered
          dialogClassName="popup-modal"
        >
          <div className="popup-card c">
            <Button variant="dark" className="ssksk" onClick={open}>
              x
            </Button>
            <Modal.Body className="popup-body">
              <div className="form-set">
                <div className="text-center">
                  <h5 className="new-text-projects">{project?.title}</h5>
                  <h5>Please Fill The Form Below:</h5>
                </div>
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
                    {errors2.name && (
                      <span style={{ color: "red" }}>{errors2.name}</span>
                    )}
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
                    {errors2.mobile && (
                      <span style={{ color: "red" }}>{errors2.mobile}</span>
                    )}
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
                    {errors2.email && (
                      <span style={{ color: "red" }}>{errors2.email}</span>
                    )}
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
                  {errors2.agree && (
                    <span style={{ color: "red" }}>{errors2.agree}</span>
                  )}
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
          {loading && (
            <div className="loader">
              <img
                src={gf}
                style={{ width: "50px", height: "50px" }}
                className="loderr"
              />
            </div>
          )}
        </Modal>
        {/* Popup for form submit thanku msg */}
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
        <section
          className="Main-banner project-baner"
          data-speed="1.5"
          style={{
            backgroundImage: `url(${bannerImage || ""})`,
          }}
        >
          <Container>
            <Navbar
              expand="lg"
              className="Main-nav pr "
              ref={navbarRef}
              collapseOnSelect
            >
              <Container className="end-toend">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link onClick={() => handleScroll("Overview")}>
                      Overview
                    </Nav.Link>
                    <Nav.Link onClick={() => handleScroll("highlight")}>
                      Highlights
                    </Nav.Link>
                    <Nav.Link onClick={() => handleScroll("Amenities")}>
                      Amenities
                    </Nav.Link>
                    <Nav.Link onClick={() => handleScroll("Layout")}>
                      Layout & Pricing
                    </Nav.Link>
                    <Nav.Link onClick={() => handleScroll("Gallery")}>
                      Gallery
                    </Nav.Link>
                    <Nav.Link onClick={() => handleScroll("Emi")}>
                      EMI Calculator
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => handleScroll("call")}
                      className="cntnct all-same-ani"
                    >
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
                data-aos-offset="10"
              >
                {/* <h1>GODREJ VRIKSHYA</h1> */}
                <h1>{project?.title}</h1>
                <p className="loction">
                  <img src={location} style={{ marginRight: "10px" }} />{" "}
                  {/* SECTOR-103, GURUGRAM */}
                  {project?.sectors}
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          <div className="info">
            <div className="top-line-info">
              <p>
                {/* Project RERA No: RC/REP/HARERA/GGM/846/578/2024/73 */}
                {project?.rera_num_on_img} <span className="brkr"> | </span>
                {/* https://haryanarera.gov.in */}
                {/* {project?.url} */}
                {/* <a href={project?.url} target="_blank" rel="noopener noreferrer"> */}
                {project?.url}
                {/* </a> */}
              </p>
            </div>
            <div className="d-flex align-items-md-center searc-bar  justify-content-center">
              <div className="form-set">
                <form onSubmit={handleSubmit} className="enquiry-form">
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
                      <span className="text-danger">{errors.name}</span>
                    )}
                  </div>
                  <div className="input-group long-one">
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
                        const value = e.target.value.replace(/[^0-9]/g, ""); // Store only digits
                        setFormData((prev) => ({
                          ...prev,
                          mobile: value,
                        }));
                      }}
                    />
                    {errors.mobile && (
                      <span className="text-danger">{errors.mobile}</span>
                    )}
                  </div>
                  <div className="set-ww">
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
                      <span className="text-danger">{errors.email}</span>
                    )}
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
                      <span className="diff-color">
                        Call, SMS, WhatsApp & Email
                      </span>
                    </label>
                    {errors.agree && (
                      <span className="text-danger">{errors.agree}</span>
                    )}
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-light text-dark all-same-ani"
                    >
                      Submit
                    </button>
                    {loading && <div className="loader">Submitting...</div>}
                  </div>
                </form>
              </div>
            </div>
            <div className="lastbar" id="second-section">
              <h6>
                {/* Find Your Perfect Home with Unbeatable Disc ounts – Up to XX%
                OFF! */}
                {project?.tag_line}
              </h6>
            </div>
          </div>
        </section>
        <section className="welcome overview" id="Overview">
          <Container className="py-md-5 mt-md-5">
            <Row className="mb-4 d-flex">
              <Col md={6} className="align-content-end head">
                {/* <img src={Round} alt="scroling" className="scrol-top" /> */}
                <h2
                  className="same-head"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  Overview
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
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
                  data-aos-offset="10"
                  onClick={close}
                >
                  Get Brochure
                </button>
              </Col>
              <Col
                md={6}
                className="d-flex flex-wrap four-col-st"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-offset="10"
              >
                {project?.overview_highlights?.map((item, index) => {
                  // Define an array of image sources
                  const imageSources = [over1, over2, over3, over4];
                  // Set dynamic class names
                  const dynamicClassName = `res ${
                    index % 2 === 0 ? "right" : "left-brdr"
                  } ${index > 1 ? "only-bottom" : ""}`;
                  return (
                    <Col
                      key={index}
                      md={6}
                      lg={6}
                      className={dynamicClassName} // Apply the dynamic class name here
                    >
                      <Card className="">
                        {/* Dynamically set image */}
                        <img
                          src={
                            imageSources[index] ||
                            "https://via.placeholder.com/150"
                          }
                          alt={`Overview ${index + 1}`}
                        />
                        {/* Dynamically set the text */}
                        <p>{item.overview_highlight}</p>
                      </Card>
                    </Col>
                  );
                })}
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
                  {project?.highlights}{" "}
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
                  <Col
                    md={6}
                    className="justify-content-center align-content-center btm-s"
                  >
                    {/* <img
                      src={Struc}
                      className="home-struct"
                      data-aos="zoom-in"
                    /> */}
                    {project?.highlights_image_original && (
                      <img
                        src={project.highlights_image_original}
                        alt="Highlights"
                        className="img-fluid high-imhs"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    )}
                  </Col>
                  <Col
                    md={6}
                    className="justify-content-center cntnct align-content-center btm-s struk-li"
                  >
                    <ul className="list-unstyled">
                      {project?.highlights_content.length > 0 ? (
                        project?.highlights_content.map((highlight, index) => (
                          <li
                            key={index}
                            className="mb-3 d-flex align-items-start"
                          >
                            <img src={Icon} className="text-primary me-2" />
                            <span>{highlight.highlight_content}</span>
                          </li>
                        ))
                      ) : (
                        <li className="mb-3 d-flex align-items-start">
                          <span>No highlights available.</span>
                        </li>
                      )}
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
                <h2 className="same-head">{project?.brochure_title}</h2>
                <p className="same-head-p">
                  {project?.brochure_description}
                </p>
                <img src={back} alt="" className="back-roll" />
              </Col>
              <Col md={4} className="text-md-end text-center">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button
                  variant="dark"
                  className="banner-button all-same-ani"
                  onClick={close}
                >
                  Get Brochure{" "}
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
                World-class comforts are designed to elevate everyday living
                into something truly special.
              </p>
            </Row>
            {/* Dynamically rendering amenities in rows of three columns */}
            {project?.amenities
              ?.reduce((rows, amenity, index) => {
                if (index % 3 === 0) {
                  rows.push([]);
                }
                rows[rows.length - 1].push(amenity);
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <Row key={rowIndex} className="text text-center alliance px-5">
                  {row.map((amenity) => (
                    <Col md={4} className="brdr" key={amenity.id}>
                      <div className="amenity-placeholder">
                        {/* Optional icon wrapper */}
                      </div>
                      <img
                        className="am"
                        src={amenity.icon} // Use the dynamic icon URL
                        alt={amenity.name}
                        loading="lazy"
                      />
                      <h6 className="aminites-adv">{amenity.name}</h6>
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
                Spacious layouts, smartly planned to match your lifestyle and
                aspirations.
              </p>
            </Row>
          </Container>
          <div className="slider-container">
            {isMobile ? (
              // Mobile View: Show all items in a flex row
              <div className="flex flex-wrap gap-4 justify-center gapdeo">
                {project?.pricing_layout?.map((layout, index) => (
                  <div
                    key={index}
                    className="property-card position-relative mb-4"
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="10"
                    style={{ flex: "1 1 100%", maxWidth: "100%" }}
                  >
                    <div className="ribbon-set">
                      <img src={red} alt="ribbon" />
                    </div>
                    <div className="card-content">
                      <div>
                        <img
                          src={Icon}
                          className="text-primary me-2"
                          alt="icon"
                        />
                      </div>
                      <div>
                        <h3>{layout.title}</h3>
                        <p>{layout.description}</p>
                      </div>
                    </div>
                    <button className="comn-btn all-same-ani" onClick={close}>
                      {/* Get Full Pricing & Layout Now */}
                      Get Pricing & Layout
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop/Tablet View: Swiper
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
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {project?.pricing_layout?.map((layout, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="property-card position-relative"
                      data-aos="zoom-in"
                      data-aos-easing="ease-in-sine"
                      data-aos-offset="100"
                    >
                      <div className="ribbon-set">
                        <img src={red} alt="ribbon" />
                      </div>
                      <div className="card-content">
                        <div>
                          <img
                            src={Icon}
                            className="text-primary me-2"
                            alt="icon"
                          />
                        </div>
                        <div>
                          <h3>{layout.title}</h3>
                          <p>{layout.description}</p>
                        </div>
                      </div>
                      <button className="comn-btn all-same-ani" onClick={close}>
                        Get Pricing & Layout
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
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
                  data-aos-offset="10"
                >
                  Location Advantages
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  Strategically Located for Seamless Connectivity
                </p>
                <Button
                  variant="dark"
                  className="banner-button all-same-ani"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                  onClick={close}
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
                data-aos-offset="10"
              >
                <div className="row">
                  {project?.location_advantages &&
                  project.location_advantages.length > 0 ? (
                    project.location_advantages.map((advantage, index) => (
                      <Col md={6} key={index}>
                        <div className="kach">
                          <h6>{advantage.location}</h6>
                          <div className="kack-inline">
                            <img src={Time} className="kckck" alt="Time icon" />
                            <span>{advantage.distance}</span>
                          </div>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <Col>
                      <p>No location advantages available.</p>
                    </Col>
                  )}
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
                    Explore the elegance and sophistication of every corner – a
                    visual journey into your future home.
                  </p>
                  <Button className="comn-btn all-same-ani" onClick={close}>
                    Get Brochure
                  </Button>
                </div>
                {/* <img src={soback} className="soc-img" alt="" /> */}
              </Col>
              <Col md={7} className="align-items-top rounded-0">
                <div className="over">
                  <Row className="achivments">
                    <Col className="image-showcase">
                      {project?.gallery_images &&
                      project.gallery_images.length > 0 ? (
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
              data-aos-offset="10"
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p
              className="same-head-p"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-offset="10"
            >
              Explore common questions about {project?.title || "our project"}{" "}
              to help you make an informed decision.
            </p>
          </Container>
        </section>
        <section className="blog-text btm-space faqqs">
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={10} className="all-border">
                <Accordion defaultActiveKey="0">
                  {project?.faqs?.length > 0 ? (
                    project.faqs.map((faq, index) => (
                      <Accordion.Item
                        eventKey={`${index}`}
                        key={index}
                        data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                      >
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                      </Accordion.Item>
                    ))
                  ) : (
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>No FAQs Available</Accordion.Header>
                      <Accordion.Body>
                        We currently have no FAQs available for this project.
                        Please contact us for more information.
                      </Accordion.Body>
                    </Accordion.Item>
                  )}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="Cta position-relative left-side-move meeting"
          id="call"
        >
          <Container>
            <Row className="d-flex align-items-center justify-content-center px-5 ">
              <Col md={6}>
                <h2
                  className="same-head"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  Schedule Meeting
                </h2>
                <p
                  className="same-head-p"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  {/* Ready to Explore? Schedule a Meeting & Get Personalized Assistance. */}
                  {project?.schedule_meeting}
                </p>
                <hr
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                />
                <p
                  className="mb-4"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  {/* 15th Floor, Ocus Quantum, Sector-51,
                  <br /> Gurugram, Haryana - 122003 */}
                  {project?.address}
                </p>
                <Button
                  variant="dark"
                  className="banner-button white "
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                  // onClick={close}
                  href={`tel: ${project?.calling_number}`}
                >
                  {/* Contact us for More info */}
                  Call Now {project?.calling_number}
                </Button>
                <img src={back} alt="" className="back-roll" />
              </Col>
              <Col md={6} className="text-md-end text-center">
                <div
                  className="form-set"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="10"
                >
                  <h5>Enter details to schedule meeting</h5>
                  <form onSubmit={handleSubmit1}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={formData1.name}
                        // onChange={handleChange1}
                        onChange={(e) => {
                          // Allow only alphabets and spaces, and limit to 30 characters
                          const value = e.target.value
                            .replace(/[^a-zA-Z\s]/g, "")
                            .slice(0, 30);
                          setFormData1((prev) => ({
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
                        value={formData1.mobile}
                        ref={phoneInputRef1}
                        minLength={6}
                        maxLength={15}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Only update if input is digits or empty (to allow backspace/delete)
                          if (/^\d*$/.test(value)) {
                            setFormData1((prev) => ({
                              ...prev,
                              mobile: value,
                            }));
                          }
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
                  Looking for More Premium Choices? Here are Some Exceptional
                  Properties You’ll Love.
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
                {project?.similar_project &&
                  project.similar_project.map((similarProject, index) => (
                    <SwiperSlide key={similarProject.id}>
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
                            src={similarProject.hero_img}
                            alt={similarProject.name}
                          />
                          <Card.Body className="uper-space">
                            <Card.Text className="mb-4 btn-loc">
                              <span>
                                {similarProject.type|| "N/A"}
                              </span>
                              <span>
                                {similarProject.area|| "N/A"}
                              </span>
                              <span>{similarProject.location || "N/A"}</span>
                            </Card.Text>
                            <Card.Title>{similarProject.name}</Card.Title>
                            <Card.Text className="text-primary font-weight-bold">
                              {similarProject.tag_price}{" "}
                              {similarProject.tag_price
                                ? ""
                                : "Price on Request"}
                            </Card.Text>
                            <Button
                              as={Link}
                              to={`/project/${
                                similarProject.slug ||
                                generateSlug(similarProject.name)
                              }`}
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
                  Don’t Guess, Calculate! Know Your EMI Before You Own It.
                </p>
              </Col>
              <Char />
            </Row>
          </Container>
        </section>
        <section className="Disclamer">
          <Container>
            <p className="Dis">{project?.disclaimer}</p>
          </Container>
        </section>
        <footer className="">
          <Container>
            <Row className="mb-lg-4 ">
              <Col
                lg={3}
                md={6}
                className="mb-4 mb-md-0 p-md-0 align-content-center"
              >
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} />
                  </Link>
                </div>
              </Col>
              <Col
                lg={4}
                md={6}
                sm={12}
                className="mb-4 mb-md-0 res-st wi align-content-center justify-content-center"
              >
                <p className="my-3 rerera ">
                  {/* HARYANA RERA - HRERA-PKL-REA-3396-2025 */}
                  {project?.state_rera_num_on_img}
                </p>
              </Col>
              <Col
                lg={5}
                md={12}
                sm={12}
                className="mb-4 mb-md-0 res-st  wi newfotr align-content-center justify-content-end"
              >
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="/disclaimer" className="text-decoration-none  ">
                      Disclaimer
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/privacy-policy"
                      className="text-decoration-none  "
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/terms-and-conditions"
                      className="text-decoration-none  "
                    >
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
        <a
          // href={`https://api.whatsapp.com/send?phone=+91${project?.whatsapp_number || '9971094108'}&text=Hello,%20I%20want%20to%20know%20more%20about%20project%20${project?.title}.%20%7B${cleanedRoute}%7D`}
          href={`https://api.whatsapp.com/send?phone=${
            project?.whatsapp_number || "9971094108"
          }&text=Hello,%20I%20want%20to%20know%20more%20about%20project%20${
            project?.title
          }.%0D%0A%0A(${encodedPath})`}
          target="_blank"
          rel="noopener noreferrer"
          className="prnav desktop-visible"
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            padding: "0",
            fontSize: "26px",
            backgroundColor: "#064685",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "50px",
            cursor: "pointer",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <FaWhatsapp />
        </a>
        <a
          href={`tel:${project?.calling_number}`}
          target="_blank"
          className="calling prnav desktop-visible"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "170px",
            right: "30px",
            padding: "5px",
            fontSize: "25px",
            backgroundColor: "#064685",
            color: "#fff",
            borderRadius: "50px",
            cursor: "pointer",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <FiPhoneCall />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${
            project?.whatsapp_number || "9971094108"
          }&text=Hello,%20I%20want%20to%20know%20more%20about%20project%20${
            project?.title
          }.%0D%0A%0A(${encodedPath})`}
          target="_blank"
          rel="noopener noreferrer"
          className="mobilek"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "215px",
            padding: "0",
            fontSize: "30px",
            backgroundColor: "#064685",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <FaWhatsapp height={20} /> Whatsapp
        </a>
        <a
          href={`tel:${project?.calling_number}`}
          target="_blank"
          className="calling mobilek"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "5px",
            fontSize: "25px",
            backgroundColor: "#064685",
            color: "#fff",
            borderRadius: "50px",
            cursor: "pointer",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <img src={call} /> Call Now{" "}
        </a>
      </main>
    </>
  );
}
export default project;
