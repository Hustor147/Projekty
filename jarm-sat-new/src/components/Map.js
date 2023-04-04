import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 49.3666783,
  lng: 14.5741936,
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAUf_4dIi7TaPXBgohnRLOVK4tA8lt819M"
      language="cs"
      region="CZ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          mapTypeControl: true,
          mapTypeControlOptions: { style: 2 },
        }}
      >
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
