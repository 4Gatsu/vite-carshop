import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
<script
  src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"
  async
  defer
></script>;

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 36.187946,
    lng: -115.170705,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  ) : null;
};

export default Map;
