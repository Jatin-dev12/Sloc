import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation();

  // Hide header on all routes starting with "/project"
  const isProjectPage = location.pathname.toLowerCase().startsWith('/project');

  return (
    <>
      {!isProjectPage && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
