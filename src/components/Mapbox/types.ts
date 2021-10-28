import { LatLngTuple } from 'leaflet';
import { ReactNode } from 'react';
import { Launch } from '../../api/types';

type LaunchPadMarker<D = Launch> = {
  id: number;
  position: LatLngTuple;
  data?: D;
};

type MapboxProps<D> = {
  launchPadsLocation: LaunchPadMarker<D>[];
  renderMessage: (launch?: D) => ReactNode;
};

export type { LaunchPadMarker, MapboxProps };
