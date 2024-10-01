import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App/App';
import 'src/styles/index.scss';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
