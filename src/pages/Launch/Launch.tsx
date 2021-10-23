import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { getLaunch } from '../../api/launch';
import { LaunchResponse } from '../../api/types';
import Mapbox from '../../components/Mapbox';
import { getLaunchPadsLocation } from './utils';

function LaunchPadMap() {
  const { data: response } = useQuery<AxiosResponse<LaunchResponse>>(
    'launch',
    getLaunch,
    {
      refetchOnWindowFocus: false,
    }
  );

  const launchPadsLocation = getLaunchPadsLocation(response?.data.results || []);

  return <Mapbox launchPadsLocation={launchPadsLocation} />;
}

export default LaunchPadMap;
