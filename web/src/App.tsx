import { Routes, Route } from 'react-router-dom';
import { routes } from './router/Routes';

function App() {
  return (
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.component} />
        ))}
      </Routes>
  );
}

export default App;
