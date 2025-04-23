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
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Disclaimer" element={<Disc />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Search" element={<Search />} />

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
    </BrowserRouter>
  );
}
