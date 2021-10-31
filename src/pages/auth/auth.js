import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../..";
import { login, registration } from "../../http/userAPI";
import { SIGNIN_ROUTE } from "../../utils/consts";
import "./sign-in.css";

const Auth = () => {
  const { user } = useContext(Context);
  const locatinon = useLocation();
  const isLogin = locatinon.pathname === SIGNIN_ROUTE;
  const [className, setclassName] = useState(
    isLogin ? "container-si" : "container-si right-panel-active"
  );
  const onSignInClick = () => {
    className === "container-si right-panel-active"
      ? setclassName("container-si")
      : setclassName("container-si right-panel-active");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    if (isLogin) {
      const response = await login();
      console.log(response);
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <div className="login__body">
      <div className={className}>
        {/* <!-- Sign Up --> */}
        <div className="container__form container--signup">
          <form className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="input"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="input"
            />
            <button type="button" className="btn" onClick={click}>
              Sign Up
            </button>
          </form>
        </div>

        {/* <!-- Sign In --> */}
        <div className="container__form container--signin">
          <form className="form">
            <h2 className="form__title">Sign In</h2>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="input"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="input"
            />
            <a className="link">Forgot your password?</a>
            <button type="button" className="btn" onClick={click}>
              Sign In
            </button>
          </form>
        </div>

        {/* <!-- Overlay --> */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" onClick={onSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" onClick={onSignInClick}>
                Sign Up
              </button>
              {/* need to change link after btn click */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
