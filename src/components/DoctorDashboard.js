// const DoctorDashboard = () => {
//     return (
//       <div className="dashboard">
//         <h1>Welcome, Doctor!</h1>
//         {/* Display doctor-specific data here */}
//         <p>List of patient consultations, etc.</p>
//       </div>
//     );
//   };
//   export default DoctorDashboard;
  

import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar"; // Sidebar component
import Profile from "./Profile"; // Profile component
import Patients from "./Patients"; // Patients component
import { auth } from "../firebase"; // Firebase auth
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="flex">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="patients" element={<Patients />} />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorDashboard;



