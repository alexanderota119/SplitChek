import React from "react";
import styled from "styled-components";
import search from "assets/images/layout/header/search.svg";
type Props = {};

const SearchContainer = styled.div`
  position: relative;
  width: 586px;
  margin-left: 71px;
  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`;
const Searchflex = styled.div`
  white-space: nowrap;
  display: flex;
  background: #f1f1f1;
  border-radius: 16px;
  & input {
    background: none;
    font-size: 16px;
    letterspacing: 0px;
    border: none;
    outline: unset;
    max-width: 586px;
    height: 50px;
    padding-left: 24px;
    padding-top: 15x;
    @media screen and (max-width: 768px) {
      padding-left: 19px;
      width: 200px;
    }
  }
  & span {
    padding-right: 15.9px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: auto;
    & img {
      width: 18.86px;
      height: 19.91px;
    }
  }
`;

const SearchInput: React.FC<Props> = () => {
  return (
    <SearchContainer>
      <Searchflex>
        <input placeholder="Search for something" />
        <span>
          <img src={search} />
        </span>
      </Searchflex>
    </SearchContainer>
  );
};

export default SearchInput;
