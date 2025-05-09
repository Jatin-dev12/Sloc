import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation();

  // Normalize the path
  const path = location.pathname.toLowerCase();

  // // Hide header and footer on routes starting with "/project"
  // const isProjectPage = path.startsWith('/project');

  // // Also hide footer on the root "/" route
  // const hideFooter = isProjectPage || path === '/';

  // Hide header on routes starting with "/project" or on "/thank-you"
  const hideHeader = path.startsWith('/project') || path === '/thank-you';

  // Hide footer on routes starting with "/project", on "/thank-you", or on the root "/"
  const hideFooter = path.startsWith('/project') || path === '/thank-you' || path === '/';

  return (
    <>
      {/* {!isProjectPage && <Header />}
      <Outlet />
      {!hideFooter && <Footer />} */}
      {!hideHeader && <Header />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
