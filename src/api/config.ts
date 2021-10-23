import axios from 'axios';
import { LaunchRequestParams } from './types';

function get(endpoint: string, parameters?: LaunchRequestParams) {
  const url = `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_URL_VER}/${endpoint}`;
  const params = {
    include_suborbital: true,
    is_crewed: false,
    related: false,
    ...parameters,
  };

  return axios({ method: 'GET', url, params });
}

export { get };
