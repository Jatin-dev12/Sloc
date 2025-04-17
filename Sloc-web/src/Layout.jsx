import React from "react";
import { Outlet,useLocation  } from "react-router-dom";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";


const Layout = () => {
  const location = useLocation();

  const isProjectPage = location.pathname === '/Project';
  return (
    <>
     {!isProjectPage && <Header />}
      <Outlet />

      <Footer/>
    </>
  )
};

export default Layout;