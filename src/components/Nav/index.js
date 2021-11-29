import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { Fade } from "react-reveal";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
    li {
      cursor: pointer;
    }
  }
`;

const PrimaryButton = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: var(--accent-pink);
  cursor: pointer;
  color: white;
`;

export default function Nav() {
  return (
    <Fade left cascade>
      <NavStyle>
        <div className="logo">
          <img src={logo} alt="anh" />
        </div>
        <ul>
          <li className="nav-home">Home</li>
          <li className="nav-features">Features</li>
          <li className="nav-pricing">Pricing</li>
        </ul>
        <PrimaryButton>Sign Up</PrimaryButton>
      </NavStyle>
    </Fade>
  );
}
