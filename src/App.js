import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "configs/router/routeConfig";
import Login from "pages/Login";

const App = () => {
  return (
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        <Route path="/" element={<Login />} />
        {routeConfig.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default App;
