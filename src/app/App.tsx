import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { Layout } from './providers/Layout';
import './styles/App.scss';
import './styles/_variables.scss';
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
}

export default App; 