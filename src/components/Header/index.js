import React from "react";
import styled from "styled-components";
import bg from "../../img/bg.svg";
import Nav from "./../Nav/index";
import Hero from "./../Hero/index";

const HeaderStyled = styled.header`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-position-y: 100%;
  background-repeat: no-repeat;

  .header-content {
    padding: 0 7rem;
    @media screen and (max-width: 1347px) {
      padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 5rem 4rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="header-content">
        <Nav />
        <Hero />
      </div>
    </HeaderStyled>
  );
}
