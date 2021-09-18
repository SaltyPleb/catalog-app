import React, { useContext } from "react";
import { Context } from "../../index.js";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js";
import { observer } from "mobx-react-lite";

const Navbar = observer(() => {
  const { user } = useContext(Context);
  console.log(user);
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
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/catalog" activeStyle>
              Catalog
            </NavLink>
            <NavLink to="/contact-me" activeStyle>
              Contact us
            </NavLink>
            <NavLink
              to="/"
              activeStyle
              onClick={() => {
                user.setIsAuth(false);
              }}
            >
              Log Out
            </NavLink>{" "}
          </NavMenu>
        ) : (
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/catalog" activeStyle>
              Catalog
            </NavLink>
            <NavLink to="/contact-me" activeStyle>
              Contact us
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Sign up
            </NavLink>{" "}
            <NavBtnLink
              to="/sign-in"
              onClick={() => {
                user.setIsAuth(true);
              }}
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
