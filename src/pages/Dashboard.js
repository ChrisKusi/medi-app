// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // For navigation
// import { signOut, onAuthStateChanged } from "firebase/auth"; // Firebase auth methods
// import { auth } from "../firebase"; // Firebase configuration
// import { FaUser, FaClipboard, FaPills, FaFlask, FaSignOutAlt } from "react-icons/fa";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [user, setUser] = useState(null); // To track the authenticated user
//   const navigate = useNavigate();

//   // Monitor auth state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         // Redirect to login if no user is authenticated
//         navigate("/login");
//       }
//     });

//     // Cleanup the listener on component unmount
//     return () => unsubscribe();
//   }, [navigate]);

//   // Handle logout
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout Error:", error.message);
//     }
//   };

//   // Render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case "profile":
//         return (
//           <div className="p-6">
//             <h2 className="text-lg font-bold">Profile</h2>
//             <p>Manage your personal details here.</p>
//           </div>
//         );
//       case "consultations":
//         return (
//           <div className="p-6">
//             <h2 className="text-lg font-bold">Consultations</h2>
//             <p>View and manage your consultations.</p>
//           </div>
//         );
//       case "pharmacy":
//         return (
//           <div className="p-6">
//             <h2 className="text-lg font-bold">Pharmacy</h2>
//             <p>Track your medication orders.</p>
//           </div>
//         );
//       case "labs":
//         return (
//           <div className="p-6">
//             <h2 className="text-lg font-bold">Labs</h2>
//             <p>View lab results and book tests.</p>
//           </div>
//         );
//       default:
//         return (
//           <div className="p-6">
//             <h2 className="text-lg font-bold">Welcome</h2>
//             <p>Select a section from the sidebar.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-700 text-white flex flex-col">
//         <div className="px-4 py-6">
//           <h2 className="text-2xl font-bold">Dashboard</h2>
//         </div>
//         <nav className="flex-1 px-4 space-y-4">
//           <button
//             onClick={() => setActiveTab("profile")}
//             className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
//               activeTab === "profile" ? "bg-blue-800" : ""
//             }`}
//           >
//             <FaUser className="mr-3" />
//             Profile
//           </button>
//           <button
//             onClick={() => setActiveTab("consultations")}
//             className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
//               activeTab === "consultations" ? "bg-blue-800" : ""
//             }`}
//           >
//             <FaClipboard className="mr-3" />
//             Consultations
//           </button>
//           <button
//             onClick={() => setActiveTab("pharmacy")}
//             className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
//               activeTab === "pharmacy" ? "bg-blue-800" : ""
//             }`}
//           >
//             <FaPills className="mr-3" />
//             Pharmacy
//           </button>
//           <button
//             onClick={() => setActiveTab("labs")}
//             className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
//               activeTab === "labs" ? "bg-blue-800" : ""
//             }`}
//           >
//             <FaFlask className="mr-3" />
//             Labs
//           </button>
//         </nav>
//         <div className="px-4 py-4">
//           <button
//             onClick={handleLogout}
//             className="flex items-center p-3 w-full text-left bg-red-600 rounded-lg hover:bg-red-700"
//           >
//             <FaSignOutAlt className="mr-3" />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100">
//         {/* Header */}
//         <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
//           <h1 className="text-xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
//           <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
//             Notifications
//           </button>
//         </header>

//         {/* Content */}
//         <section>{renderContent()}</section>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged, updatePassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Firebase configuration
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { FaUser, FaClipboard, FaPills, FaFlask, FaSignOutAlt, FaBars } from "react-icons/fa";
import Modal from "../components/Modal"; // Assuming Modal is a separate component
import Consultations from "../components/Consultations"; // Importing the consultations component

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [vitalSigns, setVitalSigns] = useState({ temperature: "", pulse: "", respiration: "", bp: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State to show password modal
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 'success', 'error', 'warning'
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        setUserDetails(userDoc.data());
        setVitalSigns(userDoc.data().vitalSigns || {}); // Initialize vital signs if available
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      setError("Error logging out. Please try again.");
      showAlertModal("Error", "Error logging out. Please try again.", "error");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { ...userDetails, vitalSigns: vitalSigns });
      showAlertModal("Success", "Profile updated successfully!", "success");
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      showAlertModal("Error", "Failed to update profile. Please try again.", "error");
    }
    setLoading(false);
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      showAlertModal("Error", "Passwords do not match!", "error");
      return;
    }
  
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long!");
      showAlertModal("Error", "Password must be at least 6 characters long!", "error");
      return;
    }
  
    try {
      // Use the Firebase Authentication updatePassword method
      await updatePassword(user, newPassword); // Here user is coming from the auth state (Firebase Authentication)
      showAlertModal("Success", "Password updated successfully!", "success");
      setShowPasswordModal(false); // Close the modal after successful update
    } catch (err) {
      console.error("Error updating password: ", err);
      setError("Failed to update password. Please try again.");
      showAlertModal("Error", "Failed to update password. Please try again.", "error");
    }
  };
  

  const showAlertModal = (title, message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setAlertModalOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold">Profile</h2>
            <form onSubmit={handleProfileUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side: User Data */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={userDetails?.name || ""}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  value={userDetails?.height || ""}
                  onChange={(e) => setUserDetails({ ...userDetails, height: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  value={userDetails?.weight || ""}
                  onChange={(e) => setUserDetails({ ...userDetails, weight: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              {/* Right Side: Vital Signs */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
                <input
                  type="text"
                  value={vitalSigns?.temperature || ""}
                  onChange={(e) => setVitalSigns({ ...vitalSigns, temperature: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pulse</label>
                <input
                  type="text"
                  value={vitalSigns?.pulse || ""}
                  onChange={(e) => setVitalSigns({ ...vitalSigns, pulse: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Respiration</label>
                <input
                  type="text"
                  value={vitalSigns?.respiration || ""}
                  onChange={(e) => setVitalSigns({ ...vitalSigns, respiration: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Blood Pressure (BP)</label>
                <input
                  type="text"
                  value={vitalSigns?.bp || ""}
                  onChange={(e) => setVitalSigns({ ...vitalSigns, bp: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 mt-4 rounded-lg hover:bg-blue-800 w-full"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update User Data"}
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={() => setShowPasswordModal(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Change Password
              </button>
            </div>
          </div>
        );
        case "consultations":
      return (
        <div className="p-6">
          <Consultations user={user} /> {/* Pass any necessary props to the Consultations component */}
        </div>
      );
      default:
        return <div>Select a tab from the sidebar.</div>;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "block" : "hidden"} lg:block w-64 bg-blue-700 text-white flex flex-col`}>
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-1 px-4 space-y-4">
          <button onClick={() => setActiveTab("profile")} className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${activeTab === "profile" ? "bg-blue-800" : ""}`}>
            <FaUser className="mr-3" /> Profile
          </button>
          <button onClick={() => setActiveTab("consultations")} className="flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800">
            <FaClipboard className="mr-3" /> Consultations
          </button>
          <button onClick={() => setActiveTab("pharmacy")} className="flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800">
            <FaPills className="mr-3" /> Pharmacy
          </button>
          <button onClick={() => setActiveTab("labs")} className="flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800">
            <FaFlask className="mr-3" /> Labs
          </button>
        </nav>
        <div className="px-4 py-4">
          <button onClick={handleLogout} className="flex items-center p-3 w-full text-left bg-red-600 rounded-lg hover:bg-red-700">
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            <FaBars />
          </button>
        </header>

        {/* Content */}
        <section>{renderContent()}</section>
      </main>

      {/* Alert Modal */}
      {alertModalOpen && (
        <Modal closeModal={() => setAlertModalOpen(false)}>
          <div className="p-6">
            <h2 className="text-lg font-bold">{alertType === "success" ? "Success" : "Error"}</h2>
            <p className={`mt-4 ${alertType === "error" ? "text-red-600" : "text-green-600"}`}>{alertMessage}</p>
            <div className="mt-6 flex justify-end space-x-4">
              <button onClick={() => setAlertModalOpen(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg">OK</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Change Password Modal */}
      {showPasswordModal && (
        <Modal closeModal={() => setShowPasswordModal(false)}>
          <div className="p-6">
            <h2 className="text-lg font-bold">Change Password</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            {error && <div className="mt-2 text-red-600">{error}</div>}
            <div className="mt-6 flex justify-end space-x-4">
              <button onClick={() => setShowPasswordModal(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Cancel</button>
              <button onClick={handleChangePassword} className="bg-blue-700 text-white px-4 py-2 rounded-lg">Change Password</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;


