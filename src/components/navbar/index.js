import React, { useContext } from "react";
import { Context } from "../../index.js";
import jwt_decode from "jwt-decode";
import {
  Nav,
  NavLink,
  Bars,
  // eslint-disable-next-line
} from "./NavbarElements.js";
import { observer } from "mobx-react-lite";
import { NavLink as Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CATALOG_ROUTE,
  CONTACT_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  CATALOG_CONSTRUCTOR,
  CATALOG_LIKES,
  CATALOG_HISTORY,
} from "../../utils/consts.js";

const Navbar = observer(() => {
  const { user } = useContext(Context);
  const isAuth = user.isAuth;
  const isAdmin = isAuth
    ? jwt_decode(localStorage.getItem("token")).role === "ADMIN"
    : false;

  return (
    <Nav>
      <NavLink to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1786/1786578.png"
          width="40"
          alt="img"
        />
        <h1 classNameName="nav-name">Salty Salty app</h1>
      </NavLink>
      <Bars />

      <div className="cons">
        <ul className="top_nav top_navbar-nav">
          <li>
            <a href="#!">Services</a>
            <ul className="innernav">
              <li>
                <Link to={CATALOG_ROUTE}>Catalog</Link>
              </li>
              <li>
                <Link to={CATALOG_CONSTRUCTOR}>Constructor</Link>
              </li>
              <li>
                <Link to={CATALOG_LIKES}>Favorite</Link>
              </li>
              <li>
                <Link to={CATALOG_HISTORY}>History</Link>
              </li>
            </ul>
          </li>
          {isAdmin ? (
            <li>
              <Link to={ADMIN_ROUTE}>Admin</Link>
            </li>
          ) : null}
          <li>
            <Link to={ABOUT_ROUTE}>About</Link>
          </li>
          <li>
            <Link to={CONTACT_ROUTE}>Contact us</Link>
          </li>
          <div className="auth_btns">
            {isAuth ? (
              <Link
                to="/"
                onClick={() => {
                  user.setIsAuth(false);
                  localStorage.setItem("token", "");
                }}
              >
                Log Out
              </Link>
            ) : (
              <>
                <Link
                  to={SIGNIN_ROUTE}
                  onClick={() => {
                    // user.setIsAuth(true);
                  }}
                >
                  Log in
                </Link>
                <Link to={SIGNUP_ROUTE} activeStyle>
                  Sign up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </Nav>
  );
});

export default Navbar;
