import React from "react";
import { Link } from "react-router-dom"; // Used for navigation between tabs
import { FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa"; // Icons for the sidebar

const Sidebar = ({ onLogout }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-semibold mb-8">Doctor Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/doctor-dashboard/profile" className="flex items-center">
              <FaUser className="mr-2" /> Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/doctor-dashboard/patients" className="flex items-center">
              <FaUsers className="mr-2" /> Patients
            </Link>
          </li>
          <li className="mb-4">
            <button onClick={onLogout} className="flex items-center">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
