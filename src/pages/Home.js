// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProfileList from '../components/ProfileList';
import { getProfiles } from '../services/api';

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await getProfiles();
      setProfiles(data);
    };
    fetchProfiles();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profiles</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default Home;
