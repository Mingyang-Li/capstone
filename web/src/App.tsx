import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithHistory } from "./components/auth/Auth0ProviderWithHistory";
import { routes } from "./router/Routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/ApolloClient";

const App = () => {
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
