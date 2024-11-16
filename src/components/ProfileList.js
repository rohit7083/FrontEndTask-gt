// // src/components/ProfileList.jsx
// import React, { useState } from 'react';
// import MapView from './MapView';
// import { Link } from 'react-router-dom';

// const ProfileList = ({ profiles }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredProfiles = profiles.filter((profile) => 
//     profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     profile.location.address.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2 className="text-3xl font-semibold text-center py-4">Profile List</h2>
      
//       {/* Search Bar */}
//       <div className="mb-4 text-center">
//         <input
//           type="text"
//           className="border p-2 rounded-md w-full sm:w-1/2"
//           placeholder="Search by name or location"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>
      
//       {/* Profiles */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProfiles.map((profile) => (
//           <div key={profile.id} className="border p-4 rounded-lg shadow-md flex flex-col items-center">
//             <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mb-4" />
//             <span className="font-semibold">{profile.name}</span>
//             <p className="text-sm text-center text-gray-500">{profile.description}</p>
            
//             {/* Summary Button */}
//             <Link to={`/profile/${profile.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Show Map
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileList;


import React, { useState } from 'react';
import MapView from './MapView';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter profiles by name or location address
  const filteredProfiles = profiles.filter((profile) => 
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center py-4">Profile List</h2>
      
      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="border p-2 rounded-md w-full sm:w-1/2"
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      {/* Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="border p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full mb-4" />
            <span className="font-semibold">{profile.name}</span>
            <p className="text-sm text-center text-gray-500">{profile.description}</p>
            
            {/* Summary Button */}
            <Link to={`/profile/${profile.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Show Map
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
