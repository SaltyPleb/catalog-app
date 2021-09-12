import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements.js';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 className="nav-name">logo</h1>
          <h1 className="nav-name">Name</h1>
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
