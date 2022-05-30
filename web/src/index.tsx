import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './components/auth/Auth0ProviderWithHistory';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.Fragment>,
  document.getElementById('root'),
);