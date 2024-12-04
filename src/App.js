import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ForgotPasswordPage from "./pages/ForgotPasswordPage"; // Add this import
import DoctorDashboard from "./components/DoctorDashboard";
import PharmacistDashboard from "./components/PharmacistDashboard";
import LabTechnicianDashboard from "./components/LabTechnicianDashboard";
import Patients from "./components/Patients"; // Import Patients Component

const App = () => {
  return (
    <Router>
      {/* Layout wraps all routes */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/pharmacist-dashboard" element={<PharmacistDashboard />} />
          <Route path="/labtech-dashboard" element={<LabTechnicianDashboard />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
