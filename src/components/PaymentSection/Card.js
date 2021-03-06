import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 50px;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  .card-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--dark-color);
    text-align: center;
    padding: 1rem 0;
    span {
      font-size: 1.3rem;
      font-weight: 550;
    }
  }
  .c-para {
  }
  .button-con {
    text-align: center;
    padding: 1.5rem 0;
    button {
      padding: 0.8rem 1.5rem;
      background: transparent;
      border: 2px solid var(--dark-primary);
      outline: none;
      border-radius: 20px;
    }
  }
  .card-image-con {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  .plan-con {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    img {
      padding: 0 0.3rem;
    }
  }
  .text-check {
    display: flex;
    align-items: center;
    padding: 0.4rem 0;
    img {
      padding-right: 0.5rem;
      width: 32px;
    }
    &:nth-child(6) {
      color: var(--disable-color);
    }
    &:nth-child(7) {
      color: var(--disable-color);
    }
    &:nth-child(8) {
      color: var(--disable-color);
    }
  }
`;

function Card({
  account,
  amount,
  text,
  button,
  card,
  active,
  inactive,
  check,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  checkDis,
}) {
  return (
    <CardStyle>
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">
        {amount} <span>/ m</span>
      </h4>
      <p className="c-para">{text}</p>
      <div className="button-con">
        <button>{button}</button>
      </div>
      <div className="card-image-con">
        <img src={card} alt="" />
      </div>
      <div className="plan-con">
        <img src={active} alt="" />
        <img src={inactive} alt="" />
      </div>
      <div className="list-con">
        <p className="text-check">
          <img src={check} alt="" />
          {text1}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text2}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text3}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text4}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text5}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text6}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text7}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text8}
        </p>
      </div>
    </CardStyle>
  );
}

export default Card;
