import { LatLngTuple } from 'leaflet';
import { Launch } from '../../api/types';

function getLaunchPadsLocation(launches: Launch[]) {
  return launches.map((launch) => ({
    id: launch.pad.id,
    position: [
      Number(launch.pad.latitude),
      Number(launch.pad.longitude),
    ] as LatLngTuple,
    popupMessage: `Name: ${launch.pad.location.name}, 
    Name of pad: ${launch.pad.name}, 
    Agency: ${launch.launch_service_provider.name}`,
  }));
}

export { getLaunchPadsLocation };
