/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import { Card } from "react-bootstrap";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Round from "../assets/Imgs/rt.png";
import f1 from "../assets/Imgs/f1.png";
import f2 from "../assets/Imgs/f2.png";
import f3 from "../assets/Imgs/f3.png";
import Arrow from "../assets/Imgs/up-arrow.svg";
import sam from "../assets/Imgs/sam.png";
import grl from "../assets/Imgs/grl.png";
import testi from "../assets/Imgs/testimonal.svg";
import blog1 from "../assets/Imgs/blog-1.png";
import blog2 from "../assets/Imgs/blog-2.png";
import blog3 from "../assets/Imgs/blog-3.png";
import Counter from "../Animations/CountUp/CountUp";
import back from "../assets/Imgs/back-cta.png";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WelcomeLogo from "../assets/Imgs/25_Logo_1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NextArrow from "../assets/Imgs/right.svg";
import PrevArrow from "../assets/Imgs/left.svg";
import Logo1 from "../assets/Imgs/Group (3).svg";
import BottomImg1 from "../assets/Imgs/Group (3).svg";
import BottomImg2 from "../assets/Imgs/Group (3).svg";
import BottomImg3 from "../assets/Imgs/Group (3).svg";
import BottomImg4 from "../assets/Imgs/Group (3).svg";
import BottomImg11 from "../assets/Imgs/image.svg";
import Logo from "../assets/Imgs/back-scrol.png";
import Instagram from "../assets/Imgs/ig.svg";
import Facebook from "../assets/Imgs/facbook.svg";
import linkdin from "../assets/Imgs/Linkdin.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { debounce } from "lodash"; // To debounce the input
import { Helmet } from 'react-helmet-async';
const testimonials = [
  {
    id: 1,
    name: "Upinder Singh - M3M Crown",
    image: sam,
    text: "“SLOC made the whole process so easy. Found my dream home at M3M Crown without any stress!”",
  },
  {
    id: 2,
    name: "Guneet Singh Bagga - Godrej Habitat",
    image: grl,
    text: "“Super smooth experience! The team was honest, helpful, and made everything hassle-free.”",
  },
  {
    id: 3,
    name: "Raghbindra Singh - Godrej Vrikshya",
    image: sam,
    text: "“Loved how transparent and patient the SLOC team was. Made a great decision with Godrej Vrikshya.”",
  },
  {
    id: 4,
    name: "Prem - Godrej Zenith",
    image: grl,
    text: "“Professional and supportive throughout. Got my perfect space at Godrej Zenith with zero worries!”",
  },
  {
    id: 5,
    name: "Vivek Ruhil - Godrej Aristocrat",
    image: grl,
    text: "Felt guided every step of the way. Big thanks to SLOC for helping me grab a great deal at Godrej Aristocrat!",
  },
];
const Blogs = [
  {
    id: 1,
    name: "Blog 1",
    image: blog1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
    BlogImages: BottomImg11,
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
    BlogImages: BottomImg11,
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
    BlogImages: BottomImg11,
  },
];
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [Blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const stripHtmlAndTruncate = (html, maxLength = 100) => {
    if (!html) return "No description available";
    // Remove HTML tags
    const plainText = html.replace(/<[^>]+>/g, "");
    // Remove extra whitespace and truncate
    const trimmedText = plainText.replace(/\s+/g, " ").trim();
    return trimmedText.length > maxLength
      ? `${trimmedText.substring(0, maxLength)}...`
      : trimmedText;
  };
  // Function to generate slug (reused from your code)
  const generateBlogsSlug = (name) => {
    return name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
          .replace(/(^-|-$)/g, "") // Remove leading/trailing hyphens
      : "untitled-blog"; // Fallback slug
  };
  useEffect(() => {
    const baseUrl =
      import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
    const apiUrl = `${baseUrl}api/blogs`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          // console.log("Blogs fetched successfully:", response.data.data);
          const apiBlogs = response.data.data;
          const showBlogs = apiBlogs.filter(
            (blog) => blog.show_on_homepage === 1
          );
          // Map API response to the required blog structure
          const mappedBlogs = showBlogs.map((blog, index) => ({
            id: blog.id || `blog-${index + 1}`, // Use API id or fallback
            name: blog.name || "Untitled Blog", // Use 'name' from API
            slug: generateBlogsSlug(blog.name), // Generate slug from 'name'
            image: blog.banner
              ? `${blog.banner}` // Prepend baseUrl to banner image path
              : [blog1, blog2, blog3][index % 3] || blog1, // Fallback to static images
            text: stripHtmlAndTruncate(
              blog.short_description || blog.description,
              100
            ), // Strip HTML and truncate
            date: blog.created_at
              ? new Date(blog.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }) // Format created_at
              : "Unknown Date",
            catagory: blog.keywords || "General", // Use keywords as category or fallback
            BlogImage: BottomImg1, // Static fallback
            BlogImages: BottomImg11, // Static fallback
          }));
          setBlogs(mappedBlogs);
        } else {
          throw new Error("API response was not successful");
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
        // Optionally, fallback to static data
        // setBlogs(staticBlogs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    // Simulate a click on the "scroll-to-top" button when the page loads
    const scrollButton = document.getElementById("scroll-to-top-btn");
    if (scrollButton) {
      scrollButton.click(); // Simulate click
    }
  }, []); // Only run once on component mount
  const [projects, setProjects] = useState([]);
  const [apiProjectsCount, setApiProjectsCount] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const generateSlug = (name) => {
    return name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
          .replace(/(^-|-$)/g, "") // Remove leading/trailing hyphens
      : "untitled-project"; // Fallback slug
  };
  useEffect(() => {
    const baseUrl =
      import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
    const apiUrl = `${baseUrl}api/projects`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          // console.log("Projects fetched successfully:", response.data.data);
          const apiProjects = response.data.data;
          setApiProjectsCount(apiProjects.length);
          // Filter projects where is_exclusive === 1
          const exclusiveProjects = apiProjects.filter(
            (project) => project.is_exclusive === 1
          );
          const mappedApiProjects = exclusiveProjects.map((project, index) => ({
            id: project.id,
            title: project.name || "Untitled Project",
            slug: generateSlug(project.name),
            price: project.tag_price
              ? `${project.tag_price} `
              : "Price on Request",
            size: project.pricing_layout[0]?.title || "",
            feet: project.pricing_layout[0]?.description || "",
            cityId: project.state?.city?.id || null, // Store city ID for filtering
          propertyType: project.property?.name || "", // Use property name
            location: project.property.name || "",
              type: project.type || "",
            area: project.area || "",
            locations: project.location || "",
            image:
              project.hero_img ||
              "https://admin.sloc.in/public/feature_image/1745472810_f1.png",
            bottomImage:
              [BottomImg1, BottomImg2, BottomImg3, BottomImg4][index % 4] ||
              BottomImg1,
            sectors: project.sectors || "",
          }));
          const combinedProjects = [...mappedApiProjects];
          setProjects(combinedProjects);
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      })
      .finally(() => {
      });
  }, []);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const bottomImageRefs = useRef([]);
  const section2ImageRef = useRef(null);
  const logoRefs1 = useRef(null);
  const containerRefs1 = useRef(null);
  const blogsectionRef = useRef(null);
  const BlogimageRefs = useRef([]);
  const BlogsboxRefs = useRef([]);
  const BlogBottomImageRefs = useRef([]);
  const BlogsBottomsectionRef = useRef(null);
  const Blogsection2Ref = useRef(null);
  const [selectedCity, setSelectedCity] = useState({ id: null, name: "City" });
  const [selectedProperty, setSelectedProperty] = useState({
    id: null,
    name: "Property Type",
  });
  const [projectId, setProjectId] = useState("");
  const [cities, setCities] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const navigate = useNavigate();
  const [searchLoading, setSearchLoading] = useState(false);
  const baseUrl = (
    import.meta.env.VITE_BASE_URL || "https://admin.sloc.in/public"
  ).replace(/\/+$/, "");
  const token = "AzlrVK30FVdEx0TwrRwqYrQTL";
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/city`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.success) {
          setCities(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
    axios
      .get(`${baseUrl}/api/property-type`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.success) {
          setPropertyTypes(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching property types:", error);
      });
  }, [baseUrl]);
  const handleSearchInputChange = (e) => {
    immediateSearch({
      query: '',
      city: selectedCity,
      property: selectedProperty,
    });
    const query = e.target.value;
    setSearchQuery(query);
    // console.log("handleSearchInputChange called with query:", query);
    if (query.trim() === '') {
      console.log("Clearing suggested projects (empty query)");
      setSuggestedProjects(projects); // Reset to all exclusive projects when query is empty
    } else {
      debouncedSearch({ query, city: selectedCity, property: selectedProperty });
    }
  };
    const [suggestedProjects, setSuggestedProjects] = useState([]);
  // Debounced search function
  const debouncedSearch = debounce(async ({ query = '', city = null, property = null }) => {
    setSearchLoading(true);
    const baseUrl = import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
    // Build query parameters
    const queryParams = new URLSearchParams();
    if (query) queryParams.append("search", query);
    if (city?.id) queryParams.append("cityId", city.id);
    if (property?.id) queryParams.append("propertyTypeId", property.id);
    const apiUrl = `${baseUrl}api/projects?${queryParams.toString()}`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      });
      if (response.data.success) {
        const apiProjects = response.data.data;
        // console.log("Projects before filtering:", apiProjects);
        // console.log("Project keys (for first project):", Object.keys(apiProjects[0] || {}));
        // Map API projects
        const mappedProjects = apiProjects
          .filter((project) => project.is_exclusive === 1)
          .map((project, index) => ({
            id: project.id,
            title: project.name || "Untitled Project",
            slug: generateSlug(project.name),
            price: project.tag_price
              ? `${project.tag_price} `
              : "Price on Request",
            size: project.pricing_layout[0]?.title || "",
            feet: project.pricing_layout[0]?.description || "",
            location: project.state?.city?.name || "Unknown City",
            cityId: project.state?.city?.id || null,
            propertyType: project.property?.name || "Unknown Type",
            propertyTypeId: project.property?.id || null,
             type: project.type || "",
            area: project.area || "",
            locations: project.location || "",
            image:
              project.hero_img ||
              "https://admin.sloc.in/public/feature_image/1745472810_f1.png",
            bottomImage:
              [BottomImg1, BottomImg2, BottomImg3, BottomImg4][index % 4] ||
              BottomImg1,
            sectors: project.sectors || "",
          }));
        // Filter projects
        const filteredProjects = mappedProjects.filter((project) => {
          const matchesQuery = query
            ? project.title.toLowerCase().includes(query.toLowerCase())
            : true;
          const matchesCity = city?.id
            ? project.cityId === city.id ||
              project.location.toLowerCase().includes(city.name.toLowerCase())
            : true;
          const matchesProperty = property?.id
            ? project.propertyTypeId === property.id ||
              project.propertyType.toLowerCase().includes(property.name.toLowerCase())
            : true;
          console.log("Filtering project:", {
            title: project.title,
            matchesQuery,
            matchesCity,
            matchesProperty,
            projectDetails: project,
            projectKeys: Object.keys(project),
            cityComparison: { projectCityId: project.cityId, selectedCityId: city?.id, projectLocation: project.location, selectedCityName: city?.name },
            propertyComparison: { projectPropertyId: project.propertyTypeId, selectedPropertyId: property?.id, projectPropertyType: project.propertyType, selectedPropertyName: property?.name },
          });
          return matchesQuery && matchesCity && matchesProperty;
        });
        // console.log("Filtered projects:", filteredProjects);
        setSuggestedProjects(filteredProjects);
      } else {
        setSuggestedProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setSuggestedProjects([]);
    } finally {
      setSearchLoading(false);
    }
  }, 500);
  // Immediate search function (no debounce for filter changes)
  const immediateSearch = async ({ query = '', city = null, property = null }) => {
    setSearchLoading(true);
    const baseUrl = import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
    // Build query parameters
    const queryParams = new URLSearchParams();
    if (query) queryParams.append("search", query);
    if (city?.id) queryParams.append("cityId", city.id);
    if (property?.id) queryParams.append("propertyTypeId", property.id);
    const apiUrl = `${baseUrl}api/projects?${queryParams.toString()}`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      });
      if (response.data.success) {
        const apiProjects = response.data.data;
        // console.log("Projects before filtering:", apiProjects);
        // console.log("Project keys (for first project):", Object.keys(apiProjects[0] || {}));
        // Map API projects
        const mappedProjects = apiProjects
          .filter((project) => project.is_exclusive === 1)
          .map((project, index) => ({
            id: project.id,
            title: project.name || "Untitled Project",
            slug: generateSlug(project.name),
            price: project.tag_price
              ? `${project.tag_price} `
              : "Price on Request",
            size: project.pricing_layout[0]?.title || "",
            feet: project.pricing_layout[0]?.description || "",
            location: project.state?.city?.name || "Unknown City",
            cityId: project.state?.city?.id || null,
            propertyType: project.property?.name || "Unknown Type",
            propertyTypeId: project.property?.id || null,
            type: project.type || "",
            area: project.area || "",
            locations: project.location || "",
            image:
              project.hero_img ||
              "https://admin.sloc.in/public/feature_image/1745472810_f1.png",
            bottomImage:
              [BottomImg1, BottomImg2, BottomImg3, BottomImg4][index % 4] ||
              BottomImg1,
            sectors: project.sectors || "",
          }));
        // Filter projects
        const filteredProjects = mappedProjects.filter((project) => {
          const matchesQuery = query
            ? project.title.toLowerCase().includes(query.toLowerCase())
            : true;
          const matchesCity = city?.id
            ? project.cityId === city.id ||
              project.location.toLowerCase().includes(city.name.toLowerCase())
            : true;
          const matchesProperty = property?.id
            ? project.propertyTypeId === property.id ||
              project.propertyType.toLowerCase().includes(property.name.toLowerCase())
            : true;
          console.log("Filtering project:", {
            title: project.title,
            matchesQuery,
            matchesCity,
            matchesProperty,
            projectDetails: project,
            projectKeys: Object.keys(project),
            cityComparison: { projectCityId: project.cityId, selectedCityId: city?.id, projectLocation: project.location, selectedCityName: city?.name },
            propertyComparison: { projectPropertyId: project.propertyTypeId, selectedPropertyId: property?.id, projectPropertyType: project.propertyType, selectedPropertyName: property?.name },
          });
          return matchesQuery && matchesCity && matchesProperty;
        });
        console.log("Filtered projects:", filteredProjects);
        setSuggestedProjects(filteredProjects);
      } else {
        setSuggestedProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setSuggestedProjects([]);
    } finally {
      setSearchLoading(false);
    }
  };
  // Handle city and property selection
  const handleCitySelect = (city) => {
    console.log("handleCitySelect called with:", city);
        setSelectedCity({ id: city.id, name: city.name });
    console.log("selectedCity updated to:", { id: city.id, name: city.name });
  };
  const handlePropertySelect = (property) => {
    console.log("handlePropertySelect called with:", property);
    setSelectedProperty({ id: property.id, name: property.name });
    console.log("selectedProperty updated to:", { id: property.id, name: property.name });
  };
  // Trigger immediate search when city or property changes
  useEffect(() => {
    // console.log("useEffect triggered with selectedCity:", selectedCity, "selectedProperty:", selectedProperty);
    if (selectedCity || selectedProperty) {
      // immediateSearch({
      //   query: '',
      //   city: selectedCity,
      //   property: selectedProperty,
      // });
    } else {
      // setSuggestedProjects(projects); // Reset to all exclusive projects
    }
  }, [selectedCity, selectedProperty, projects]);
// Handle search input
const handleSearchInput = (query) => {
  console.log("handleSearchInput called with query:", query);
  debouncedSearch({
    query,
    city: selectedCity,
    property: selectedProperty,
  });
};
  const [errorMessage, setErrorMessage] = useState("");
const apiUrl = `${baseUrl}/api/projects`;
const handleSearch = async (projectTitle = null) => {
  if (
    !selectedCity.id &&
    selectedCity.name === "City" &&
    !selectedProperty.id &&
    selectedProperty.name === "Property Type" &&
    !searchQuery.trim() &&
    !projectTitle
  ) {
    navigate('/search-listing');
    return;
  }
  setErrorMessage("");
  const formatSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };
  const query = (projectTitle || searchQuery.trim()).trim();
  console.log("Search query:", query); // Debug: Log the query
  if (query) {
    try {
      console.log("Fetching from:", apiUrl); // Debug: Log API URL
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`, // Add the token here
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          console.error("API error: Unauthorized. Invalid Token.");
          toast.error("Unauthorized: Invalid token. Please log in again.");
          setSearchLoading(false);
          return;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API response:", data); // Debug: Log full API response
      if (data.success && data.data) {
        const projectExists = data.data.some((project) => {
          const projectName = project.name.trim().toLowerCase();
          const queryLower = query.toLowerCase();
          console.log(`Comparing: "${projectName}" with "${queryLower}"`); // Debug: Log comparison
          return projectName === queryLower;
        });
        if (projectExists) {
          const slugifiedProject = formatSlug(query);
          console.log("Navigating to:", `/project/${slugifiedProject}`);
          setTimeout(() => setSearchLoading(false), 2000);
          navigate(`/project/${slugifiedProject}`);
          return;
        } else {
          console.log("No matching project found for:", query); // Debug: Log no match
          toast.error("Please enter a valid project name.");
          setSearchLoading(false);
          return;
        }
      } else {
        console.log("API error or no data:", data); // Debug: Log API failure
        toast.error("Failed to fetch projects. Please try again.");
        setSearchLoading(false);
        return;
      }
    } catch (error) {
      console.error("Fetch error:", error.message); // Debug: Log fetch error
      toast.error("An error occurred while validating the project name.");
      setSearchLoading(false);
      return;
    }
  }
  const params = new URLSearchParams();
  if (selectedCity.id && selectedCity.name !== "All Cities") {
    params.append("city", formatSlug(selectedCity.name));
  }
  if (selectedProperty.id && selectedProperty.name !== "Any Property Type") {
    params.append("property_type", formatSlug(selectedProperty.name));
  }
  console.log("Navigating to:", `/search-Listing?${params.toString()}`);
  setTimeout(() => setSearchLoading(false), 2000);
  navigate(`/search-Listing?${params.toString()}`);
};
  const companyData = {
    name: "Real Estate Company | Property Dealer | Buy Property in India | SLOC",
    description:
      "SLOC is a leading real estate company and property dealer in India, offering expert services to help you invest in residential and commercial properties.",
    websites: ["https://staging.sloc.in/"],
  };
  const [socialLinks, setSocialLinks] = useState({});
  useEffect(() => {
    fetch("https://admin.sloc.in/public/api/setting", {
      headers: {
        Authorization: "Bearer AzlrVK30FVdEx0TwrRwqYrQTL",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("//////// API Response ////////", data);
        if (data && Array.isArray(data.data) && data.data.length > 0) {
          const firstItem = data.data[0];
          // console.log("//////// Extracted Social Links ////////", firstItem);
          // console.log(
          //   "//////// Extracted Social Links ////////",
          //   firstItem?.facebook
          // );
          setSocialLinks(firstItem);
        } else {
          console.warn("//////// No social data found ////////");
        }
      })
      .catch((err) => {
        console.error("Error fetching social links:", err);
      });
  }, []);
      const footerRef = useRef(null);
    useEffect(() => {
      if (!footerRef.current) return;
      gsap.to(".mobilek", {
        opacity: 0.5,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "bottom", // when footer top hits bottom of viewport
          toggleActions: "play none none reverse",
        }
      });
    }, []);
  return (
    <>
<Helmet>
        <title>
          Real Estate Company | Property Dealer | Buy Property in India | SLOC
        </title>
        <meta
          property="og:title"
          content="Real Estate Company | Property Dealer | Buy Property in India | SLOC"
        />
        <meta
          property="og:description"
          content="SLOC is a leading real estate company and property dealer in India, offering expert services to help you invest in residential and commercial properties."
        />

         <meta name="description" content="SLOC is a leading real estate company and property dealer in India, offering expert services to help you invest in residential and commercial properties."></meta>
      </Helmet>
      <main id="All">
      <ToastContainer />
        <section className="Main-banner mobile-bgp" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} className="top-co">
                <h1>Search Land Of Choice</h1>
                <p>
                  Explore premium living spaces in the most sought-after
                  locations of India.{" "}
                </p>
              </Col>
                    <ToastContainer  />
              <Col>
                {/* Dont Edit this this for animation  */}
                <div className="animated-logo">
                  <div className="image-wrapper">
                    <img
                      src={Logo}
                      alt="Logo"
                      id="rocket-image"
                      className="rocket-image main-image"
                    />
                    <div className="split-images">
                      <img src={Logo} alt="Split 1" className="split-image" />
                      <img src={Logo} alt="Split 2" className="split-image" />
                      <img src={Logo} alt="Split 3" className="split-image" />
                    </div>
                  </div>
                </div>
                {/* Dont Edit this this for animation End */}
              </Col>
            </Row>
          </Container>
          <div className="d-flex align-items-md-center searc-bar justify-content-center">
      <DropdownButton
        id="dropdown-city"
        title={selectedCity.name}
        variant="outline-light"
        className="me-2 set-out"
      >
        {cities.length > 0 ? (
          cities.map((city) => (
            <Dropdown.Item
              key={city.id}
              onClick={() => handleCitySelect(city)}
            >
              {city.name}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>No cities available</Dropdown.Item>
        )}
      </DropdownButton>
      <DropdownButton
        id="dropdown-property"
        title={selectedProperty.name}
        variant="outline-light"
        className="me-2 set-out"
      >
        {propertyTypes.length > 0 ? (
          propertyTypes.map((property) => (
            <Dropdown.Item
              key={property.id}
              onClick={() => handlePropertySelect(property)}
            >
              {property.name}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>
            No property types available
          </Dropdown.Item>
        )}
      </DropdownButton>
      <InputGroup className="me-2">
        <InputGroup.Text>
          <img src={Search} alt="Search" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search By Project Name..."
          aria-label="Project ID"
          aria-describedby="basic-addon1"
          value={searchQuery}
          onChange={handleSearchInputChange}
                    onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Timeout to allow click on suggestion to register
            setTimeout(() => setIsFocused(false), 100);
          }}
        />
      {isFocused && suggestedProjects.length > 0 && (
        <div
          className="suggestions-box"
style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {suggestedProjects.map((project) => (
            <div
              key={project.id}
              className="suggestion-item"
              style={{  cursor: 'pointer' }}
              onMouseDown={() => {
                console.log('Selected project title:', project.title);
                setSearchQuery(project.title);
                handleSearch(project.title);
                setSuggestedProjects([]); // Hide suggestions
              }}
            >
              {project.title}
            </div>
          ))}
        </div>
      )}
        {/* {suggestedProjects.length > 0 && (
          <div
            className="suggestions-box"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {suggestedProjects.map((project) => (
              <div
                key={project.id}
                className="suggestion-item"
                onClick={() => {
                  console.log("Selected project title:", project.title);
                  setSearchQuery(project.title);
                  handleSearch(project.title);
                  setFilteredProjects([]);
                }}
              >
                {project.title}
              </div>
            ))}
          </div>
        )} */}
      </InputGroup>
      <Button
        variant="primary all-same-ani"
        onClick={() => handleSearch()}
        disabled={searchLoading}
      >
        Search
      </Button>
      {errorMessage && (
        <span
          className="error-message"
          style={{ color: "red", marginTop: "10px" }}
        >
          {errorMessage}
        </span>
      )}
    </div>
          {/*
      {searchError && <div className="text-danger mt-2">{searchError}</div>}
      <div className="mt-3">
        {searchResults.length > 0 ? (
          <ul className="list-group">
            {searchResults.map((project) => (
              <li key={project.id} className="list-group-item">
                {project.name} (ID: {project.project_id}) - Price: ₹{project.tag_price}
              </li>
            ))}
          </ul>
        ) : (
          searchResults.length === 0 && !searchLoading && !searchError && (
            <p>No results found.</p>
          )
        )}
    </div> */}
        </section>
        {/* <section ref={containerRefs} className="welcome"> */}
        <section className="welcome">
          {/* Blue SVG */}
          <svg
            className="Move move_logo"
            width="384"
            height="383"
            viewBox="0 0 384 383"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // ref={logoRefs}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              opacity: 0, // Start hidden
            }}
          >
            <path
              d="M70.7116 334.744C0.580713 282.717 -19.6915 184.139 20.305 106.373C60.8494 26.9634 151.8 -15.7535 231.245 6.70026C334.25 35.7258 368.22 159.495 294.254 235.071C289.871 239.452 284.939 242.19 280.008 246.024C283.296 224.666 290.418 204.403 289.323 184.139C284.939 121.159 223.575 80.6332 160.567 96.5151C64.6847 121.159 15.9218 230.69 61.9452 318.314C64.6847 323.791 67.9721 329.267 70.7116 334.744Z"
              fill="transparent"
              stroke="black"
            />
            <path
              d="M101.16 147.639C98.4175 160.785 95.6751 169.548 95.1267 178.311C87.4483 244.037 141.746 297.713 208.109 289.497C312.864 276.352 373.195 176.121 335.351 77.5319C333.706 73.6979 332.609 69.3162 329.866 62.7437C379.228 103.275 397.327 185.979 373.743 254.444C338.642 356.319 222.369 411.09 134.067 367.821C55.0893 329.481 32.6025 229.249 86.3514 161.332C89.6421 156.951 94.0298 154.212 101.16 147.639Z"
              fill="transparent"
              stroke="black"
            />
          </svg>
          <Container className="py-5">
            <Row className="mb-4 d-flex">
              <Col md={6} className="align-content-center head">
                <h2 className="same-head">WELCOME TO SLOC!</h2>
                <p className="same-head-p">
                  SLOC is all about turning property searches into seamless,
                  rewarding experiences. Whether you seek a luxury residence, a
                  strategic investment, or commercial real estate, we present
                  the premier properties from India's leading developers such as
                  Godrej, DLF, and others. Our dedication to honesty and high
                  standards allows us to assist you in your search for, and
                  investment in, real estate opportunities. With us by your
                  side, the search ends and new beginnings start!
                </p>
              </Col>
              <Col md={6} className="d-flex flex-wrap four-col-st">
                <Col md={6} lg={6} className="right res">
                  <Card className="">
                    <h3 className="text-primary">
                      <Counter className="Counter-no" to={5} from={0} />+
                    </h3>
                    <p>Years of Expertise </p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-bottom res">
                  <Card className="">
                    <h3 className="text-primary">
                      <Counter className="Counter-no" to={1} from={0} />
                      K+
                    </h3>
                    <p>Happy Customers</p>
                  </Card>
                </Col>
                <Col
                  md={6}
                  lg={6}
                  className="only-right res"
                  // ref={welcomeTextRef}
                >
                  <Card>
                    <h3 className="text-primary">
                      <Counter className="Counter-no" to={100} from={0} />+
                    </h3>
                    <p>Premium Projects</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="left-brdr res">
                  <Card className="">
                    <h3 className="text-primary">
                      <Counter className="Counter-no" to={20} from={0} />+
                    </h3>
                    <p>Top Developers</p>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
        <section ref={section1Ref} className="featured">
          {/* <div className="featured-floating-imgs">
            <div className="image-stack">
              <img
                ref={(el) => (imageRefs.current[0] = el)}
                className="initial-image"
                src={Logo1}
                alt="img1"
              />
              <img
                ref={(el) => (imageRefs.current[1] = el)}
                className="initial-image"
                src={Logo1}
                alt="img2"
              />
              <img
                ref={(el) => (imageRefs.current[2] = el)}
                className="initial-image"
                src={Logo1}
                alt="img3"
              />
            </div>
          </div> */}
          <Container className="full">
            <Row className="mb-4 d-flex py-md-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">Exclusive Listings</h2>
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
                  992: { slidesPerView: 3 },
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.id}>
                    <Col className="features-list p-0 dip-column">
                      {/* {index < 3 && (
                        <img
                          ref={(el) => (bottomImageRefs.current[index] = el)}
                          className="bottom-image"
                          src={project.bottomImage}
                          alt={`bottom-img-${project.id}`}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            pointerEvents: "none",
                            width: "40%",
                            height: "auto",
                          }}
                        />
                      )} */}
                      <Card
                        ref={(el) => (boxRefs.current[index] = el)}
                        className={`custom-card card-${index} box-${index}`}
                        style={{ position: "relative", zIndex: 2 }}
                      >
                        {/* <Card.Img variant="top" src={project.image} alt={project.title} /> */}
                        <Card.Img
                          className="settobe"
                          variant="top"
                          src={
                            project.image ||
                            "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22428%22%20height%3D%2525253%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20428%20253%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22428%22%20height%3D%2525253%22%20fill%3D%22%23ececec%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%3EImage%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E"
                          }
                          alt={project.title}
                          style={{
                            width: "428px",
                            height: "253px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body className="uper-space">
                          <Card.Text className="mb-4 btn-loc">
                            {project.type && <span>{project.type}</span>}
                            {project.area && <span>{project.area}</span>}
                            {project.locations && <span>{project.locations}</span>}
                          </Card.Text>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text className="text-primary font-weight-bold">
                            {project.price}
                          </Card.Text>
                          <Button
                            as={Link}
                            to={`/project/${project.slug}`}
                            className="Up-arrow-btn"
                          >
                            <img src={Arrow} />
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
        <section ref={section2Ref} className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">Let’s Find Your Perfect Property!</h2>
                <p className="same-head-p">
                  Your dream home or investment is just a step away. Connect
                  with SLOC today and make it yours!
                </p>
                <img
                  src={back}
                  alt=""
                  className="back-roll"
                  ref={section2ImageRef}
                />
              </Col>
              <Col md={4} className="text-md-end text-center">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button
                  variant="dark"
                  className="banner-button white"
                  href="/contact-us"
                >
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          // ref={containerRefs1}
          className="social-proof position-relative"
        >
          <img className="Move" src={WelcomeLogo} ref={logoRefs1} />
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">SLOC Stories </h2>
                  <p className="same-head-p">
                    From search to sold, we make real estate effortless and
                    exciting!
                  </p>
                  <Button className="Up-arrow-btn res-hide d-none">
                    <img src={Arrow} />
                  </Button>
                </div>
                {/* <img src={soback} className="soc-img" alt="" /> */}
              </Col>
              <Col md={6} className="align-items-top rounded-0">
                <Card className="sticky-box position-sticky rounded-0">
                  <Card.Body className="p-0 pt-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={index !== 0 ? "mt-4 pt-4 border-top" : ""}
                      >
                        <Row className="align-items-top inner-set">
                          <Col xs="auto img-hide">
                            <div
                              className="position-relative"
                              style={{ width: "110px", height: "80px" }}
                            >
                              <img
                                src={testimonial.image}
                                alt=""
                                className="img-fluid "
                              />
                            </div>
                          </Col>
                          <Col className="px-4">
                            <div className="position-relative">
                              <div
                                className="position-absolute"
                                style={{ top: "-50px", right: "0" }}
                              >
                                <span
                                  className="text-muted"
                                  style={{ fontSize: "40px", opacity: "0.2" }}
                                >
                                  <img src={testi} />
                                </span>
                              </div>
                              <h5 className="mb-2 socail-name">
                                {testimonial.name}
                              </h5>
                              <p className="text-muted mb-0 social-p">
                                {testimonial.text}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="featured blogs" ref={blogsectionRef}>
          <div className="featured-floating-imgs">
            {/* <div className="image-stack image-stack-1">
              <img
                ref={(el) => (BlogimageRefs.current[0] = el)}
                className="initial-image"
                src={Logo1}
                alt="img1"
              />
              <img
                ref={(el) => (BlogimageRefs.current[1] = el)}
                className="initial-image"
                src={Logo1}
                alt="img2"
              />
              <img
                ref={(el) => (BlogimageRefs.current[2] = el)}
                className="initial-image"
                src={Logo1}
                alt="img3"
              />
            </div> */}
          </div>
          <Container>
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">The SLOC Journal</h2>
                <p className="same-head-p">
                  Your go-to source for property trends and investment tips!
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-md-end text-md-end align-content-center text-center"
              >
                <Button variant="dark" href="/blog">
                  See more Blogs
                </Button>
              </Col>
            </Row>
            <Row>
              {Blogs.slice(0, 3).map((Blogs, index) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  <Card
                    ref={(el) => (BlogsboxRefs.current[index] = el)}
                    className={`position-relative custom-card card-${index} box-${index}`}
                  >
                    {/* <Card.Img variant="top" src={Blogs.image} alt={Blogs.title} /> */}
                    <Card.Img
                      className="settobe"
                      variant="top"
                      src={
                        Blogs.image ||
                        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22428%22%20height%3D%2525253%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20428%20253%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22428%22%20height%3D%2525253%22%20fill%3D%22%23ececec%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%3EImage%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E"
                      }
                      alt={Blogs.title}
                      style={{
                        width: "428px",
                        height: "253px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{Blogs.date}</span>
                        <span>{Blogs.catagory}</span>
                      </Card.Text>
                      <Card.Title>{Blogs.name}</Card.Title>
                      <Card.Text className="text-primary font-weight-bold">
                        {Blogs.text}
                      </Card.Text>
                      <Button
                        as={Link}
                        to={`/blog/${Blogs.slug}`}
                        className="Up-arrow-btn"
                      >
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                  {/* Add bottom images here */}
                  {/* <div className="botom-blog-index-set">
                    <img
                      ref={(el) => (BlogBottomImageRefs.current[index] = el)}
                      className="bottom-image1"
                      src={Blogs.BlogImages || Logo1} // Use a relevant image
                      alt={`bottom-img-${Blogs.id}`}
                    />
                  </div> */}
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="Disclamer new-desclaimer">
          <Container>
            <p className="Dis">
              The content provided on this website is for information purposes
              only and does not constitute an offer to avail any service. The
              prices mentioned are subject to change without prior notice, and
              the availability of properties mentioned is not guaranteed. Users
              of this website are hereby advised to exercise due diligence and
              to independently validate and verify all information about any
              property/project before deciding to purchase the same or taking
              any other action. The images displayed on the website are for
              representation purposes only and may not reflect the actual
              properties accurately. Please note that this is the official
              website of an authorized marketing partner. The content, design,
              and information on this website are protected by copyright and
              other intellectual property rights. Any unauthorized use or
              reproduction of the content may violate applicable laws. All
              trademarks are the property of their respective owners.
              <br></br>
              The EMI Calculator provided on this website is for informational
              and illustrative purposes only. The results generated by the
              calculator are estimates based on the information you provide and
              may not reflect the actual EMI, interest rate, or loan terms
              offered by financial institutions. Actual loan offers may vary
              depending on various factors including your credit score, loan
              eligibility, and the policies of individual lenders. We do not
              guarantee the accuracy, reliability, or suitability of the results
              for your specific financial situation. Please consult with a
              financial advisor or lending institution before making any
              financial decisions.
            </p>
          </Container>
        </section>
        <footer className="Disclamer-footer" ref={Blogsection2Ref}>
          <Container>
            <Row className="mb-4 justify-content-between">
              <Col lg={4} md={6} className="mb-4 mb-md-0 p-md-0">
                <div className="footer-logo">
                  {/* <a href='/'><p className='Logo' ref={BlogBottomImageRefs}>SLOC</p></a> */}
                  <a href="/">
                    <p className="Logo">
                      SLOC
                      <span
                        className="logo-o"
                        ref={BlogsBottomsectionRef}
                      ></span>
                    </p>
                  </a>
                </div>
                <p className="my-3 set-wi">
                  We bring you the finest real estate choices with trust and
                  excellence. Get set to Dream, Discover, and Deal.
                </p>
                <div className="mb-2">
                  <h6 className="text-uppercase ft-font">FOLLOW US AT</h6>
                </div>
                <div className="d-flex gap-4 mt-4">
                  <a
                    href={socialLinks.linkedln}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkdin} alt="LinkedIn" />
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </Col>
              <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0 res-st">
                <h6 className="text-uppercase ft-font mb-3">QUICK LINKS</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="/" className="text-decoration-none  ">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about-us" className="text-decoration-none  ">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/blog" className="text-decoration-none  ">
                      BLOG
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact-us" className="text-decoration-none  ">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} md={6} sm={6} className="mb-4 mb-md-0 res-st">
                <h6 className="text-uppercase ft-font mb-3">Policies</h6>
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
                  <Col lg={3} md={6} className="mb-4 mb-md-0 res-st">
                         <h6 className="text-uppercase ft-font mb-3">Contact Us</h6>
                         <p className=" mb-1">SLOC REAL ESTATE PRIVATE LIMITED,</p>
                         <p className=" mb-1">RAJESH KUMAR - 15th Floor, Ocus Quantum,</p>
                         <p className=" mb-1">Sector-51, Gurugram, Haryana, 122003 </p>
                         <p className=" my-3">
                           <a href="mailto:contact@sloc.in">contact@sloc.in</a>{" "}
                         </p>
                         <p className=" mb-1">
                           <a href="tel:+919971094108">+919971094108</a>
                         </p>
                       </Col>
            </Row>
            <Row className="border-top-set pt-3 mt-2">
              <Col className="text-center small">
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
export default Home;
