import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapView = ({ profile }) => {
  const { latitude, longitude, address } = profile.location || {};  // Safeguard against undefined location
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Simulate map loading
  }, []);

  // Ensure address is defined before use
  const safeAddress = address || "Address not available";  // Provide fallback text if address is undefined

  return (
    <div className="mt-8">
      {loading && <div className="text-center">Loading Map...</div>}

      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: latitude, lng: longitude }}
          zoom={13}
        >
          <Marker position={{ lat: latitude, lng: longitude }} onClick={() => setSelected(true)}>
            {selected && (
              <InfoWindow position={{ lat: latitude, lng: longitude }} onCloseClick={() => setSelected(false)}>
                <div>{safeAddress}</div>  {/* Use safeAddress here */}
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;
