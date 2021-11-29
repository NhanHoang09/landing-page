import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import chart from "../../img/chart.svg";
import ChartStart from "./ChartStart";
import AnimatedButton from "./../ButtonAnimated/AnimatedButton";
import { Bounce } from "react-reveal";

const ChartSectionStyle = styled.section`
  .chart-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .chart-left {
      width: 80%;

      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      img {
        box-sizing: border-box;
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
        border-radius: 50px;
        width: 100%;
      }
      .starts {
        .starts-money {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.3rem;
        }
      }
    }
    .chart-right {
      padding-left: 2rem;
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

function ChartSection() {
  return (
    <ChartSectionStyle>
      <InnerLayout>
        <div className="chart-container">
          <div className="chart-left">
            <div className="starts">
              <div className="starts-money">
                <ChartStart name={"Balance"} amount={"$250"} />
                <ChartStart name={"Last Transaction"} amount={"$1000"} />
              </div>
            </div>
            <img src={chart} alt="" />
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
              Manage your finances like a pro in no time
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              officia nemo distinctio dolores necessitatibus odit magni corrupti
              error, voluptate alias adipisci ducimus nostrum maiores. Ad?
            </p>
            <Bounce>
              <AnimatedButton name={"Learn More"} />
            </Bounce>
          </div>
        </div>
      </InnerLayout>
    </ChartSectionStyle>
  );
}

export default ChartSection;
