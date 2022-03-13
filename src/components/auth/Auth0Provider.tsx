import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const Auth0ProviderWithHistory = ({ children }: any) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'not_provided';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'not_provided';
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE || 'not_provided';

  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
