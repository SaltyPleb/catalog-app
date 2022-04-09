import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw- 1000px) / 2);
  z-index: 10;
  --border-radius: 0px 0px 15px 15px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  transform: translateX(0.75rem);
  transition: transform 200ms;

  &:before {
    content: "#";
    display: inline-block;
    width: 0.75rem;
    color: #888888;
    opacity: 0;
    transition: opacity 200ms;
  }

  &:hover {
    transform: none;
    &:before {
      opacity: 1;
    }
  }

  &.active {
    color: #15cdfc;
    :before {
      opacity: 1;
    }

    :last-child {
      :before {
        opacity: 0;
      }
    }
    :first-child {
      :before {
        opacity: 0;
      }
    }
  }
`;

export const Bars = styled(FaBars)`
  margin-top: 1vh;
  margin-right: 1vh;
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8 rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
