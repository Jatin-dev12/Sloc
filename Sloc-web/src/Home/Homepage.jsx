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
import React, { useEffect,  useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WelcomeLogo from '../assets/Imgs/25_Logo.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NextArrow from '../assets/Imgs/right.svg';
import PrevArrow from '../assets/Imgs/left.svg';
import Logo1 from '../assets/Imgs/blg.png'
import BottomImg1 from '../assets/Imgs/blg.png'
import BottomImg2 from '../assets/Imgs/blg.png'
import BottomImg3 from '../assets/Imgs/blg.png'
import BottomImg4 from '../assets/Imgs/blg.png'
import Logo from '../assets/Imgs/back-scrol.png'

const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: f1, // Replace with actual image URL
    bottomImage: BottomImg1,
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: f2,
    bottomImage: BottomImg2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg3,
  },
  {
    id: 4,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg4,
  },
];

const testimonials = [
  {
    id: 1,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 2,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 3,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 4,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
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
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
];

gsap.registerPlugin(ScrollTrigger);
function Home() {
  // 1. Welcome to SLOC section animation
  const containerRefs = useRef(null);
  const logoRefs = useRef(null); // Transparent SVG
  const scrollImageRef = useRef(null);
  const welcomeTextRef = useRef(null);

  const getAnimationProps = (width) => {
    // Default values for larger screens (>1920px)
    let props = {
      logoFrom: { opacity: 0, y: -160, x: 160, scale: 0.9 },
      logoTo1: { opacity: 1, y: 50, x: 300, scale: 0.6, duration: 1 },
      scrollImageTo: { opacity: 0, duration: 0.2 },
      pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
      logoTo2: { y: 460, x: 509, scale: 0.1, duration: 2.5 },
      logoTo3: { opacity: 0, duration: 0.5 },
      scrollTrigger: { start: 'top center', end: 'bottom center', scrub: 0.5 },
    };

    // Adjust for specific breakpoints
    if (width <= 425) {
      props = {
        logoFrom: { opacity: 0, y: -80, x: 80, scale: 0.8 },
        logoTo1: { opacity: 1, y: 650, x: 100, scale: 0.5, duration: 21, scrub: 1.2},
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
        logoTo2: { y: 405, x: 306, scale: 0.1, duration: 5.6 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 65%', end: 'bottom 63%', scrub: 0.5 },
      };
    }
    else if (width <= 1400) {
      props = {
        logoFrom: { opacity: 0, y: -150, x: 150, scale: 0.9 },
        logoTo1: { opacity: 1, y: 48, x: 250, scale: 0.6, duration: 1 },
        scrollImageTo: { opacity: 0, duration: 0.2 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
        logoTo2: { y: 445, x: 470, scale: 0.1, duration: 2.6 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 60%', end: 'bottom 59%', scrub: 1 },
      };
    } else if (width <= 1600) {
      props = {
        logoFrom: { opacity: 0, y: -155, x: 155, scale: 0.9, scrub: 1 },
        logoTo1: { opacity: 1, y: 50, x: 280, scale: 0.6, duration: 1 , scrub: 1},
        scrollImageTo: { opacity: 0, duration: 1.1, scrub: 1 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', scrub: 3 },
        logoTo2: { y: 510, x: 551, scale: 0.1, duration: 4.6  },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 75%',
          end: 'bottom 55%',
        ease: 'power3.out', scrub: 2.3 },
      };
    }  else if (width <= 1750) {
      props = {
        logoFrom: { opacity: 0, y: -155, x: 155, scale: 0.9, scrub: 1 },
        logoTo1: { opacity: 1, y: 50, x: 280, scale: 0.6, duration: 1 , scrub: 1},
        scrollImageTo: { opacity: 0, duration: 1.1, scrub: 1 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', scrub: 3 },
        logoTo2: { y: 509, x: 597, scale: 0.1, duration: 4.6  },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 75%',
          end: 'bottom 55%',
        ease: 'power3.out', scrub: 2.3 },
      };
    }
    else if (width <= 1800) {
      props = {
        logoFrom: { opacity: 0, y: -155, x: 155, scale: 0.9, scrub: 1 },
        logoTo1: { opacity: 1, y: 50, x: 280, scale: 0.6, duration: 1 , scrub: 1},
        scrollImageTo: { opacity: 0, duration: 1.1, scrub: 1 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', scrub: 3 },
        logoTo2: { y: 509, x: 650, scale: 0.1, duration: 4.6  },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top 75%',
          end: 'bottom 55%',
        ease: 'power3.out', scrub: 2.3 },
      };
    }else if (width <= 1920) {
      props = {
        logoFrom: { opacity: 0, y: -160, x: 110, scale: 0.9 },
        logoTo1: { opacity: 1, y: 50, x: 300, scale: 0.6, duration: 1 },
        scrollImageTo: { opacity: 0, duration: 0.2 },
        pathsTo: { fill: '#c1d1e0', stroke: '#c1d1e0', duration: 0.6 },
        logoTo2: { y: 523, x: 725, scale: 0.1, duration: 3.2 },
        logoTo3: { opacity: 0, duration: 0.5 },
        scrollTrigger: { start: 'top center', end: 'bottom 55%', scrub: 0.5 },
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

      // GSAP Timeline with ScrollTrigger
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerRefs.current,
    //     ...props.scrollTrigger,
    //     anticipatePin: 1,
    //     fastScrollEnd: true,
    //     markers: false,
    //     // Add onEnterBack to control image reappearance
    //     onEnterBack: () => {
    //       gsap.to(scrollImageRef.current, {
    //         opacity: 1, // Fade image back in
    //         duration: 3.7,
    //         delay: 6.1, // Delay the appearance when scrolling up
    //         ease: 'power3.out',
    //       });
    //     },
    //     // Ensure image fades out when scrolling down past the trigger
    //     onLeave: () => {
    //       gsap.to(scrollImageRef.current, {
    //         opacity: 0,
    //         duration: 0.5,
    //         ease: 'power3.out',
    //       });
    //     },
    //   },
    // })
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


    //3.) Testimonials section

    useEffect(() => {
      const boxes = boxRefs.current;
      const images = imageRefs.current;
      const bottomImages = bottomImageRefs.current;
      const section2Image = section2ImageRef.current;


      images.forEach((img, index) => {
        const box = boxes[index];
        const cardImg = box.querySelector('img.card-img-top'); // Get the <Card.Img>

        const getOffsets = () => {
          const cardImgRect = cardImg.getBoundingClientRect();
          const imgRect = img.getBoundingClientRect();
          // Target 220px above the top-right corner of the card's top image
          return {
            x: cardImgRect.right - imgRect.width / 2 - imgRect.left, // Center at right edge
            y: cardImgRect.top - 229 + imgRect.height / 2 - imgRect.top, // Center 220px above top
          };
        };

        gsap.fromTo(
          img,
          {
            x: 0,
            y: -170,
            scale: 1,
            opacity: 1,
            visibility: "hidden",
          },
          {
            x: () => getOffsets().x,
            y: () => getOffsets().y,
            scale: 1,
            opacity: 1,
            visibility: "visible",
            ease: "power2.out",
            scrollTrigger: {
              trigger: section1Ref.current,
              start: "top center+=135",
              end: "bottom center",
              scrub: 0.6,
              onUpdate: (self) => {
                const imgRect = img.getBoundingClientRect();
                const boxRect = box.getBoundingClientRect();
                const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
                if (isInside) {
                  // box.style.backgroundColor = "#EFF7FE";
                  box.style.backgroundColor = "";
                } else {
                  box.style.backgroundColor = "";
                }
              },
              onComplete: () => {
                gsap.set(img, { visibility: "hidden" }); // Hide to "stick" at position
              },
            },
          }
        );
      });

// Bottom Images Animation: Move into center of section2Image
// Bottom Images: Animate to center of section2Image
bottomImages.forEach((img) => {
  const getOffsets = () => {
    const imgRect = img.getBoundingClientRect();
    const targetRect = section2Image.getBoundingClientRect();
    return {
      x: targetRect.left + targetRect.width / 2 - (imgRect.left + imgRect.width / 2),
      y: targetRect.top + targetRect.height / 2 - (imgRect.top + imgRect.height / 2),
    };
  };

  gsap.fromTo(
    img,
    {
      x: -110,
      y: 0,
      scale: 0,
      opacity: 1,
      visibility: "hidden",
    },
    {
      x: () => getOffsets().x,
      y: () => getOffsets().y,
      scale: 0.5,
      opacity: 0,
  duration: 3.5,
      visibility: "visible",
      ease: "power2.out",
      scrub: 2,
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center+=70",
        end: "bottom center-=20",
        scrub: 2,
      },
    }
  );
});

// Synchronized Fade-Out: section2Image and bottomImages
// gsap.to([section2Image], {
//   opacity: 0,
//   scale: 0.4,
//   // duration: 3.5,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: section2Ref.current,
//     start: "bottom center-=20",
//     end: "bottom center-=20",
//     scrub: 5,
//     onComplete: () => {
//       // Lock hidden state
//       gsap.set([section2Image, ...bottomImages], {
//         opacity: 0,
//         visibility: "hidden",
//         overwrite: true, // Prevent other animations from overriding
//       });
//       // Mark as hidden to block onEnter
//       bottomImages.forEach((img) => {
//         img.dataset.hidden = "true";
//       });
//       section2Image.dataset.hidden = "true";
//     },
//   },
// });

gsap.to([section2Image], {
  opacity: 0,
  scale: 0.4,
  // duration: 3.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: section2Ref.current,
    start: "bottom center-=20",
    end: "bottom center-=20",
    scrub: 5,
    onEnter: () => {
      section2Image.classList.add("new_hover");
    },
    onLeave: () => {
      section2Image.classList.remove("new_hover");
    },
    onComplete: () => {
      // Lock hidden state
      gsap.set([section2Image, ...bottomImages], {
        opacity: 0,
        visibility: "hidden",
        overwrite: true, // Prevent other animations from overriding
      });
      // Mark as hidden to block onEnter
      bottomImages.forEach((img) => {
        img.dataset.hidden = "true";
      });
      section2Image.dataset.hidden = "true";
    },
  },
});

    }, []);
    const logoRefs1 = useRef(null);
    const containerRefs1 = useRef(null);
    const getAnimationProps1 = (width) => {
      // Default values for larger screens (>1920px)
      let props = {
        fromTo: {
          from: { opacity: 0, y: -490, x: 1150 },
          to: { opacity: 1, y: 50, x: 550, ease: 'power3.out', duration: 5.5 },
        },
        to: { opacity: 0, y: 550, x: 550, scale: 0, ease: 'power3.inOut', duration: 7.5 },
        scrollTrigger: { start: 'top center+=30px', end: 'bottom center-=-30px', scrub: 1.2 },
      };

      // Adjust for specific breakpoints
      if (width <= 425) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -300,scale:1.3, x: 90 },
            to: { opacity: 1, y: 30, x: 100,scale: 0.7, ease: 'power3.out', duration: 4.8 },
          },
          to: { opacity: 0, y: 600, x: 20, scale: 0, ease: 'power3.inOut', duration: 6.5 },
          scrollTrigger: { start: 'top 75%', end: 'bottom 35%', scrub: 0.9 },};
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
          scrollTrigger: { start: 'top 70%', end: 'bottom 33%', scrub: 1 },
        };
      } else if (width <= 1100) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -410, x: 730 ,scale: 1.2,scrub: 3},
            to: { opacity: 1, y: 45, x: 390,scale: 0.7, ease: 'power3.out', duration: 5.2 },
          },
          to: { opacity: 0, y: 550, x: 370, scale: 0, ease: 'power3.inOut', duration: 7.2 },
          scrollTrigger: { start: 'top 65%', end: 'bottom 45%', scrub: 2 },
        };
      } else if (width <= 1400) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -400,scale: 1.2, x: 980 ,scrub: 2},
            to: { opacity: 1, y: 8, x: 570,scale: 0.7, ease: 'power3.out', duration: 5.3 },
          },
          to: { opacity: 0, y: 570, x: 497, scale: 0, ease: 'power3.inOut', duration: 7.3 },
          scrollTrigger: { start: 'top 60%', end: 'bottom 45%', scrub: 2.1 },
        };
      } else if (width <= 1600) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1170 ,scale: 1.3, scrub: 1},
            to: { opacity: 1, y: 50, x: 660,scale: 0.7, ease: 'power3.out', duration: 3.5, scrub: 1 },
          },
          to: { opacity: 0, y: 590, x: 600, scale: 0, ease: 'power3.inOut', duration: 3.9 , scrub: 1},
          scrollTrigger: { start: 'top 55%', end: 'bottom 55%', duration: 3.5,scrub: 1.6 },
        };
      }
      else if (width <= 1700) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1170 ,scale: 1.3, scrub: 1},
            to: { opacity: 1, y: 50, x: 660,scale: 0.7, ease: 'power3.out', duration: 3.5, scrub: 1 },
          },
          to: { opacity: 0, y: 590, x: 600, scale: 0, ease: 'power3.inOut', duration: 3.9 , scrub: 1},
          scrollTrigger: { start: 'top 55%', end: 'bottom 55%', duration: 3.5,scrub: 1.6 },
        };
      }       else if (width <= 1800) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1170 ,scale: 1.3, scrub: 1},
            to: { opacity: 1, y: 50, x: 730,scale: 0.7, ease: 'power3.out', duration: 3.5, scrub: 1 },
          },
          to: { opacity: 0, y: 590, x: 645, scale: 0, ease: 'power3.inOut', duration: 3.9 , scrub: 1},
          scrollTrigger: { start: 'top 55%', end: 'bottom 55%', duration: 3.5,scrub: 1.6 },
        };
      }
      else if (width <= 1920) {
        props = {
          fromTo: {
            from: { opacity: 0, y: -390, x: 1550,scale: 1.3 },
            to: { opacity: 1, y: 10, x: 790, scale: 1, ease: 'power3.out', duration: 5.5 },
          },
          to: { opacity: 0, y: 550, x: 760, scale: 0, ease: 'power3.inOut', duration: 5.6, scrub: 3.2 },
          scrollTrigger: { start: 'top center+=30px', end: 'bottom center-=-30px', scrub: 1.2 },
        };
      }

      return props;
    };
    useEffect(() => {
      // Get initial width
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
          // Kill existing ScrollTrigger and create a new one
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const blogsectionRef = useRef(null);
  const BlogimageRefs = useRef([]);
  const BlogsboxRefs = useRef([]);
  const BlogBottomImageRefs = useRef([]);
  const BlogsBottomsectionRef = useRef(null);
  useEffect(() => {
    const boxes = BlogsboxRefs.current;
    const images = BlogimageRefs.current;
    // Bottom Images: Emerge from inside boxes downward
    images.forEach((img, index) => {
      const box = boxes[index];
      const cardImg = box.querySelector('img.card-img-top'); // Get the <Card.Img>

      const getOffsets = () => {
        const cardImgRect = cardImg.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        // Target 220px above the top-right corner of the card's top image
        return {
          x: cardImgRect.right - imgRect.width / 2 - imgRect.left, // Center at right edge
          y: cardImgRect.top - 200 + imgRect.height / 2 - imgRect.top, // Center 220px above top
        };
      };

      gsap.fromTo(
        img,
        {
          x: 0,
          y: -170,
          scale: 1,
          opacity: 1,
          duration : 1.5,
          visibility: "hidden",
        },
        {
          x: () => getOffsets().x,
          y: () => getOffsets().y,
          scale: 1,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogsectionRef.current,
            start: "top center+=105",
            end: "bottom center",
            scrub: 0.67,
            onUpdate: (self) => {
              const imgRect = img.getBoundingClientRect();
              const boxRect = box.getBoundingClientRect();
              const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
              if (isInside) {
                // box.style.backgroundColor = "#EFF7FE";
                box.style.backgroundColor = "";
              } else {
                box.style.backgroundColor = "";
              }
            },
            onComplete: () => {
              gsap.set(img, { visibility: "hidden" }); // Hide to "stick" at position
            },
          },
        }
      );
    });
// Collapse and vanish images into one at the bottom

  }, []);
  return (
    <>
      <main id="All" >

        <section className="Main-banner" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} className="top-co" >
                <h1 class=" animate__animated animate__fadeInLeft">Search Land Of Choice</h1>

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
              title="City"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">New York</Dropdown.Item>
              <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
              <Dropdown.Item href="#">Chicago</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id="dropdown-property"
              title="Property Type"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">Apartment</Dropdown.Item>
              <Dropdown.Item href="#">House</Dropdown.Item>
              <Dropdown.Item href="#">Condo</Dropdown.Item>
            </DropdownButton>

            <InputGroup className="me-2 ">
              <InputGroup.Text>
                <img src={Search} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search by location or property ID....."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Button variant="primary">Search</Button>
          </div>
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
      <Col md={6} className="align-content-end head">
        <img src={Round} alt="scroling" className="scrol-top" ref={scrollImageRef} />

        <h2 className="same-head animate__animated animate__slideInLeft" >
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
              <Counter className="Counter-no" to={10} from={0} />
              +
            </h3>
            <p>Years of Excellence</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-bottom res">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={5} from={0} />
              K
            </h3>
            <p>Happy Customers</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-right res" ref={welcomeTextRef}>
          <Card>
            <h3 className="text-primary">
              <Counter className="Counter-no" to={100} from={0} />
              +
            </h3>
            <p>Premium Projects</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="left-brdr res">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={95} from={0} />
             %
            </h3>
            <p>Customer Satisfaction</p>
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
                        zIndex: -1, // Below the card
                        pointerEvents: 'none', // Prevent interaction
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
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc">
                      <span>{project.size}</span> <span>{project.feet}</span>
                      <span>{project.location}</span>
                    </Card.Text>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-primary font-weight-bold">
                      {project.price}
                    </Card.Text>
                    <Button className="Up-arrow-btn">
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
                  <Button className="Up-arrow-btn res-hide">
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
          <Container className="">
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
                <Button variant="dark">See more Blogs</Button>
              </Col>
            </Row>
            <Row>
              {Blogs.map((Blogs, index) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  {/* <Card className=" position-relative"> */}
                  <Card
                    ref={(el) => (BlogsboxRefs.current[index] = el)} // Applied ref to each card
                    className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
                  >
                    <Card.Img
                      variant="top"
                      src={Blogs.image}
                      alt={Blogs.title}
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{Blogs.date}</span>
                        <span>{Blogs.catagory} SDFSDF</span>
                      </Card.Text>
                      <Card.Title>{Blogs.name}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">
                        {Blogs.text}
                      </Card.Text>
                      <Button className="Up-arrow-btn" href="/details">
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                  {/* <img
                    ref={(el) => (BlogBottomImageRefs.current[index] = el)}
                    className="bottom-image"
                    src={Blogs.BlogImage}
                    alt={`bottom-img-${Blogs.id}`}
                  /> */}
                </Col>
              ))}
            </Row>
          </Container>
        </section>
          <div className="position relative" ref={BlogsBottomsectionRef} >

        </div>
      </main>
    </>
  );
}

export default Home;


