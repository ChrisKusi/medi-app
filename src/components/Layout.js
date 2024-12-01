import React from "react";
import Header from "./Header"; // Import the Header

const Layout = ({ children }) => {
  return (
    <>
      <Header /> {/* Header will be displayed on all pages */}
      <main>{children}</main> {/* This renders the content of each page */}
    </>
  );
};

export default Layout;
