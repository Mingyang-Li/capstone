import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ConfigService } from "../../services/Config.service";

export const Auth0ProviderWithHistory = ({ children }: any) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(
      appState && appState.targetUrl
        ? appState.targetUrl
        : (window.location.href = "http://localhost:3000/dashboard")
    );
  };

  return (
    <Auth0Provider
      domain={ConfigService.REACT_APP_AUTH0_DOMAIN}
      clientId={ConfigService.REACT_APP_AUTH0_CLIENT_ID}
      audience={ConfigService.REACT_APP_AUTH0_AUDIENCE}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
