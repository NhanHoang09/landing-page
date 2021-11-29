import React from "react";
import styled from "styled-components";
import arrow from "../../img/arrow.svg";

const ButtonStyle = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: var(--dark-primary);
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .arrow {
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    color: var(--accent-pink);
    .arrow {
      padding-left: 1.4rem;
    }
  }
  img {
    padding-left: 0.9rem;
  }
`;

function SecondaryButton({ name }) {
  return (
    <ButtonStyle>
      {name}
      <img src={arrow} alt="" className="arrow" />
    </ButtonStyle>
  );
}

export default SecondaryButton;
