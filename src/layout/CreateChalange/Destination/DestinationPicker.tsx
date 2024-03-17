import React, { useEffect, useState } from 'react';
import { GoogleMap, Circle, useJsApiLoader } from '@react-google-maps/api';
import { JSX } from 'react/jsx-runtime';
import ReactSlider from 'react-slider';

import '../../../styles/modules/Slider.module.css'; // Import the custom CSS


interface Props {
    apiKey: string;
}

const containerStyle = {
  width: '100%',
  height: '300px',
  padding: '20px',
};

const radiusContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    };

const radiusItemStyle = {
    color: 'white',
    background: 'grey',
    fontSize: '22px',
    cursor: 'pointer',
    borderRadius: '12px',

};

const DestinationPicker: React.FC<Props> = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const [center, setCenter] = useState({ lat: -34.397, lng: 150.644 }); // Default location
  const [radius, setRadius] = useState([500, 1000]); // Radii for circles

  useEffect(() => {
    // Function to get the current location of the device
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location: ", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getCurrentLocation();
  }, []);


  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Outer circle */}
        <Circle
          center={center}
          radius={radius[1]}
          options={{
            fillColor: '#AA0000',
            fillOpacity: 0.2,
            strokeColor: '#AA0000',
            strokeOpacity: 0.5,
            strokeWeight: 2,
          }}
        />
        {/* Inner circle */}
        <Circle
          center={center}
          radius={radius[0]}
          options={{
            fillColor: '#FFFFFF',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeOpacity: 0,
            strokeWeight: 0,
          }}
        />
      </GoogleMap>
      <div style={radiusContainerStyle}>
        <div style={radiusItemStyle}>{radius[0]}</div>
        <div>-</div>
        <div style={radiusItemStyle}>{radius[1]}</div>
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[500, 1000]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state: { valueNow: any; }) => `Thumb value ${state.valueNow}`}
        renderThumb={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, state: { valueNow: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
        onChange={(value) => setRadius(value)}
        min={100}
        max={5000}
      />
    </div>
  ) : <></>;
};

export default DestinationPicker;
