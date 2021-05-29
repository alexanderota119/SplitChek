import styled from "styled-components";

export const MenuNav = styled.div`
  margin-left: auto;
  & ul {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
      margin-right: 35px;
      &:last-of-type {
        margin-right: 50px;
      }
    }
  }
  @media screen and (max-width: 1010px) {
    & li {
      margin-right: 10px;
      & span {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export const LogoDiv = styled.div`
  display: flex;
  margin: 18px 0 28px 0;
`;
export const CorssDiv = styled.div`
  margin: 0 28px 0 17px;
`;
export const MenuDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  min-height: 60vh;
`;
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 61px 15px;
  button:first-of-type {
    margin-bottom: 15px;
  }
`;
