import App from './components/App';
import ReactDOMClient from 'react-dom/client';

const roots = ReactDOMClient.createRoot(document.getElementById('root'));
roots.render(
    <App />
)
