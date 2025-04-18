import React from 'react'
import { Row, Col , Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Round from "../assets/Imgs/rt.png";
import white from "../assets/Imgs/white.svg";
import Mision from '../assets/Imgs/Mission.svg';
import Vision from '../assets/Imgs/Vision.svg';
import conect from '../assets/Imgs/connect.svg';
import select from '../assets/Imgs/select.svg';
import buy from '../assets/Imgs/buy.svg';
import cus from '../assets/Imgs/customer.svg';
import Line from '../assets/Imgs/Line-mid.png'
import side from '../assets/Imgs/back-scrol.png';
import god from '../assets/Alliance-imgs/godred.png';
import ats from '../assets/Alliance-imgs/ats.png';
import ace from '../assets/Alliance-imgs/ace.png';
import vtp from '../assets/Alliance-imgs/vtp.png';
import Gulshan from '../assets/Alliance-imgs/gulshan.png'
import lodha from '../assets/Alliance-imgs/lodha.png'
import amo from '../assets/Alliance-imgs/amo.png'
import dlf from '../assets/Alliance-imgs/dlf.png'
import max from '../assets/Alliance-imgs/max.png'
import tri from '../assets/Alliance-imgs/tri.png'
import pirmal from '../assets/Alliance-imgs/pirmal.png'
import Award from '../assets/Imgs/award.svg'
import shopp from '../assets/Alliance-imgs/shpoji.png'
import Achive from '../assets/Imgs/Achive.png';
import very from '../assets/Alliance-imgs/verifyed.svg'
import expert from '../assets/Alliance-imgs/expert.svg'
import free from '../assets/Alliance-imgs/free.svg'
import best from '../assets/Alliance-imgs/best.svg'
import Timeline from './Timeline.jsx'


const services = [
  { title: "REAL STATE CONSULTING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "LEGAL CONSULTING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "WE ARE HAPPY TO SERVE", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "NRI SERVICES", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Sales Assistance", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const awards = [
  {
    id: 1,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,
  },
  {
    id: 2,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
  {
    id: 3,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
  {
    id: 4,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
  {
    id: 5,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
  {
    id: 6,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
  {
    id: 7,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
  {
    id: 8,
    title: "AWARD OF BEST SELLING",
    year: "LOREM IPSUM DOLOR SIT 2022-23",
    image: Award,

  },
]

const features = [
  {
icons:very,
    title: "Verified Properties",
    description: "Every listing is 100% verified for authenticity and legal clarity.",
  },
  {
    icons:expert,
    title: "Best Price Guarantee",
    description: "We offer competitive prices and unbeatable deals.",
  },
  {
    icons:free,
    title: "Expert Guidance",
    description: "Our experienced team supports you from site visit to possession—every step of the way.",
  },
  {
    icons:best,
    title: "Hassle-Free Process",
    description: "From site visits to paperwork, we make buying property smooth and stress-free.",
  },
];


function About() {
  return (
    <>
    <section className="Main-banner About-banner" data-speed="1.5">
         <Container>
           <Row>
             <Col md={6} xs={12} >
               <h1>Your Property
               Partner</h1>
               <p>Explore expert blogs on buying, selling, investing, and living in your perfect space.<br/> Knowledge that moves with the market. </p>
             </Col>
             <Col>



             </Col>
           </Row>
         </Container>

       </section>



       <section className="welcome about-sloc">

          <Container className="py-5 pb-0">
            <Row className="mb-4 d-flex">
              <Col md={6} className=" align-content-end head">
                <img src={Round} alt="scroling" className="scrol-top" />
                <h2 className="same-head" >About Sloc</h2>
                <p className="same-head-p">
                “Search Land of Choice” is a leading real estate company in India dedicated to providing exceptional property solutions. With a focus on customer satisfaction and market expertise, SLOC has built a reputation as a trusted name in the industry. Collaborating with top-tier real estate brands like Godrej, DLF and many more, SLOC offers a diverse range of properties, including luxurious apartments, plots, villas, and commercial space.
                </p>
              </Col>
              <Col md={6} className="d-flex flex-wrap four-col-st">
              <Container>
        {/* Mission */}
        <Row className="align-items-center my-4 p-3">
          <Col xs={3} className="text-center">
          <img src={Mision} />
          </Col>
          <Col xs={9}>
            <h5><strong>OUR MISSION</strong></h5>
            <p className="mb-0 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>

        <hr />

        {/* Vision */}
        <Row className="align-items-center my-4 p-3">
          <Col xs={3} className="text-center">
            <img src={Vision} />
          </Col>
          <Col xs={9}>
            <h5><strong>OUR VISION</strong></h5>
            <p className="mb-0 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
              </Col>
            </Row>
          </Container>
        </section>


        <section className="services-section text-white">
      <Container>
        <div className='head-serv'>
        <h3 className="same-head">SERVICES</h3>
        <p className="same-head-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {services.map((service, idx) => (
          <Row key={idx} className="service-row py-3 align-items-center border-bottom border-white">
            <Col md={5} xs={12}>
              <h5 className="mb-1">{service.title}</h5>

            </Col>
            <Col md={5} xs={12}>
            <p className="mb-0">{service.desc}</p>
            </Col>
            <Col md={2} xs={12} className="text-md-end text-start mt-2 mt-md-0">
              <div className=" mx-md-3">
                <img src={white} alt="" />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>


    <section className="assistance-section position-relative ">
    <Container>
        <h3 className="section-title same-head">END TO END ASSISTANCE</h3>
        <p className="section-subtitle same-head-p">
          The period from 2020 to 2022 presented unprecedented challenges, but also remarkable opportunities.
          We embraced change, adapted quickly, and emerged stronger than ever.
          This timeline highlights key milestones in our journey.
        </p>
        <img src={side} className='side-set' />

        <Row className="gy-5 flex-column">
          <Col md={12} className="connect">
          <div className='step-text'>
          <img src={Line} alt="" />
          <div className='dumy-ass'>
              <h6 className="step-title">CONNECT</h6>
              <p className="step-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              </div>
            </div>
            <div className="step-box text-center text-md-start">
              <img src={ conect} alt="CONNECT" className="step-icon mb-3" />
              <h5 className="step-number">01</h5></div>

          </Col>

          <Col md={12} className="select ">
          <div className='step-text'>
          <img src={Line} alt="" />
          <div className='dumy-ass'>
              <h6 className="step-title">SELECT</h6>
              <p className="step-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></div>
            </div>
            <div className="step-box text-center text-md-start">
              <img src={select} alt="SELECT" className="step-icon mb-3" />
              <h5 className="step-number">02</h5></div>

          </Col>

          <Col md={12} className="buy">
          <div className='step-text'>
          <img src={Line} alt="" />
          <div className='dumy-ass'>
              <h6 className="step-title">BUY</h6>
              <p className="step-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></div>
            </div>
            <div className="step-box text-center text-md-start">
              <img src={buy} alt="BUY" className="step-icon mb-3" />
              <h5 className="step-number">03</h5></div>

          </Col>

          <Col md={12} className="cus">
          <div className='step-text'>
          <img src={Line} alt="" />
          <div className='dumy-ass'>
              <h6 className="step-title">CUSTOMER SUPPORT</h6>
              <p className="step-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></div>
            </div>
            <div className="step-box text-center text-md-start">
              <img src={cus} alt="CUSTOMER SUPPORT" className="step-icon mb-3" />
              <h5 className="step-number">04</h5></div>

          </Col>
        </Row>
      </Container>
    </section>


    <section className="assistance-section position-relative same-space aline ">
    <Container fluid className=''>
    <Row className=" px-5 ">
        <h3 className="section-title same-head">Our Alliances</h3>
        <p className="section-subtitle same-head-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </Row>

        <Row className="text text-center alliance mt-5 px-5 ">
          <Col md={3} className='brdr'>
<img src={god}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={ats}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={ace}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={vtp}/>
          </Col>

        </Row>
        <Row className="text text-center alliance  px-5 ">
          <Col md={3} className='brdr'>
<img src={Gulshan}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={lodha}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={amo}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={dlf}/>
          </Col>



        </Row>
        <Row className="text text-center alliance px-5 ">
          <Col md={3} className='brdr'>
<img src={max}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={tri}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={pirmal}/>
          </Col>
          <Col md={3} className='brdr'>
<img src={shopp}/>
          </Col>



        </Row>
      </Container>
    </section>


    <section className='achivments same-space'>
    <Container className="">
      <Row className="align-items-center ">
        <Col md={4} className="mb-4 mb-md-0">
          <h2 className="same-head">
            AWARDS
          </h2>
          <p className="same-head-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Col>
        <Col md={8} className='px-3'>
        <div className='over'>
          <Row className='achivments'>
            {awards.map((award) => (
              <Col md={6} key={award.id} className="mb-4">
                <Card className=" position-relative overflow-hidden">
                  <Card.Body className="p-4 achiv">
                    <img src={Achive} className='corner' />
                    <div className=" mb-3">
                      <img src={award.image}  />

                    </div>
                    <div className="">
                      <h5 className="fw-bold">{award.title}</h5>
                      <p className="small text-muted">{award.year}</p>
                    </div>
                    {/* Decorative corner elements */}
                    <div className="position-absolute" style={{ top: 10, right: 10, opacity: 0.1 }}>

                    </div>
                    <div className="position-absolute" style={{ bottom: 10, left: 10, opacity: 0.1 }}>


                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </div>
        </Col>
      </Row>
    </Container>
    </section>


    <section className='same-space why-us'>
      <Container>
        <div className=" mb-5">
          <h3 className="same-head" style={{ color: "#ffffff" }}>WHY CHOOSE US</h3>
          <p className="same-head-p" style={{ color: "#ffffff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3} className='p-0'>
              <Card className="why-choose">
                <div className="mb-3" >
                <img src={feature.icons} alt={feature.title} style={{ width: "80px", height: "80px" }} />                </div>
                <h5 className="">{feature.title}</h5>
                <p >{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>



    <section className='time-sec'>

{/* <Timeline /> */}

    </section>





       </>
  )
}

export default About