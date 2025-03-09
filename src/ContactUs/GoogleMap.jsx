// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "100%",
//   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
//   overflow: "hidden",
// };

// const center = {
//   lat: 37.3753,  // Change this to your company's latitude
//   lng: -121.963, // Change this to your company's longitude
// };

// const options = [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#212121"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#212121"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.country",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.locality",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#181818"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1b1b1b"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#2c2c2c"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#8a8a8a"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#373737"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#3c3c3c"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#4e4e4e"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#000000"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#3d3d3d"
//       }
//     ]
//   }
// ]

// const mapOptions = {
//   styles: options, // Apply dark mode styling
//   disableDefaultUI: fal, // Remove all default UI controls
//   zoomControl: false, // Hide zoom buttons
//   streetViewControl: false, // Hide Street View
//   mapTypeControl: false, // Hide map type selector
//   fullscreenControl: false, // Hide full-screen button
//   scrollwheel: false, // Disable scroll-to-zoom
//   draggable: false, // Disable panning
// };

// const GoogleMapComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyADPj_B93M0VKwc_WoRAlxM9HdRGCW9Mio">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} options={{ styles: mapOptions }}>
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define the map container style
const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
};

// Initial US view
const initialCenter = {
  lat: 39.8283, // Approximate center of the US
  lng: -98.5795,
};

// Target business location
const finalCenter = {
  lat: 37.3753, // Replace with your company's latitude
  lng: -121.963, // Replace with your company's longitude
};

// Dark mode map styling
const options = [
  { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
  { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#2c2c2c" }] },
  { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#373737" }] },
  { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#3c3c3c" }] }
];

// Custom map options (Removing unnecessary UI)
const mapOptions = {
  styles: options,
  disableDefaultUI: true,
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  scrollwheel: false,
  draggable: false,
};

const GoogleMapComponent = () => {
  const [zoom, setZoom] = useState(3); // Start zoomed out at US level
  const [map, setMap] = useState(null); // Store the map instance

  useEffect(() => {
    if (map) {
      let currentZoom = 3;
      const zoomInterval = setInterval(() => {
        if (currentZoom < 15) {
          currentZoom += 0.5; // Smoothly increase zoom level
          map.setZoom(currentZoom);
        } else {
          clearInterval(zoomInterval);
        }
      }, 200); // Step zoom every 200ms (2 seconds total)
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyADPj_B93M0VKwc_WoRAlxM9HdRGCW9Mio">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={finalCenter}
        zoom={zoom}
        options={mapOptions}
        onLoad={(map) => setMap(map)} // Store map instance for zoom control
      >
        {/* Marker for the business location */}
        <Marker position={finalCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;