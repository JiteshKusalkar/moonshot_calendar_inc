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
  total_landing_count: number;
  total_launch_count: number;
  map_image: string;
};

type Pad = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  location: PadLocation;
};

type LaunchServiceProvider = {
  id: number;
  name: string;
  type: string;
};

type Launch = {
  pad: Pad;
  launch_service_provider: LaunchServiceProvider;
};

type LaunchResponse = {
  results: Launch[];
  count: number;
  next: string;
  previous: string;
};

export type { Launch, LaunchResponse, LaunchRequestParams };
