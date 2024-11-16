import React, { useState } from 'react';

const Admin = ({ profiles, onUpdateProfile, onDeleteProfile, onAddProfile }) => {
  // State for managing profile form data
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    latitude: 0,
    longitude: 0,
    address: '',
  });

  // State for managing which profile is being edited
  const [editingProfile, setEditingProfile] = useState(null);

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // If we're in edit mode, update the profile
    if (editingProfile) {
      onUpdateProfile({ ...editingProfile, ...newProfile });
    } else {
      // Otherwise, add a new profile
      onAddProfile(newProfile);
    }

    // Reset the form and state after submission
    setNewProfile({
      name: '',
      photo: '',
      description: '',
      latitude: 0,
      longitude: 0,
      address: '',
    });
    setEditingProfile(null);
  };

  const handleDelete = (id) => {
    onDeleteProfile(id);  // Trigger delete from parent component
  };

  const handleEdit = (profile) => {
    setNewProfile(profile); // Populate the form with the profile data
    setEditingProfile(profile); // Set the profile as being edited
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{editingProfile ? 'Edit Profile' : 'Add New Profile'}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={newProfile.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="photo"
          value={newProfile.photo}
          onChange={handleChange}
          placeholder="Photo URL"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={newProfile.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="latitude"
          value={newProfile.latitude}
          onChange={handleChange}
          placeholder="Latitude"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="longitude"
          value={newProfile.longitude}
          onChange={handleChange}
          placeholder="Longitude"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={newProfile.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingProfile ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Profile List</h2>
        <ul className="space-y-4">
          {profiles.map((profile) => (
            <li key={profile.id} className="border p-4 rounded">
              <div className="flex justify-between items-center">
                <span>{profile.name}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(profile)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(profile.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
