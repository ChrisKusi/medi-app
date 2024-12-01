import React, { useState } from "react";
import Header from "../components/Header"; // Import the reusable header
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Password visibility icons

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="relative max-w-md mx-auto bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Login to Your Account
              </h3>
              <p className="text-gray-600 mt-2">
                Access your personalized health dashboard securely.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-300"
              >
                Login
              </button>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <a href="/forgot-password" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Debe Telo Medicine. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
