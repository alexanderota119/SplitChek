import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDropDown = styled.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type StyledDropDownProps = {
  hide: boolean;
};

const StyledDropDownDiv = styled.div<StyledDropDownProps>`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  color: white;
  padding: 16px 0;
  left: 0;
  top: 10px;
  position: absolute;
  display: ${({ hide }) => (hide ? "block" : "none")};
  overflow: auto;
`;
const StyledDropDownHeader = styled.div`
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
    right: -15px;
    transition: border-color 0.15s ease-in-out;
  }

  &:hover {
  }
`;
type StyledProps = {
  isSelect: boolean;
};

const StyledDropDownItemDiv = styled.div<StyledProps>`
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #36558f;
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

const Dropdown = ({ list, click }) => {
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
    <StyledDropDown>
      <StyledDropDownHeader onClick={() => setHide(!hide)}>
        <span>{current.label}</span>
      </StyledDropDownHeader>
      <StyledDropDownDiv ref={dropMenuRef} hide={hide}>
        {list.map((item, index) => {
          return (
            <StyledDropDownItemDiv
              isSelect={current.id === item.id}
              key={`__key-${index.toString()}`}
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
