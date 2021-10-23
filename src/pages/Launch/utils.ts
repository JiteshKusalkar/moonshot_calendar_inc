import { LatLngTuple } from 'leaflet';
import { Launch } from '../../api/types';

function getLaunchPadsLocation(launches: Launch[]) {
  return launches.map((launch) => ({
    id: launch.pad.id,
    position: [
      Number(launch.pad.latitude),
      Number(launch.pad.longitude),
    ] as LatLngTuple,
    popupMessage: launch.pad.location.name,
  }));
}

export { getLaunchPadsLocation };
