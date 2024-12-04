import React, { useState, useEffect } from "react";
import { FaSave, FaEdit } from "react-icons/fa"; // Icons for saving/editing
import { auth, db } from "../firebase"; // Firebase auth and db
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Firestore methods

const Profile = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licenseCode: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchDoctorData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDoctorData(docSnap.data());
          setFormData({
            name: docSnap.data().name,
            email: docSnap.data().email,
            phone: docSnap.data().phone,
            licenseCode: docSnap.data().licenseCode,
          });
        }
      }
    };
    fetchDoctorData();
  }, []);

  const handleSave = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = auth.currentUser;
    if (user) {
      try {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
          ...formData,
          password: password || doctorData.password, // Save password if updated
        });
        setIsEditing(false);
        alert("Profile updated successfully.");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  if (!doctorData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Profile</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={!isEditing}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">License Code</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
          value={formData.licenseCode}
          onChange={(e) => setFormData({ ...formData, licenseCode: e.target.value })}
          disabled={!isEditing}
        />
      </div>

      {isEditing ? (
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          <FaSave className="mr-2" /> Save Changes
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <FaEdit className="mr-2" /> Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;
