import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import App from './components/App/App'
import 'src/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
