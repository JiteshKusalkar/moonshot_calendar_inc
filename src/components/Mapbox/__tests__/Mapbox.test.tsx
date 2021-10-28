import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Launch } from '../../../api/types';
import LaunchPadPopupDetails from '../../LaunchPadPopupDetails';
import Mapbox from '../Mapbox';
import { MapboxProps } from '../types';

function MockFunction(props: any) {
  return <div>{props.children}</div>;
}

jest.mock('react-leaflet', () => ({
  MapContainer: MockFunction,
  Marker: MockFunction,
  Popup: MockFunction,
  TileLayer: MockFunction,
}));

describe('LaunchPadMap', () => {
  const launch = {
    launch_service_provider: {
      id: 115,
      name: 'Arianespace',
      type: 'Commercial',
    },
    pad: {
      id: 83,
      name: 'Cosmodrome Site 1S',
      latitude: '51.884395',
      longitude: '128.333932',
      location: {
        id: 18,
        url: 'https://lldev.thespacedevs.com/2.2.0/location/18/',
        name: 'Vostochny Cosmodrome, Siberia, Russian Federation',
        country_code: 'RUS',
        map_image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_18_20200803142401.jpg',
        total_launch_count: 11,
        total_landing_count: 0,
      },
    },
  };

  const props: MapboxProps<Launch> = {
    launchPadsLocation: [
      {
        id: 83,
        position: [51.884395, 128.333932],
        data: launch,
      }
    ],
    renderMessage: launchProp => <LaunchPadPopupDetails launch={launchProp} />
  }
  const { container } = render(<Mapbox {...props} />);

  it('should render the component', () => {
    expect(container).toMatchSnapshot();
  });
});
