import React from 'react';
import ReactDOM from 'react-dom/client';

// Style.
import '~/assets/styles/index.scss';

import App from './App';
import { ColorModeProvider } from '~/store/providers/colorMode';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorModeProvider>
  </React.StrictMode>,
);
