import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useQuery, UseQueryOptions } from 'react-query';
import { getLaunch } from '../../api/launch';
import { LaunchResponse } from '../../api/types';
import { LaunchPadMarker } from '../../components/Mapbox/types';
import { getLaunchPadsLocation } from './utils';

function useLaunches(config?: UseQueryOptions<AxiosResponse<LaunchResponse>>) {
  const [state, setState] = useState<LaunchPadMarker[]>([]);
  useQuery<AxiosResponse<LaunchResponse>>('launch', getLaunch, {
    refetchOnWindowFocus: false,
    ...config,
    onSuccess: (response) => {
      setState(getLaunchPadsLocation(response?.data.results || []));
      config?.onSuccess?.(response);
    },
  });

  return state;
}

export default useLaunches;
