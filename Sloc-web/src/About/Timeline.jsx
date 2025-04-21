import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import side from "../assets/Imgs/back-scrol.png";

const timelineData = [
  {
    year: "2020",
    title: "FOUNDATION FOR RESILIENCE",
    description:
      "In a year of global disruption, we focused on strengthening our core values and building a resilient operational framework. We invested in digital infrastructure, enabling us to adapt to evolving market demands.",
  },
  {
    year: "2021",
    title: "DIGITAL TRANSFORMATION ACCELERATED",
    description:
      "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2022",
    title: "EXPANDING HORIZONS, BUILDING PARTNERSHIPS",
    description:
    "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2023",
    title: "EXPANDING HORIZONS, BUILDING PARTNERSHIPS",
    description:
      "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2024",
    title: "EXPANDING HORIZONS, BUILDING PARTNERSHIPS",
    description:
    "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2025",
    title: "EXPANDING HORIZONS, BUILDING PARTNERSHIPS",
    description:
      "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
];

const SuccessTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = timelineRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      const progress = (activeIndex / (timelineData.length - 1)) * 100;
      lineRef.current.style.height = `${progress}%`;
    }
  }, [activeIndex]);

  return (
    <>

      <section className="assistance-section position-relative pb-2">
        <Container>
          <h3 className="section-title same-head"> OUR SUCCESS STORY</h3>
          <p className="section-subtitle same-head-p">
          Trust and hard work are the cornerstones of our success, and they have helped us turn dreams into reality. With every satisfied client and successful project, we take great delight in being a part of your real estate experience. What’s more? This is worth your attention!

          </p>
          <img src={side} className="side-set" />
        </Container>
        <Container className="mt-5 relative">
          <div className="timeline-container relative max-w-3xl mx-auto">



            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                className="timeline-item relative pl-16 pb-16"
              >
                <div className="Yearr">
                  <h2 className="text-5xl font-bold text-gray-200 mb-2">
                    {item.year} </h2>
                </div>
                <div class="line"></div>
<div class="line line--animated"></div>


                <div className="year-data">   <h5 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h5>
                <p className="text-gray-600">
                  {item.description || "Description coming soon..."}
                </p></div>

              </div>
            ))}
          </div>


        </Container>
      </section>
    </>
  );
};

export default SuccessTimeline;
