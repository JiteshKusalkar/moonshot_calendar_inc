import ReactMap from '../ReactMap';
import { render } from '@testing-library/react';

describe('ReactMap', () => {
  it('should render the map', () => {
    const container = render(<ReactMap />);
    expect(container).toMatchSnapshot();
  });
});
