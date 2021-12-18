import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';

import App from './app.jsx';
import "./app.css";
import Dashboard from './components/dashboard.jsx';
import Preferences from './components/preferences.jsx';
import RandomUnicode from './components/randomUnicode.jsx'

export const history = createBrowserHistory();

// const onRedirectCallback = (appState: AppState) => {
//   history.replace(appState?returnTo || window.location.pathname);
// };


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
          <Route path="randomUnicode" element={<RandomUnicode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  rootElement
);
