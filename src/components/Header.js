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
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
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
          className={`md:flex md:justify-center md:items-center absolute md:static bg-red-600 w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <NavLink
                to="/"
                className="block text-center md:inline hover:underline py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-center md:inline hover:underline py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block text-center md:inline hover:underline py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-center md:inline hover:underline py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block text-center md:inline hover:underline py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="block text-center md:inline hover:underline py-2 md:py-0"
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
