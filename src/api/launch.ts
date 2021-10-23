import { AxiosPromise } from 'axios';
import { get } from './config';
import { LaunchResponse } from './types';

function getLaunch() {
  const endpoint = 'launch';

  return get(endpoint, {
    limit: 10,
    offset: 10,
    window_start__gt: '2021-10-04T00:00:00Z',
  }) as AxiosPromise<LaunchResponse>;
}

export { getLaunch };
