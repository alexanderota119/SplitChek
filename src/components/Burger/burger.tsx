import React from "react";
import styled from "styled-components";
const BrgerLine = styled.div`
  .burger-line {
    height: 3px;
    background: #f77d0e;
    &:first-of-type {
      margin: 0 0 8px 0;
      width: 20px;
      border-radius: 55px;
    }

    &:nth-of-type(2) {
      margin: 0 0 8px 0;
      width: 15px;
      border-radius: 5px;
    }
    &:nth-of-type(3) {
      width: 20px;
      border-radius: 5px;
    }
  }
`;
const Burger: React.FC = () => {
  return (
    <BrgerLine>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </BrgerLine>
  );
};

export default Burger;
