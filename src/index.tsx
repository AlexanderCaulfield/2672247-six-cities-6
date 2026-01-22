import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/app/app';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App offers={offers} />
  </StrictMode>
);
