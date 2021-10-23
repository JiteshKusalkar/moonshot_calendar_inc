import { LatLngTuple } from 'leaflet';
import { ReactNode } from 'react';

type LaunchPadMarker = {
  id: number;
  position: LatLngTuple;
  popupMessage: ReactNode;
};

type MapboxProps = {
  launchPadsLocation: LaunchPadMarker[];
};

export type { LaunchPadMarker, MapboxProps };
