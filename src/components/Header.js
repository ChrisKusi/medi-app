import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg"; // Import the logo
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 text-white shadow sticky top-0 z-50">
      {/* Header Container */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Mobile: Hamburger Icon */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center flex-grow md:flex-grow-0">
          <img src={logo} alt="Debe Telo Medicine" className="h-10 w-10" />
          <h1 className="text-lg font-bold hidden md:block ml-3">
            Debe Telo Medicine
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="hover:underline"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:underline"
            activeClassName="underline"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className="hover:underline"
            activeClassName="underline"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:underline"
            activeClassName="underline"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className="hover:underline"
            activeClassName="underline"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="hover:underline"
            activeClassName="underline"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="bg-red-600 md:hidden absolute w-full left-0 top-16 shadow-lg z-40">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
