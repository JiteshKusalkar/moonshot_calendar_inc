import { QueryClient, QueryClientProvider } from 'react-query';

import Launch from './pages/Launch';
import ErrorBoundary from './components/ErrorBoundary';

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Launch />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
