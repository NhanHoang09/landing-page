import React from "react";
import styled from "styled-components";
import SecondaryButton from "../ButtonAnimated/SecondaryButton";
import phone from "../../img/phone.svg";
import ring1 from "../../img/ring_orange.svg";
import message1 from "../../img/message_pink.svg";
import message2 from "../../img/message_blue.svg";
import { Bounce } from "react-reveal";
import { Fade } from "react-reveal";

const HeroStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
      color: white;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .phone {
      width: 80%;
    }
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: move2 5s infinite;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      animation: move 5s infinite;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
      animation: move 5s infinite;
    }
    @keyframes move {
      0% {
        transform: translateY(0) scale(1);
      }
      50% {
        transform: translateY(-15px) scale(1.1);
      }
      100% {
        transform: translateY(0) scale(1);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-15px) rotate(60deg) scale(1.1) translateX(15px);
      }
      100% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
    }
  }
`;

function Hero() {
  return (
    <HeroStyle>
      <Fade left cascade>
        <div className="left-content">
          <div className="left-text-container">
            <h1>Lorem ipsum dolor</h1>
            <p className="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit,
              iure labore maiores obcaecati est vel esse vitae assumenda
              consequuntur cumque distinctio nesciunt porro quaerat itaque id.
              Officiis, aliquid? Quos?
            </p>
            <Bounce>
              <SecondaryButton name={"Register Now"} />
            </Bounce>
          </div>
        </div>
      </Fade>
      {/* <Fade right cascade> */}
      <div className="right-content">
        <img src={phone} alt="" className="phone" />
        <img src={ring1} alt="" className="ring1" />
        <img src={message1} alt="" className="message1" />
        <img src={message2} alt="" className="message2" />
      </div>
      {/* </Fade> */}
    </HeroStyle>
  );
}

export default Hero;
