import { get } from "./config";

function getLaunch() {
  const endpoint = '/launch';

  return get(endpoint);
}

export { getLaunch };
