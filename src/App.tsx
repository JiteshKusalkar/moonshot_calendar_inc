import { QueryClient, QueryClientProvider } from 'react-query';

import LaunchPadMap from './pages/LaunchPadMap';
import ErrorBoundary from './components/ErrorBoundary';

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LaunchPadMap />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
