import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 49.3896491,
  lng: 14.6883315,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAUf_4dIi7TaPXBgohnRLOVK4tA8lt819M">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Children components, like markers, polylines, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
