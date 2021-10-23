import { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Wrapper } from './styles';

const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const position: LatLngTuple = [51.505, -0.09];

// mapbox://styles/reet48/ckdaqo17l1gcs1iqgvf6rp9in

const url = `https://api.mapbox.com/styles/v1/reet48/ckdaqo17l1gcs1iqgvf6rp9in/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`;
// const url = "https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=pk.eyJ1IjoicmVldDQ4IiwiYSI6ImNrZDJ0eWY1dzBwdDQydG53b2JzZ29najcifQ.UxsD6plUVgdByloAwfD27w";

function Mapbox() {
  return (
    <Wrapper>
      <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={url}
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
}

export default Mapbox;
