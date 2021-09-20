import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../..";
import { SIGNIN_ROUTE } from "../../utils/consts";
import "./sign-in.css";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const locatinon = useLocation();
  const isLogin = locatinon.pathname === SIGNIN_ROUTE;
  const [className, setclassName] = useState(
    isLogin ? "container" : "container right-panel-active"
  );
  const onSignInClick = () => {
    className === "container right-panel-active"
      ? setclassName("container")
      : setclassName("container right-panel-active");
  };

  return (
    <div className="login__body">
      <div className={className}>
        {/* <!-- Sign Up --> */}
        <div className="container__form container--signup">
          <form className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button
              className="btn"
              onClick={() => {
                user.setIsAuth(true);
              }}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* <!-- Sign In --> */}
        <div className="container__form container--signin">
          <form className="form">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <a className="link">Forgot your password?</a>
            <button
              className="btn"
              onClick={() => {
                user.setIsAuth(true);
              }}
            >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Auth;
