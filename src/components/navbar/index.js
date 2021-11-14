import React, { useContext } from "react";
import { Context } from "../../index.js";
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
import { ABOUT_ROUTE, ADMIN_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/consts.js";

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
          <h1 className="nav-name">Salty Salty app</h1>
        </NavLink>
        <Bars />

        {user.isAuth ? (
          <NavMenu>
            <NavLink to={ADMIN_ROUTE} activeStyle>
              Admin
            </NavLink>
            <NavLink to={ABOUT_ROUTE} activeStyle>
              About
            </NavLink>
            <NavLink to={CATALOG_ROUTE} activeStyle>
              Catalog
            </NavLink>
            <NavLink to={CONTACT_ROUTE} activeStyle>
              Contact us
            </NavLink>
            <NavLink
              to="/"
              activeStyle
              onClick={() => {
                user.setIsAuth(false);
                localStorage.setItem('token', '')
              }}
            >
              Log Out
            </NavLink>{" "}
          </NavMenu>
        ) : (
          <NavMenu>
            {/* <NavLink to={ADMIN_ROUTE} activeStyle>
              Admin
            </NavLink> */}
            <NavLink to={ABOUT_ROUTE} activeStyle>
              About
            </NavLink>
            <NavLink to={CATALOG_ROUTE} activeStyle>
              Catalog
            </NavLink>
            <NavLink to={CONTACT_ROUTE} activeStyle>
              Contact us
            </NavLink>
            <NavLink to={SIGNUP_ROUTE} activeStyle>
              Sign up
            </NavLink>{" "}
            <NavBtnLink
              to={SIGNIN_ROUTE}
              // onClick={() => {
              //   user.setIsAuth(true);
              // }}
            >
              Sign In
            </NavBtnLink>
          </NavMenu>
        )}

        {/* <NavBtn>
          
        </NavBtn> */}
      </Nav>
    </>
  );
});

export default Navbar;
