import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config";
import { Styles } from "../styles/styles";
import Header from "../components/Header";

const Routers = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
        <Routes>
          {routes.map((routeItem) => {
            const Component = lazy(() => import(`../pages/${routeItem.component}`));
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                element={<Component />}
              />
            );
          })}
        </Routes>  
    </Suspense>
  );
};

export default Routers;