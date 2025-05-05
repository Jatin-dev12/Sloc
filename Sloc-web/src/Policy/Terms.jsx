import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import { FaCheckCircle } from "react-icons/fa";
import Icon from '../assets/Imgs/list-icon.svg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (


    <>
                             <Helmet>
                              <title>Terms and Conditions | SLOC - Real Estate Company in India</title>
                         <meta property="og:title" content="Terms and Conditions | SLOC - Real Estate Company in India" />
                         <meta property="og:description" content="Read the Terms and Conditions for using SLOC's real estate services. Learn about our policies, user agreements, and how we assist with property investment in India." />
                        </Helmet>
      <section className='terms baner-iner'>

        <Container className="">
          <Row className="align-items-center">
            <Col md={12} className="animate__animated animate__fadeInLeft">

              <h2 className="fw-bold blog-h mt-2">Terms &<br />
                Conditions</h2>
              <p className=" blog-p">
                Understand the fine print behind every interaction with us.
              </p>
            </Col>

          </Row>

        </Container>

      </section>

      <section className='blog-text btm-space'>
        <Container fluid className="">
          <Row className=' justify-content-center'>
            <Col md={10} className='all-border'>
              <p>
                <strong>SLOC welcomes you! </strong>

              </p><br />
              <p>
                We're happy to see you. Please read our Terms & Conditions before you continue exploring our website. These terms are meant for the protection of ‘you’ and ‘us’ so that your experience is apparent, safe, and hassle-free.
              </p>
              <Row className=' justify-content-center mt-5 list-term'>
                <Col md={12} >
                  <ul className="list-unstyled">
                    <li className="mb-3  align-items-start">
                      <span> <strong>For Your Information Only</strong></span>
                      <p className='mt-2'>
                        Everything on this website is meant to inform. It's neither an invitation nor an offer to purchase or sell any property. The project listings, prices, photographs, floor plans, and brochures are not final offers and are subject to change.<br />

                        For the most recent and most precise project information, we always advise contacting our sales team.

                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Project & Pricing Disclaimer</strong></span>
                      <p className='mt-2'>
                      Real estate, like prices, availability, offers, and government laws, is constantly changing. We do our best to keep everything up to date, but changes might happen unexpectedly. Before making any purchase or investment decision, we strongly advise you to independently verify any property data, either with the builder or an authorized representative.


                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Third-Party Associations
                      </strong></span>
                      <p className='mt-2'>
                      Some of the properties mentioned on our website are promoted in collaboration with developers, builders, or other intermediaries. While we conduct due diligence, we are not responsible for any obligations or statements made by third parties. Before making a booking, always confirm that all necessary papers and legal verifications are in place.


                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Intellectual Property Rights</strong></span>
                      <p className='mt-2'>
                      We either own or have permission to use the content you see, whether it's text, pictures, or graphics. Please do not copy, reproduce, or republish any material without written permission. All logos and trademarks belong to their respective owners and are used solely for identification purposes.


                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Limitation of Liability</strong></span>
                      <p className='mt-2'>
                      We're here to make your home-searching experience easier, but we're not liable for any loss or harm caused by reliance on the information supplied on this website. Whether it's obsolete pricing or a shift in possession deadlines, we always recommend verifying information before acting on it.


                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Cookies & Data Collection</strong></span>
                      <p className='mt-2'>
                      Yes, we use cookies, but only to improve your surfing experience and to better understand how our website is used. Please see our <strong>Privacy Policy</strong>  for more information on how we collect, store, and handle your data. Don't worry, we cherish your privacy just as much as you do.


                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Your Account & Communication</strong></span>
                      <p className='mt-2'>
                      If you fill out a form, register, or share your contact information with us, you consent to be contacted by phone, SMS, WhatsApp, or email about relevant projects. You can opt out at any time by emailing contact@sloc.in.



                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Amendments to Terms
                      </strong></span>
                      <p className='mt-2'>
                      We may revise these Terms and Conditions from time to time to reflect changes in the legislation, services, or user feedback. Please check this page on a frequent basis to stay up to date.


                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Governing Law</strong></span>
                      <p className='mt-2'>
                      These terms are regulated by Indian laws. If any legal difficulties develop, they will be addressed by Indian courts, based on jurisdiction.



                      </p>


                    </li>
                    <li className="mb-3  align-items-start">
                      <span> <strong>Need Help? Just Ask!</strong></span>
                      <p className='mt-2'>
                      If you have any questions, issues, or would like to clarify something, please email us at contact@sloc.in. We're always willing to help.



                      </p>
</li>

                  </ul>
                </Col>

              </Row>
            </Col>
          </Row>

        </Container>
      </section>

    </>
  );
};

export default Terms;
