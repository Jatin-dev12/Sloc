import React from "react";
import { Outlet, } from "react-router-dom";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";


const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />

      <Footer/>
    </>
  )
};

export default Layout;