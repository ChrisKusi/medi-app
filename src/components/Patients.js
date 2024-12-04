import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Firebase db
import { collection, getDocs } from "firebase/firestore"; // Firestore methods

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const patientsCollection = collection(db, "patients");
      const patientSnapshot = await getDocs(patientsCollection);
      const patientList = patientSnapshot.docs.map(doc => doc.data());
      setPatients(patientList);
    };

    fetchPatients();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Patient Consultations</h3>

      <div className="mb-4">
        {patients.map((patient, index) => (
          <div key={index} className="p-4 border border-gray-300 mb-4 rounded-lg">
            <h4 className="font-semibold">{patient.name}</h4>
            <p>{patient.message}</p>
          </div>
        ))}
      </div
