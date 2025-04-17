import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Homepage';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Details from './Blogs/Blog-detail';
import Privacy from './Policy/Privacy-Policy';
import Terms from './Policy/Terms';
import Disc from './Policy/Disclaimer';
import Contact from './Contact/contact';
import './Responsive.css'
import Project from './Project/project';

export default function App() {
  return (
    <BrowserRouter >

    <Routes>


      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Disclaimer" element={<Disc />} />
        <Route path="/Project" element={<Project />} />





      </Route>

    </Routes>
  </BrowserRouter>
  )
}

