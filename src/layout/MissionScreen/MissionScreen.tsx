import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import GoToNavigationButton from './GoToNavigationButton';
import MissionProgressModal from './MissionProgressModal';
import useGoogleMaps from 'hooks/useGoogleMaps';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};
  
const generateRandomPoints = (center: { lat: any; lng: any; }, radius: number, count: number): { lat: any; lng: any;}[] => {
    let points = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = Math.sqrt(Math.random()) * radius; // Random distance within the circle
      const latitude = center.lat + (distance * Math.cos(angle)) / 111111; // Convert distance from meters to degrees
      const longitude = center.lng + (distance * Math.sin(angle)) / (111111 * Math.cos(center.lat * (Math.PI / 180))); // Adjust for the Earth's curvature
      points.push({ lat: latitude, lng: longitude });
    }
    return points;
  };

const MyLocationMap: React.FC = () => {
      const { isLoaded, loadError } = useGoogleMaps();
    
      const [myLocation, setMyLocation] = useState<{ lat: any; lng: any;} | null>(null);
      const [randomLocations, setRandomLocations] = useState<{ lat: any; lng: any;}[]>([]);
      const [directionsResponse, setDirectionsResponse] = useState<any | null>(null);

        // Define icons after confirming the API is loaded
    let userLocationIcon;
    let randomLocationIcons: string | any[];

    if (isLoaded) {
        userLocationIcon = {
          url: 'https://raw.githubusercontent.com/gudzineviciusv/eth-london2024/96f271b9c0394b37abdbcc86153d7451c2831477/src/assets/images/icons/3.png', // Replace with your icon URL
          scaledSize: new window.google.maps.Size(40, 40),
        };      

        randomLocationIcons = [
          {
            url: 'https://raw.githubusercontent.com/gudzineviciusv/eth-london2024/96f271b9c0394b37abdbcc86153d7451c2831477/src/assets/images/icons/4.png', // Replace with your icon URL
            scaledSize: new window.google.maps.Size(50, 50),
          },
          {
            url: 'https://raw.githubusercontent.com/gudzineviciusv/eth-london2024/7c99186f262fc1a2bbd089c22505155fd9d7f32e/src/assets/images/icons/target.svg', // Replace with your icon URL
            scaledSize: new window.google.maps.Size(50, 50),
          }
        ];
    }
    
      useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
              const center = { lat: coords.latitude, lng: coords.longitude };
              setMyLocation(center);
              setRandomLocations(generateRandomPoints(center, 1000, 2)); // Generate 2 random points within 1000 meters
            },
            (error) => {
              console.error('Error fetching the current location', error);
            }
          );
        }
      }, []);

      useEffect(() => {
        if (!myLocation || !randomLocations.length) return;
    
        const directionsService = new window.google.maps.DirectionsService();
    
        directionsService.route(
          {
            origin: myLocation,
            destination: randomLocations[0],
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirectionsResponse(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          },
        );
      }, [myLocation, randomLocations]);
    
      if (loadError) {
        return (<>Map cannot be loaded right now, sorry.</>);
      }
    
      return isLoaded ? (
        <>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={myLocation || { lat: 0, lng: 0 }}
        zoom={15}
      >
        {myLocation && (
          <Marker
            position={myLocation}
            icon={userLocationIcon} // Use custom icon for user's location
          />
        )}
        {randomLocations && (randomLocations.map((location, index) => (
          <Marker
            key={index}
            position={location}
            icon={randomLocationIcons[index % randomLocationIcons.length]} // Cycle through custom icons for random locations
          />)
        ))}
          {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
      </GoogleMap>
      <MissionProgressModal />
      <GoToNavigationButton />
      </>
    ) : <></>;
    };

export default MyLocationMap;