import { Launch } from '../../api/types';
import LaunchPadPopupDetails from '../../components/LaunchPadPopupDetails';
import Mapbox from '../../components/Mapbox';
import useLaunches from './useLaunches';

function LaunchPadMap() {
  const launchPadsLocation = useLaunches();
  return (
    <Mapbox<Launch>
      launchPadsLocation={launchPadsLocation}
      renderMessage={(launch) => <LaunchPadPopupDetails launch={launch} />}
    />
  );
}

export default LaunchPadMap;
