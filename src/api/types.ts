type LaunchRequestParams = {
  limit: number;
  offset: number;
  include_suborbital?: boolean;
  is_crewed?: boolean;
  related?: boolean;
  window_start__gt?: string;
  window_end__gt?: string;
};

type PadLocation = {
  id: number;
  country_code: string;
  name: string;
  url: string;
  total_landing_count: string;
  total_launch_count: number;
  map_image: string;
};

type Pad = {
  id: string;
  latitude: string;
  longitude: string;
  location: PadLocation;
};

type Launch = {
  pad: Pad;
};

type LaunchResponse = {
  results: Launch[];
  count: number;
  next: string;
  previous: string;
};

export type { Launch, LaunchResponse, LaunchRequestParams };
