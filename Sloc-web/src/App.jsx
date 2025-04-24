import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Scrol from './scrol'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Search from './Search-listing/Search';
import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  const [showButton, setShowButton] = useState(false);

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
    AOS.init({
    });
  }, []);



  return (
    <BrowserRouter>
    < Scrol />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog-listing" element={<Blogs />} />
          <Route path="/blog-detail" element={<Details />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/disclaimer" element={<Disc />} />
          <Route path="/project" element={<Project />} />
          <Route path="/search-Listing" element={<Search />} />

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
            height:'50px',
            width:'50px',
            zIndex: +9999999999999999999999999999999,
          }}
        >
          ↑
        </button>
      )}


  <a
    href="https://api.whatsapp.com/send?phone=+919910099434&text=Hello%20there!"
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
      boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
    }}
  >
    <FaWhatsapp />
  </a>

    </BrowserRouter>
  );
}
