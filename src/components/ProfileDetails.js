import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MapView from './MapView';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  // Check if the profile is not found
  if (!profile) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="text-red-500 font-semibold">Profile not found</p>
        <Link to="/" className="text-blue-500">Back to Profiles</Link>
      </div>
    );
  }

  // Safeguard interests, if undefined, use an empty array
  const interests = Array.isArray(profile.interests) ? profile.interests : [];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <Link to="/" className="text-red-500 font-semibold mb-4 inline-block">Back to Profiles</Link>
      <div className="text-center">
        <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-2xl font-semibold">{profile.name}</h2>
        <p className="text-gray-700">{profile.description}</p>
        <p className="text-gray-500 mt-2">Contact: {profile.contact}</p>
        <p className="text-gray-500 mt-2">
          Interests: {interests.length > 0 ? interests.join(', ') : 'No interests available'}
        </p>
      </div>

      {/* Display map */}
      <MapView profile={profile} />
    </div>
  );
};

export default ProfileDetails;
