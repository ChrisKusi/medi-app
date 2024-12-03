import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import ChatWindow from "../components/ChatWindow"; // Importing ChatWindow
import doc1 from "../img/doc1.jpg";  // Import the image correctly
import doc2 from "../img/doc2.jpg";  // Import the image correctly
import doc3 from "../img/doc3.jpg";  // Import the image correctly

const Consultations = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Dummy doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      profilePicture: doc1,  // Use the imported image variable directly
      specialty: "Cardiologist",
      isOnline: true,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      profilePicture: doc2,  // Use the imported image variable directly
      specialty: "Pediatrician",
      isOnline: false,
    },
    {
      id: 3,
      name: "Dr. Alice Brown",
      profilePicture: doc3,  // Use the imported image variable directly
      specialty: "Dermatologist",
      isOnline: true,
    },
  ];

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="consultations-tab p-6">
      <h2 className="text-xl font-semibold mb-4">Consultations</h2>
      
      {/* Render the list of doctor cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onSelectDoctor={handleSelectDoctor}
          />
        ))}
      </div>

      {/* If a doctor is selected, render the chat window */}
      {selectedDoctor && (
        <ChatWindow doctor={selectedDoctor} />
      )}
    </div>
  );
};

export default Consultations;
