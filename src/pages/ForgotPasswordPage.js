import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth"; // Firebase reset password
import { auth } from "../firebase"; // Firebase configuration

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    try {
      // Send reset password email
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset email sent. Please check your inbox.");
      setLoading(false);
    } catch (err) {
      setErrorMessage("Error: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex flex-col">
      <section className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="relative max-w-md mx-auto bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Reset Your Password</h3>
              <p className="text-gray-600 mt-2">Enter your email to receive a password reset link.</p>
            </div>

            {/* Forgot Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            {/* Error Message */}
            {errorMessage && (
              <p className="mt-4 text-center text-red-500">{errorMessage}</p>
            )}

            {/* Success Message */}
            {successMessage && (
              <p className="mt-4 text-center text-green-500">{successMessage}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
