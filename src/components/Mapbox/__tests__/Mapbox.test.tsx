import Mapbox from '../Mapbox';
import { render } from '@testing-library/react';
import { LaunchPadMarker } from '../types';

describe('ReactMap', () => {
  it('should render the map', () => {
    const launchPadsLocation: LaunchPadMarker[] = [
      { id: '1', position: [1, 1], popupMessage: 'Message' },
    ];
    const container = render(
      <Mapbox launchPadsLocation={launchPadsLocation} />
    );
    expect(container).toMatchSnapshot();
  });
});
