/* eslint-disable react-hooks/exhaustive-deps */
import "../App.css";
import { Row, Col } from "react-bootstrap";
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
import back from '../assets/Imgs/back-cta.png'
import React, { useEffect,  useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WelcomeLogo from '../assets/Imgs/25_Logo_1.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NextArrow from '../assets/Imgs/right.svg';
import PrevArrow from '../assets/Imgs/left.svg';
import Logo1 from '../assets/Imgs/Group (3).svg'
import BottomImg1 from '../assets/Imgs/Group (3).svg'
import BottomImg2 from '../assets/Imgs/Group (3).svg'
import BottomImg3 from '../assets/Imgs/Group (3).svg'
import BottomImg4 from '../assets/Imgs/Group (3).svg'
import BottomImg11 from '../assets/Imgs/image.svg'
import Logo from '../assets/Imgs/back-scrol.png'
import { FaTwitter, FaFacebook, FaInstagram, FaSnapchat, FaTelegram } from 'react-icons/fa';
import Instagram from '../assets/Imgs/ig.svg'
import Facebook from '../assets/Imgs/facbook.svg'
import linkdin from '../assets/Imgs/Linkdin.svg'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

// const projects = [
//   {
//     id: 1,
//     title: "GODREJ VRIKSHYA",
//     price: "₹ 3.30 CR* ONWARDS",
//     location: "SECTOR 49, GURGAON",
//     size: "3 & 4 BHK",
//     feet: "1948 - 3700 Sq.Ft.",
//     image: f1, // Replace with actual image URL
//     bottomImage: BottomImg1,
//   },
//   {
//     id: 2,
//     title: "SMARTWORLD THE EDITION",
//     price: "₹ 6.50 CR* ONWARDS",
//     location: "SECTOR 66, GURGAON",
//     size: "3 & 4 BHK",
//     feet: "1948 - 3700 Sq.Ft.",
//     image: f2,
//     bottomImage: BottomImg2,
//   },
//   {
//     id: 3,
//     title: "GODREJ ARISTOCRAT",
//     price: "₹ 5.53 CR* ONWARDS",
//     location: "SECTOR 62, GURGAON",
//     feet: "1948 - 3700 Sq.Ft.",
//     size: "3 & 4 BHK",
//     image: f3,
//     bottomImage: BottomImg3,
//   },
//   {
//     id: 4,
//     title: "GODREJ ARISTOCRAT",
//     price: "₹ 5.53 CR* ONWARDS",
//     location: "SECTOR 62, GURGAON",
//     feet: "1948 - 3700 Sq.Ft.",
//     size: "3 & 4 BHK",
//     image: f3,
//     bottomImage: BottomImg4,
//   },
// ];
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
    text: "Vivek Ruhil - Godrej Aristocrat",
  }
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


  const [Blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const stripHtmlAndTruncate = (html, maxLength = 100) => {
    if (!html) return 'No description available';

    // Remove HTML tags
    const plainText = html.replace(/<[^>]+>/g, '');

    // Remove extra whitespace and truncate
    const trimmedText = plainText.replace(/\s+/g, ' ').trim();
    return trimmedText.length > maxLength
      ? `${trimmedText.substring(0, maxLength)}...`
      : trimmedText;
  };
  // Function to generate slug (reused from your code)
  const generateBlogsSlug = (name) => {
    return name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
          .replace(/(^-|-$)/g, '') // Remove leading/trailing hyphens
      : 'untitled-blog'; // Fallback slug
  };
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
    const apiUrl = `${baseUrl}api/blogs`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          console.log('Blogs fetched successfully:', response.data.data);
          const apiBlogs = response.data.data;

          // Map API response to the required blog structure
          const mappedBlogs = apiBlogs.map((blog, index) => ({
            id: blog.id || `blog-${index + 1}`, // Use API id or fallback
            name: blog.name || 'Untitled Blog', // Use 'name' from API
            slug: generateBlogsSlug(blog.name), // Generate slug from 'name'
            image: blog.banner
              ? `${blog.banner}` // Prepend baseUrl to banner image path
              : [blog1, blog2, blog3][index % 3] || blog1, // Fallback to static images
              text: stripHtmlAndTruncate(blog.short_description || blog.description, 100), // Strip HTML and truncate
              date: blog.created_at
              ? new Date(blog.created_at).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }) // Format created_at
              : 'Unknown Date',
            catagory: blog.keywords || 'General', // Use keywords as category or fallback
            BlogImage: BottomImg1, // Static fallback
            BlogImages: BottomImg11, // Static fallback
          }));

          setBlogs(mappedBlogs);
        } else {
          throw new Error('API response was not successful');
        }
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs. Please try again later.');
        // Optionally, fallback to static data
        // setBlogs(staticBlogs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Simulate a click on the "scroll-to-top" button when the page loads
    const scrollButton = document.getElementById('scroll-to-top-btn');
    if (scrollButton) {
      scrollButton.click(); // Simulate click
    }
  }, []); // Only run once on component mount

  const [projects, setProjects] = useState([]);
const [apiProjectsCount, setApiProjectsCount] = useState(0);
const generateSlug = (name) => {
  return name
    ? name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/(^-|-$)/g, '') // Remove leading/trailing hyphens
    : 'untitled-project'; // Fallback slug
};
useEffect(() => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
  const apiUrl = `${baseUrl}api/projects`;

  axios
    // .get(apiUrl)
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
      },
    })
    .then((response) => {
      if (response.data.success) {
        console.log('Projects fetched successfully:', response.data.data);
        const apiProjects = response.data.data;
        setApiProjectsCount(apiProjects.length);
        const mappedApiProjects = apiProjects.map((project, index) => ({
          id: project.id,
          title: project.name || 'Untitled Project',
          slug: generateSlug(project.name), // Generate slug from name
          price: project.tag_price ? `₹ ${project.tag_price} CR* ONWARDS` : 'Price on Request',
          // size: project.property.name || '',
          // feet: '',
          size: project.pricing_layout[0]?.title || '', // Use title from first index of pricing_layout
          feet: project.pricing_layout[0]?.description || '', // Use description from first index of pricing_layout
          location: project.property.name || '',
          image: project.hero_img_original || 'https://admin.sloc.in/public/feature_image/1745472810_f1.png',
          bottomImage: [BottomImg1, BottomImg2, BottomImg3, BottomImg4][index % 4] || BottomImg1,
        }));
        const combinedProjects = [...mappedApiProjects];
        setProjects(combinedProjects);
      }
    })
    .catch((error) => {
      console.error('Error fetching projects:', error);
      // Optionally set only static projects on error
      // setProjects(staticProjects);
    })
    .finally(() => {
      // setLoading(false); // Uncomment if you have a loading state
    });
}, []);
  // 1. Welcome to SLOC section animation
  const containerRefs = useRef(null);
  const logoRefs = useRef(null); // Transparent SVG
  const scrollImageRef = useRef(null);
  const welcomeTextRef = useRef(null);

  const getAnimationProps = (width) => {
    // Default values for larger screens (>1920px)
    let props = {
      logoFrom: { opacity: 0, y: -160, x: 160, scale: 0.9 },
      logoTo1: { opacity: 1, y: 50, x: -300, scale: 0.6, duration: 1 },
      scrollImageTo: { opacity: 0, duration: 0.2 },
      pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
      logoTo2: { y: 460, x: 100, scale: 0.1, duration: 2.5 },
      logoTo3: { opacity: 0, duration: 0.5 },
      scrollTrigger: { start: 'top center', end: 'bottom center', scrub: 0.5 },
    };

    if (width <= 320) {
      props = {
        logoFrom: { opacity: 0, y: -80, x: 0, scale: 0.8 },
        logoTo1: { opacity: 1, y: 650, x: 0, scale: 0.5, duration: 21, scrub: 1.2},
        scrollImageTo: { opacity: 0, duration: 0.15 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 2.5 },
        logoTo2: { y: 966, x: -39, scale: 0.1, duration: 29 },
        logoTo3: { opacity: 0, duration: 0.1 },
        scrollTrigger: { start: 'top 30%', end: 'bottom 77.6%', scrub: 1.2 },
      };
    }  else   if (width <= 370) {
      props = {
        logoFrom: { opacity: 0, y: -80, x: 0, scale: 0.8 },
        logoTo1: { opacity: 1, y: 650, x: 0, scale: 0.5, duration: 21, scrub: 1.2},
        scrollImageTo: { opacity: 0, duration: 0.15 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 2.5 },
        logoTo2: { y: 966, x: -39, scale: 0.1, duration: 29 },
        logoTo3: { opacity: 0, duration: 0.1 },
        scrollTrigger: { start: 'top 30%', end: 'bottom 77.6%', scrub: 1.2 },
      };
    }  else  if (width <= 425) {
      props = {
        logoFrom: { opacity: 0, y: -80, x: 0, scale: 0.8 },
        logoTo1: { opacity: 1, y: 650, x: 0, scale: 0.5, duration: 21, scrub: 1.2},
        scrollImageTo: { opacity: 0, duration: 0.15 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 2.5 },
        logoTo2: { y: 966, x: -39, scale: 0.1, duration: 29 },
        logoTo3: { opacity: 0, duration: 0.1 },
        scrollTrigger: { start: 'top 30%', end: 'bottom 77.6%', scrub: 1.2 },
      };
    } else if (width <= 574) {
      props = {
        logoFrom: { opacity: 0, y: -100, x: 100, scale: 0.85 },
        logoTo1: { opacity: 1, y: 30, x: 120, scale: 0.55, duration: 0.9 },
        scrollImageTo: { opacity: 0, duration: 0.18 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.55 },
        logoTo2: { y: 910, x: 39, scale: 0.1, duration: 15 },
        logoTo3: { opacity: 0, duration: 0.45 },
        scrollTrigger: { start: 'top 69%', end: 'bottom 79%', scrub: 0.4 },
      };
    } else if (width <= 991) {
      props = {
        logoFrom: { opacity: 0, y: -140, x: 340, scale: 0.9 },
        logoTo1: { opacity: 1, y: 45, x: 350, scale: 0.58, duration: 1},
        scrollImageTo: { opacity: 0, duration: 0.2 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
        logoTo2: { y: 485, x: 250, scale: 0.1, duration: 3.6 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 65%', end: 'bottom 61%', scrub: 0.5 },
      };
    } else if (width <= 1100) {
      props = {
        logoFrom: { opacity: 0, y: -140, x: 140, scale: 0.9 },
        logoTo1: { opacity: 1, y: 45, x: 200, scale: 0.58, duration: 1 },
        scrollImageTo: { opacity: 0, duration: 0.2 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
        logoTo2: { y: 330, x: 306, scale: 0.1, duration: 5.6 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 65%', end: 'bottom 49%', scrub: 0.5 },
      };
    }
    else if (width <= 1400) {
      props = {
        logoFrom: { opacity: 0, y: -150, x: 150, scale: 0.9 },
        logoTo1: { opacity: 1, y: 48, x: 250, scale: 0.6, duration: 1 },
        scrollImageTo: { opacity: 0, duration: 0.2 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
        logoTo2: { y: 415, x: 470, scale: 0.1, duration: 2.6 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 60%', end: 'bottom 40%', scrub: 1 },
      };
    } else if (width <= 1600) {
      props = {
        logoFrom: { opacity: 0, y: -155, x: 155, scale: 0.9, scrub: 1 },
        logoTo1: { opacity: 1, y: 50, x: 280, scale: 0.6, duration: 1 , scrub: 1},
        scrollImageTo: { opacity: 0, duration: 1.1, scrub: 1 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', scrub: 3 },
        logoTo2: { y: 480, x: 561, scale: 0.1, duration: 4.6  },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 75%',
          end: 'bottom 52%',
        ease: 'power3.out', scrub: 2.3 },
      };
    }  else if (width <= 1750) {
      props = {
        logoFrom: { opacity: 0, y: -155, x: 155, scale: 0.9, scrub: 1 },
        logoTo1: { opacity: 1, y: 50, x: 280, scale: 0.6, duration: 1 , scrub: 1},
        scrollImageTo: { opacity: 0, duration: 1.1, scrub: 1 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', scrub: 3 },
        logoTo2: { y: 479, x: 625, scale: 0.1, duration: 4.6  },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 75%',
          end: 'bottom 50%',
        ease: 'power3.out', scrub: 2.3 },
      };
    }
    else if (width <= 1800) {
      props = {
        logoFrom: { opacity: 0, y: -155, x: 155, scale: 0.9, scrub: 1 },
        logoTo1: { opacity: 1, y: 50, x: 280, scale: 0.6, duration: 1 , scrub: 1},
        scrollImageTo: { opacity: 0, duration: 1.1, scrub: 1 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', scrub: 3 },
        logoTo2: { y: 483, x: 650, scale: 0.1, duration: 4.6  },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 75%',
          end: 'bottom 48%',
        ease: 'power3.out', scrub: 2.3 },
      };
    }else if (width <= 1920) {
      props = {
        logoFrom: { opacity: 0, y: -160, x: 110, scale: 0.9 },
        logoTo1: { opacity: 1, y: 50, x: 300, scale: 0.6, duration: 1 },
        scrollImageTo: { opacity: 0, duration: 0.2 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
        logoTo2: { y: 500, x: 725, scale: 0.1, duration: 3.2 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top center', end: 'bottom 43%', scrub: 0.5 },
      };
    }

    return props;
  };

  useEffect(() => {
    // Ensure logoRefs exists
    const paths = logoRefs.current?.querySelectorAll('path');
    if (!paths || paths.length === 0) {
      console.warn('No paths found in logoRefs');
      return;
    }

    // Set initial faded color using GSAP to avoid FOUC
    gsap.set(paths, {
      fill: '#b3b3b3',
      stroke: '#b3b3b3',
    });

    // Function to create or update animation
    const createAnimation = () => {
      // Get current width
      const width = window.innerWidth;
      const props = getAnimationProps(width);

      // Kill existing ScrollTriggers to avoid duplicates
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // GSAP Timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRefs.current,
          ...props.scrollTrigger,
          anticipatePin: 1,
          fastScrollEnd: true,
          markers: false,
        },
      })
        .fromTo(
          logoRefs.current,
          props.logoFrom,
          {
            ...props.logoTo1,
            ease: 'power3.out',
            willChange: 'transform, opacity',
          }
        )
        .to(
          scrollImageRef.current,
          {
            ...props.scrollImageTo,
            ease: 'power3.out',
          },
          '-=1'
        )
        .to(
          paths,
          {
            ...props.pathsTo,
            ease: 'sine.out',
          },
          '-=1'
        )
        .to(
          logoRefs.current,
          {
            ...props.logoTo2,
            ease: 'power3.inOut',
          },
          '-=0.4'
        )
        .to(
          logoRefs.current,
          {
            ...props.logoTo3,
            ease: 'sine.out',
          },
          '-=1.1'
        );

      return tl;
    };

    // Initial animation
    let tl = createAnimation();

    // Optimized resize handler
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        tl.kill(); // Kill existing timeline
        ScrollTrigger.refresh(); // Refresh ScrollTrigger
        tl = createAnimation(); // Recreate animation with new props
      }, 200);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const bottomImageRefs = useRef([]);
  const section2ImageRef = useRef(null);

useEffect(() => {
  // Configure ScrollTrigger
  ScrollTrigger.config({ limitCallbacks: true, syncInterval: 100 });

  // Only enable normalizeScroll for mobile
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  ScrollTrigger.normalizeScroll(isMobile);

  // Exit early if projects or refs aren't ready
  if (
    !projects.length ||
    !boxRefs.current ||
    !imageRefs.current ||
    !bottomImageRefs.current ||
    !section2ImageRef.current ||
    boxRefs.current.length < projects.length
  ) {
    console.log('Animation setup skipped: Waiting for projects or refs', {
      projectsLength: projects.length,
      boxesLength: boxRefs.current?.length || 0,
      imagesLength: imageRefs.current?.length || 0,
    });
    return;
  }

  const boxes = boxRefs.current;
  const images = imageRefs.current;
  const bottomImages = bottomImageRefs.current;
  const section2Image = section2ImageRef.current;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set([...images, ...bottomImages, section2Image], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      visibility: 'visible',
    });
    return;
  }

  // Throttle utility for onUpdate (increased interval for desktop)
  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // Animation logic for images
  images.forEach((img, index) => {
    if (index >= projects.length || !boxes[index]) {
      console.log(`Skipping index ${index}: Invalid data`);
      return;
    }

    const box = boxes[index];
    const cardImg = box.querySelector('img.card-img-top');  // Targeting card image
    if (!cardImg) {
      console.log(`Skipping index ${index}: card-img-top not found`);
      return;
    }

    // Calculate offsets based on cardImg's position
    const cardImgRect = cardImg.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    const offsets = {
      x: (cardImgRect.right - imgRect.width / 2 - imgRect.left) * 1.07,
      y: cardImgRect.top - 50 + imgRect.height / 2 - imgRect.top,
    };

    // Use IntersectionObserver for background color change on desktop
    if (!isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          box.style.backgroundColor = entry.isIntersecting ? '' : '';
        },
        { rootMargin: '0px', threshold: 0.1 }
      );
      observer.observe(img);
    }

    gsap.fromTo(
      img,
      {
        x: -10,
        y: -160,
        scale: 1,
        opacity: 1,
        visibility: 'hidden',
      },
      {
        x: offsets.x,
        y: offsets.y,
        scale: 1,
        opacity: 1,
        visibility: 'visible',
        ease: 'power2.out',
        willChange: isMobile ? 'transform, opacity' : '', // Conditional willChange
        scrollTrigger: {
          trigger: section1Ref.current,
          start: isMobile ? 'top 60%' : 'top 70%',
          end: isMobile ? 'bottom 80%' : 'bottom 30%',
          scrub: isMobile ? 1 : 0.5, // Lighter scrub for desktop
          onUpdate: isMobile
            ? throttle((self) => {
                const imgRect = img.getBoundingClientRect();
                const boxRect = box.getBoundingClientRect();
                const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
                box.style.backgroundColor = isInside ? '' : '';
              }, 200) // Increased throttle for desktop
            : null,
          onComplete: () => {
            gsap.set(img, { visibility: 'hidden' });
          },
        },
      }
    );
  });

  // Bottom images animation
  bottomImages.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const targetRect = section2Image.getBoundingClientRect();
    const offsets = {
      x: targetRect.left + targetRect.width / 2 - (imgRect.left + imgRect.width / 2),
      y: targetRect.top + targetRect.height / 2 - (imgRect.top + imgRect.height / 2),
    };

    gsap.fromTo(
      img,
      {
        x: -50,
        y: 0,
        scale: 0.1,
        opacity: 0,
        visibility: 'hidden',
      },
      {
        x: offsets.x,
        y: offsets.y,
        scale: 0.5,
        opacity: 1,
        duration: isMobile ? 3 : 2, // Shorter for desktop
        visibility: 'visible',
        ease: 'power2.out',
        willChange: isMobile ? 'transform, opacity' : '',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: isMobile ? 'top 70%' : 'top 60%',
          end: isMobile ? 'bottom 90%' : 'bottom 80%',
          scrub: isMobile ? 7 : 7,
        },
      }
    );
  });

  // Synchronized fade-out
  gsap.to([section2Image], {
    opacity: 0,
    scale: 0.4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section2Ref.current,
      start: isMobile ? 'bottom 90%' : 'bottom 80%',
      end: isMobile ? 'bottom 90%' : 'bottom 80%',
      scrub: isMobile ? 7 : 7,
      onEnter: () => {
        section2Image.classList.add('new_hover');
      },
      onLeave: () => {
        section2Image.classList.remove('new_hover');
      },
      onComplete: () => {
        gsap.set([section2Image, ...bottomImages], {
          opacity: 0,
          visibility: 'hidden',
        });
        bottomImages.forEach((img) => {
          img.dataset.hidden = 'true';
        });
        section2Image.dataset.hidden = 'true';
      },
    },
  });

  // Debounced resize/orientation handler
  let resizeTimeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleResize);

  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => {
      if (
        trigger.trigger === section1Ref.current ||
        trigger.trigger === section2Ref.current
      ) {
        trigger.kill();
      }
    });
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize);
  };
}, [projects]);

    const logoRefs1 = useRef(null);
    const containerRefs1 = useRef(null);
    const getAnimationProps1 = (width) => {
      // Default values for larger screens (>1920px)
      let         props = {
        fromTo: {
          from: { opacity: 0, y: -450,scale:1.3, x: 90 },
          to: { opacity: 1, y: -30, x: 100,scale: 0.7, ease: 'power3.out', duration: 4.8 },
        },
        to: { opacity: 0, y: 600, x: 20, scale: 0, ease: 'power3.inOut', duration: 6.5 },
        scrollTrigger: { start: 'top 105%', end: 'bottom 35%', scrub: 0.9 },};
      if (width <= 320) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -450,scale:1.3, x: 90 },
            to: { opacity: 1, y: -330, x: 100,scale: 0.7, ease: 'power3.out', duration: 4.8 },
          },
          to: { opacity: 0, y: 600, x: 20, scale: 0, ease: 'power3.inOut', duration: 6.5 },
          scrollTrigger: { start: 'top 105%', end: 'bottom 35%', scrub: 0.9 },};
      }  else   if (width <= 370) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -450,scale:1.3, x: 90 },
            to: { opacity: 1, y: -330, x: 100,scale: 0.7, ease: 'power3.out', duration: 4.8 },
          },
          to: { opacity: 0, y: 600, x: 20, scale: 0, ease: 'power3.inOut', duration: 6.5 },
          scrollTrigger: { start: 'top 105%', end: 'bottom 35%', scrub: 0.9 },};
      } else if (width <= 425) {
      // Adjust for specific breakpoints
        props = {
          fromTo: {
            from: { opacity: 0, y: -450,scale:1.3, x: 90 },
            to: { opacity: 1, y: 30, x: 100,scale: 0.7, ease: 'power3.out', duration: 4.8 },
          },
          to: { opacity: 0, y: 600, x: 20, scale: 0, ease: 'power3.inOut', duration: 6.5 },
          scrollTrigger: { start: 'top 65%', end: 'bottom 35%', scrub: 0.9 },};
      } else if (width <= 574) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -300,scale:1.3, x: 150 },
            to: { opacity: 1, y: 30, x: 150,scale: 0.7, ease: 'power3.out', duration: 4.8 },
          },
          to: { opacity: 0, y: 570, x: 90, scale: 0, ease: 'power3.inOut', duration: 6.5 },
          scrollTrigger: { start: 'top 75%', end: 'bottom 35%', scrub: 0.9 },
        };
      } else if (width <= 991) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -300, x: 600 },
            to: { opacity: 1, y: 40, x: 350, ease: 'power3.out', duration: 5 },
          },
          to: { opacity: 0, y: 550, x: 300, scale: 0, ease: 'power3.inOut', duration: 7 },
          scrollTrigger: { start: 'top -30%', end: 'bottom -35%', scrub: 1 },
        };
      } else if (width <= 1100) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -410, x: 730 ,scale: 1.2,scrub: 3},
            to: { opacity: 1, y: 45, x: 390,scale: 0.7, ease: 'power3.out', duration: 5.2 },
          },
          to: { opacity: 0, y: 550, x: 370, scale: 0, ease: 'power3.inOut', duration: 7.2 },
          scrollTrigger: { start: 'top -30%', end: 'bottom -65%', scrub: 2 },
        };
      } else if (width <= 1400) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -400,scale: 1.2, x: 980 ,scrub: 2},
            to: { opacity: 1, y: 8, x: 570,scale: 0.7, ease: 'power3.out', duration: 5.3 },
          },
          to: { opacity: 0, y: 570, x: 497, scale: 0, ease: 'power3.inOut', duration: 7.3 },
          scrollTrigger: { start: 'top -30%', end: 'bottom -65%', scrub: 2.1 },
        };
      } else if (width <= 1600) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1170 ,scale: 1.3, scrub: 1},
            to: { opacity: 1, y: 50, x: 660,scale: 0.7, ease: 'power3.out', duration: 6.5, scrub: 1 },
          },
          to: { opacity: 0, y: 610, x: 589, scale: 0, ease: 'power3.inOut', duration: 11.9 , scrub: ``},
          scrollTrigger: { start: 'top -30%', end: 'bottom -30%', duration: 3.5,scrub: 5.6 },
        };
      }
      else if (width <= 1700) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1170 ,scale: 1.3, scrub: 1},
            to: { opacity: 1, y: 50, x: 660,scale: 0.7, ease: 'power3.out', duration: 3.5, scrub: 1 },
          },
          to: { opacity: 0, y: 590, x: 600, scale: 0, ease: 'power3.inOut', duration: 3.9 , scrub: 1},
          scrollTrigger: { start: 'top -20%', end: 'bottom -50%', duration: 3.5,scrub: 2.6 },
        };
      }       else if (width <= 1800) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1270 ,scale: 1.3, scrub: 1},
            to: { opacity: 1, y: 50, x: 730,scale: 0.7, ease: 'power3.out', duration: 3.5, scrub: 1 },
          },
          to: { opacity: 0, y: 610, x: 645, scale: 0.1, ease: 'power3.inOut', duration: 3.9 , scrub: 1},
          scrollTrigger: { start: 'top -20%', end: 'bottom -50%', duration: 3.5,scrub: 1.6 },
        };
      }
      else if (width <= 1920) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1550,scale: 1.3 },
            to: { opacity: 1, y: 10, x: 790, scale: 1, ease: 'power3.out', duration: 5.5 },
          },
          to: { opacity: 0, y: 650, x: 760, scale: 0, ease: 'power3.inOut', duration: 5.6, scrub: 3.2 },
          scrollTrigger: { start: 'top -20%', end: 'bottom -70%', scrub: 1.2 },
        };
      }

      return props;
    };
    useEffect(() => {
      let width = window.innerWidth;
      let animationProps = getAnimationProps1(width);

      // Create GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRefs1.current,
          ...animationProps.scrollTrigger,
          markers: false,
        },
      })
        .fromTo(
          logoRefs1.current,
          animationProps.fromTo.from,
          animationProps.fromTo.to
        )
        .to(logoRefs1.current, animationProps.to);

      // Handle resize to refresh animation with new props
      let timeout;
      const handleResize = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          width = window.innerWidth;
          animationProps = getAnimationProps1(width);
          // Kill only this animation's ScrollTrigger
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill();
          }
          // Create a new timeline
          const newTl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRefs1.current,
              ...animationProps.scrollTrigger,
              markers: false,
            },
          })
            .fromTo(
              logoRefs1.current,
              animationProps.fromTo.from,
              animationProps.fromTo.to
            )
            .to(logoRefs1.current, animationProps.to);
        }, 100);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const blogsectionRef = useRef(null);
  const BlogimageRefs = useRef([]);
  const BlogsboxRefs = useRef([]);
  const BlogBottomImageRefs = useRef([]);
  const BlogsBottomsectionRef = useRef(null);
  const Blogsection2Ref = useRef(null);
  useEffect(() => {
    if (!Blogs.length || loading) return; // Skip if Blogs is empty or still loading

    const boxes = BlogsboxRefs.current;
    const images = BlogimageRefs.current;
    const bottomImages = BlogBottomImageRefs.current;
    const logoO = BlogsBottomsectionRef.current;

    // Customizable offsets for bottom images
    const startOffset = { x: 230, y: -35 };
    const endOffset = { x: 229, y: -24 };

    // Create a GSAP context for easy cleanup
    const ctx = gsap.context(() => {
      // Animation for top images
      images.forEach((img, index) => {
        const box = boxes[index];
        if (!box || !img) return;

        const cardImg = box.querySelector('img.card-img-top');
        if (!cardImg) return;

        const getOffsets = () => {
          const cardImgRect = cardImg.getBoundingClientRect();
          const imgRect = img.getBoundingClientRect();
          const spacing = 13;
          return {
            x: cardImgRect.right - imgRect.width / 2 - imgRect.left + index * spacing,
            y: cardImgRect.top - 180 + imgRect.height / 2 - imgRect.top,
          };
        };

        gsap.fromTo(
          img,
          { x: 10, y: -145, scale: 1, opacity: 1, visibility: 'hidden' },
          {
            x: () => getOffsets().x,
            y: () => getOffsets().y,
            scale: 1,
            opacity: 1,
            visibility: 'visible',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: blogsectionRef.current,
              start: 'top 50%',
              end: 'bottom center',
              scrub: 1,
              toggleActions: 'play none none reverse', // Explicitly reverse on scroll up
              onUpdate: (self) => {
                const imgRect = img.getBoundingClientRect();
                const boxRect = box.getBoundingClientRect();
                const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
                box.style.backgroundColor = isInside ? '' : '';
              },
            },
          }
        );
      });

      // Animation for bottom images: Converge into the "O"
      bottomImages.forEach((img, index) => {
        if (!img || !logoO) return;

        const fadeOutDuration = 0.01;

        const getOffsets = () => {
          const imgRect = img.getBoundingClientRect();
          const logoORect = logoO.getBoundingClientRect();
          const targetX = logoORect.left + logoORect.width / 2 + endOffset.x;
          const targetY = logoORect.top + logoORect.height / 2 + endOffset.y;
          const imgCenterX = imgRect.left + imgRect.width / 2;
          const imgCenterY = imgRect.top + imgRect.height / 2;
          return {
            x: targetX - imgCenterX,
            y: targetY - imgCenterY,
          };
        };

        gsap.fromTo(
          img,
          { x: startOffset.x, y: startOffset.y, scale: 1, opacity: 0.3, visibility: 'visible' },
          {
            x: () => getOffsets().x,
            y: () => getOffsets().y,
            scale: 0.9,
            opacity: 1,
            visibility: 'visible',
            duration: 6.1,
            ease: 'sine.out',
            scrollTrigger: {
              trigger: Blogsection2Ref.current,
              start: 'top 90%', // Adjusted to avoid premature start
              end: 'bottom center+=370',
              scrub: 3,
              toggleActions: 'play none none reverse', // Explicitly reverse on scroll up
              onEnter: () => {
                images.forEach((topImg) => {
                  gsap.set(topImg, { visibility: 'hidden', opacity: 0 });
                  topImg.dataset.hidden = 'true';
                });
                gsap.set(img, { visibility: 'visible', opacity: 1 });
              },
            },
            onComplete: () => {
              gsap.to(img, {
                opacity: 0,
                visibility: 'hidden',
                duration: fadeOutDuration,
                ease: 'power2.in',
                onComplete: () => {
                  img.dataset.hidden = 'true';
                },
              });
            },
          }
        );
      });
    });

    // Cleanup on unmount or when Blogs changes
    return () => ctx.revert();
  }, [Blogs, loading]); // Include loading in dependencies
const [selectedCity, setSelectedCity] = useState({ id: null, name: 'City' });
const [selectedProperty, setSelectedProperty] = useState({ id: null, name: 'Property Type' });
const [projectId, setProjectId] = useState('');
const [cities, setCities] = useState([]);
const [propertyTypes, setPropertyTypes] = useState([]);
const navigate = useNavigate();
const [searchLoading, setSearchLoading] = useState(false);


const baseUrl = (import.meta.env.VITE_BASE_URL || 'https://admin.sloc.in/public').replace(/\/+$/, '');
const token = 'AzlrVK30FVdEx0TwrRwqYrQTL';

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
      console.error('Error fetching cities:', error);
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
      console.error('Error fetching property types:', error);
    });
}, [baseUrl]);

const handleCitySelect = (city) => {
  setSelectedCity({ id: city.id, name: city.name });
};

const handlePropertySelect = (property) => {
  setSelectedProperty({ id: property.id, name: property.name });
};

const handleProjectIdInput = (event) => {
  setProjectId(event.target.value);
};

const [errorMessage, setErrorMessage] = useState(""); // To store the error message

const handleSearch = () => {
  // Validation: Check if at least one field has a value
  if (
    (!selectedCity.id && selectedCity.name !== "City") &&
    (!selectedProperty.id && selectedProperty.name !== "Property Type") &&
    !projectId.trim()
  ) {
    setErrorMessage("Please select a city, property type, or enter a project ID.");
    return; // Stop the search if no value is provided
  }

  // Reset error message if validation passes
  setErrorMessage("");

  const params = new URLSearchParams();

  // Only append the city parameter if it's not the "All Cities" static option
  if (selectedCity.id && selectedCity.name !== "All Cities") {
    params.append('city', selectedCity.id);
  }
  // Only append the property type parameter if it's not the "Any Property Type" static option
  if (selectedProperty.id && selectedProperty.name !== "Any Property Type") {
    params.append('property_type', selectedProperty.id);
  }
  // Append project_id if provided
  if (projectId.trim()) {
    params.append('project_id', projectId.trim());
  }

  // Perform the navigation with the search parameters
  navigate(`/search-Listing?${params.toString()}`);
};


  return (
    <>
      <main id="All" >
        <section className="Main-banner mobile-bgp" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} className="top-co" >
                <h1>Search Land Of Choice</h1>
                <p>Explore premium living spaces in the most sought-after locations of India. </p>
              </Col>
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
                    <div className="split-images" >
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
          <div className="d-flex align-items-md-center searc-bar  justify-content-between">
          <DropdownButton
          id="dropdown-city"
          title={selectedCity.name}
          variant="outline-light"
          className="me-2 set-out"
        >
            {/* <Dropdown.Item
    key="all-cities"
    onClick={() => handleCitySelect({ id: null, name: "City" })}
  >
  City
  </Dropdown.Item> */}
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
            {/* <Dropdown.Item
    key="any-property"
    onClick={() => handlePropertySelect({ id: null, name: "Property Type" })}
  >
  Property Type
  </Dropdown.Item> */}
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
            <Dropdown.Item disabled>No property types available</Dropdown.Item>
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
            value={projectId}
            onChange={handleProjectIdInput}
          />

        </InputGroup>
              {/* Error Message */}

        <Button
          variant="primary all-same-ani"
          onClick={handleSearch}
          disabled={searchLoading}
        >
          {/* {searchLoading ? 'Searching...' : 'Search'} */}
          Search
        </Button>
        {errorMessage && (
        <span className="error-message" style={{ color: 'red', marginTop: '10px' }}>
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
<section ref={containerRefs} className="welcome">
  {/* Blue SVG */}
<svg
  className="Move move_logo"
  width="384"
  height="383"
  viewBox="0 0 384 383"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  ref={logoRefs}
  style={{
    position: 'absolute',
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
        <img src={Round} alt="scroling" className="scrol-top" ref={scrollImageRef} />
        <h2 className="same-head" >
          WELCOME TO SLOC!
        </h2>
        <p className="same-head-p">
        SLOC is all about turning property searches into seamless, rewarding experiences. Whether you seek a luxury residence, a strategic investment, or commercial real estate, we present the premier properties from India's leading developers such as Godrej, DLF, and others. Our dedication to honesty and high standards allows us to assist you in your search for, and investment in, real estate opportunities. With us by your side, the search ends and new beginnings start!
        </p>
      </Col>
      <Col md={6} className="d-flex flex-wrap four-col-st" >
        <Col md={6} lg={6} className="right res">
          <Card className="">
            <h3 className="text-primary">

              <Counter className="Counter-no" to={5} from={0} />
              +
            </h3>
            <p>Years </p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-bottom res">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={1} from={0} />
              K+
            </h3>
            <p> Customers</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-right res" ref={welcomeTextRef}>
          <Card>
            <h3 className="text-primary">
              <Counter className="Counter-no" to={100} from={0} />
              +
            </h3>
            <p> Projects</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="left-brdr res">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={99} from={0} />
             %
            </h3>
            <p> Satisfaction</p>
          </Card>
        </Col>
      </Col>
    </Row>
  </Container>
</section>
<section ref={section1Ref} className="featured">
  <div className="featured-floating-imgs">
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
  </div>
  <Container className="full">
           <Row className="mb-4 d-flex py-md-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">Exclusive Listings</h2>
                <p className="same-head-p">
                Discover a handpicked selection of luxurious homes, prime plots, and commercial landmarks from India’s most trusted developers.
                </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center">
                <div className="custom-swiper-nav d-flex gap-4 justify-content-md-end mb-3">
                  <img src={PrevArrow} alt="Previous" className="swiper-button-prev-custom" />
                  <img src={NextArrow} alt="Next" className="swiper-button-next-custom" />
                </div>
              </Col>
            </Row>
    <Row className="features-row">
              <Swiper
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
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
            {index < 3 && (
              <img
                ref={(el) => (bottomImageRefs.current[index] = el)}
                className="bottom-image"
                src={project.bottomImage}
                alt={`bottom-img-${project.id}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  pointerEvents: 'none',
                  width: '40%',
                  height: 'auto',
                }}
              />
            )}
                <Card
                  ref={(el) => (boxRefs.current[index] = el)}
                  className={`custom-card card-${index} box-${index}`}
    style={{ position: 'relative', zIndex: 2 }}
                >
                  {/* <Card.Img variant="top" src={project.image} alt={project.title} /> */}
                  <Card.Img
  variant="top"
  src={project.image || "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22428%22%20height%3D%2525253%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20428%20253%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22428%22%20height%3D%2525253%22%20fill%3D%22%23ececec%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%3EImage%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E"}
  alt={project.title}
  style={{ width: '428px', height: '253px', objectFit: 'cover' }}
/>
                  <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc uprkro">
                      {/* <span>{project.size}</span> <span>{project.feet}</span>
                      <span>{project.location}</span> */}
                          {project.size && <span>{project.size}</span>}
    {project.feet && <span>{project.feet}</span>}
    {project.location && <span>{project.location}</span>}
                    </Card.Text>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-primary font-weight-bold">
                      {project.price}
                    </Card.Text>
                    <Button as={Link} to={`/project/${project.slug}`} className="Up-arrow-btn">
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
                Your dream home or investment is just a step away. Connect with SLOC today and make it yours!
                </p>
                <img src={back} alt="" className="back-roll" ref={section2ImageRef}
                />
              </Col>
              <Col md={4} className="text-md-end text-center">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section ref={containerRefs1} className="social-proof position-relative">
          <img className="Move" src={WelcomeLogo} ref={logoRefs1} />
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">SLOC Stories  </h2>
                  <p className="same-head-p">
                  From search to sold, we make real estate effortless and exciting!
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
    <div className="image-stack image-stack-1">
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
    </div>
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
        <Button variant="dark" href="/blog-listing">See more Blogs</Button>
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
  variant="top"
  src={Blogs.image || "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22428%22%20height%3D%2525253%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20428%20253%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22428%22%20height%3D%2525253%22%20fill%3D%22%23ececec%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%3EImage%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E"}
  alt={Blogs.title}
  style={{ width: '428px', height: '253px', objectFit: 'cover' }}
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
              <Button as={Link} to={`/blog-detail/${Blogs.slug}`} className="Up-arrow-btn">
              <img src={Arrow} />
              </Button>
            </Card.Body>
          </Card>
          {/* Add bottom images here */}
          <div className="botom-blog-index-set">
          <img
            ref={(el) => (BlogBottomImageRefs.current[index] = el)}
            className="bottom-image1"
            src={Blogs.BlogImages || Logo1} // Use a relevant image
            alt={`bottom-img-${Blogs.id}`}
          />
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
          <section className="Disclamer new-desclaimer" >
<Container>
  <p className='Dis'>Disclaimer : The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed. Users of this website are hereby advised to exercise due diligence and to independently validate and verify all information about any property / project before deciding to purchase the same or taking any other action. The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. All trademarks are the property of their respective owners.</p>
</Container>
    </section>
    <footer className="Disclamer-footer" ref={Blogsection2Ref}>
      <Container>
        <Row className="mb-4 justify-content-between">
          <Col lg={5} md={6} className="mb-4 mb-md-0 p-md-0">
            <div className="footer-logo">
           {/* <a href='/'><p className='Logo' ref={BlogBottomImageRefs}>SLOC</p></a> */}
           <a href="/">
            <p className="Logo">
              SLOC
              <span className="logo-o" ref={BlogsBottomsectionRef}></span>
            </p>
          </a>
            </div>
            <p className="my-3 set-wi">
            We bring you the finest real estate choices with trust and excellence. Get set to Dream, Discover, and Deal.
            </p>
            <div className="mb-2">
              <h6 className="text-uppercase ft-font">FOLLOW US AT</h6>
            </div>
            <div className="d-flex gap-4 mt-4">
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
                  <Link to="/blog-listing" className="text-decoration-none  ">
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
           <Col lg={2} md={6} className="mb-4 mb-md-0 res-st">
                    <h6 className="text-uppercase ft-font mb-3">Contact Us</h6>
                    <p className=" mb-1">15th Floor, Ocus Quantum,</p>
                    <p className=" mb-1">Sector-51, Gurugram, Haryana, 122003 </p>
                    <p className=" my-3">
                      <a href="mailto:contact@sloc.in">contact@sloc.in</a>{" "}
                    </p>
                    <p className=" mb-1">
                      <a href="tel:+919971094108">+919971094108</a>
                    </p>
                  </Col>
        </Row>
        <Row className='border-top-set pt-3 mt-2'>
          <Col className="text-center small">
            <p className="mb-0 copyright">© Copyright 2025 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
      </main>
    </>
  );
}
export default Home;
