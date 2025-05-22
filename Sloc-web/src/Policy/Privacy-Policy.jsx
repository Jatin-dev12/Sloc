  import React, { useState, useEffect } from "react";
  import { Container, Row, Col, Badge, Image } from "react-bootstrap";
import Bl from "../assets/Imgs/Blog-detail.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
  import axios from "axios";

import { useLocation } from 'react-router-dom';
const Privacy = () => {
  const location = useLocation();
      const [metaTitle, setMetaTitle] = useState('');
      const [metaDescription, setMetaDescription] = useState('');
    const [ogImage, setOgImage] = useState('');


       useEffect(() => {
         const currentPath = location.pathname.replace(/^\/|\/$/g, '');
        const baseUrl =
          import.meta.env.VITE_BASE_URL || "https://default-api-url.com/";
        const apiUrl = `${baseUrl}api/metas`;

        axios
          .get(apiUrl, {
            headers: {
              Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
            },
          })
       .then((response) => {
          if (response.data.success && Array.isArray(response.data.data)) {
            const matchedMeta = response.data.data.find(
              (item) => item.page && item.page.slug === currentPath
            );

            if (matchedMeta) {
              setMetaTitle(matchedMeta.meta_title);
              setMetaDescription(matchedMeta.meta_description);
                  setOgImage(matchedMeta.og_image);
            } else {
              console.warn(`No meta found for slug: ${currentPath}`);
            }
          } else {
            console.error('Invalid response data');
          }
        })
        .catch((error) => {
          console.error('API call failed', error);
        });
    }, [location.pathname]);
  return (
    <>
     <Helmet>
                 <title>{metaTitle} </title>
                 <meta
                   property="og:title"
                   content={metaTitle}
                 />
                 <meta
                   property="og:description"
                   content={metaDescription}
                 />
       <meta property="og:image" content={ogImage}></meta>
                 <meta name="description" content={metaDescription}></meta>
               </Helmet>
      <section className=">privacy baner-iner">
        <Container className="">
          <Row className="align-items-center">
            <Col md={12} className="animate__animated animate__fadeInLeft">
              <h2 className="fw-bold blog-h mt-2">Privacy Policy</h2>
              <p className=" blog-p">
                We handle your data with the same care we take when
                <span className="bl-full">finding your dream home,</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog-text btm-space">
        <Container fluid className="">
          <Row className=" justify-content-center">
            <Col md={10} className="all-border">
              <p>
                <strong>Our Commitment to Privacy</strong>
              </p>
              <br />
              <p>
                Your trust is important to us at SLOC. Our dedication to ethical
                and responsible business practices is centered on safeguarding
                your personal data. This Privacy Policy describes how we
                protect, disclose, use, and gather the data you give on our
                website. Using our website indicates your acceptance of the
                terms of this policy.
              </p>
              <Row className=" justify-content-center mt-5 list-term">
                <Col md={12}>
                  <ul className="list-unstyled new-lis">
                    <li className="mb-3 set-to-down  align-items-start">
                      <span>
                        <strong>Information We Collect</strong>
                      </span>
                      <p>
                        We may gather personal data such as your name, contact
                        details, email address, and preferences when you:
                      </p>
                      <ul className="">
                        <li className=" align-items-start">
                          Contact us using our website.
                        </li>
                        <li className="align-items-start">
                          Subscribe to our marketing emails.
                        </li>
                        <li className="align-items-start">
                          Use cookies and tracking tools to interact with our
                          site.
                        </li>
                      </ul>
                      <p>
                        We also gather non-personal, analytical data - such as
                        pages visited, time spent, and location-based data - to
                        enhance our online experience.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Use of Your Information</strong>
                      </span>
                      <p>Your information helps us:</p>
                      <ul className="">
                        <li className=" align-items-start">
                          Respond to your inquiries or service requests
                        </li>
                        <li className="align-items-start">
                          Share project-related updates, promotions, or offers
                          (unless you opt-out)
                        </li>
                        <li className="align-items-start">
                          Improve user experience and website performance
                        </li>
                        <li className="align-items-start">
                          Maintain and grow our client relationships
                        </li>
                      </ul>
                      <p>
                        We may use your information to send you marketing
                        content about properties or services that you are
                        interested in. You can opt-out at any time by sending us
                        an email at contact@sloc.in.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Cookies and Tracking Technologies</strong>
                      </span>
                      <p>We use cookies to:</p>
                      <ul className="">
                        <li className=" align-items-start">
                          Personalize your browsing experience
                        </li>
                        <li className="align-items-start">
                          Understand visitor behavior using tools like Google
                          Analytics and Microsoft Clarity
                        </li>
                        <li className="align-items-start">
                          Improve our services, analyze trends, and optimize
                          content
                        </li>
                      </ul>
                      <p>
                        Your browser options let you decide whether to turn off
                        cookies. Some aspects of our website could not work
                        correctly without them, so keep that in mind.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Data Sharing and Disclosure</strong>
                      </span>
                      <p>
                        Your personal info is not for sale. We might only share
                        it when:
                      </p>
                      <ul className="">
                        <li className=" align-items-start">
                          Required to fulfill your request or deliver services
                        </li>
                        <li className="align-items-start">
                          Mandated by law, legal processes, or government
                          authorities
                        </li>
                        <li className="align-items-start">
                          Shared with trusted affiliates or service providers to
                          support our operations (under strict confidentiality
                          agreements)
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Data Retention & Your Rights</strong>
                      </span>
                      <p>
                        We keep your data just as long as required for the
                        above-mentioned reasons or as required by the applicable
                        laws.
                        <br />
                        You have the right to:
                      </p>
                      <ul className="">
                        <li className=" align-items-start">
                          Request a copy of your personal data
                        </li>
                        <li className="align-items-start">
                          Correct or update your information
                        </li>
                        <li className="align-items-start">
                          Withdraw consent or request data deletion
                        </li>
                      </ul>
                      <p>
                        To use these rights, kindly write to us at
                        contact@sloc.in. Keep in mind that removing your data
                        could affect our capacity to keep offering particular
                        services.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down  align-items-start">
                      <span>
                        <strong>Data Security</strong>
                      </span>
                      <p>
                        To safeguard your data, we use industry-standard
                        security practices. Your personal information, kept in
                        secure systems, is accessible only to authorized staff
                        members trained in data protection and confidentiality.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down  align-items-start">
                      <span>
                        <strong>International Data Transfers</strong>
                      </span>
                      <p>
                        Submitting your information via our website constitutes
                        an agreement to the transfer and storage of your data
                        outside your country of residence, including to our
                        subsidiaries or affiliates, to provide our services
                        efficiently.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Third-Party Links</strong>
                      </span>
                      <p>
                        Our website may include links to third-party sites. We
                        are not responsible for the privacy practices or content
                        of those websites, and we recommend that you read their
                        respective privacy policies.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Policy Updates</strong>
                      </span>
                      <p>
                        From time to time, we might revise this Privacy Policy
                        to reflect changes in legal, technological, or corporate
                        needs. This page will show the updated policy under
                        “Last Updated”.
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Contact Us</strong>
                      </span>
                      <p>
                        If you have any questions or issues or wish to amend or
                        delete your information, please contact us at:
                        contact@sloc.in
                      </p>
                    </li>
                    <li className="mb-3 set-to-down align-items-start">
                      <span>
                        <strong>Acceptance of This Policy</strong>
                      </span>
                      <p>
                        Using our site means you accept our Privacy Policy and
                        agree to the gathering, use, and disclosure of your
                        information as described above.
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
export default Privacy;
