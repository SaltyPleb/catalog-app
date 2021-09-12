import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://www.freepnglogos.com/uploads/circle-png/up-arrow-circle-logo-png-transparent-33.png"
            width="40"
            alt="img"
          />
          <h1 className="nav-name">Salty Salty app</h1>
        </NavLink>
          <Bars />
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
          </NavLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
