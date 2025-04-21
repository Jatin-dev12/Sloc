import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import side from "../assets/Imgs/back-scrol.png";


const timelineData = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "In a year of global disruption, we focused on strengthening our core values and building a resilient operational framework. We invested in digital infrastructure, enabling us to adapt to evolving market demands.",
  },
  {
    year: "2021",
    title: "Empaneled with Top Brands like Godrej Properties and Achieved Record Sales. Also, became a Certified Gold Partner with Godrej Properties",
    description:
      "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2022",
    title: "Expanded Portfolio with Birla, DLF, and Other Leading Brands, Reaching New Heights",
    description:
    "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2023",
    title: "Launched Pan-India Projects in Cities like Bengaluru, Pune, and Nagpur, and Expanded into the NRI Vertical",
    description:
      "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },
  {
    year: "2024",
    title: " Crossed 2000+ Happy Customers, Strengthened Industry Partnerships, and Recognized with Multiple Awards for Excellence. ",
    description:
    "Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.",
  },

];
const SuccessTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef([]);
  const progressLineRef = useRef(null);
  const timelineContainerRef = useRef(null);

  // Intersection Observer for active timeline item
  useEffect(() => {
    const options = {
      root: timelineContainerRef.current,
      rootMargin: "0px",
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

  // Scroll-based progress line and dot state
  useEffect(() => {
    const handleScroll = () => {
      if (timelineContainerRef.current && progressLineRef.current) {
        const container = timelineContainerRef.current;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;

        if (scrollHeight > clientHeight) {
          // Calculate progress (0 to 1)
          const progress = Math.min(
            Math.max(scrollTop / (scrollHeight - clientHeight), 0),
            1
          );

          // Update progress line height
          progressLineRef.current.style.height = `${progress * 100}%`;

          // Get the container's top offset and height
          const containerRect = container.getBoundingClientRect();
          const containerTop = containerRect.top;
          const containerHeight = scrollHeight;

          // Calculate which dots should be touched
          timelineRefs.current.forEach((ref, index) => {
            if (ref) {
              // Get the position of the dot (timeline-item::before)
              const dot = ref.querySelector(".Yearr");
              if (dot) {
                const dotRect = dot.getBoundingClientRect();
                const dotTop = dotRect.top - containerTop + scrollTop;

                // Calculate the progress threshold for this dot
                const dotProgressThreshold = dotTop / containerHeight;

                // Dot is "touched" if progress has reached or passed it
                if (progress >= dotProgressThreshold) {
                  ref.classList.add("touched");
                } else {
                  ref.classList.remove("touched");
                }
              }
            }
          });
        }
      }
    };

    const container = timelineContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      // Initialize on mount
      handleScroll();
      // Re-run on window resize to update positions
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };
  }, []);

  return (
    <section className="assistance-section position-relative pb-2">
      <Container>
        <h3 className="section-title same-head">OUR SUCCESS STORY</h3>
        <p className="section-subtitle same-head-p">
          Trust and hard work are the cornerstones of our success, and they have helped us turn dreams into reality. With every satisfied client and successful project, we take great delight in being a part of your real estate experience. What’s more? This is worth your attention!
        </p>
        <img src={side} className="side-set" alt="Side decoration" />
      </Container>
      <Container className="mt-5 relative">
        <div
          className="timeline-container relative max-w-3xl mx-auto"
          ref={timelineContainerRef}
          style={{ overflowY: "auto", maxHeight: "600px", minHeight: "600px" }}
        >
          {/* Vertical line container */}
          <div className="timeline-line">
            <div className="timeline-line-progress" ref={progressLineRef}></div>
          </div>
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className={`timeline-item relative pl-16 pb-16 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="Yearr">
                <h2 className="text-5xl font-bold text-gray-200 mb-2">
                  {item.year}
                </h2>
              </div>
              <div className="year-data">
                <h5 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h5>
                <p className="text-gray-600">
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessTimeline;