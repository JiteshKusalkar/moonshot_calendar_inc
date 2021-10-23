import Mapbox from '../../components/Mapbox';
import useLaunches from './useLaunches';

function LaunchPadMap() {
  const launchPadsLocation = useLaunches();
  return <Mapbox launchPadsLocation={launchPadsLocation} />;
}

export default LaunchPadMap;
