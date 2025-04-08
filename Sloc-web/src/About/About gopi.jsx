

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
import Counter from "../CountUp/CountUp";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollMagic from "scrollmagic";
import { Flip } from 'gsap/Flip';
import { useEffect, useRef } from "react";
import Logo from "../assets/Imgs/Logo.png";  // Assuming this is your header image


const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: f1, // Replace with actual image URL
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: f2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
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
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
  },
];

gsap.registerPlugin(ScrollTrigger);
function Home() {

  // const logoRef = useRef(null);
  // const section2TargetRef = useRef(null);
  // const section3TargetRef = useRef(null);
  // const flipCtxRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(Flip, ScrollTrigger);

  //   const createTimeline = () => {
  //     if (flipCtxRef.current) {
  //       flipCtxRef.current.revert();
  //     }

  //     flipCtxRef.current = gsap.context(() => {
  //       const secondState = Flip.getState(section2TargetRef.current);
  //       const thirdState = Flip.getState(section3TargetRef.current);
  //       const flipConfig = {
  //         ease: "none",
  //         duration: 1
  //       };

  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".Main-banner",
  //           start: "clamp(top center)",
  //           endTrigger: ".welcome",
  //           end: "clamp(top center)",
  //           scrub: 1
  //           // markers: true // Uncomment for debugging
  //         }
  //       });

  //       tl.add(Flip.fit(logoRef.current, secondState, flipConfig))
  //         .add(Flip.fit(logoRef.current, thirdState, flipConfig), "+=0.5");
  //     });
  //   };

  //   createTimeline();
  //   window.addEventListener("resize", createTimeline);

  //   return () => {
  //     window.removeEventListener("resize", createTimeline);
  //     if (flipCtxRef.current) {
  //       flipCtxRef.current.revert();
  //     }
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  // Update your useEffect hook
// const logoRef = useRef(null);
// const section2TargetRef = useRef(null);
// const section3TargetRef = useRef(null);
// const imageContainerRef = useRef(null);
// const splitImagesRef = useRef(null);
// const flipCtxRef = useRef(null);

// useEffect(() => {
//   gsap.registerPlugin(Flip, ScrollTrigger);

//   const createTimeline = () => {
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }

//     flipCtxRef.current = gsap.context(() => {
//       const secondState = Flip.getState(section2TargetRef.current);
//       const thirdState = Flip.getState(section3TargetRef.current);

//       // Main timeline for logo animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".Main-banner",
//           start: "clamp(top center)",
//           endTrigger: ".welcome",
//           end: "clamp(top center)",
//           scrub: 1
//         }
//       });

//       tl.add(Flip.fit(logoRef.current, secondState, { ease: "none", duration: 1 }))
//         .add(Flip.fit(logoRef.current, thirdState, { ease: "none", duration: 1 }), "+=0.5");

//       // Image split animation
//       const splitTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".featured",
//           start: "top center",
//           end: "bottom center",
//           scrub: 1,
//           toggleActions: "play reverse play reverse"
//         }
//       });

//       splitTl
//         .to(".main-image", {
//           opacity: 0,
//           duration: 0.5
//         })
//         .to(".split-images", {
//           opacity: 1,
//           duration: 0.5
//         }, 0)
//         .to(".split-col", {
//           backgroundColor: "pink",
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.2)
//         .from(".split-col", {
//           scale: 0.8,
//           x: (i) => (i - 1) * 50, // Spread images out from center
//           duration: 0.5,
//           stagger: 0.2
//         }, 0);
//     });
//   };

//   createTimeline();
//   window.addEventListener("resize", createTimeline);

//   return () => {
//     window.removeEventListener("resize", createTimeline);
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);

// const logoRef = useRef(null);
// const section2TargetRef = useRef(null);
// const section3TargetRef = useRef(null);
// const splitImagesRef = useRef(null);
// const columnsRef = useRef(null);
// const flipCtxRef = useRef(null);

// useEffect(() => {
//   gsap.registerPlugin(Flip, ScrollTrigger);

//   const createTimeline = () => {
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }

//     flipCtxRef.current = gsap.context(() => {
//       const columns = columnsRef.current.querySelectorAll('.dip-column');
//       const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

//       // Initial logo movement
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".Main-banner",
//           start: "clamp(top center)",
//           endTrigger: ".welcome",
//           end: "clamp(top center)",
//           scrub: 1
//         }
//       });

//       tl.add(Flip.fit(logoRef.current, section2TargetRef.current, {
//         ease: "none",
//         duration: 1
//       }));

//       // Split and dip animation
//       const splitTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".featured",
//           start: "top center",
//           end: "center center",
//           scrub: 1,
//           toggleActions: "play reverse play reverse"
//         }
//       });

//       splitTl
//         .to(".main-image", {
//           opacity: 0,
//           duration: 0.5
//         })
//         .to(".split-images", {
//           opacity: 1,
//           duration: 0.5
//         }, 0)
//         .to(splitImages, {
//           x: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             const imageRect = splitImages[i].getBoundingClientRect();
//             return columnRect.left - imageRect.left + (columnRect.width - imageRect.width) / 2;
//           },
//           y: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             return columnRect.top - splitImages[i].getBoundingClientRect().top + 50;
//           },
//           duration: 1,
//           stagger: 0.2
//         }, 0.2)
//         .to(columns, {
//           backgroundColor: "pink",
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.4)
//         .to(splitImages, {
//           filter: "hue-rotate(90deg)",
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.6);
//     });
//   };

//   createTimeline();
//   window.addEventListener("resize", createTimeline);

//   return () => {
//     window.removeEventListener("resize", createTimeline);
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);

// const logoRef = useRef(null);
// const section2TargetRef = useRef(null);
// const section3TargetRef = useRef(null);
// const splitImagesRef = useRef(null);
// const columnsRef = useRef(null);
// const flipCtxRef = useRef(null);

// useEffect(() => {
//   gsap.registerPlugin(Flip, ScrollTrigger);

//   const createTimeline = () => {
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }

//     flipCtxRef.current = gsap.context(() => {
//       const columns = columnsRef.current.querySelectorAll('.dip-column');
//       const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

//       // Timeline 1: Move from Main-banner to welcome
//       const tl1 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".Main-banner",
//           start: "top center",
//           endTrigger: ".welcome",
//           end: "top center",
//           scrub: 1,
//         }
//       });

//       tl1.to(logoRef.current, {
//         y: () => {
//           const welcomeRect = section3TargetRef.current.getBoundingClientRect();
//           const logoRect = logoRef.current.getBoundingClientRect();
//           return welcomeRect.top - logoRect.top;
//         },
//         duration: 1,
//         ease: "none"
//       });

//       // Timeline 2: Split and move to featured section
//       const tl2 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".welcome",
//           start: "bottom center",
//           endTrigger: ".featured",
//           end: "top center",
//           scrub: 1,
//         }
//       });

//       tl2
//         .to(".main-image", { opacity: 0, duration: 0.3 })
//         .to(".split-images", { opacity: 1, duration: 0.3 }, 0)
//         .to(splitImages, {
//           x: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             const imageRect = splitImages[i].getBoundingClientRect();
//             return columnRect.left - imageRect.left + (columnRect.width - imageRect.width) / 2;
//           },
//           y: () => {
//             const featuredRect = columnsRef.current.getBoundingClientRect();
//             const logoRect = logoRef.current.getBoundingClientRect();
//             return featuredRect.top - logoRect.top;
//           },
//           duration: 1,
//           stagger: 0.2
//         }, 0.2);

//       // Timeline 3: Dip into columns
//       const tl3 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".featured",
//           start: "top center",
//           end: "center center",
//           scrub: 1,
//           toggleActions: "play reverse play reverse"
//         }
//       });

//       tl3
//         .to(splitImages, {
//           y: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             return columnRect.top - splitImages[i].getBoundingClientRect().top + 50;
//           },
//           duration: 0.5,
//           stagger: 0.2
//         })
//         .to(columns, {
//           backgroundColor: "pink",
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.2)
//         .to(splitImages, {
//           filter: "hue-rotate(90deg)",
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.4);
//     });
//   };

//   createTimeline();
//   window.addEventListener("resize", createTimeline);

//   return () => {
//     window.removeEventListener("resize", createTimeline);
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);

const logoRef = useRef(null);
const section2TargetRef = useRef(null);
const section3TargetRef = useRef(null);
const splitImagesRef = useRef(null);
const columnsRef = useRef(null);
const flipCtxRef = useRef(null);
useEffect(() => {
  gsap.registerPlugin(Flip, ScrollTrigger);

  const createTimeline = () => {
    if (flipCtxRef.current) {
      flipCtxRef.current.revert();
    }

    flipCtxRef.current = gsap.context(() => {
      const columns = columnsRef.current.querySelectorAll('.dip-column');
      const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

      // Timeline 1: Move from Main-banner to welcome
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Main-banner",
          start: "top center",
          endTrigger: ".welcome",
          end: "top center",
          scrub: 1,
        }
      });

      tl1.to(logoRef.current, {
        y: () => {
          const welcomeRect = section3TargetRef.current.getBoundingClientRect();
          const logoRect = logoRef.current.getBoundingClientRect();
          return welcomeRect.top - logoRect.top;
        },
        duration: 1,
        ease: "none"
      });

      // Timeline 2: Split and move to featured section columns
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".welcome",
          start: "bottom center",
          endTrigger: ".featured",
          end: "top center",
          scrub: 1,
        }
      });

      tl2
        .to(".main-image", { opacity: 0, duration: 0.3 })
        .to(".split-images", { opacity: 1, duration: 0.3 }, 0)
        .to(splitImages, {
          x: (i) => {
            const column = columns[i];
            const columnRect = column.getBoundingClientRect();
            const imageRect = splitImages[i].getBoundingClientRect();
            return columnRect.left - imageRect.left + (columnRect.width - imageRect.width) / 2;
          },
          y: () => {
            const featuredRect = columnsRef.current.getBoundingClientRect();
            const logoRect = logoRef.current.getBoundingClientRect();
            return featuredRect.top - logoRect.top;
          },
          duration: 1,
          stagger: 0.2
        }, 0.2);

      // Timeline 3: Dip into columns and change background
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured",
          start: "top center",
          end: "center center",
          scrub: 1,
          toggleActions: "play reverse play reverse"
        }
      });

      tl3
        .to(splitImages, {
          y: (i) => {
            const column = columns[i];
            const columnRect = column.getBoundingClientRect();
            const imageRect = splitImages[i].getBoundingClientRect();
            return columnRect.top - imageRect.top + (columnRect.height / 2 - imageRect.height / 2);
          },
          duration: 0.5,
          stagger: 0.2
        })
        .to(columns, {
          backgroundColor: "pink", // Adjust color as needed
          duration: 0.5,
          stagger: 0.2
        }, 0.2)  // Add a small delay so background change happens after image transition
        .to(splitImages, {
          filter: "hue-rotate(90deg)", // Dipping effect
          duration: 0.5,
          stagger: 0.2
        }, 0.4) // Delay this until the background color change happens
        .to(".card", {
          backgroundColor: "#ce4a61", // Adjust to your desired color
          duration: 0.5,
          stagger: 0.2
        }, 0.4); // Same delay to sync with the image transition

      // Move images towards the bottom of the ctaSection when scrolling down
      const tlDown = gsap.timeline({
        scrollTrigger: {
          trigger: ".uper-space", // Trigger when `.uper-space` enters the viewport
          start: "top center", // Start when top of .uper-space hits the center of the viewport
          end: "top top", // End when it's out of the viewport
          scrub: 1,
        }
      });

      tlDown
        .to(splitImages, {
          y: () => {
            const ctaSection = document.querySelector("#ctaSection");
            const ctaRect = ctaSection.getBoundingClientRect();
            // Ensure the images move downwards towards the bottom of `ctaSection`
            return ctaRect.top + window.innerHeight; // This ensures the images move downward
          },
          x: 0, // Reset X position
          filter: "none", // Reset filter
          duration: 0.5,
          stagger: 0.2
        })
        .to(columns, {
          backgroundColor: "transparent", // Reset column background to transparent
          duration: 0.5,
          stagger: 0.2
        }, 0.2)
        .to(".card", {
          backgroundColor: "#fff", // Reset card background color
          duration: 0.5,
          stagger: 0.2
        }, 0.4); // Sync with the image reset animation

    });
  };

  createTimeline();
  window.addEventListener("resize", createTimeline);

  return () => {
    window.removeEventListener("resize", createTimeline);
    if (flipCtxRef.current) {
      flipCtxRef.current.revert();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

// useEffect(() => {
//   gsap.registerPlugin(Flip, ScrollTrigger);

//   const createTimeline = () => {
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }

//     flipCtxRef.current = gsap.context(() => {
//       const columns = columnsRef.current.querySelectorAll('.dip-column');
//       const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

//       // Timeline 1: Move from Main-banner to welcome
//       const tl1 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".Main-banner",
//           start: "top center",
//           endTrigger: ".welcome",
//           end: "top center",
//           scrub: 1,
//         }
//       });

//       tl1.to(logoRef.current, {
//         y: () => {
//           const welcomeRect = section3TargetRef.current.getBoundingClientRect();
//           const logoRect = logoRef.current.getBoundingClientRect();
//           return welcomeRect.top - logoRect.top;
//         },
//         duration: 1,
//         ease: "none"
//       });

//       // Timeline 2: Split and move to featured section columns
//       const tl2 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".welcome",
//           start: "bottom center",
//           endTrigger: ".featured",
//           end: "top center",
//           scrub: 1,
//         }
//       });

//       tl2
//         .to(".main-image", { opacity: 0, duration: 0.3 })
//         .to(".split-images", { opacity: 1, duration: 0.3 }, 0)
//         .to(splitImages, {
//           x: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             const imageRect = splitImages[i].getBoundingClientRect();
//             return columnRect.left - imageRect.left + (columnRect.width - imageRect.width) / 2;
//           },
//           y: () => {
//             const featuredRect = columnsRef.current.getBoundingClientRect();
//             const logoRect = logoRef.current.getBoundingClientRect();
//             return featuredRect.top - logoRect.top;
//           },
//           duration: 1,
//           stagger: 0.2
//         }, 0.2);

//       // Timeline 3: Dip into columns and change background
//       // const tl3 = gsap.timeline({
//       //   scrollTrigger: {
//       //     trigger: ".featured",
//       //     start: "top center",
//       //     end: "center center",
//       //     scrub: 1,
//       //     toggleActions: "play reverse play reverse"
//       //   }
//       // });

//       // tl3
//       //   .to(splitImages, {
//       //     y: (i) => {
//       //       const column = columns[i];
//       //       const columnRect = column.getBoundingClientRect();
//       //       const imageRect = splitImages[i].getBoundingClientRect();
//       //       return columnRect.top - imageRect.top + (columnRect.height / 2 - imageRect.height / 2);
//       //     },
//       //     duration: 0.5,
//       //     stagger: 0.2
//       //   })
//       //   .to(columns, {
//       //     backgroundColor: "pink",
//       //     duration: 0.5,
//       //     stagger: 0.2
//       //   }, 0.2)
//       //   .to(splitImages, {
//       //     filter: "hue-rotate(90deg)",
//       //     duration: 0.5,
//       //     stagger: 0.2
//       //   }, 0.4);

//       const tl3 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".featured",
//           start: "top center",
//           end: "center center",
//           scrub: 1,
//           toggleActions: "play reverse play reverse"
//         }
//       });

//       tl3
//         .to(splitImages, {
//           y: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             const imageRect = splitImages[i].getBoundingClientRect();
//             return columnRect.top - imageRect.top + (columnRect.height / 2 - imageRect.height / 2);
//           },
//           duration: 0.5,
//           stagger: 0.2
//         })
//         // Change background color of columns when dipping starts
//         .to(columns, {
//           backgroundColor: "pink", // Adjust color as needed
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.2)  // Add a small delay so background change happens after image transition
//         .to(splitImages, {
//           filter: "hue-rotate(90deg)", // Dipping effect
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.4) // Delay this until the background color change happens
//         .to(".card", {
//           backgroundColor: "#ce4a61", // Adjust to your desired color
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.4); // Same delay to sync with the image transition
//     });

//   };

//   createTimeline();
//   window.addEventListener("resize", createTimeline);

//   return () => {
//     window.removeEventListener("resize", createTimeline);
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);
// useEffect(() => {
//   const resetImagesToOne = () => {
//     const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

//     if (splitImages.length > 0) {
//       console.log("Found split images, proceeding with animation...");

//       // Timeline to animate images scaling down and merging into one when scrolling down
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: "#ctaSection", // Trigger when the #ctaSection is about to enter the viewport
//           start: "top+=150px bottom", // Start the animation when the top of #ctaSection is 150px below the viewport
//           end: "bottom top", // End the animation when the bottom of #ctaSection reaches the top of the viewport
//           scrub: 1, // Smooth scrubbing effect
//           onEnter: () => console.log("Animation triggered: #ctaSection is about to come into view!"),
//           onLeave: () => console.log("Animation triggered: #ctaSection has left the viewport!"),
//           onUpdate: (self) => {
//             console.log("Scroll progress:", self.progress.toFixed(2));

//             if (self.direction === -1) {
//               // Scrolling Up
//               console.log("Scrolling Up: Reverting the images back to 3");

//               // Animate images spreading out and becoming 3 again
//               tl.to(splitImages, {
//                 x: (i) => {
//                   // Spread out images horizontally
//                   return (i - 1) * 150;
//                 },
//                 y: (i) => {
//                   // Spread images vertically in a row
//                   return (i - 1) * 50;
//                 },
//                 scale: 1, // Scale them back to normal size
//                 opacity: 1, // Make them fully visible again
//                 duration: 1,
//                 stagger: 0.2, // Delay between each image transition
//                 ease: "power1.inOut",
//                 onStart: () => console.log("Spreading images back to 3."),
//                 onComplete: () => console.log("Images reverted to 3.")
//               });
//             } else if (self.direction === 1) {
//               // Scrolling Down
//               console.log("Scrolling Down: Merging images into one");

//               // Animate images merging into one
//               tl.to(splitImages, {
//                 x: 0, // Center images horizontally
//                 y: 0, // Center images vertically
//                 scale: 3, // Scale images to combine them into one
//                 opacity: 0, // Fade them out as they merge into one
//                 duration: 1,
//                 stagger: 0.2, // Delay between each image transition
//                 ease: "power1.inOut",
//                 onStart: () => console.log("Merging images into one."),
//                 onComplete: () => console.log("Images merged into one.")
//               });
//             }
//           }
//         }
//       });
//     } else {
//       console.warn("No split images found. Check the ref or DOM structure.");
//     }
//   };

//   resetImagesToOne();

//   // Clean up ScrollTrigger when the component unmounts
//   return () => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);




// useEffect(() => {
//   gsap.registerPlugin(Flip, ScrollTrigger);

//   const createTimeline = () => {
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }

//     flipCtxRef.current = gsap.context(() => {
//       const columns = columnsRef.current.querySelectorAll('.dip-column');
//       const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

//       // Timeline 1: Move from Main-banner to welcome
//       const tl1 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".Main-banner",
//           start: "top center",
//           endTrigger: ".welcome",
//           end: "top center",
//           scrub: 1,
//         }
//       });

//       tl1.to(logoRef.current, {
//         y: () => {
//           const welcomeRect = section3TargetRef.current.getBoundingClientRect();
//           const logoRect = logoRef.current.getBoundingClientRect();
//           return welcomeRect.top - logoRect.top;
//         },
//         duration: 1,
//         ease: "none"
//       });

//       // Timeline 2: Split and move to featured section columns
//       const tl2 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".welcome",
//           start: "bottom center",
//           endTrigger: ".featured",
//           end: "top center",
//           scrub: 1,
//         }
//       });

//       tl2
//         .to(".main-image", { opacity: 0, duration: 0.3 })
//         .to(".split-images", { opacity: 1, duration: 0.3 }, 0)
//         .to(splitImages, {
//           x: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             const imageRect = splitImages[i].getBoundingClientRect();
//             return columnRect.left - imageRect.left + (columnRect.width - imageRect.width) / 2;
//           },
//           y: () => {
//             const featuredRect = columnsRef.current.getBoundingClientRect();
//             const logoRect = logoRef.current.getBoundingClientRect();
//             return featuredRect.top - logoRect.top;
//           },
//           duration: 1,
//           stagger: 0.2
//         }, 0.2);

//       // Timeline 3: Make the images travel through the columns in a straight direction
//       const tl3 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".featured",
//           start: "top center",
//           end: "center center",
//           scrub: 1,
//           toggleActions: "play reverse play reverse"
//         }
//       });

//       tl3
//         .to(splitImages, {
//           // Move images directly down the columns
//           y: (i) => {
//             const column = columns[i];
//             const columnRect = column.getBoundingClientRect();
//             const imageRect = splitImages[i].getBoundingClientRect();
//             return columnRect.top + columnRect.height - imageRect.top; // Move to bottom of column
//           },
//           duration: 1, // Control duration for smooth transition
//           stagger: 0.3
//         })
//         .to(columns, {
//           backgroundColor: "pink", // Optional: Change background color of columns
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.2)
//         .to(splitImages, {
//           filter: "hue-rotate(90deg)", // Dipping effect
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.4)
//                 .to(".card", {
//           backgroundColor: "#ce4a61", // Adjust to your desired color
//           duration: 0.5,
//           stagger: 0.2
//         }, 0.4);
//     });
//   };

//   createTimeline();
//   window.addEventListener("resize", createTimeline);

//   return () => {
//     window.removeEventListener("resize", createTimeline);
//     if (flipCtxRef.current) {
//       flipCtxRef.current.revert();
//     }
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   };
// }, []);


  // useEffect(() => {
  //   gsap.registerPlugin(Flip, ScrollTrigger);

  //   const createTimeline = () => {
  //     if (flipCtxRef.current) {
  //       flipCtxRef.current.revert();
  //     }

  //     flipCtxRef.current = gsap.context(() => {
  //       const columns = columnsRef.current.querySelectorAll('.dip-column');
  //       const splitImages = splitImagesRef.current.querySelectorAll('.split-image');

  //       // Timeline 1: Move from Main-banner to welcome
  //       const tl1 = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".Main-banner",
  //           start: "top center",
  //           endTrigger: ".welcome",
  //           end: "top center",
  //           scrub: 1,
  //         }
  //       });

  //       tl1.to(logoRef.current, {
  //         y: () => {
  //           const welcomeRect = section2TargetRef.current.getBoundingClientRect();
  //           const logoRect = logoRef.current.getBoundingClientRect();
  //           return welcomeRect.top - logoRect.top;
  //         },
  //         duration: 1,
  //         ease: "none"
  //       });

  //       // Timeline 2: Split and move to featured section columns
  //       const tl2 = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".welcome",
  //           start: "bottom center",
  //           endTrigger: ".featured",
  //           end: "top center",
  //           scrub: 1,
  //         }
  //       });

  //       tl2
  //         .to(".main-image", { opacity: 0, duration: 0.3 })
  //         .to(".split-images", { opacity: 1, duration: 0.3 }, 0)
  //         .to(splitImages, {
  //           x: (i) => {
  //             const column = columns[i];
  //             const columnRect = column.getBoundingClientRect();
  //             const imageRect = splitImages[i].getBoundingClientRect();
  //             return columnRect.left - imageRect.left + (columnRect.width - imageRect.width) / 2;
  //           },
  //           y: () => {
  //             const featuredRect = columnsRef.current.getBoundingClientRect();
  //             const logoRect = logoRef.current.getBoundingClientRect();
  //             return featuredRect.top - logoRect.top;
  //           },
  //           duration: 1,
  //           stagger: 0.2
  //         }, 0.2);

  //       // Timeline 3: Merge images into one when section2TargetRef is in view
  //       const tl3 = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: section2TargetRef.current, // Use the section2TargetRef
  //           start: "top center", // Start when the top of the section hits the center of the viewport
  //           end: "bottom center", // End at the bottom of the section
  //           scrub: 1,
  //           toggleActions: "play reverse play reverse",
  //           markers: true, // Optionally, use markers for debugging (you can remove it later)
  //         }
  //       });

  //       tl3
  //         .to(splitImages, {
  //           x: 0, // Center images horizontally
  //           y: 0, // Center images vertically
  //           scale: 3, // Scale images to combine them into one
  //           opacity: 0, // Fade them out as they merge into one
  //           duration: 1,
  //           stagger: 0.2,
  //           ease: "power1.inOut"
  //         })
  //         .to(columns, {
  //           backgroundColor: "pink", // Optional: Change background color of columns
  //           duration: 0.5,
  //           stagger: 0.2
  //         }, 0.2)
  //         .to(splitImages, {
  //           filter: "hue-rotate(90deg)", // Dipping effect
  //           duration: 0.5,
  //           stagger: 0.2
  //         }, 0.4);
  //     });
  //   };

  //   createTimeline();
  //   window.addEventListener("resize", createTimeline);

  //   return () => {
  //     window.removeEventListener("resize", createTimeline);
  //     if (flipCtxRef.current) {
  //       flipCtxRef.current.revert();
  //     }
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);




  return (
    <>
 <main>
<section className="Main-banner">
  <Container>
    <Row>
      <Col>
        <h1>Search Land Of Choice</h1>
        <div ref={logoRef} className="animated-logo">
          <div className="image-wrapper">
            <img
              src={Logo}
              alt="Logo"
              id="rocket-image"
              className="rocket-image main-image"
            />
            <div className="split-images" ref={splitImagesRef}>
              <img src={Logo} alt="Split 1" className="split-image" />
              <img src={Logo} alt="Split 2" className="split-image" />
              <img src={Logo} alt="Split 3" className="split-image" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  {/* Rest of your search bar code */}
</section>




        <section className="welcome">
          <Container className="py-5">
            <Row className="mb-4 d-flex">
              <Col md={6} className=" align-content-end head">
                <img src={Round} alt="scroling" className="scrol-top" />
                <h2 className="same-head">WELCOME TO SLOC</h2>
                <p className="same-head-p">
                  SLOC – "Search Land of Choice" is a leading real estate
                  company in India dedicated to providing exceptional property
                  solutions. With a focus on customer satisfaction and market
                  expertise, SLOC has built a reputation as a trusted name in
                  the industry. Collaborating with top-tier real estate brands
                  like Godrej, DLF, and many more, SLOC offers a diverse range
                  of properties, including luxurious apartments, plots, villas,
                  and commercial space.
                </p>
              </Col>
              <Col md={6} className="d-flex flex-wrap four-col-st">
                <Col md={6} lg={6} className="right">
                  <Card className="">
                    <h3 className="text-primary">
                      <Counter className="Counter-no" to={1} from={0} />
                      M+
                    </h3>
                    <p>Sed ut Perspiciatis</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-bottom">
                  <Card className="">
                  <h3 className="text-primary">
                      <Counter className="Counter-no" to={500} from={0} />
                      K
                    </h3>                    <p>Lorem Ipsum</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="only-right">
                  <Card>
                  <h3 className="text-primary">
                      <Counter className="Counter-no" to={24} from={0} />
                      /7
                    </h3>                     <p>Consectetur Adipiscing Elit, Sed Do</p>
                  </Card>
                </Col>
                <Col md={6} lg={6} className="left-brdr">
                  <Card className="">
                  <h3 className="text-primary">
                      <Counter className="Counter-no" to={1} from={0} />
                      M+
                    </h3>                    <p>Sed ut Perspiciatis</p>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
          <div ref={section3TargetRef} className="logo-target" />
        </section>
        <section className="featured" id="section2">
  <Container className="full">
    <Row className="mb-4 d-flex py-4 align-content-center">
      <Col md={8} className="align-content-center">
        <h2 className="same-head">FEATURED PROJECTS</h2>
        <p className="same-head-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Col>
      <Col md={4} className="align-items-end text-end align-content-center">
        <Button variant="dark">See more Projects</Button>
      </Col>
    </Row>
    <Row ref={columnsRef} className="features-row">
      {projects.slice(0, 3).map((project, index) => (
        <Col md={4} key={project.id} className="features-list p-0 dip-column">
          <Card className="">
            <Card.Img
              variant="top"
              src={project.image}
              alt={project.title}
            />
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
      ))}
    </Row>
  </Container>
  <div id="ctaSection"  ref={section2TargetRef} className="logo-target" />
</section>
        <section  className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
                <p className="same-head-p">
                  Explore the best properties in your preferred location. Start
                  your journey to a perfect home with us.
                </p>

              </Col>

              <Col md={4} className="text-end">
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="social-proof position-relative">
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">SOCIAL PROOF</h2>
                  <p className="same-head-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="Up-arrow-btn">
                    <img src={Arrow} />
                  </Button>
                </div>
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
                          <Col xs="auto">
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
                          <Col>
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

        <section className="featured blogs">
          <Container className="">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                {" "}
                <h2 className="same-head">Latest Blogs</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-end text-end align-content-center"
              >
                <Button variant="dark">See more Blogs</Button>
              </Col>
            </Row>
            <Row>
              {Blogs.map((Blogs) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  <Card className=" position-relative">
                    <Card.Img
                      variant="top"
                      src={Blogs.image}
                      alt={Blogs.title}
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
                      <Button className="Up-arrow-btn">
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Home;



