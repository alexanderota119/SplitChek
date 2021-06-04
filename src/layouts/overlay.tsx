import React from "react";

import styled from "styled-components";

export const OverLayWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: calc(100%-60px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const OverLay = ({ handleSide }) => {
  return (
    <OverLayWrapper
      onClick={() => {
        handleSide();
      }}
    ></OverLayWrapper>
  );
};

export default OverLay;
