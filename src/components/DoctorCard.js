import React from "react";

// DoctorCard Component to show each doctor's information and status
const DoctorCard = ({ doctor, onSelectDoctor }) => {
  const { name, profilePicture, specialty, isOnline } = doctor;

  return (
    <div
      className="doctor-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onSelectDoctor(doctor)} // When a card is clicked, the parent will be notified
    >
      <div className="flex items-center">
        <img
          src={profilePicture || "default-avatar.png"} // Default avatar if no profile picture
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{specialty || "General Practitioner"}</p>
        </div>
        <div
          className={`w-4 h-4 rounded-full ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
          title={isOnline ? "Online" : "Offline"}
        ></div>
      </div>
    </div>
  );
};

export default DoctorCard;
