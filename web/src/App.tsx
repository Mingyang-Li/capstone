import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithHistory } from "./components/auth/Auth0ProviderWithHistory";
import { routes } from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.component} />
          ))}
        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

export default App;
