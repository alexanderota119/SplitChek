import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDropDown = styled.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type StyledActiveProps = {
  hide: boolean;
};

type StyledNoneActiveProps = {
  hide: boolean;
};
const StyledActiveDiv = styled.div<StyledActiveProps>`
  & img {
    min-width: 24px;
    height: 21px;
  }
  display: ${({ hide }) => (hide ? "block" : "none")};
`;
const StyledNoneActiveDiv = styled.div<StyledNoneActiveProps>`
  & img {
    min-width: 24px;
    height: 21px;
  }
  display: ${({ hide }) => (hide ? "block" : "none")};
`;

const HeaderIcon = ({ activeSrc, noneSrc }) => {
  const [hide, setHide] = useState(false);

  return (
    <StyledDropDown
      onMouseEnter={() => setHide(!hide)}
      onMouseLeave={() => setHide(!hide)}
      onMouseUp={() => setHide(!hide)}
      onMouseDown={() => setHide(!hide)}
    >
      <StyledActiveDiv hide={hide}>
        <img src={activeSrc} />
      </StyledActiveDiv>
      <StyledNoneActiveDiv hide={!hide}>
        <img src={noneSrc} />
      </StyledNoneActiveDiv>
    </StyledDropDown>
  );
};

export default HeaderIcon;
