import React, { useState } from "react";
import styled from "styled-components";
import plus from "../../img/plus.svg";
import minus from "../../img/minus.svg";
import { Fade } from "react-reveal";

const QuestionStyle = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1rem 1rem;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  p {
    width: 90%;
    padding: 0.8rem 0;
  }
  h4 {
    color: var(--dark-primary);
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: transparent;
      border: none;
      outline: none;
    }
  }
`;

function Question({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Fade left cascade>
      <QuestionStyle>
        <div className="question-container">
          <div className="toggle-title">
            <h4>{title}</h4>
            <button onClick={handleToggle}>
              {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
            </button>
          </div>
          {toggle && <p>{description}</p>}
        </div>
      </QuestionStyle>
    </Fade>
  );
}

export default Question;
