// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Password visibility icons

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("Signup:", { name, email, password });
//     // Add your signup logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex flex-col">


//       {/* Hero Section */}
//       <section className="flex-1 flex items-center justify-center">
//         <div className="container mx-auto px-6">
//           <div className="relative max-w-md mx-auto bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Create Your Account
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Join Debe Telo Medicine and take charge of your health journey.
//               </p>
//             </div>

//             {/* Signup Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div className="relative">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="relative">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               {/* Confirm Password Input */}
//               <div className="relative">
//                 <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   id="confirm-password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Confirm your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={toggleConfirmPasswordVisibility}
//                   className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
//                 >
//                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-300"
//               >
//                 Sign Up
//               </button>
//             </form>

//             {/* Additional Links */}
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <a href="/login" className="text-blue-500 hover:underline">
//                   Log In
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p className="text-sm">© 2024 Debe Telo Medicine. All Rights Reserved.</p>
//           <div className="mt-4 space-x-4">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Facebook
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Twitter
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Instagram
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    consultationType: "",
    doctor: "",
    insuranceProvider: "",
    policyNumber: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-6">
          <div className="relative max-w-lg mx-auto bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Create Your Account
              </h3>
              <p className="text-gray-600 mt-2">
                Join Debe Telo Medicine and take charge of your health journey.
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Date of Birth Input */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  required
                />
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Choose Your Consultation Type
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["Video Consultation", "Phone Consultation", "Messaging Consultation"].map(
                    (type, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="consultationType"
                          value={type}
                          onChange={handleChange}
                          required
                          className="focus:ring-red-300"
                        />
                        <span className="text-gray-700">{type}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Doctor Selection */}
              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                  Select Your Preferred Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  required
                >
                  <option value="">-- Select a doctor --</option>
                  <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                  <option value="Dr. John Doe">Dr. John Doe</option>
                  <option value="Dr. Emily Brown">Dr. Emily Brown</option>
                </select>
              </div>

              {/* Insurance Information */}
              <div>
                <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700">
                  Insurance Provider (if applicable)
                </label>
                <input
                  type="text"
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your insurance provider"
                />
              </div>

              <div>
                <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700">
                  Policy Number (if applicable)
                </label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your policy number"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Create a Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  Log In
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

export default SignupPage;

