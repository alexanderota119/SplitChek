import styled from "styled-components";

export const HeaderWrapper = styled.header`
  text-transform: capitalize;
  background: white;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  & .desktop {
    display: block;
  }
  & .mobile {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & .desktop {
      display: none;
    }
    & .mobile {
      display: block;
    }
  }
`;

export const LanguageContainer = styled.div`
  margin-right: 71px;
  @media screen and (max-width: 1024px) {
    margin-right: 20px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  position: relative;

  @media screen and (max-width: 992px) {
    padding: 11px 0 28px 0;
  }
`;

export const HeaderInnerLogo = styled.div`
  margin-right: 30px;
  @media screen and (max-width: 320px) {
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 10px;
  }
`;

export const HeaderInnerBurger = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
  }

  @media screen and (max-width: 480px) {
    display: block;
    z-index: 1001;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 1px;
  @media screen and (max-width: 768px) {
  }
`;
