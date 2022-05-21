import React from "react";
import e403 from "../../images/error.png";
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/consts";

const Unauthorized = () => {
  return (
    <div className="un-main">
      <img className="un-main__img" src={e403}></img>
      <div className="un-main__title">
        <h1>We are Sorry...</h1>
        <div>The page you are trying to access has restricted access.</div>
        <div>Please autosize and try again.</div>
      </div>
      <div className="un-main__btns">
        <a className="btn" href={SIGNIN_ROUTE}>
          Login
        </a>
        <a className="btn" href={SIGNUP_ROUTE}>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Unauthorized;
