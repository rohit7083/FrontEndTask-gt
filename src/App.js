import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import Admin from './pages/Admin';
import { getProfiles, updateProfile, deleteProfile } from './services/api';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch the profiles from API or local storage (mock data)
    const fetchProfiles = async () => {
      const data = await getProfiles();
      setProfiles(data);
    };
    fetchProfiles();
  }, []);

  // Handle profile updates
  const handleUpdateProfile = (updatedProfile) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };

  // Handle profile deletion
  const handleDeleteProfile = async (id) => {
    await deleteProfile(id); // API call to delete
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
  };

  // Handle adding new profile
  const handleAddProfile = (newProfile) => {
    const newProfileWithId = { ...newProfile, id: profiles.length + 1 }; // Simulate ID generation
    setProfiles([...profiles, newProfileWithId]);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={<ProfileList profiles={profiles} />}
          />
          <Route
            path="/profile/:id"
            element={<ProfileDetails profiles={profiles} />}
          />
          <Route
            path="/admin"
            element={
              <Admin
                profiles={profiles}
                onUpdateProfile={handleUpdateProfile}
                onDeleteProfile={handleDeleteProfile}
                onAddProfile={handleAddProfile}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
