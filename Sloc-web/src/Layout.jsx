import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation();

  // Normalize the path
  const path = location.pathname.toLowerCase();

  // Hide header and footer on routes starting with "/project"
  const isProjectPage = path.startsWith('/project');

  // Also hide footer on the root "/" route
  const hideFooter = isProjectPage || path === '/';

  return (
    <>
      {!isProjectPage && <Header />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
