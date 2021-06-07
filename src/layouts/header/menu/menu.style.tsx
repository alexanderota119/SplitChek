import styled from "styled-components";

export const MenuNav = styled.div`
  margin-left: auto;
  & ul {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
      margin-left: 23px;
      :last-child {
        margin-left: 0px;
      }
      @media screen and (max-width: 950px) {
        margin-right: 10px;
      }
    }
  }
`;
