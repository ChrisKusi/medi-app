// import React, { useState } from "react";
// import { auth, db } from "../firebase"; // Import Firebase configuration
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for password visibility

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     consultationType: "",
//     doctor: "",
//     insuranceProvider: "",
//     policyNumber: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorModal, setErrorModal] = useState(null); // Error modal state
//   const [successModal, setSuccessModal] = useState(false); // Success modal state

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Step 1: Create a user with Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
//       const user = userCredential.user;

//       // Step 2: Update the user's profile with their name
//       await updateProfile(user, { displayName: formData.name });

//       // Step 3: Store additional user data in Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         uid: user.uid,
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         dob: formData.dob,
//         consultationType: formData.consultationType,
//         doctor: formData.doctor,
//         insuranceProvider: formData.insuranceProvider || null,
//         policyNumber: formData.policyNumber || null,
//         createdAt: new Date(),
//       });

//       // Show success modal
//       setSuccessModal(true);
//       setLoading(false);
//     } catch (err) {
//       // Show error modal with error message
//       setErrorModal(err.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex flex-col">
//       {/* Hero Section */}
//       <section className="flex-1 flex items-center justify-center py-12">
//         <div className="container mx-auto px-6">
//           <div className="relative max-w-lg mx-auto bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
//             <div className="text-center mb-6">
//               <h3 className="text-3xl font-bold text-gray-800">
//                 Create Your Account
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Join Debe Telo Medicine and take charge of your health journey.
//               </p>
//             </div>

//             {/* Signup Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               {/* Phone Number Input */}
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your phone number"
//                   required
//                 />
//               </div>

//               {/* Date of Birth Input */}
//               <div>
//                 <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   id="dob"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   required
//                 />
//               </div>

//               {/* Consultation Type */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Choose Your Consultation Type
//                 </label>
//                 <div className="flex flex-wrap gap-4 mt-2">
//                   {["Video Consultation", "Phone Consultation", "Messaging Consultation"].map(
//                     (type, index) => (
//                       <label key={index} className="flex items-center space-x-2">
//                         <input
//                           type="radio"
//                           name="consultationType"
//                           value={type}
//                           onChange={handleChange}
//                           required
//                           className="focus:ring-red-300"
//                         />
//                         <span className="text-gray-700">{type}</span>
//                       </label>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Doctor Selection */}
//               <div>
//                 <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
//                   Select Your Preferred Doctor
//                 </label>
//                 <select
//                   id="doctor"
//                   name="doctor"
//                   value={formData.doctor}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   required
//                 >
//                   <option value="">-- Select a doctor --</option>
//                   <option value="Dr. Jane Smith">Dr. Jane Smith</option>
//                   <option value="Dr. John Doe">Dr. John Doe</option>
//                   <option value="Dr. Emily Brown">Dr. Emily Brown</option>
//                 </select>
//               </div>

//               {/* Insurance Information */}
//               <div>
//                 <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700">
//                   Insurance Provider (if applicable)
//                 </label>
//                 <input
//                   type="text"
//                   id="insuranceProvider"
//                   name="insuranceProvider"
//                   value={formData.insuranceProvider}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your insurance provider"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700">
//                   Policy Number (if applicable)
//                 </label>
//                 <input
//                   type="text"
//                   id="policyNumber"
//                   name="policyNumber"
//                   value={formData.policyNumber}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                   placeholder="Enter your policy number"
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="relative">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Create a Password
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
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

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-300"
//                 disabled={loading}
//               >
//                 {loading ? "Signing Up..." : "Sign Up"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Error Modal */}
//       {errorModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
//             <h2 className="text-xl font-bold text-red-500">Error</h2>
//             <p className="mt-4 text-gray-700">{errorModal}</p>
//             <button
//               onClick={() => setErrorModal(null)}
//               className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {successModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
//             <h2 className="text-xl font-bold text-green-500">Success</h2>
//             <p className="mt-4 text-gray-700">Account created successfully!</p>
//             <button
//               onClick={() => (window.location.href = "/login")}
//               className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Go to Login
//             </button>
//           </div>
//         </div>
//       )}

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
import { auth, db } from "../firebase"; // Import Firebase configuration
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for password visibility

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    accountType: "patient", // Default account type
    consultationType: "",
    doctor: "",
    insuranceProvider: "",
    policyNumber: "",
    password: "",
    licenseCode: "", // Added for doctor, pharmacist, and lab tech
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(null); // Error modal state
  const [successModal, setSuccessModal] = useState(false); // Success modal state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Create a user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Step 2: Update the user's profile with their name
      await updateProfile(user, { displayName: formData.name });

      // Step 3: Store additional user data in Firestore based on account type
      const userDocData = {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        accountType: formData.accountType,
        createdAt: new Date(),
      };

      if (formData.accountType === "patient") {
        userDocData.consultationType = formData.consultationType;
        userDocData.doctor = formData.doctor;
        userDocData.insuranceProvider = formData.insuranceProvider || null;
        userDocData.policyNumber = formData.policyNumber || null;
      }

      if (formData.accountType === "doctor") {
        userDocData.licenseCode = formData.licenseCode;
      }

      if (formData.accountType === "pharmacist" || formData.accountType === "labTech") {
        userDocData.licenseCode = formData.licenseCode;
      }

      await setDoc(doc(db, "users", user.uid), userDocData);

      // Show success modal
      setSuccessModal(true);
      setLoading(false);
    } catch (err) {
      // Show error modal with error message
      setErrorModal(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-6">
          <div className="relative max-w-lg mx-auto bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">Create Your Account</h3>
              <p className="text-gray-600 mt-2">Join Debe Telo Medicine and take charge of your health journey.</p>
            </div>

            {/* Account Type Selection */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${
                  formData.accountType === "patient" ? "bg-red-500 text-white" : "bg-white text-gray-800"
                }`}
                onClick={() => setFormData({ ...formData, accountType: "patient" })}
              >
                Patient
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${
                  formData.accountType === "doctor" ? "bg-red-500 text-white" : "bg-white text-gray-800"
                }`}
                onClick={() => setFormData({ ...formData, accountType: "doctor" })}
              >
                Doctor
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${
                  formData.accountType === "pharmacist" ? "bg-red-500 text-white" : "bg-white text-gray-800"
                }`}
                onClick={() => setFormData({ ...formData, accountType: "pharmacist" })}
              >
                Pharmacist
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${
                  formData.accountType === "labTech" ? "bg-red-500 text-white" : "bg-white text-gray-800"
                }`}
                onClick={() => setFormData({ ...formData, accountType: "labTech" })}
              >
                Lab Tech
              </button>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Common Fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
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
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
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

              {/* Patient Fields */}
              {formData.accountType === "patient" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Choose Your Consultation Type</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {["Video Consultation", "Phone Consultation", "Messaging Consultation"].map((type, index) => (
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
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Select Your Preferred Doctor</label>
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
                  <div>
                    <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700">Insurance Provider (if applicable)</label>
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
                    <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700">Policy Number (if applicable)</label>
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
                </>
              )}

              {/* Doctor, Pharmacist, Lab Tech Fields */}
              {["doctor", "pharmacist", "labTech"].includes(formData.accountType) && (
                <div>
                  <label htmlFor="licenseCode" className="block text-sm font-medium text-gray-700">License Code</label>
                  <input
                    type="text"
                    id="licenseCode"
                    name="licenseCode"
                    value={formData.licenseCode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-red-300 focus:outline-none"
                    placeholder="Enter your license code"
                    required
                  />
                </div>
              )}

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create a Password</label>
                <div className="relative">
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
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-3 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg mt-4"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success and Error Modals (if needed) */}
      {errorModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500">Error</h3>
            <p>{errorModal}</p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => setErrorModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {successModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-500">Success</h3>
            <p>Your account has been created successfully!</p>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => setSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
