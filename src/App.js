import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import AppRouter from "./components/routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import Loader from "./components/loader/loader";
import { fetchDevices } from "./http/deviceAPI";
import NotificationBar from "./pages/403/NotificationBar";
import { publicRoutes } from "./components/routes/routes";

const App = observer(() => {
  const { user } = useContext(Context);
  const { device } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDevices().then((data) => device.setDeviceCardsView(data.rows));
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
          user.setUserInfo(data);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      {/* TODO: Make something with app height */}
      <Navbar />
      {user.isAuth ? null : <NotificationBar />}
      <AppRouter routes={publicRoutes} />

      {/* <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact-me' exact component={Contact}/>
        <Route path='/catalog' exact component={Catalog}/>
        <Route path='/sign-in' exact component={Signin}/>
        <Route path='/sign-up' exact component={Signup}/>
      </Switch> */}
    </Router>
  );
});

export default App;
