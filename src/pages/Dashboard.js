import React, { useState } from "react";
import { FaUser, FaClipboard, FaPills, FaFlask, FaSignOutAlt } from "react-icons/fa"; // Icons for navigation

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <div className="p-6"><h2 className="text-lg font-bold">Profile</h2><p>Manage your personal details here.</p></div>;
      case "consultations":
        return <div className="p-6"><h2 className="text-lg font-bold">Consultations</h2><p>View and manage your consultations.</p></div>;
      case "pharmacy":
        return <div className="p-6"><h2 className="text-lg font-bold">Pharmacy</h2><p>Track your medication orders.</p></div>;
      case "labs":
        return <div className="p-6"><h2 className="text-lg font-bold">Labs</h2><p>View lab results and book tests.</p></div>;
      default:
        return <div className="p-6"><h2 className="text-lg font-bold">Welcome</h2><p>Select a section from the sidebar.</p></div>;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
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
            onClick={() => alert("Logging out...")}
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
          <h1 className="text-xl font-bold">Welcome, User!</h1>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            Notifications
          </button>
        </header>

        {/* Content */}
        <section>{renderContent()}</section>
      </main>
    </div>
  );
};

export default Dashboard;
