import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

import styled from "styled-components";

type StyledDropDownContainerProps = {
  type: string;
};

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledDropDown = styled.div<StyledDropDownContainerProps>`
  position: relative;
  width: ${({ type }) => (type == "desktop" ? "auto" : "35px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type StyledDropDownProps = {
  hide: boolean;
  type: string;
};

const StyledDropDownDiv = styled.div<StyledDropDownProps>`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  color: white;
  padding: 16px 0;
  position: absolute;
  display: ${({ hide }) => (hide ? "block" : "none")};
  left: ${({ type }) => (type == "desktop" ? "0px" : "-20px")};
  top: ${({ type }) => (type == "desktop" ? "10px" : "-15px")};
  box-shadow:  ${({ type }) =>
    type == "desktop" ? "none" : "0px 0px 20px rgba(0, 0, 0, 0.1);"}
  background: ${({ type }) => (type == "desktop" ? "transparent" : "white")};
  border-radius:${({ type }) => (type == "desktop" ? "0" : "10px")};
  border: ${({ type }) =>
    type == "desktop" ? "none" : "rgba(255, 255, 255, 0.5)"};
  overflow: auto;
`;

type StyledDropDownHeaderProps = {
  type: string;
};
const StyledDropDownHeader = styled.div<StyledDropDownHeaderProps>`
  cursor: pointer;
  span {
    color: #36558f;
    font-weight: bold;
    font-size: ${({ type }) => (type == "desktop" ? "14px" : "16px")};
  }

  text-align: left;
  font-weight: bold;
  display: flex;
  align-items: center;
  img {
    height: 28px;
    margin-right: 12px;
  }

  &:hover {
  }
`;
type StyledProps = {
  type: string;
};

const StyledDropDownItemDiv = styled.div<StyledProps>`
  text-align: left;
  font-size: ${({ type }) => (type == "desktop" ? "14px" : "16px")};
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: ${({ type }) =>
    type == "desktop" ? "space-between" : "center"};
  cursor: pointer;
  color: #36558f;
  width: ${({ type }) => (type == "desktop" ? "auto" : "80px")};

  img {
    height: 28px;
    margin-right: 12px;
  }

  &:hover {
    color: orange;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
type currentType = {
  id: string;
  label: string;
};

const MobileDropdown = ({ list, click, type = "desktop" }) => {
  const [current, setCurrent] = useState<currentType>({
    id: list[0].id,
    label: list[0].label,
  });
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);

  useEffect(() => {
    setCurrent(list[0]);
  }, []);

  const handleClickOutside = (e) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setHide(false);
  };

  useEffect(() => {
    if (hide) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hide]);

  return (
    <StyledDropDown type={type}>
      <StyledDropDownHeader type={type} onClick={() => setHide(!hide)}>
        <ArrowContainer>
          <span>{current.label}</span>
          <BiChevronDown size={20} color="#36558f"></BiChevronDown>
        </ArrowContainer>
      </StyledDropDownHeader>
      <StyledDropDownDiv ref={dropMenuRef} hide={hide} type={type}>
        {list.map((item, index) => {
          return (
            <StyledDropDownItemDiv
              key={`__key-${index.toString()}`}
              type={type}
              onClick={() => {
                setHide(false);
                setCurrent(item);
                click(item);
              }}
            >
              {item.label}
            </StyledDropDownItemDiv>
          );
        })}
      </StyledDropDownDiv>
    </StyledDropDown>
  );
};

export default MobileDropdown;
