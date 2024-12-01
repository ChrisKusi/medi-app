import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg"; // Import the logo

const Header = () => {
  return (
    <header className="bg-red-600 text-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Debe Telo Medicine" className="h-12" />
          <h1 className="text-2xl font-bold">Debe Telo Medicine</h1>
        </div>

        {/* Navigation Section */}
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-blue-300" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-blue-300" : "hover:underline"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "underline text-blue-300" : "hover:underline"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-blue-300" : "hover:underline"
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
