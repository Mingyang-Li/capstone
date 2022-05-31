import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithHistory } from "./components/auth/Auth0ProviderWithHistory";
import { routes } from "./router/Routes";
import { ConfigService } from "./services/Config.service";
import { ApolloProvider, ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@auth0/auth0-react";

const App = () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: ConfigService.REACT_APP_API_URL,
      headers: {
        Authorization: `Bearer ${ConfigService.REACT_APP_HASURA_ADMIN_SECRET}`,
      },
    }),
    cache: new InMemoryCache() as any,
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.component} />
            ))}
          </Routes>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
