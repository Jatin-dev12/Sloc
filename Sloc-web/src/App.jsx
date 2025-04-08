import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Homepage';
import About from './About/About';

export default function App() {
  return (
    <BrowserRouter >

    <Routes>


      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />

      </Route>

    </Routes>
  </BrowserRouter>
  )
}

