import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

type StyledDropDownContainerProps = {
  type: string;
};

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
  top: ${({ type }) => (type == "desktop" ? "10px" : "-60px")};
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
    font-size: 14px;
  }

  text-align: left;
  font-weight: bold;
  display: flex;
  align-items: center;
  img {
    height: 28px;
    margin-right: 12px;
  }
  :after {
    border: 2px solid #36558f;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    margin-top: -0.5em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    height: 10px;
    width: 10px;
    top: 10px;

    right: ${({ type }) => (type == "desktop" ? "-15px" : "-10px")};

    transition: border-color 0.15s ease-in-out;
  }

  &:hover {
  }
`;
type StyledProps = {
  type: string;
};

const StyledDropDownItemDiv = styled.div<StyledProps>`
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: ${({ type }) =>
    type == "desktop" ? "space-between;" : "center"};
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

const Dropdown = ({ list, click, type = "desktop" }) => {
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
        <span>{current.label}</span>
      </StyledDropDownHeader>
      <StyledDropDownDiv ref={dropMenuRef} hide={hide} type={type}>
        {list.map((item, index) => {
          return (
            <StyledDropDownItemDiv
              //isSelect={current.id === item.id}
              key={`__key-${index.toString()}`}
              type={type}
              onClick={() => {
                setHide(false);
                setCurrent(item);
                click(item);
              }}
            >
              {item.label}
              <span className="check-mark"></span>
            </StyledDropDownItemDiv>
          );
        })}
      </StyledDropDownDiv>
    </StyledDropDown>
  );
};

export default Dropdown;
