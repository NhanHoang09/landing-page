import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import avatar1 from "../../img/avatar1.svg";
import avatar2 from "../../img/avatar2.svg";
import avatar3 from "../../img/avatar3.svg";
import avatar4 from "../../img/avatar4.svg";
import avatar5 from "../../img/avatar5.svg";
import messaging from "../../img/conversation.svg";
import bgCircles from "../../img/bg_circles.svg";

const MessageStyle = styled.section`
  .message-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .item-left {
    position: relative;
    padding-right: 2rem;
    .m-para {
      padding: 1rem;
    }
    .images-container {
      display: flex;
      align-items: center;
    }
    .image-2,
    .image-3,
    .image-4,
    .image-5 {
      margin-left: -15px;
    }
    .bg-circles {
      position: absolute;
      top: -10%;
      left: -10%;
      z-index: -1;
    }
  }
  .item-right {
    position: relative;
    .bg-circles {
      position: absolute;
      bottom: -5%;
      right: 10%;
      z-index: -1;
    }
    img {
      padding-left: 2rem;
    }
  }
`;

function Massage() {
  return (
    <MessageStyle>
      <InnerLayout>
        <div className="message-container">
          <div className="item-left">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="m-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              distinctio vel, quod repellendus enim exercitationem ullam quas
              facere sapiente esse incidunt, odio laborum?
            </p>
            <div className="images-container">
              <img src={avatar1} alt="" className="image-1" />
              <img src={avatar2} alt="" className="image-2" />
              <img src={avatar3} alt="" className="image-3" />
              <img src={avatar4} alt="" className="image-4" />
              <img src={avatar5} alt="" className="image-5" />
              <p>&nbsp; +25</p>
            </div>
            <img src={bgCircles} alt="" className="bg-circles" />
          </div>
          <div className="item-right">
            <img src={messaging} alt="" />
            <img src={bgCircles} alt="" className="bg-circles" />
          </div>
        </div>
      </InnerLayout>
    </MessageStyle>
  );
}

export default Massage;
