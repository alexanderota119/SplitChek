import React from "react";
import styled from "styled-components";
import search from "assets/images/layout/header/search.svg";
import { BiSearch } from "react-icons/bi";
type Props = {};

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Searchflex = styled.div`
  white-space: nowrap;
  display: flex;
  flex: 1;
  background: #f1f1f1;
  border-radius: 16px;
  border: 1px solid white;
  & :active {
    border: 1px solid #abb1bb;
  }
  justify-content: space-between;

  & .desktop {
    background: none;
    font-size: 16px;
    letter-spacing: 0px;
    border: none;
    outline: unset;
    height: 50px;
    padding-left: 24px;
    padding-top: 15x;
    display: flex;
    flex: 1;
  }
  & .mobile {
    max-width: 100px;
    display: none;
    background: none;
    font-size: 16px;
    letter-spacing: 0px;
    border: none;
    outline: unset;
    height: 50px;
    padding-left: 2px;
    padding-top: 2px;
  }
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

  @media screen and (max-width: 768px) {
    padding-left: 19px;
    width: 100%;
    & .mobile {
      display: flex;
      flex: 1;
    }
    & .desktop {
      display: none;
    }
  }
`;

const SearchInput: React.FC<Props> = () => {
  return (
    <SearchContainer>
      <Searchflex>
        <input className="desktop" placeholder="Search for something"></input>
        <input className="mobile" placeholder="Search" />
        <span className="search">
          <BiSearch fontSize="26px"></BiSearch>
        </span>
      </Searchflex>
    </SearchContainer>
  );
};

export default SearchInput;
