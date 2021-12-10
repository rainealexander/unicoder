import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app.jsx';
import "./app.css";
import Dashboard from './components/dashboard.js';
import Preferences from './components/preferences.js';

const rootElement = document.getElementById('root');
render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_ID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  rootElement
);
