import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import styled from "styled-components";

const Wrapper = styled.div`
  .footer-container {
    margin-top:auto
    color: #324d67;
    text-align: center;
    margin-top: 20px;
    padding: 30px 10px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
  .footer-container .icons {
    font-size: 30px;
    display: flex;
    gap: 10px;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <p>2023 HP_Store all rights reserverd</p>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
