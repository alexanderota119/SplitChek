import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import SearchInput from "components/SearchInput";
import { BiSearch } from "react-icons/bi";
const CollapseContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  & .search {
    padding-right: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #36558f;
    & :hover {
      cursor: pointer;
      color: orange;
    }
  }
`;
type StyledDropDownProps = {
  hide: boolean;
};

const StyledDropDownDiv = styled.div<StyledDropDownProps>`
  z-index: 9999;
  color: white;
  padding: 16px 0;
  top: 30px;
  position: absolute;
  width: 200px;
  @media screen and (max-width: 320px) {
    width: 160px;
  }
  display: ${({ hide }) => (hide ? "block" : "none")};
  overflow: auto;
`;

const CollapseSeach = () => {
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);

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
    <CollapseContainer>
      <span className="search" onClick={() => setHide(!hide)}>
        <BiSearch fontSize="26px"></BiSearch>
      </span>
      <StyledDropDownDiv ref={dropMenuRef} hide={hide}>
        <SearchInput />
      </StyledDropDownDiv>
    </CollapseContainer>
  );
};

export default CollapseSeach;
