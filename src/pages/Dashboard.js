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
import {
  FaUser,
  FaClipboard,
  FaPills,
  FaFlask,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // For responsive design
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        setUserDetails(userDoc.data());
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      setError("Error logging out. Please try again.");
    }
  };

  // Handle profile updates
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateDoc(doc(db, "users", user.uid), userDetails);
      alert("Profile updated successfully!");
    } catch (err) {
      setError("Failed to update profile. Please try again.");
    }
    setLoading(false);
  };

  // Handle password change
  const handleChangePassword = async (newPassword) => {
    try {
      await updatePassword(user, newPassword);
      alert("Password updated successfully!");
    } catch (err) {
      setError("Failed to update password. Please try again.");
    }
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold">Profile</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={userDetails?.name || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={userDetails?.height || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, height: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={userDetails?.weight || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, weight: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Change Password</h3>
              <button
                onClick={() => {
                  const newPassword = prompt("Enter new password:");
                  if (newPassword) handleChangePassword(newPassword);
                }}
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Change Password
              </button>
            </div>
          </div>
        );
      case "consultations":
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold">Consultations</h2>
            <p>View and manage your consultations.</p>
          </div>
        );
      case "pharmacy":
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold">Pharmacy</h2>
            <p>Track your medication orders.</p>
          </div>
        );
      case "labs":
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold">Labs</h2>
            <p>View lab results and book tests.</p>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h2 className="text-lg font-bold">Welcome</h2>
            <p>Select a section from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-64 bg-blue-700 text-white flex flex-col`}
      >
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-1 px-4 space-y-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
              activeTab === "profile" ? "bg-blue-800" : ""
            }`}
          >
            <FaUser className="mr-3" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab("consultations")}
            className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
              activeTab === "consultations" ? "bg-blue-800" : ""
            }`}
          >
            <FaClipboard className="mr-3" />
            Consultations
          </button>
          <button
            onClick={() => setActiveTab("pharmacy")}
            className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
              activeTab === "pharmacy" ? "bg-blue-800" : ""
            }`}
          >
            <FaPills className="mr-3" />
            Pharmacy
          </button>
          <button
            onClick={() => setActiveTab("labs")}
            className={`flex items-center p-3 w-full text-left rounded-lg hover:bg-blue-800 ${
              activeTab === "labs" ? "bg-blue-800" : ""
            }`}
          >
            <FaFlask className="mr-3" />
            Labs
          </button>
        </nav>
        <div className="px-4 py-4">
          <button
            onClick={handleLogout}
            className="flex items-center p-3 w-full text-left bg-red-600 rounded-lg hover:bg-red-700"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            <FaBars />
          </button>
        </header>

        {/* Content */}
        <section>{renderContent()}</section>
      </main>
    </div>
  );
};

export default Dashboard;
