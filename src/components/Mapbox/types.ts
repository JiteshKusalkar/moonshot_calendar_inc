import { LatLngTuple } from 'leaflet';
import { ReactNode } from 'react';

type LaunchPadMarker = {
  id: string;
  position: LatLngTuple;
  popupMessage: ReactNode;
};

type MapboxProps = {
  launchPadsLocation: LaunchPadMarker[];
};

export type { LaunchPadMarker, MapboxProps };
