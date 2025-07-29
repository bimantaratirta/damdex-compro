import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngExpression } from "leaflet";

const Map = ({ position, zoom }: { position: LatLngExpression; zoom?: number }) => {
  const handleMarkerClick = () => {
    window.open(`https://www.google.com/maps?q=${position.toString()}`, "_blank");
  };

  return (
    <MapContainer
      key={position.toString()}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", display: "block", zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        eventHandlers={{
          click: handleMarkerClick,
        }}
      />
    </MapContainer>
  );
};

export default Map;
