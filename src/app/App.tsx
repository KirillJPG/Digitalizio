import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { Layout } from './providers/Layout';
import './styles/App.scss';
import './styles/_variables.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <AppRouter />
                </Layout>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App; 