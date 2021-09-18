import React, { useContext } from "react";
import { Switch, Route, router, redirect } from "react-router-dom";
import { Context } from "../..";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Switch>
      {/* {user.isAuth && publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))} */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Switch>
  );
};

export default AppRouter;
