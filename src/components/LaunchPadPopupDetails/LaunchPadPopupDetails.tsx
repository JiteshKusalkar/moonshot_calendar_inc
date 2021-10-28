import { Label, ReadonlyField, Value, Wrapper } from './styles';
import { LaunchPadPopupDetailsProps } from './types';

function LaunchPadPopupDetails({ launch }: LaunchPadPopupDetailsProps) {
  return (
    <Wrapper>
      <ReadonlyField>
        <Label>Name:</Label>
        <Value>{launch?.pad.location.name || '-'}</Value>
      </ReadonlyField>
      <ReadonlyField>
        <Label>Name of pad:</Label>
        <Value>{launch?.pad.name || '-'}</Value>
      </ReadonlyField>
      <ReadonlyField>
        <Label>Agency:</Label>
        <Value>{launch?.launch_service_provider.name || '-'}</Value>
      </ReadonlyField>
    </Wrapper>
  );
}

export default LaunchPadPopupDetails;
