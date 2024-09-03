import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccountSetupPage = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleAccountSetup = () => {
    // Save the user details to your backend or Firebase
    console.log("Account setup complete:", { username, bio });
    navigate("/movies"); // Redirect to movie dashboard
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Account Setup</h2>
        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          onClick={handleAccountSetup}
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
};

