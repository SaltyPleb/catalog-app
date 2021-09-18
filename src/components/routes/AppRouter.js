import React, { useContext } from "react";
import { Switch, Route, router, redirect } from "react-router-dom";
import { Context } from "../..";
import nopage from "../../pages/404/no-page";
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
      <Route path='/404' exact component={nopage}/>
    </Switch>
  );
};

export default AppRouter;
