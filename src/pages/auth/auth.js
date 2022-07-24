import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Context } from "../..";
import { login, registration } from "../../http/userAPI";
import { CATALOG_ROUTE, SIGNIN_ROUTE } from "../../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const locatinon = useLocation();
  const history = useHistory();
  const isLogin = locatinon.pathname === SIGNIN_ROUTE;
  const [className, setClassName] = useState(
    isLogin ? "container-si" : "container-si right-panel-active"
  );
  const onsignInClick = () => {
    className === "container-si right-panel-active"
      ? setClassName("container-si")
      : setClassName("container-si right-panel-active");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInClick = async () => {
    try {
      let data;
      data = await login(email, password);
      user.setUser(user);
      user.setIsAuth(true);
      user.setUserInfo(data);
      history.push(CATALOG_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const signUpClick = async () => {
    try {
      let data;
      data = await registration(email, password);
      user.setUser(user);
      user.setIsAuth(true);
      history.push(CATALOG_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
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
            <button type="button" className="sign_btn" onClick={signUpClick}>
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
            <button type="button" className="sign_btn" onClick={signInClick}>
              Sign In
            </button>
          </form>
        </div>

        {/* <!-- Overlay --> */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="sign_btn" onClick={onsignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="sign_btn" onClick={onsignInClick}>
                Sign Up
              </button>
              {/* need to change link after btn click */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Auth;
