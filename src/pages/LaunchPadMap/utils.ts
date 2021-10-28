import { LatLngTuple } from 'leaflet';
import { Launch } from '../../api/types';
import { LaunchPadMarker } from '../../components/Mapbox/types';

function getLaunchPadsLocation(launches: Launch[]): LaunchPadMarker<Launch>[] {
  return launches.map((launch) => ({
    id: launch.pad.id,
    position: [
      Number(launch.pad.latitude),
      Number(launch.pad.longitude),
    ] as LatLngTuple,
    data: launch,
  }));
}

export { getLaunchPadsLocation };
