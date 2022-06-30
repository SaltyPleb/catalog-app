import React, { useContext } from "react";
import { Context } from "../../index.js";
import jwt_decode from "jwt-decode";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // eslint-disable-next-line
  NavBtn,
  NavBtnLink,
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
} from "../../utils/consts.js";

const Navbar = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1786/1786578.png"
            //src="https://www.freepnglogos.com/uploads/circle-png/up-arrow-circle-logo-png-transparent-33.png"
            // src={require('../../images/hardware.svg')}
            width="40"
            alt="img"
          />
          <h1 classNameName="nav-name">Salty Salty app</h1>
        </NavLink>
        <Bars />

        {user.isAuth ? (
          jwt_decode(localStorage.getItem("token")).role === "ADMIN" ? (
            <NavMenu>
              <NavLink to={ADMIN_ROUTE}>Admin</NavLink>
              <NavLink to={ABOUT_ROUTE}>About</NavLink>
              <NavLink to={CATALOG_ROUTE}>Catalog</NavLink>
              <NavLink to={CONTACT_ROUTE}>Contact us</NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  user.setIsAuth(false);
                  localStorage.setItem("token", "");
                }}
              >
                Log Out
              </NavLink>
            </NavMenu>
          ) : (
            <NavMenu>
              <NavLink to={ABOUT_ROUTE}>About</NavLink>
              <NavLink to={CATALOG_ROUTE}>Catalog</NavLink>
              <NavLink to={CONTACT_ROUTE}>Contact us</NavLink>
              <NavLink
                to="/"
                onClick={() => {
                  user.setIsAuth(false);
                  localStorage.setItem("token", "");
                }}
              >
                Log Out
              </NavLink>
            </NavMenu>
          )
        ) : (
          <div className="cons">
            <ul className="top_nav top_navbar-nav">
              <li>
                <a href="#!">Services</a>
                <ul className="innernav">
                  <li>
                    <Link to={CONTACT_ROUTE}>Contact us</Link>
                  </li>
                  <li>
                    <a href="#!">Test Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Test Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Test Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Test Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Test Link 1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Contact us</a>
              </li>
            </ul>
          </div>
        )}

        {/* <NavBtn>
          
        </NavBtn> */}
      </Nav>
    </>
  );
});

export default Navbar;
