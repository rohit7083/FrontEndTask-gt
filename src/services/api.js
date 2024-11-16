export const getProfiles = async () => {
  // Simulate API call to fetch profiles
  return [
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      description: 'A software engineer from NY',
      location: {
        latitude: 40.712776,
        longitude: -74.005974,
        address: 'New York, NY, USA',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      description: 'A web developer from SF',
      location: {
        latitude: 37.774929,
        longitude: -122.419418,
        address: 'San Francisco, CA, USA',
      },
    },
  ];
};

export const updateProfile = async (profile) => {
  // Simulate an API PUT request
  console.log('Updating profile:', profile);
  return profile; // Simulate API response
};

export const deleteProfile = async (id) => {
  // Simulate an API DELETE request
  console.log('Deleting profile with ID:', id);
};
