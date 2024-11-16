// src/components/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ profile, onShowMap, onShowSummary }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold">{profile.name}</h2>
      <p className="text-gray-600 mb-4">{profile.description}</p>
      <div className="flex space-x-4">
        {/* Summary Button */}
        <button
          onClick={() => onShowSummary(profile)} // Call onShowSummary for displaying the map
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Summary
        </button>
        {/* Show Map Button */}
        <button
          onClick={() => onShowMap(profile)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Show Map
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
