import HoverText from "components/HoverText/color-text";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IconContainer, MenuItemContainer } from "./index.style";

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
    min-width: 25px;
    height: 20px;
  }
  display: ${({ hide }) => (hide ? "block" : "none")};
`;
const StyledNoneActiveDiv = styled.div<StyledNoneActiveProps>`
  & img {
    min-width: 25px;
    height: 20px;
  }
  display: ${({ hide }) => (hide ? "block" : "none")};
`;

const HeaderIcon = ({ activeSrc, noneSrc, hide }) => {
  return (
    <StyledDropDown>
      <StyledActiveDiv hide={hide}>
        <img src={activeSrc} />
      </StyledActiveDiv>
      <StyledNoneActiveDiv hide={!hide}>
        <img src={noneSrc} />
      </StyledNoneActiveDiv>
    </StyledDropDown>
  );
};

const SideBarMenuItem = ({ item }) => {
  const [hide, setHide] = useState(false);
  return (
    <MenuItemContainer
      onMouseEnter={() => setHide(!hide)}
      onMouseLeave={() => setHide(!hide)}
      onMouseUp={() => setHide(!hide)}
      onMouseDown={() => setHide(!hide)}
      hide={hide}
    >
      <IconContainer>
        <HeaderIcon
          activeSrc={item.active}
          noneSrc={item.noneactive}
          hide={hide}
        ></HeaderIcon>
      </IconContainer>
      <p>{item.title}</p>
    </MenuItemContainer>
  );
};

export default SideBarMenuItem;
