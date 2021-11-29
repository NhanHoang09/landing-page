import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import logo from "../../img/logo.svg";

const FooterStyle = styled.footer`
  padding: 0 18rem;
  background-color: var(--bg-footer);
  .logo-con {
    display: flex;
    align-items: center;
    img {
      width: 90px;
    }
  }
  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .button-nav {
    display: flex;
    justify-content: space-between;
    li {
      padding: 2rem 0;
      color: #16194f;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <InnerLayout>
        <div className="footer-con">
          <div className="logo-con">
            <div className="logo-items">
              <img src={logo} alt="" />
              <p>
                Copyright @2021 LoremIpsum. <br />
                All rights reserved.
              </p>
            </div>
          </div>
          <ul className="button-nav">
            <div className="links1">
              <li>Team</li>
              <li>Press</li>
              <li>Fees</li>
            </div>
            <div className="links2">
              <li>Services</li>
              <li>Projects</li>
              <li>Affiliate</li>
            </div>
            <div className="links3">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
            </div>
          </ul>
        </div>
      </InnerLayout>
    </FooterStyle>
  );
}

export default Footer;
