import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Homepage';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Details from './Blogs/Blog-detail';
import Privacy from './Policy/Privacy-Policy';
import Terms from './Policy/Terms';
import Disc from './Policy/Disclaimer';
import Contact from './Contact/contact';
import Project from './Project/project';
import './Responsive.css';
import Scrol from './scrol';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Search from './Search-listing/Search';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import Four from './Policy/Nothing';
import axios from 'axios';
import wht from './mobile/whstsp.svg'
import call from './mobile/call.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// New component to handle useLocation and related logic
function AppContent() {
  // const [showButton, setShowButton] = useState(false);
  // const [whatsappNumber, setWhatsappNumber] = useState('9971094108');
  // const location = useLocation(); // Now safe to use inside BrowserRouter

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowButton(window.scrollY > 300);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // useEffect(() => {
  //   if (location.pathname.startsWith('/project')) {
  //     const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
  //     const apiUrl = `${baseUrl}api/setting`;

  //     axios
  //       .get(apiUrl, {
  //         headers: {
  //           Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
  //         },
  //       })
  //       .then((response) => {
  //         if (response.data.success && response.data.data.length > 0) {
  //           const data = response.data.data[0];
  //           if (data.whatsapp_number) {
  //             setWhatsappNumber(data.whatsapp_number);
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('API request error:', error);
  //       });
  //   } else {
  //     setWhatsappNumber('9971094108');
  //   }
  // }, [location.pathname]);


  const [showButton, setShowButton] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('9910099434');
  const location = useLocation(); // Now safe to use inside BrowserRouter

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > -3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
      const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
      const apiUrl = `${baseUrl}api/setting`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
          },
        })
        .then((response) => {
          if (response.data.success && response.data.data.length > 0) {
            const data = response.data.data[0];
            if (data.whatsapp_number) {
              setWhatsappNumber(data.whatsapp_number);
            }
          }
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
  }, [location.pathname]);

  // Check if current page is '/project'
  const isProjectPage = location.pathname.startsWith('/project');

  useEffect(() => {
    const checkNavbarState = () => {
      const isNavbarOpen = document.querySelector('.navbar-collapse.show');
      const prnavElements = document.querySelectorAll('.prnav');

      prnavElements.forEach((el) => {
        el.style.display = isNavbarOpen ? 'none' : 'flex';
      });
    };

    // Run on initial render
    checkNavbarState();

    // Set up observer to detect class changes
    const observer = new MutationObserver(checkNavbarState);

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class']
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);




  return (
    <>
    <Scrol />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<Details />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/disclaimer" element={<Disc />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="/search-Listing" element={<Search />} />
        <Route path="*" element={<Four />} />

      </Route>
    </Routes>


      <button
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          padding: '0px 15px',
          fontSize: '30px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
          zIndex: 999999,
        }}
      >
        ↑
      </button>


    {!isProjectPage && (
      <a
        href={`https://api.whatsapp.com/send?phone=+91${whatsappNumber}&text=Hello `}
        target="_blank"
        rel="noopener noreferrer"
        className='prnav desktop-visible'
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          padding: '0',
          fontSize: '26px',
          backgroundColor: '#064685',
          color: '#fff',
          border: '1px solid #fff',
          borderRadius: '50px',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        }}
      >
        <FaWhatsapp />
      </a>
    )}

{!isProjectPage && (
      <a
        href={`tel:+91${whatsappNumber}`}
        target="_blank"
        className="calling prnav desktop-visible"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '170px',
          right: '30px',
          padding: '5px',
          fontSize: '25px',
          backgroundColor: '#064685',
          color: '#fff',
          borderRadius: '50px',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        }}
      >
        <FiPhoneCall />
      </a>
    )}

{!isProjectPage && (
      <a
        href={`https://api.whatsapp.com/send?phone=+91${whatsappNumber}&text=Hello `}
        target="_blank"
        rel="noopener noreferrer"
        className="mobilek"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '215px',
          padding: '0',
          fontSize: '30px',
          backgroundColor: '#25D366',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        }}
      >
        <FaWhatsapp height={20} /> Whatsapp
      </a>
    )}

{!isProjectPage && (
      <a
        href={`tel:+91${whatsappNumber}`}
        target="_blank"
        className="calling mobilek"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '5px',
          fontSize: '25px',
          backgroundColor: '#064685',
          color: '#fff',
          borderRadius: '50px',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
        }}
      >
   <img src={call}/> Call Now    </a>
    )}
  </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}