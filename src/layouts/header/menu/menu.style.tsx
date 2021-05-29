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
