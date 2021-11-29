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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <PrimaryButton>Sign Up</PrimaryButton>
      </NavStyle>
    </Fade>
  );
}
