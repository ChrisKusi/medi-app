// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../img/logo.jpg"; // Import the logo

// const Header = () => {
//   return (
//     <header className="bg-red-600 text-white shadow sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Debe Telo Medicine" className="h-12" />
//           <h1 className="text-2xl font-bold">Debe Telo Medicine</h1>
//         </div>

//         {/* Navigation Section */}
//         <nav className="space-x-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "underline text-blue-300" : "hover:underline"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "underline text-blue-300" : "hover:underline"
//             }
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive ? "underline text-blue-300" : "hover:underline"
//             }
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "underline text-blue-300" : "hover:underline"
//             }
//           >
//             Contact Us
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg"; // Import the logo
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 text-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Debe Telo Medicine" className="h-12" />
          <h1 className="text-2xl font-bold">Debe Telo Medicine</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:space-x-6 absolute md:static bg-red-600 w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <NavLink
            to="/"
            className="block md:inline hover:underline py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block md:inline hover:underline py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className="block md:inline hover:underline py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="block md:inline hover:underline py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className="block md:inline hover:underline py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="block md:inline hover:underline py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
