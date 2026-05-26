import '@edifice.io/bootstrap/dist/index.css';
import { EdificeClientProvider, EdificeThemeProvider } from '@edifice.io/react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './i18n';
import { EmbedContext } from './contexts/EmbedContext';
import { basename as defaultBasename, router } from './routes';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      if (error === '0090') window.location.replace('/auth/login');
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2,
    },
  },
});

interface AppProps {
  basename?: string;
  headless?: boolean;
}

export default function App({
  basename = defaultBasename,
  headless = false,
}: AppProps) {
  return (
    <EmbedContext.Provider value={{ headless }}>
      <QueryClientProvider client={queryClient}>
        <EdificeClientProvider params={{ app: 'collaborativewall' }}>
          <EdificeThemeProvider>
            <RouterProvider router={router(queryClient, basename)} />
          </EdificeThemeProvider>
        </EdificeClientProvider>
      </QueryClientProvider>
    </EmbedContext.Provider>
  );
}
