import L, { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Wrapper } from './styles';

import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapboxProps } from './types';

let DefaultIcon = L.icon({
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const styleId = process.env.REACT_APP_STYLE_ID
const userId = process.env.REACT_APP_USER_ID
const position: LatLngTuple = [51.505, -0.09];

const url = `https://api.mapbox.com/styles/v1/${userId}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`;

function Mapbox<D>(props: MapboxProps<D>) {
  return (
    <Wrapper>
      <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={url}
        />
        {props.launchPadsLocation.map(({ id, position, data }) => (
          <Marker key={id} position={position}>
            <Popup>{props.renderMessage(data)}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Wrapper>
  );
}

export default Mapbox;
