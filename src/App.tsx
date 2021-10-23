import { QueryClient, QueryClientProvider } from 'react-query';

import Mapbox from './components/Map';
import ErrorBoundary from './components/ErrorBoundary';

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Mapbox />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
