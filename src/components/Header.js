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
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Debe Telo Medicine" className="h-10 w-10" />
          <h1 className="text-lg font-bold">Debe Telo Medicine</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static bg-red-600 md:flex md:space-x-8 md:items-center md:justify-center w-full md:w-auto left-0 top-16 md:top-auto p-6 md:p-0 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col md:flex-row text-center md:text-left">
            <li>
              <NavLink
                to="/"
                className="block py-2 md:py-0 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 md:py-0 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block py-2 md:py-0 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 md:py-0 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 md:py-0 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="block py-2 md:py-0 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
