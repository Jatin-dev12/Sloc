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
import Gopu from './Home/gopu';
import axios from 'axios';

// New component to handle useLocation and related logic
function AppContent() {
  const [showButton, setShowButton] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('9971094108');
  const location = useLocation(); // Now safe to use inside BrowserRouter

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
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
    if (location.pathname.startsWith('/project')) {
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
    } else {
      setWhatsappNumber('9971094108');
    }
  }, [location.pathname]);

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

      {showButton && (
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
      )}

      <a
        href={`https://api.whatsapp.com/send?phone=+91${whatsappNumber}&text=Hello%20there!`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
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
        <FaWhatsapp />
      </a>

      <a
        href={`tel:+91${whatsappNumber}`}
        target="_blank"
        className="calling"
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