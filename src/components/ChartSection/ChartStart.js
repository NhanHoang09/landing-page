import React from "react";
import styled from "styled-components";

const ChartStartStyle = styled.div`
  background-color: white;
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 25px;
  width: 48%;
  height: 10rem;
  h4 {
    font-size: 3rem;
    color: var(--purple-primary);
  }
  p {
    color: black;
    font-weight: bold;
  }
`;

function ChartStart({ name, amount }) {
  return (
    <ChartStartStyle>
      <p>{name}</p>
      <h4>{amount}</h4>
    </ChartStartStyle>
  );
}

export default ChartStart;
