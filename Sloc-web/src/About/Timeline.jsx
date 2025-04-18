import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import side from '../assets/Imgs/back-scrol.png';

const timelineData = [
  {
    year: '2020',
    title: 'FOUNDATION FOR RESILIENCE',
    description:
      'In a year of global disruption, we focused on strengthening our core values and building a resilient operational framework. We invested in digital infrastructure, enabling us to adapt to evolving market demands.',
  },
  {
    year: '2021',
    title: 'DIGITAL TRANSFORMATION ACCELERATED',
    description:
      'Recognizing the shift towards digital, we accelerated our online presence, enhancing our e-commerce platform and digital marketing strategies. This resulted in a significant increase in online customer engagement and sales.',
  },
  {
    year: '2022',
    title: 'EXPANDING HORIZONS, BUILDING PARTNERSHIPS',
    description: '',
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
          const index = timelineRefs.current.findIndex((ref) => ref === entry.target);
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
<>        <section className="assistance-section position-relative pb-2">
        <Container>
            <h3 className="section-title same-head"> OUR SUCCESS STORY</h3>
            <p className="section-subtitle same-head-p">
              The period from 2020 to 2022 presented unprecedented challenges, but also remarkable opportunities.
              We embraced change, adapted quickly, and emerged stronger than ever.
              This timeline highlights key milestones in our journey.
            </p>
            <img src={side} className='side-set' />

          </Container>
          <Container className="py-10 relative">
        <div className="timeline-container relative max-w-3xl mx-auto">
          <div className="absolute left-[30px] top-0 w-[2px] h-full bg-gray-200"></div>
          <div
            ref={lineRef}
            className="absolute left-[30px] top-0 w-[2px] bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ height: "0%" }}
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className="timeline-item relative pl-16 pb-16"
            >
                            <h2 className="text-5xl font-bold text-gray-200 mb-2">{item.year}</h2>

              <div
                className={`absolute left-[24px] top-1 w-[14px] h-[14px] rounded-full border-2 border-blue-500 transition-all duration-300 ${
                  index <= activeIndex ? "bg-blue-500" : "bg-white"
                }`}
              ></div>

              <h5 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h5>
              <p className="text-gray-600">{item.description || "Description coming soon..."}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-10 pt-4 border-t border-gray-200">
          Disclaimer: The content provided on this website is for information purposes only and does not constitute an
          offer to avail any service. The prices mentioned are subject to change without prior notice, and the
          availability of properties...
        </p>
        
      </Container>
        </section>

    </>

  );
};

export default SuccessTimeline;
