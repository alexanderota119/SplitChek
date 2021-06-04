import styled from "styled-components";

export const LogoContainer = styled.div`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;
export const MenuDiv = styled.div`
  width: 100;
`;
export const LanguageContainer = styled.div`
  margin-right: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 25px;
  & .search-tablet {
    width: 100%;
    display: block;
  }
  & .search-mobile {
    width: 100%;
    display: none;
  }
  @media screen and (max-width: 480px) {
    & .search-tablet {
      width: 100%;
      display: none;
    }
    & .search-mobile {
      width: 100%;
      display: flex;
      flex: 1;
      justify-content: flex-end;
      display: block;
    }
  }
`;

export const AvatarContainer = styled.div``;
