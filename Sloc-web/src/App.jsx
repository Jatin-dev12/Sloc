import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Homepage';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Details from './Blogs/Blog-detail';
import './Responsive.css'


export default function App() {
  return (
    <BrowserRouter >

    <Routes>


      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Details" element={<Details />} />



      </Route>

    </Routes>
  </BrowserRouter>
  )
}

